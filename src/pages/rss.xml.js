import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Astro Learner | Blog',
  description: 'My journey learning Astro',
  site: 'https://bejewelled-pixie-4f8106.netlify.app',
  items: import.meta.glob('./**/*.md'),
  customData: `<language>en-us</language>`,
});
