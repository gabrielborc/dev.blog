export default async function Article({ params }: { params: { lang: string; articleID: string } }) {
  const { lang, articleID } = params;

  return (
    <div>
      <h1>{lang} - {articleID}</h1>
    </div>
  );

}