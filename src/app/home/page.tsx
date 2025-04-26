import './home.css';
import { Article } from '@/app/api/articles/data';
import ArticleCard from '@/components/ArticleCard/ArticleCard';
import Env from '@/config/environment';


export default async function Home() {
  const data = await fetch(`${Env.API_URL}/api/articles`);
  const articles: Article[] = await data.json();

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
