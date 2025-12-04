# 开发指南 📝

本指南提供了在本项目中进行开发的详细流程和最佳实践。

## 环境准备

### 安装依赖

```bash
npm install
```

### 开发服务器

启动开发服务器：

```bash
npm run dev
```

服务器将在 `http://localhost:3000` 上运行。

### 构建生产版本

```bash
npm run build
```

构建完成后，可以启动生产服务器：

```bash
npm start
```

### 代码检查

```bash
npm run lint
```

## 项目结构

### 核心目录

```
├── src/
│   ├── components/     # React 组件
│   ├── pages/         # 页面组件（Next.js Pages Router）
│   └── styles/        # 样式文件
├── public/            # 静态资源
├── wiki/              # 项目文档
```

### 文件说明

#### 组件目录

`src/components/` 目录包含可复用的 React 组件：

- `color-mode.tsx`: 主题切换相关组件和工具函数

#### 页面目录

`src/pages/` 目录包含应用的页面组件，Next.js 会自动将这些文件映射到路由：

- `_app.tsx`: 应用的根组件，用于配置全局提供者
- `_document.tsx`: HTML 文档模板
- `index.tsx`: 首页

#### 样式目录

`src/styles/` 目录包含样式文件：

- `globals.css`: 全局样式
- `Home.module.css`: 首页样式

## 开发规范

### 代码风格

- 使用 TypeScript 编写所有代码
- 遵循 ESLint 规则
- 使用 2 个空格进行缩进
- 保持代码简洁，避免重复

### 组件开发

1. **组件命名**
   - 使用 PascalCase 命名组件
   - 组件文件名与组件名保持一致
   - 导出组件使用命名导出

2. **组件结构**
   ```tsx
   // 导入
   import React from "react"
   import { Component } from "@chakra-ui/react"
   
   // 类型定义
   export interface MyComponentProps {
     // 属性定义
   }
   
   // 组件实现
   export function MyComponent(props: MyComponentProps) {
     // 组件逻辑
     return (
       <div>
         {/* 组件内容 */}
       </div>
     )
   }
   ```

3. **Hook 使用**
   - 自定义 Hook 以 `use` 开头
   - Hook 文件名与 Hook 名保持一致

### 主题开发

1. **使用主题变量**
   - 优先使用 Chakra UI 的主题变量
   - 避免使用硬编码的颜色值

2. **主题切换**
   - 使用 `useColorModeValue` 根据主题返回不同的值
   - 使用 `ColorModeButton` 实现主题切换

## 功能开发流程

1. **创建组件**
   - 在 `src/components/` 目录下创建新组件
   - 确保组件支持主题切换

2. **创建页面**
   - 在 `src/pages/` 目录下创建新页面
   - 页面路由将自动生成

3. **添加样式**
   - 使用 Chakra UI 的内置样式系统
   - 必要时使用 CSS Modules

4. **测试**
   - 在开发服务器上测试功能
   - 检查不同主题下的显示效果

5. **代码检查**
   - 运行 `npm run lint` 检查代码质量

6. **提交代码**
   - 编写清晰的提交信息
   - 确保所有测试通过

## 调试技巧

### 主题相关调试

1. **检查当前主题**
   ```tsx
   import { useColorMode } from "@/components/color-mode"
   
   const { colorMode } = useColorMode()
   console.log("当前主题:", colorMode)
   ```

2. **调试主题切换**
   ```tsx
   const { toggleColorMode } = useColorMode()
   
   const debugToggle = () => {
     console.log("切换主题前:", colorMode)
     toggleColorMode()
     console.log("切换主题后:", colorMode)
   }
   ```

### Next.js 调试

1. **查看构建日志**
   ```bash
   npm run build
   ```

2. **查看服务器端渲染日志**
   ```bash
   npm run dev
   ```

## 部署

### Vercel 部署

1. 登录 Vercel
2. 导入项目仓库
3. 配置部署设置
4. 点击 "Deploy"

### 其他平台部署

1. 构建项目：`npm run build`
2. 部署构建产物 `out/` 目录

## 常见问题

### 主题切换不生效

1. **检查是否正确配置了 ThemeProvider**
   - 确保在 `_app.tsx` 中正确配置了 `ThemeProvider`

2. **检查组件是否在客户端渲染**
   - 主题切换功能只能在客户端使用
   - 使用 `use client` 指令或 `ClientOnly` 组件

3. **检查 localStorage 是否正常工作**
   - 主题状态存储在 localStorage 中
   - 确保浏览器支持并启用了 localStorage

### 服务器端渲染与客户端渲染不一致

1. **使用 ClientOnly 组件**
   ```tsx
   import { ClientOnly } from "@chakra-ui/react"
   
   <ClientOnly fallback={<Skeleton />}>
     <ThemeDependentComponent />
   </ClientOnly>
   ```

2. **检查 _app.tsx 配置**
   - 确保 `ThemeProvider` 配置了 `disableTransitionOnChange`

## 性能优化

1. **组件懒加载**
   ```tsx
   const LazyComponent = dynamic(() => import("../components/LazyComponent"))
   ```

2. **图像优化**
   ```tsx
   import Image from "next/image"
   
   <Image src="/image.jpg" width={500} height={300} alt="描述" />
   ```

3. **避免不必要的重新渲染**
   - 使用 `React.memo`
   - 使用 `useMemo` 和 `useCallback`

## 学习资源

- [Next.js 文档](https://nextjs.org/docs)
- [Chakra UI 文档](https://chakra-ui.com/docs)
- [next-themes 文档](https://github.com/pacocoursey/next-themes)
- [TypeScript 文档](https://www.typescriptlang.org/docs/)