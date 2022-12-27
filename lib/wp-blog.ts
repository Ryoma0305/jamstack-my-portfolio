//型定義

//APIの呼び出し
export const getBlogPosts = async () => {
  const data = await fetchAPI();
  return { contents: data };
};

export const getBlogPostDetail = async (contentId: string) => {
  const data = await fetchAPI();
  return data.filter((item: any) => {
    return item.id == contentId;
  })[0];
};

async function fetchAPI() {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(
    "http://jamstackmyportfoliosite.local/wp-json/wp/api/blog",
    {
      method: "GET",
      headers,
    }
  );

  //   console.log(res);

  const json = await res.json();
  return json.map((item: any) => {
    return {
      id: item.ID,
      createdAt: item.date,
      updatedAt: item.modified,
      publishedAt: item.modified,
      revisedAt: item.modified,
      title: item.title,
      content: item.content,
    };
  });
}
