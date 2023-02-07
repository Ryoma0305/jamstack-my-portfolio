import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Slider from "../components/gallery";

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
    <>
      {/* <main className="flex items-center justify-center h-screen">
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
    </main> */}
      <section className="mainvisual">
        <Header />
        <div className="header-main">
          <div className="header-main-text">
            <h2
              className="robot mainvisual-ttl"
              data-sr-id="6"
              // style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.5s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 0.5s cubic-bezier(0.5, 0, 0, 1) 0.2s;"
            >
              WELCOME<span>TO THE</span>
              <span>WORLD OF</span>
              <span>ARIMURA RYOMA</span>
            </h2>
            <p
              className="robot mainvisual-text"
              data-sr-id="7"
              // style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.5s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 0.5s cubic-bezier(0.5, 0, 0, 1) 0.4s;"
            >
              I'm Ryoma <span>a web developer</span> based in Osaka, Japan.
            </p>
          </div>
        </div>
        <div className="scroll-arrow-wrap">
          <a href="#about" className="scroll-arrow">
            <span></span>Scroll
          </a>
        </div>
      </section>
      <main id="main">
        <section className="profile inner" id="about">
          <div className="ttl section-ttl" data-sr-id="0">
            <h2 className="robot ttl-text1">ABOUT ME</h2>
            <p className="ttl-text2 notosans">Who I am</p>
          </div>

          <div className="profile-content">
            <p className="profile-content-image">
              <Image
                src="/images/ico_ryoma.jpg"
                alt=""
                width={300}
                height={150}
                objectFit="contain"
              />
            </p>
            <div className="profile-content-box">
              <h2 className="profile-content-box-ttl robot">Arimura Ryoma</h2>
              <div className="profile-content-box-text notosans">
                <p>
                  大阪出身、１９９１年生まれの２９歳。
                  <br />
                  Web制作、コーディングが大好きです。Web制作に出会い、これからの人生で本当にやりたいことを見つけられたと思っています。
                  <br />
                  Web制作のスキルを上げる為、日々勉強に励んでいます。
                  <br />
                  趣味はサッカー観戦。週末は応援するマイクラブの試合を観にスタジアムに通っています。
                  どうぞよろしくお願いします。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="skill">
          <div className="ttl inner" data-sr-id="2">
            <div className="ttl section-ttl" data-sr-id="3">
              <h2 className="robot ttl-text1">SKILLS</h2>
              <p className="ttl-text2 notosans">What I do</p>
            </div>
          </div>
          <div className="skill-wrapper">
            <ul className="skill-box inner">
              <li className="skill-box-content">
                <p className="skill-box-content-image">
                  <Image
                    src="/images/html.png"
                    alt=""
                    width={300}
                    height={150}
                    objectFit="contain"
                  />
                </p>
                <p className="skill-box-content-ttl">HTML5</p>
              </li>
              <li className="skill-box-content">
                <p className="skill-box-content-image">
                  <Image
                    src="/images/css.png"
                    alt=""
                    width={300}
                    height={150}
                    objectFit="contain"
                  />
                </p>
                <p className="skill-box-content-ttl">CSS3</p>
              </li>
              <li className="skill-box-content">
                <p className="skill-box-content-image">
                  <Image
                    src="/images/js.png"
                    alt=""
                    width={300}
                    height={150}
                    objectFit="contain"
                  />
                </p>
                <p className="skill-box-content-ttl">JavaScript</p>
              </li>
              <li className="skill-box-content">
                <p className="skill-box-content-image">
                  <Image
                    src="/images/jquery.png"
                    alt=""
                    width={300}
                    height={150}
                    objectFit="contain"
                  />
                </p>
                <p className="skill-box-content-ttl">jQuery</p>
              </li>
              <li className="skill-box-content">
                <p className="skill-box-content-image">
                  <Image
                    src="/images/sass.png"
                    alt=""
                    width={300}
                    height={150}
                    objectFit="contain"
                  />
                </p>
                <p className="skill-box-content-ttl">Sass</p>
              </li>
              <li className="skill-box-content">
                <p className="skill-box-content-image">
                  <Image
                    src="/images/php.png"
                    alt=""
                    width={300}
                    height={150}
                    objectFit="contain"
                  />
                </p>
                <p className="skill-box-content-ttl">PHP</p>
              </li>
              <li className="skill-box-content">
                <p className="skill-box-content-image">
                  <Image
                    src="/images/github.png"
                    alt=""
                    width={300}
                    height={150}
                    objectFit="contain"
                  />
                </p>
                <p className="skill-box-content-ttl">GitHub</p>
              </li>
              <li className="skill-box-content">
                <p className="skill-box-content-image">
                  <Image
                    src="/images/wordpress.png"
                    alt=""
                    width={300}
                    height={150}
                    objectFit="contain"
                  />
                </p>
                <p className="skill-box-content-ttl">WordPress</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="blog">
          <div className="ttl inner" data-sr-id="4">
            <div className="ttl section-ttl" data-sr-id="5">
              <h2 className="robot ttl-text1">BLOG</h2>
              <p className="ttl-text2 notosans">What I think</p>
            </div>
          </div>

          <ul className="blog-content" data-sr-id="8">
            <li id="post-296">
              <p className="blog-image">
                <a href="https://arimura-ryoma.com/blog/296/">
                  <img
                    width="5507"
                    height="3098"
                    src="https://arimura-ryoma.com/wp-content/uploads/2020/01/emile-perron-xrVDYZRGdw4-unsplash.jpg"
                    className="attachment- size- wp-post-image"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 5507px) 100vw, 5507px"
                  />
                </a>
              </p>
              <dl className="notosans">
                <dt>
                  <a href="https://arimura-ryoma.com/blog/296/">
                    CSSで背景画像と背景色を重ねる方法
                  </a>
                </dt>
                <dd>
                  <a href="https://arimura-ryoma.com/blog/296/">
                    <p>
                      CSSで背景画像と背景色を重ねる方法
                      先日コーディングをしていて、下の画像のような背景画像の上に背景色を重ねる
                    </p>
                  </a>
                </dd>
              </dl>
              <p className="viewmore">
                <a href="https://arimura-ryoma.com/blog/296/">view more</a>
              </p>
            </li>
            <li id="post-294">
              <p className="blog-image">
                <a href="https://arimura-ryoma.com/blog/294/">
                  <img
                    width="1348"
                    height="668"
                    src="https://arimura-ryoma.com/wp-content/uploads/2020/01/fontawesome-top.jpg"
                    className="attachment- size- wp-post-image"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 1348px) 100vw, 1348px"
                  />
                </a>
              </p>
              <dl className="notosans">
                <dt>
                  <a href="https://arimura-ryoma.com/blog/294/">
                    Font Awesomeの使い方まとめ
                  </a>
                </dt>
                <dd>
                  <a href="https://arimura-ryoma.com/blog/294/">
                    <p>
                      Font Awesomeの使い方まとめ
                      webサイトを制作しているとSNSサイトのロゴアイコンが使いたい時があ
                    </p>
                  </a>
                </dd>
              </dl>
              <p className="viewmore">
                <a href="https://arimura-ryoma.com/blog/294/">view more</a>
              </p>
            </li>
            <li id="post-292">
              <p className="blog-image">
                <a href="https://arimura-ryoma.com/blog/292/">
                  <img
                    width="600"
                    height="316"
                    src="https://arimura-ryoma.com/wp-content/uploads/2020/01/20130703.jpg"
                    className="attachment- size- wp-post-image"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 600px) 100vw, 600px"
                  />
                </a>
              </p>
              <dl className="notosans">
                <dt>
                  <a href="https://arimura-ryoma.com/blog/292/">
                    画像圧縮はTinyPNGがおすすめ
                  </a>
                </dt>
                <dd>
                  <a href="https://arimura-ryoma.com/blog/292/">
                    <p>
                      画像圧縮はTinyPNGがおすすめ
                      画像サイズが大きいとサイトの読み込み速度が遅くなります。そこで画像を圧縮す
                    </p>
                  </a>
                </dd>
              </dl>
              <p className="viewmore">
                <a href="https://arimura-ryoma.com/blog/292/">view more</a>
              </p>
            </li>
          </ul>
          <p className="button-container robot" data-sr-id="9">
            <a href="https://arimura-ryoma.com/blog" className="button">
              MORE
            </a>
          </p>
        </section>

        <section className="value">
          <div className="value-ttl-wrapper">
            <div className="value-ttl">
              <p className="value-ttl-text1 robot">My Value</p>
              <p className="value-ttl-text2">継続は力なり</p>
            </div>
          </div>
          <Slider />
        </section>
      </main>
      <Footer />
    </>
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
