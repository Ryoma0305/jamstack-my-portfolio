import Link from "next/link";
import Head from "next/head";

export default function Home({ data }) {
  console.log(data);
  const postHtml = data.map((post, i) => {
    return (
      <>
        <li>
          <p key={post.ID}>{post.title}</p>
          <p>{post.content}</p>
        </li>
      </>
    );
  });
  return (
    <main className="flex items-center justify-center h-screen">
      <div>
        <Head>
          <title>Headless Blog</title>
        </Head>
        <h1 className="text-3xl font-bold underline">
          Next.js with Headless WordPress
        </h1>
        <ul className="flex items-center justify-center">{postHtml}</ul>
      </div>
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch(
    "http://jamstackmyportfoliosite.local/wp-json/wp/api/blog"
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
}
