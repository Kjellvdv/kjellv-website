import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => data.status === 'published');
  const sorted = posts.sort((a, b) => {
    const dateA = a.data.published_at ?? new Date(0);
    const dateB = b.data.published_at ?? new Date(0);
    return dateB.getTime() - dateA.getTime();
  });

  return rss({
    title: 'Very Klear — Articles',
    description: 'Writing on B2B tech GTM, positioning, customer journeys, and growth.',
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.published_at,
      description: post.data.meta_description,
      link: `/blog/${post.data.slug}/`,
    })),
    customData: `<language>en-gb</language>`,
  });
}
