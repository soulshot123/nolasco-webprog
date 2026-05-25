import seedArticles from '../assets/data/article-content.js';

const STORAGE_KEY = 'dashboardArticles';

export const slugifyArticleTitle = (title) =>
    String(title ?? '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') || `article-${Date.now()}`;

const readStoredArticles = () => {
    try {
        const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
};

export const getArticles = () => [...seedArticles, ...readStoredArticles()];

export const saveDashboardArticle = (article) => {
    const savedArticles = readStoredArticles();
    const savedNames = new Set([...seedArticles, ...savedArticles].map((item) => item.name));
    const baseName = slugifyArticleTitle(article.title);
    let name = baseName;
    let suffix = 2;

    while (savedNames.has(name)) {
        name = `${baseName}-${suffix}`;
        suffix += 1;
    }

    const nextArticle = {
        ...article,
        name,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify([nextArticle, ...savedArticles]));
    return nextArticle;
};
