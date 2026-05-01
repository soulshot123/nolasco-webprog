import { useParams, Link } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import articles from '../../assets/article-content.js';

const ArticlePage = () => {
    const { name } = useParams();
    const article = articles.find(a => a.name === name);

    if (!article) {
        return (
            <div className="flex w-full flex-col gap-6">
                <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Article Not Found
                    </p>
                    <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                        Article not found
                    </h1>
                    <Link to="/articles">
                        <Button className="mt-6">Back to Articles</Button>
                    </Link>
                </section>
            </div>
        );
    }

    return (
        <div className="flex w-full flex-col gap-6">
            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    Articles
                </p>
                <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                    {article.title}
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
                    {article.content[0]}
                </p>
                <div className="mt-6 flex gap-4 justify-center">
                    <Link to="/articles">
                        <Button>Back to Articles</Button>
                    </Link>
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6 text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Article
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
                        {article.title}
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="mx-auto mb-8 w-80 aspect-[4/3] max-w-full">
                        <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full rounded-[1.25rem] object-cover"
                        />
                    </div>
                    <div className="prose prose-zinc max-w-none mx-auto">
                        <div 
                            dangerouslySetInnerHTML={{ 
                                __html: article.content.map(p => p.replace(/\n/g, '<br>')).join('<br><br>') 
                            }} 
                        />
                    </div>
                    <div className="mt-12 text-center">
                        <Link to="/articles">
                            <Button>← Back to Articles</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArticlePage;
