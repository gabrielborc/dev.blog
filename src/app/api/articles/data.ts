export type Article = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

export const articles: Article[] = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    description: 'Learn the basics of React Hooks and how they can simplify your code.',
    imageUrl: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg',
    link: '/articles/pt-BR/artigo-exemplo',
  }
];