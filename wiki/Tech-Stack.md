# 技术栈 🛠️

本项目使用了现代化的前端技术栈，主要包括 Next.js、React、Chakra UI 和 TypeScript。

## 核心技术

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16.0.7 | React 框架，提供服务端渲染和静态站点生成 |
| React | 19.2.0 | UI 组件库 |
| React DOM | 19.2.0 | React 渲染器 |
| Chakra UI | ^3.30.0 | 基于 React 的 UI 组件库 |
| next-themes | ^0.4.6 | 主题切换管理库 |
| TypeScript | ^5 | 类型安全的 JavaScript 超集 |

## 开发工具

| 工具 | 版本 | 用途 |
|------|------|------|
| ESLint | ^9 | 代码质量检查工具 |
| @types/node | ^20 | Node.js 类型定义 |
| @types/react | ^19 | React 类型定义 |
| @types/react-dom | ^19 | React DOM 类型定义 |
| eslint-config-next | 16.0.7 | Next.js 专用 ESLint 配置 |

## 依赖关系

### 前端框架

- **Next.js**: 项目的核心框架，提供了以下特性：
  - 服务器端渲染 (SSR)
  - 静态站点生成 (SSG)
  - 路由系统
  - API 路由
  - 自动代码分割
  - 优化的图像加载

- **React**: UI 构建的基础库，提供了：
  - 组件化开发
  - Virtual DOM
  - Hooks API
  - Context API

### UI 组件库

- **Chakra UI**: 提供了丰富的 React 组件，具有以下特点：
  - 基于系统设计
  - 完全可定制
  - 响应式设计支持
  - 主题系统
  - 无障碍支持

### 主题管理

- **next-themes**: 专门为 Next.js 设计的主题管理库，提供：
  - 客户端和服务器端主题同步
  - 主题持久化
  - 浏览器偏好检测
  - 平滑的主题切换

### 图标库

- **react-icons**: 提供了多种图标集，本项目使用了：
  - **Lucide Icons**: 提供了现代化的太阳和月亮图标

## 技术选型理由

### Next.js

选择 Next.js 作为核心框架的原因：
- 强大的 SEO 支持（服务器端渲染）
- 优秀的性能优化
- 良好的开发体验
- 完善的文档和社区支持
- 适合构建生产级应用

### Chakra UI

选择 Chakra UI 的原因：
- 组件丰富且易于使用
- 内置的主题系统与我们的主题切换需求完美契合
- 响应式设计支持
- 类型安全（TypeScript 支持）
- 良好的无障碍支持

### next-themes

选择 next-themes 的原因：
- 专门为 Next.js 设计，解决了服务端渲染和客户端渲染的主题同步问题
- 简单易用的 API
- 支持主题持久化
- 与 Chakra UI 良好兼容

### TypeScript

使用 TypeScript 的好处：
- 类型安全，减少运行时错误
- 更好的代码提示和自动补全
- 提高代码可维护性
- 便于重构
- 更好的团队协作

## 技术栈升级路线

### 短期计划

- [ ] 升级到最新稳定版的 Next.js
- [ ] 升级到最新稳定版的 Chakra UI
- [ ] 评估使用 App Router 替代 Pages Router

### 长期计划

- [ ] 引入状态管理库（如 Zustand 或 Jotai）
- [ ] 实现更丰富的主题定制功能
- [ ] 添加动画效果

## 技术栈对比

### Next.js vs Create React App

| 特性 | Next.js | Create React App |
|------|---------|------------------|
| 路由系统 | 内置 | 需要额外安装（如 React Router） |
| 服务器端渲染 | 支持 | 不支持 |
| 静态站点生成 | 支持 | 有限支持 |
| API 路由 | 支持 | 不支持 |
| 性能优化 | 自动 | 需要手动配置 |

### Chakra UI vs Material UI

| 特性 | Chakra UI | Material UI |
|------|-----------|-------------|
| 设计理念 | 基于系统设计 | 基于 Material Design |
| 自定义程度 | 高 | 中 |
| 主题系统 | 灵活 | 严格 |
| 组件数量 | 丰富 | 非常丰富 |
| 学习曲线 | 较低 | 中等 |

## 相关资源

- [Next.js 文档](https://nextjs.org/docs)
- [React 文档](https://react.dev/)
- [Chakra UI 文档](https://chakra-ui.com/docs)
- [next-themes GitHub](https://github.com/pacocoursey/next-themes)
- [TypeScript 文档](https://www.typescriptlang.org/docs/)