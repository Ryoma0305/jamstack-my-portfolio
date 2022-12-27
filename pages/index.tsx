import { getBlogPosts } from "../lib/wp-blog";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-3xl font-bold underline">
        Next.js with Headless WordPress
      </h1>
    </main>
  );
}
