import type { RequestHandler } from '@sveltejs/kit';

// Define the type for an article
interface Article {
    slug: string;
    updatedAt?: string; // Optional field
}

// Function to fetch all articles from the research site
async function fetchResearchPages(): Promise<Article[]> {
    try {
        // Fetch articles from the API
        const response = await fetch('https://cms.2077.xyz/api/articles/');
        if (!response.ok) {
            throw new Error(`Failed to fetch articles: ${response.statusText}`);
        }
        const articles = await response.json();

        // Map the API response to the required format
        return articles.map((article: any) => ({
            slug: article.slug, // Use the slug from the API response
            updatedAt: article.updatedAt || new Date().toISOString(), // Use the last modified date if available
        }));
    } catch (error) {
        console.error('Error fetching research articles:', error);
        return []; // Return an empty array if fetching fails
    }
}

export const GET: RequestHandler = async ({ request }) => {
    // Determine the base URL dynamically
    const protocol = request.headers.get('x-forwarded-proto') || 'https';
    const baseURL = import.meta.env.PROD
        ? 'https://yourdomain.com' // Replace with your actual domain
        : `${protocol}://${request.headers.get('host')}`;

    // Fetch research pages
    const researchPages = await fetchResearchPages();

    // Generate the sitemap XML
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
        `
            )
            .join('')}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
};