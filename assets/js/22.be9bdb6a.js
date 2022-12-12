(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{390:function(t,a,s){"use strict";s.r(a);var n=s(8),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("code",[t._v("CSS")]),t._v(" 动画已经出现好久了，但是至今对它掌握的很熟练的朋友并不多，可能是工作用不到，也肯能是兼容性等原因，但是作为一个前端程序员，个人认为动画这方面的东西还是要掌握的，因为随着老旧浏览器的逐渐淘汰兼容性的问题，我们已经可以慢慢忽略，所以这时，让我们的网页‘动起来’似乎变成一个异常有意思的事情了。")]),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[s("code",[t._v("CSS")]),t._v("动画，也称"),s("strong",[t._v("关键帧动画")]),t._v("。通过 "),s("code",[t._v("@keyframes")]),t._v(" 来定义关键帧。\n在视频领域，电影、电视、数字视频等可视为随时间连续变换的许多张画面，其中"),s("strong",[t._v("帧")]),t._v("是指每一张画面。\n在 "),s("code",[t._v("CSS")]),t._v(" 动画中，我们不需要定义每一帧的动画，只需要定义关键帧的动画，这也是为什么称之为关键帧动画的原因。")]),t._v(" "),s("h2",{attrs:{id:"定义关键帧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义关键帧"}},[t._v("#")]),t._v(" 定义关键帧")]),t._v(" "),s("p",[t._v("上面说过，我们通过 "),s("code",[t._v("@keyframes")]),t._v(" 来定义关键帧，它的基本结构如下：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" 关键帧名称")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*或者*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" 关键帧名称")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("100%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("from")]),t._v(" 表示最开始的那一帧，"),s("code",[t._v("to")]),t._v(" 表示结束时的那一帧。\n"),s("code",[t._v("CSS")]),t._v(" 动画用百分比来刻画一个动画周期，"),s("code",[t._v("from")]),t._v(" 其实是 0% 的别称，"),s("code",[t._v("to")]),t._v(" 是 100% 的别称")]),t._v(" "),s("p",[t._v("比如下面这个简单的动画：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" move")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("我们定义了一个名为 "),s("code",[t._v("move")]),t._v(" 的动画，这个动画的效果就是将某个元素从横轴 0px 移动到横轴 100px 的位置。")]),t._v(" "),s("h2",{attrs:{id:"使用动画-animation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用动画-animation"}},[t._v("#")]),t._v(" 使用动画 "),s("code",[t._v("animation")])]),t._v(" "),s("p",[t._v("我们已经定义好了关键帧动画，那么我们如何使用它呢，我们如何将它作用在某个具体的元素上呢？那就要使用到 "),s("code",[t._v("animation")]),t._v(" 这个属性了，在使用它之前，我们先简单定义一个 "),s("code",[t._v("DOM")]),t._v(" 结构：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ball"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("然后定义如下 "),s("code",[t._v("CSS")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ball")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" move")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("上面我们定义了一个 300*300 的圆球，并定义了一个 "),s("code",[t._v("move")]),t._v(" 动画，要想使用这个动画，我们只需要在 "),s("code",[t._v("ball")]),t._v(" 里加上 "),s("code",[t._v("animation")]),t._v(" 属性即可")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ball")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ... "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" move 2s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("最终效果如下图所示：\n"),s("img",{attrs:{src:"https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/animation-move.gif",alt:"animation-move"}})]),t._v(" "),s("p",[t._v("而上面的代码是和下面这段代码等效的")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ball")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ... "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" move 2s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*等效于*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ball")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ... "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" move"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("通过 "),s("code",[t._v("animation-name")]),t._v(" 来指定动画使用的关键帧，这个是必须的,通过"),s("code",[t._v("animation-duration")]),t._v(" 指定了动画运行的时间为 2"),s("code",[t._v("s")])]),t._v(" "),s("p",[t._v("仔细观察的话，我们会发现，小球的运动并不是匀速的，这就引出了第三个属性 "),s("code",[t._v("animation-timing-function")]),t._v(", 默认值是 "),s("code",[t._v("ease")]),t._v("，即先快后慢。它有许多预设值："),s("code",[t._v("linear")]),t._v("、"),s("code",[t._v("ease")]),t._v("、"),s("code",[t._v("ease-in")]),t._v("、"),s("code",[t._v("ease-out")]),t._v("、"),s("code",[t._v("ease-in-out")]),t._v("。这些值其实都是 "),s("code",[t._v("cubic-bezier(n,n,n,n)")]),t._v(" 的特例。它们被称为贝塞尔曲线,所以我们可以通过贝塞尔曲线自定义我们的运动方式。如果我们想要小球匀速运动，那么只需要使用 "),s("code",[t._v("linear")]),t._v(" 这个值即可，代码如下所示：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ball")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ... "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" move 2s linear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*等效于*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ball")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ... "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" move"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-timing-function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" linear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("通过上面的设置，我们就可以发现，小球此时就是匀速运动了：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/animation-move-linear.gif",alt:"animation-move-linear"}})]),t._v(" "),s("blockquote",[s("p",[t._v("这里就不放 "),s("code",[t._v("gif")]),t._v(" 图了，因为 "),s("code",[t._v("gif")]),t._v(" 会重复播放，导致和上面的图片没啥区别,大家明白原理就好。")])]),t._v(" "),s("p",[t._v("说外上面的属性，我们接着来引出下一个属性，如果我们想要动画延迟加载，就需要用到这个属性了： "),s("code",[t._v("animation-delay")]),t._v(",它的值就是我们要延迟的时间，")]),t._v(" "),s("blockquote",[s("p",[t._v("延迟时间可以是负值，如果设置延迟为 -1s。动画会从 50% 加载到 100%。")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ball")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ... "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" move 2s linear 3s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*等效于*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ball")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ... "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" move"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-timing-function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" linear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("上面定义了动画延迟 3"),s("code",[t._v("s")]),t._v(" 执行：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/animation-delay.gif",alt:"animation-delay"}})]),t._v(" "),s("p",[t._v("接下来我们来看下一个属性 "),s("code",[t._v("animation-iteration-count")]),t._v(", 这个属性是控制动画的执行次数的，他有两个取值：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("n")]),t._v(": 一个数字，定义应该播放多少次动画")]),t._v(" "),s("li",[s("code",[t._v("infinite")]),t._v(": 指定动画应该播放无限次（永远）")])]),t._v(" "),s("p",[t._v("这个很好理解，代码如下：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ball")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ... "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" move 2s linear 3s infinite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*等效于*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ball")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ... "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" move"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-timing-function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" linear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-iteration-count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" infinite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("上面的代码会使动画无限次的播放")])]),t._v(" "),s("p",[t._v("接下来，我们来看下一个属性 "),s("code",[t._v("animation-direction")]),t._v(", 这个属性定义了是否循环交替反向播放动画，它有如下属性值：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("normal")]),t._v(":默认值。动画按正常播放")]),t._v(" "),s("li",[s("code",[t._v("reverse")]),t._v(": 动画反向播放")]),t._v(" "),s("li",[s("code",[t._v("alternate")]),t._v(": 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。")]),t._v(" "),s("li",[s("code",[t._v("alternate-reverse")]),t._v(": 动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放。")])]),t._v(" "),s("p",[t._v("所以如果我们想要动画反向播放，加入如下代码即可：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ball")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ... "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" move 2s linear 3s infinite reverse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*等效于*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ball")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ... "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" move"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-timing-function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" linear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-iteration-count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" infinite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-direction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reverse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("效果如下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/animation-reverse.gif",alt:"animation-direction"}})]),t._v(" "),s("p",[t._v("然后我们再观察，小球从开始运动到结束位置之后，又立刻回到了初始位置，那么有没有办法让小球停止在结束位置或者别的其他的状态呢？")]),t._v(" "),s("p",[t._v("这就引出了我们的下一个属性 "),s("code",[t._v("animation-fill-mode")]),t._v(",它用于定义动画开始前或者动画结束后的元素所处的状态。它有四个取值：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("none")]),t._v(": 默认值。")]),t._v(" "),s("li",[s("code",[t._v("forwards")]),t._v("：表示动画完成后，元素状态保持为最后一帧的状态。")]),t._v(" "),s("li",[s("code",[t._v("backwards")]),t._v("：表示有动画延迟时，动画开始前，元素状态保持为第一帧的状态。")]),t._v(" "),s("li",[s("code",[t._v("both")]),t._v("：表示上述二者效果都有。")])]),t._v(" "),s("p",[t._v("所以如果想让小球停止在结束位置，我们只需要将这个属性设置为 "),s("code",[t._v("forwards")]),t._v(" 即可：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ball")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ... "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" move 2s linear 3s infinite reverse forwards"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*等效于*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ball")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ... "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" move"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-timing-function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" linear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-iteration-count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" infinite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-direction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reverse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-fill-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" forwards"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("接下来我们来看最后一个属性 "),s("code",[t._v("animation-play-state")]),t._v(", 这个属性的作用是控制动画的播放和暂停的，所以它有两个值：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("paused")]),t._v(": 指定暂停动画")]),t._v(" "),s("li",[s("code",[t._v("running")]),t._v(": 指定正在运行的动画（默认值）")])]),t._v(" "),s("p",[t._v("至此，"),s("code",[t._v("animation")]),t._v("的所有属性就介绍完成了，另外值得一提的是，这些属性是支持多个值的，只需要通过逗号进行隔开即可完成多段动画。")])])}),[],!1,null,null,null);a.default=e.exports}}]);