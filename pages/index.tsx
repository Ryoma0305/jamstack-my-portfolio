import Link from "next/link";
import Head from "next/head";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";

export const getStaticProps = async () => {
  const GET_POSTS = gql`
    query AllPostsQuery {
      blog {
        nodes {
          id
          slug
          title
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_POSTS,
  });

  const posts = response?.data?.blog?.nodes;

  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }) {
  return (
    <main className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-3xl font-bold underline">
          Next.js with Headless WordPress
        </h1>
        <div className="mt-5 space-y-2">
          {posts.map((post) => {
            const { id, slug, title } = post;
            return (
              <Link key={id} href={`/posts/${slug}`}>
                {title}
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

// export default function Home({ data }) {
//   console.log(data);
//   const postHtml = data.map((post, i) => {
//     return (
//       <>
//         <li>
//           <p key={post.ID}>{post.title}</p>
//           <p>{post.content}</p>
//         </li>
//       </>
//     );
//   });
//   return (
//     <main className="flex items-center justify-center h-screen">
//       <div>
//         <Head>
//           <title>Headless Blog</title>
//         </Head>
//         <h1 className="text-3xl font-bold underline">
//           Next.js with Headless WordPress
//         </h1>
//         <ul className="flex items-center justify-center">{postHtml}</ul>
//       </div>
//     </main>
//   );
// }

// export async function getServerSideProps(context: any) {
//   const res = await fetch(
//     "http://jamstackmyportfoliosite.local/wp-json/wp/api/blog"
//   );
//   const data = await res.json();
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       data,
//     },
//   };
// }
