import './ArticleCard.css';

interface ArticleCardProps {
	title: string;
	description: string;
	imageUrl: string;
	link: string;
}

export default function ArticleCard({ title, description, imageUrl, link }: ArticleCardProps) {
	return (
		<div className="article-card">
			<img src={imageUrl} alt={title} className="article-card-image" />
			<div className="article-card-content">
				<h2 className="article-card-title">{title}</h2>
				<p className="article-card-description">{description}</p>
				<a href={link} className="article-card-link">Ler mais</a>
			</div>
		</div>
	);
}