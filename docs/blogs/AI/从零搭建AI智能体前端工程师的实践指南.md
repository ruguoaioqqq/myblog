---
title: 从零搭建AI智能体：前端工程师的实践指南
category: ai
desc: 手把手教前端工程师使用LangChain.js和大模型API搭建一个具备工具调用能力的AI Agent，从概念到落地
tag:
  - ai
picture: https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800
date: "2026-01-15"
---

# 从零搭建AI智能体：前端工程师的实践指南

AI Agent（智能体）是2025年最火的技术方向之一。作为前端工程师，我们天然具备构建交互界面的优势，再结合 Node.js 的全栈能力，完全可以独立搭建一个完整的AI智能体应用。

## 什么是AI智能体？

简单来说，AI 智能体 = **大模型 + 记忆 + 工具调用 + 规划能力**。

与普通的聊天机器人不同，智能体可以：

- **自主规划**：将复杂任务拆分为多个子步骤
- **使用工具**：调用API、查询数据库、执行代码
- **记忆上下文**：记住对话历史和中间结果
- **反思迭代**：检查结果，必要时回溯和修正

```
用户请求 → 智能体规划 → 选择工具 → 执行操作 → 检查结果 → 返回/继续
              ↑                                        |
              └────────── 反思 & 重新规划 ←─────────────┘
```

## 技术栈选择

作为前端工程师，我推荐以下技术栈：

| 层级 | 技术选择 | 说明 |
|------|----------|------|
| 前端界面 | Vue3 + TypeScript | 对话式交互界面 |
| 智能体框架 | LangChain.js | Node.js 原生支持的 Agent 框架 |
| 大模型 | OpenAI / 通义千问 | 提供推理和工具调用能力 |
| 向量数据库 | Chroma / Milvus | 存储知识库向量 |
| 后端服务 | Node.js + Express | 中间层API服务 |

## 核心实现：构建一个代码审查智能体

我们来构建一个**前端代码审查智能体**，它能够分析代码质量、检测常见问题，并给出改进建议。

### Step 1：初始化项目和安装依赖

```bash
mkdir code-review-agent && cd code-review-agent
npm init -y
npm install langchain @langchain/openai @langchain/core zod express
npm install -D typescript @types/node @types/express tsx
```

### Step 2：定义工具（Tools）

工具是智能体的「手」，让它能真正执行操作：

```typescript
// src/tools/codeAnalyzer.ts
import { tool } from '@langchain/core/tools'
import { z } from 'zod'

export const analyzeCodeComplexity = tool(
  async ({ code, language }) => {
    let issues: string[] = []
    
    // 检测函数长度
    const functionMatches = code.match(
      /function\s+\w+|const\s+\w+\s*=\s*(\([^)]*\)|[^=])\s*=>/g
    )
    const functionCount = functionMatches?.length ?? 0
    
    // 检测嵌套深度
    let maxDepth = 0, currentDepth = 0
    for (const char of code) {
      if (char === '{') currentDepth++
      if (char === '}') currentDepth--
      maxDepth = Math.max(maxDepth, currentDepth)
    }
    
    if (maxDepth > 4) {
      issues.push(`⚠️ 嵌套深度过高 (${maxDepth} 层)，建议拆分逻辑或使用 early return`)
    }
    
    // 检测魔法数字
    const magicNumbers = code.match(/[^0-9a-zA-Z_](\d{2,})[^0-9a-zA-Z_]/g)
    if (magicNumbers && magicNumbers.length > 3) {
      issues.push(`⚠️ 发现 ${magicNumbers.length} 个魔法数字，建议提取为常量`)
    }
    
    // 检测console.log
    const consoleLogs = (code.match(/console\.(log|warn|error)/g) || []).length
    if (consoleLogs > 0) {
      issues.push(`⚠️ 发现 ${consoleLogs} 处 console 调用，生产代码中应移除`)
    }
    
    // 检测 any 类型
    if (language === 'typescript') {
      const anyCount = (code.match(/:\s*any/g) || []).length
      if (anyCount > 0) {
        issues.push(`⚠️ 发现 ${anyCount} 处 any 类型，建议使用精确的类型定义`)
      }
    }
    
    return JSON.stringify({
      functionCount,
      maxNestingDepth: maxDepth,
      issues,
      score: Math.max(0, 100 - issues.length * 15)
    })
  },
  {
    name: 'analyze_code_complexity',
    description: '分析代码复杂度，检测潜在问题',
    schema: z.object({
      code: z.string().describe('要分析的代码'),
      language: z.enum(['javascript', 'typescript', 'vue'])
        .describe('编程语言')
    })
  }
)

export const suggestRefactoring = tool(
  async ({ code, issue }) => {
    const suggestions: Record<string, string> = {
      'nesting': '使用 early return 模式减少嵌套：\n'
        + 'if (!condition) return\n'
        + '// 主逻辑...',
      'magic_number': '提取常量到文件顶部：\n'
        + 'const MAX_RETRY_COUNT = 3\n'
        + 'const PAGE_SIZE = 20',
      'any_type': '使用泛型或联合类型替代 any：\n'
        + 'function parse<T>(input: string): T\n'
        + 'type Result = Success | Error',
      'long_function': '使用 Composition API 拆分逻辑：\n'
        + '将相关逻辑抽取到 composable 函数中'
    }
    return suggestions[issue] || '建议进行代码拆分和模块化重构'
  },
  {
    name: 'suggest_refactoring',
    description: '根据问题类型给出重构建议',
    schema: z.object({
      code: z.string().describe('需要重构的代码片段'),
      issue: z.enum(['nesting', 'magic_number', 'any_type', 'long_function'])
        .describe('问题类型')
    })
  }
)
```

### Step 3：组装智能体

```typescript
// src/agent.ts
import { ChatOpenAI } from '@langchain/openai'
import { createReactAgent } from '@langchain/langgraph/prebuilt'
import { HumanMessage } from '@langchain/core/messages'
import { analyzeCodeComplexity, suggestRefactoring } from './tools/codeAnalyzer'

const llm = new ChatOpenAI({
  modelName: 'gpt-4o',
  temperature: 0,
})

const tools = [analyzeCodeComplexity, suggestRefactoring]

const agent = createReactAgent({
  llm,
  tools,
})

export async function reviewCode(code: string, language: string) {
  const result = await agent.invoke({
    messages: [
      new HumanMessage(
        `你是一位资深前端代码审查专家。请对以下 ${language} 代码进行全面审查：
        
\`\`\`${language}
${code}
\`\`\`

请使用工具分析代码复杂度，找出问题后给出重构建议。
最后输出一份结构化的审查报告，包括：评分、问题列表、改进建议。`
      )
    ]
  })
  
  return result.messages[result.messages.length - 1].content
}
```

### Step 4：构建API接口

```typescript
// src/server.ts
import express from 'express'
import { reviewCode } from './agent'

const app = express()
app.use(express.json())

app.post('/api/review', async (req, res) => {
  try {
    const { code, language = 'typescript' } = req.body
    
    if (!code) {
      return res.status(400).json({ error: '请提供代码' })
    }
    
    const review = await reviewCode(code, language)
    res.json({ success: true, review })
  } catch (error) {
    console.error('Review failed:', error)
    res.status(500).json({ error: '审查失败' })
  }
})

app.listen(3000, () => {
  console.log('Code Review Agent running on port 3000')
})
```

## 进阶：实现多Agent协作

在复杂场景下，单个Agent往往不够，我们可以实现多Agent协作模式：

```typescript
// 规划Agent：负责拆分任务
const plannerAgent = createReactAgent({
  llm,
  tools: [taskSplitter],
  systemMessage: '你是任务规划专家，负责将复杂需求拆分为可执行的子任务'
})

// 编码Agent：负责生成代码
const coderAgent = createReactAgent({
  llm,
  tools: [codeGenerator, testGenerator],
  systemMessage: '你是前端开发专家，根据需求生成高质量的 TypeScript + Vue3 代码'
})

// 审查Agent：负责代码审查
const reviewerAgent = createReactAgent({
  llm,
  tools: [analyzeCodeComplexity, suggestRefactoring],
  systemMessage: '你是代码审查专家，严格检查代码质量和最佳实践'
})

// 编排流程
async function developFeature(requirement: string) {
  // 1. 规划
  const plan = await plannerAgent.invoke(requirement)
  
  // 2. 编码（可并行执行多个子任务）
  const codeResults = await Promise.all(
    plan.tasks.map(task => coderAgent.invoke(task))
  )
  
  // 3. 审查
  const reviews = await Promise.all(
    codeResults.map(code => reviewerAgent.invoke(code))
  )
  
  // 4. 如有问题，返回编码Agent修改
  // ...
}
```

## 关键经验总结

经过多个 Agent 项目的实践，我总结了几条经验：

1. **Prompt是灵魂**：好的系统提示词比换更强的模型更有效，花时间在 prompt engineering 上
2. **工具设计要精简**：每个工具的功能要单一明确，参数用 Zod 严格校验
3. **加入兜底机制**：大模型会犯错，必须有超时、重试和降级处理
4. **流式输出体验好**：使用 SSE 实现打字机效果，用户等待感大大降低
5. **成本控制很重要**：合理设置 `max_tokens`，用缓存避免重复调用

## 前端工程师做Agent的优势

- 🖥️ 擅长构建交互界面，Agent 的价值需要好的 UI 来展现
- 🔧 Node.js 全栈能力，可以快速搭建原型
- 🎨 理解用户体验，知道如何设计人机交互流程
- 📦 前端工程化经验可以直接迁移到 Agent 工程化中
