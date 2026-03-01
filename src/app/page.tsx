export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-2xl space-y-8 text-center">
        <h1 className="text-4xl font-bold">Hello World</h1>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">关于我</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            你好，我是一名全栈开发者，热衷于用技术创造有价值的产品。擅长 React、Next.js、TypeScript 等前端技术栈，同时对后端开发和系统设计也有丰富经验。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">关于项目</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            这是一个基于 Next.js 构建的个人项目，使用了 Tailwind CSS 进行样式开发。项目旨在探索现代 Web 技术，打造高性能、优雅的用户体验。
          </p>
        </section>
      </div>
    </div>
  );
}
