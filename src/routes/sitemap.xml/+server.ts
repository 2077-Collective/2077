import type { RequestHandler } from "@sveltejs/kit";

interface Article {
    slug: string;
    updatedAt?: string;
}

interface ArticleAPIResponse {
    slug: string;
    updatedAt?: string;
}

async function fetchResearchPages(): Promise<Article[]> {
    try {
        const apiUrl = import.meta.env.VITE_CMS_API_URL;
        if (!apiUrl) {
            throw new Error('VITE_CMS_API_URL environment variable is not set');
        }
        const response = await fetch(`${apiUrl}/api/articles/`);
        if (!response.ok) {
            throw new Error(`Failed to fetch articles: ${response.statusText}`);
        }
        const articles: ArticleAPIResponse[] = await response.json();

        return articles.map((article: ArticleAPIResponse) => ({
            slug: article.slug,
            updatedAt: article.updatedAt || new Date().toISOString(),
        }));
    } catch (error) {
        console.error('Error fetching research articles:', error);
        return [];
    }
}

export const GET: RequestHandler = async ({ request }) => {
    const protocol = request.headers.get("x-forwarded-proto") || "https";
    const baseURL = import.meta.env.PROD
        ? "https://2077.xyz"
        : `${protocol}://${request.headers.get("host")}`;

    const researchPages = await fetchResearchPages();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!-- Homepage -->
        <url>
            <loc>${baseURL}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>

        <!-- Static pages -->
        <url>
            <loc>${baseURL}/about</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>

        <url>
            <loc>${baseURL}/support</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>

        <url>
            <loc>${baseURL}/values</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>

        <!-- Research pages -->
        ${researchPages
            .map(
                (page: Article) => `
            <url>
                <loc>https://research.2077.xyz/${page.slug}</loc>
                <lastmod>${new Date(page.updatedAt || new Date().toISOString()).toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.8</priority>
            </url>
        `,
            )
            .join("")}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
};
