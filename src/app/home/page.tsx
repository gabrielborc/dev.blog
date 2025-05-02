import './home.css';
import { articles } from '@/app/api/articles/data';
import ArticleCard from '@/components/ArticleCard/ArticleCard';

export default async function Home() {
  return (
    <section className='list-articles'>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          description={article.description}
          imageUrl={article.imageUrl}
          link={article.link}
        />
      ))}
    </section>
  );
}
