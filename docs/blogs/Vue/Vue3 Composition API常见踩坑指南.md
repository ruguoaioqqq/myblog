---
title: Vue3 Composition API 常见踩坑指南与解决方案
category: vue3
desc: 总结Vue3 Composition API开发中最容易踩的10个坑，附带原理分析和最佳实践
tag:
  - vue3
picture: https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800
date: "2025-11-08"
---

# Vue3 Composition API 常见踩坑指南与解决方案

在把多个大型项目从 Vue2 迁移到 Vue3 的过程中，我和团队踩了无数坑。本文总结了最常见、最隐蔽的问题，希望帮你少走弯路。

## 坑1：reactive 解构丢失响应式

这可能是 Vue3 最经典的坑，没有之一。

```typescript
// ❌ 解构后丢失响应式！
const state = reactive({ count: 0, name: 'Libra' })
let { count, name } = state

count++ // 不会触发视图更新！
```

**原因**：`reactive` 基于 Proxy 实现，解构操作相当于将值赋给了普通变量，脱离了 Proxy 的追踪。

**解决方案**：

```typescript
// ✅ 方案1：使用 toRefs
const state = reactive({ count: 0, name: 'Libra' })
const { count, name } = toRefs(state)
count.value++ // 响应式正常

// ✅ 方案2：直接使用 ref
const count = ref(0)
const name = ref('Libra')
count.value++ // 响应式正常

// ✅ 方案3：不解构，直接使用 state.xxx
state.count++ // 响应式正常
```

> 💡 **最佳实践**：优先使用 `ref`，只在确实需要一组相关状态时才用 `reactive`，且永远不要解构 `reactive` 对象。

## 坑2：watch 监听 reactive 对象的属性不生效

```typescript
const state = reactive({ user: { name: '张三', age: 25 } })

// ❌ 直接监听属性值，不生效！
watch(state.user.name, (newVal) => {
  console.log('name changed:', newVal) // 永远不会执行
})
```

**原因**：`watch` 的第一个参数需要是 ref、reactive 对象或 getter 函数。`state.user.name` 只是一个字符串值。

**解决方案**：

```typescript
// ✅ 使用 getter 函数
watch(
  () => state.user.name,
  (newVal, oldVal) => {
    console.log('name changed:', oldVal, '->', newVal)
  }
)

// ✅ 监听整个 reactive 对象（自动深度监听）
watch(state, (newVal) => {
  console.log('state changed')
})

// ✅ 监听 reactive 的某个属性对象
watch(
  () => state.user,
  (newVal) => {
    console.log('user changed')
  },
  { deep: true } // 需要显式开启 deep
)
```

## 坑3：ref 在模板中自动解包的边界情况

```typescript
const count = ref(0)
const obj = { count } // 注意：这不是 reactive 对象

// 模板中
// ❌ obj 是普通对象，ref 不会自动解包
// <div>{{ obj.count }}</div> 显示的是 RefImpl 对象！
```

**原理**：`ref` 只在 `reactive` 对象或模板顶层变量中会自动解包。

```typescript
// ✅ 方案1：用 reactive 包裹
const obj = reactive({ count })
// 模板中 {{ obj.count }} 正常显示 0

// ✅ 方案2：模板中手动 .value
// <div>{{ obj.count.value }}</div>
```

## 坑4：nextTick 的时机问题

```typescript
const show = ref(false)
const inputRef = ref<HTMLInputElement>()

function openAndFocus() {
  show.value = true
  // ❌ DOM还没更新，inputRef.value 是 undefined
  inputRef.value?.focus()
}
```

**解决方案**：

```typescript
import { nextTick } from 'vue'

async function openAndFocus() {
  show.value = true
  // ✅ 等待 DOM 更新完成
  await nextTick()
  inputRef.value?.focus()
}
```

## 坑5：composable 中的生命周期陷阱

```typescript
// ❌ 异步操作后注册生命周期钩子，不生效！
export function useAsyncData(url: string) {
  const data = ref(null)
  
  fetch(url).then(async res => {
    data.value = await res.json()
    
    // 这里注册的 onUnmounted 不会生效！
    // 因为异步回调执行时，已经脱离了 setup 的同步执行上下文
    onUnmounted(() => {
      console.log('cleanup') // 永远不会执行
    })
  })
  
  return { data }
}
```

**原因**：Vue3 的生命周期钩子依赖 `getCurrentInstance()`，它只在同步的 `setup()` 执行期间有效。异步回调中 `getCurrentInstance()` 返回 `null`。

**解决方案**：

```typescript
// ✅ 将生命周期钩子放在同步代码中
export function useAsyncData(url: string) {
  const data = ref(null)
  const controller = new AbortController()
  
  // 同步注册，确保能正确绑定到组件实例
  onMounted(async () => {
    try {
      const res = await fetch(url, { signal: controller.signal })
      data.value = await res.json()
    } catch (e) {
      if (!(e instanceof DOMException && e.name === 'AbortError')) {
        throw e
      }
    }
  })
  
  // 同步注册 cleanup
  onUnmounted(() => {
    controller.abort()
  })
  
  return { data }
}
```

## 坑6：v-model 在自定义组件上的变化

Vue3 中 `v-model` 的机制和 Vue2 完全不同：

```vue
<!-- Vue2: v-model 等价于 :value + @input -->
<!-- Vue3: v-model 等价于 :modelValue + @update:modelValue -->

<!-- ❌ Vue2 的写法在 Vue3 中不生效 -->
<CustomInput v-model="text" />
<!-- 子组件中 this.$emit('input', val) 不再有效 -->

<!-- ✅ Vue3 正确写法 -->
<script setup>
const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
```

Vue3 还支持**多个 v-model**：

```vue
<UserForm
  v-model:name="userName"
  v-model:email="userEmail"
  v-model:role="userRole"
/>
```

## 坑7：Teleport 导致样式作用域失效

```vue
<!-- 父组件使用了 scoped -->
<style scoped>
.modal-content {
  padding: 20px; /* 不会应用到 Teleport 出去的内容上！ */
}
</style>

<template>
  <Teleport to="body">
    <div class="modal-content">
      <!-- scoped 样式在这里失效 -->
    </div>
  </Teleport>
</template>
```

**原因**：`scoped` 样式通过添加 `data-v-xxx` 属性实现，但 Teleport 会将 DOM 移到目标位置，属性选择器可能不匹配。

**解决方案**：

```vue
<style scoped>
/* ✅ 使用 :deep() 穿透 */
:deep(.modal-content) {
  padding: 20px;
}
</style>

<!-- ✅ 或者用单独的非 scoped 样式块 -->
<style>
.my-modal .modal-content {
  padding: 20px;
}
</style>
```

## 坑8：Pinia 中的 storeToRefs 与普通解构

```typescript
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

// ❌ 解构会丢失响应性！
const { name, avatar, isAdmin } = userStore

// ✅ 使用 storeToRefs 保持响应性
const { name, avatar, isAdmin } = storeToRefs(userStore)

// ⚠️ 注意：methods/getters 不需要 storeToRefs
const { login, logout } = userStore // action 直接解构即可
```

## 坑9：defineExpose 遗漏导致 ref 获取不到子组件方法

```vue
<!-- 子组件 ChildComp.vue -->
<script setup>
function doSomething() {
  console.log('hello')
}
// ❌ 忘记 expose，父组件无法调用
</script>

<!-- 父组件 -->
<script setup>
const childRef = ref()
childRef.value.doSomething() // TypeError!
</script>
```

**原因**：`<script setup>` 默认是封闭的，不会暴露任何内容。

```vue
<!-- ✅ 必须显式暴露 -->
<script setup>
function doSomething() {
  console.log('hello')
}

defineExpose({ doSomething })
</script>
```

## 坑10：shallowRef / shallowReactive 的深层修改不触发更新

```typescript
const list = shallowRef([{ id: 1, name: '张三' }])

// ❌ 深层修改不触发更新
list.value[0].name = '李四' // 视图不更新！

// ✅ 必须替换整个引用
list.value = list.value.map(item =>
  item.id === 1 ? { ...item, name: '李四' } : item
)

// ✅ 或者手动触发更新
list.value[0].name = '李四'
triggerRef(list)
```

> 💡 `shallowRef` 适合存储大型对象（如地图实例、图表实例），避免 Vue 对其深层属性进行代理追踪导致的性能问题。

## 总结

| 坑点 | 核心原因 | 建议 |
|------|----------|------|
| reactive 解构 | Proxy 追踪断裂 | 优先用 ref |
| watch 属性监听 | 需要 getter 函数 | 用 `() => state.x` |
| 异步生命周期 | getCurrentInstance 为 null | 同步注册钩子 |
| v-model 变化 | API 改为 modelValue | 查阅迁移指南 |
| Pinia 解构 | 同 reactive 解构问题 | 用 storeToRefs |

记住一个原则：**遇到响应式不更新，先检查是否脱离了 Proxy 追踪链**。
