export const metadata = {
  title: "Hello World 👋",
  date: "2025-10-26",
  summary: "Bài viết đầu tiên trên Lubeo Blog.",
  tags: ["intro", "nextjs", "mdx"]
};

export default function HelloWorld() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <article>
        <h1 className="text-4xl font-bold mb-4">Hello World 👋</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p>
            Đây là <strong>bài viết đầu tiên</strong> của mình bằng MDX.
          </p>
          
          <ul>
            <li>Viết nội dung như Markdown bình thường.</li>
            <li>Có thể chèn <code>code</code> hoặc khối:</li>
          </ul>

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code>{`export const add = (a:number, b:number) => a + b;`}</code>
          </pre>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap gap-2">
            {metadata.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
