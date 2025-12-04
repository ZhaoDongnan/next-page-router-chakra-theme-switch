# 主题切换功能 🌓

本项目实现了一个基于 Next.js 和 Chakra UI 的主题切换功能，支持浅色模式和深色模式的无缝切换。

## 实现原理

### 技术栈

- **next-themes**: 用于管理主题状态和持久化存储
- **Chakra UI**: 提供主题支持的 UI 组件库
- **React Hooks**: 用于组件状态管理

### 核心实现

#### 主题提供者配置

在 `_app.tsx` 中，我们使用了两个主题提供者：

1. **ChakraProvider**: 提供 Chakra UI 的主题系统
2. **ThemeProvider**: 来自 next-themes，处理主题切换逻辑

```tsx
// src/pages/_app.tsx
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  )
}
```

#### 主题切换组件

在 `color-mode.tsx` 中，我们实现了完整的主题切换功能：

1. **ColorModeProvider**: 主题提供者封装
2. **useColorMode**: 自定义 Hook 用于访问和修改主题
3. **ColorModeIcon**: 根据当前主题显示不同图标
4. **ColorModeButton**: 主题切换按钮组件

```tsx
// src/components/color-mode.tsx 核心逻辑
import { useTheme } from "next-themes"
import { LuMoon, LuSun } from "react-icons/lu"

export function useColorMode() {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme()
  const colorMode = forcedTheme || resolvedTheme
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }
  return {
    colorMode: colorMode as ColorMode,
    setColorMode: setTheme,
    toggleColorMode,
  }
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? <LuMoon /> : <LuSun /> // 浅色模式显示太阳，深色模式显示月亮
}
```

## 使用方法

### 在组件中使用主题切换

1. **切换主题**

```tsx
import { ColorModeButton } from "@/components/color-mode"

export default function Page() {
  return (
    <div>
      <ColorModeButton /> {/* 主题切换按钮 */}
    </div>
  )
}
```

2. **根据主题显示不同内容**

```tsx
import { useColorModeValue } from "@/components/color-mode"

export default function Page() {
  const textColor = useColorModeValue("gray.800", "gray.200") // 浅色模式用深灰色，深色模式用浅灰色
  const bgColor = useColorModeValue("white", "gray.900") // 浅色模式用白色背景，深色模式用深灰色背景
  
  return (
    <div style={{ color: textColor, backgroundColor: bgColor }}>
      <p>这是一段根据主题变化颜色的文本</p>
    </div>
  )
}
```

3. **直接控制主题**

```tsx
import { useColorMode } from "@/components/color-mode"

export default function Page() {
  const { colorMode, setColorMode } = useColorMode()
  
  return (
    <div>
      <p>当前主题: {colorMode}</p>
      <button onClick={() => setColorMode("light")}>切换到浅色模式</button>
      <button onClick={() => setColorMode("dark")}>切换到深色模式</button>
    </div>
  )
}
```

## 主题持久化

主题设置会自动保存到 `localStorage` 中，用户刷新页面后会保持上次选择的主题。

## 浏览器偏好设置

如果用户没有手动设置主题，系统会自动检测浏览器的颜色偏好设置，并应用相应的主题。