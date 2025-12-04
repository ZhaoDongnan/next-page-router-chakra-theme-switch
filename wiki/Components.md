# 组件文档 🧩

本项目包含以下核心组件，主要用于实现主题切换功能：

## ColorModeProvider

主题提供者组件，封装了 next-themes 的 ThemeProvider，用于为应用提供主题切换功能。

### 类型定义

```tsx
export interface ColorModeProviderProps extends ThemeProviderProps {}
```

### 使用方法

```tsx
import { ColorModeProvider } from "@/components/color-mode"

export default function App() {
  return (
    <ColorModeProvider>
      <YourAppContent />
    </ColorModeProvider>
  )
}
```

### 注意事项

- 通常在 `_app.tsx` 中全局使用
- 已经默认配置了 `attribute="class"` 和 `disableTransitionOnChange`

## ColorModeButton

主题切换按钮组件，点击时会在浅色模式和深色模式之间切换。

### 类型定义

```tsx
export interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}
```

### 使用方法

```tsx
import { ColorModeButton } from "@/components/color-mode"

export default function Header() {
  return (
    <header>
      <ColorModeButton size="sm" />
    </header>
  )
}
```

### 特性

- 自动根据当前主题显示太阳或月亮图标
- 使用 Chakra UI 的 IconButton 组件，支持所有 IconButton 属性
- 包含加载状态的骨架屏

## useColorMode

自定义 Hook，用于获取和控制当前主题状态。

### 返回类型

```tsx
export interface UseColorModeReturn {
  colorMode: ColorMode       // 当前主题 ("light" | "dark")
  setColorMode: (colorMode: ColorMode) => void  // 设置主题
  toggleColorMode: () => void  // 切换主题
}
```

### 使用方法

```tsx
import { useColorMode } from "@/components/color-mode"

export default function ThemeDisplay() {
  const { colorMode, setColorMode, toggleColorMode } = useColorMode()
  
  return (
    <div>
      <p>当前主题: {colorMode}</p>
      <button onClick={() => setColorMode("light")}>浅色模式</button>
      <button onClick={() => setColorMode("dark")}>深色模式</button>
      <button onClick={toggleColorMode}>切换主题</button>
    </div>
  )
}
```

## useColorModeValue

自定义 Hook，用于根据当前主题返回不同的值。

### 类型定义

```tsx
export function useColorModeValue<T>(light: T, dark: T): T
```

### 使用方法

```tsx
import { useColorModeValue } from "@/components/color-mode"

export default function ThemedComponent() {
  const textColor = useColorModeValue("gray.800", "gray.200") // 浅色模式用深灰，深色模式用浅灰
  const bgColor = useColorModeValue("white", "gray.900") // 浅色模式用白色，深色模式用深灰
  const borderColor = useColorModeValue("gray.200", "gray.700") // 边框颜色也随主题变化
  
  return (
    <div style={{ 
      color: textColor, 
      backgroundColor: bgColor, 
      border: `1px solid ${borderColor}`,
      padding: "1rem",
      borderRadius: "0.5rem"
    }}>
      <p>这个组件的颜色会根据主题自动变化</p>
    </div>
  )
}
```

## ColorModeIcon

根据当前主题显示不同图标的组件，浅色模式显示太阳，深色模式显示月亮。

### 使用方法

```tsx
import { ColorModeIcon } from "@/components/color-mode"
import { Box } from "@chakra-ui/react"

export default function ThemeIndicator() {
  return (
    <Box>
      <ColorModeIcon />
      <span>当前主题图标</span>
    </Box>
  )
}
```

## LightMode / DarkMode

条件渲染组件，根据当前主题显示或隐藏内容。

### 使用方法

```tsx
import { LightMode, DarkMode } from "@/components/color-mode"

export default function ThemedContent() {
  return (
    <div>
      <LightMode>
        <p>这段文字只在浅色模式下显示</p>
      </LightMode>
      <DarkMode>
        <p>这段文字只在深色模式下显示</p>
      </DarkMode>
    </div>
  )
}
```

## 组件依赖关系

```
ColorModeProvider -> ThemeProvider (next-themes)
ColorModeButton -> IconButton (Chakra UI) + ColorModeIcon
ColorModeIcon -> useColorMode -> useTheme (next-themes)
useColorModeValue -> useColorMode
LightMode / DarkMode -> useColorMode
```

## 最佳实践

1. **主题一致性**：
   - 始终使用 `useColorModeValue` 来处理主题相关的样式
   - 避免直接使用固定的颜色值

2. **组件封装**：
   - 对于需要主题支持的自定义组件，建议接受 `colorMode` 作为 prop
   - 或在组件内部使用 `useColorMode` 或 `useColorModeValue`

3. **性能考虑**：
   - 避免在渲染函数中频繁调用 `useColorMode`
   - 考虑使用 `useMemo` 缓存主题相关的计算结果