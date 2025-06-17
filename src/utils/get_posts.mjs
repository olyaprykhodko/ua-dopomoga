import { getCollection } from 'astro:content';

import oldPosts from '../data/posts/old_posts.json';

export async function getAllPosts() {
  const mdPosts = await getCollection('posts');

  const formattedMdPosts = await Promise.all(
    mdPosts.map(async (post) => {
      const { Content } = await post.render();

      return {
        title: post.data.title,
        content: post.body,
        image: post.image,
        image_alt: post.data.image_alt,
        background_image: post.data.background_image,
        date: post.data.date.toISOString().split('T')[0],
        cta: post.data.cta || 'Читати далі',
        slug: post.slug,
        isMdPost: true,
        entry: post,
      };
    })
  );

  const formattedJsonPosts = oldPosts.map((post) => ({
    ...post,
    date: post.date,
    isMdPost: false,
    slug: null,
  }));

  const allPosts = [...formattedMdPosts, ...formattedJsonPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return allPosts;
}

export async function getFeaturedPosts() {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.featured);
}
