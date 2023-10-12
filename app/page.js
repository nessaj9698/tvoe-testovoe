import Feed from "./components/Feed/Feed";
import AdsBanner from "./components/AdsBanner/AdsBanner";
import Section from "./components/Section/Section";
import PostCards from "./components/PostCards/PostCards";

import getPosts from "./api/postsApi";
import getAds from "./api/adsApi";

export default async function Home() {
  const posts = await getPosts();
  const ads = await getAds();

  return (
    <main>
      <Feed news={posts.feed} hotNews={posts.hotNews} />
      <AdsBanner ads={ads} />
      <Section title="Читайте также" isPadding={true} isBgWhite={true} padding={'1rem 2rem 2rem 2rem'} titlePadding={'1rem 0 0 0'} bgColor={'#fff'}>
        <PostCards posts={posts.reedAlso} />
      </Section>

      <Section title='Происшествия' titlePadding={'1rem 0 0 2rem'}>
        <PostCards posts={posts.incidents} />
      </Section>
    </main>
  );
}
