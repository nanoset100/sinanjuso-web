export async function getNewsById(id: string) {
    const { createClient } = await import('contentful');
    const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
        host: 'preview.contentful.com'
    });

    try {
        const entry = await client.getEntry(id);
        return entry;
    } catch (error) {
        console.error('Error fetching article by ID:', error);
        return null;
    }
}

export async function getPolicyById(id: string) {
    const { createClient } = await import('contentful');
    const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
        host: 'preview.contentful.com'
    });

    try {
        const entry = await client.getEntry(id);
        return entry;
    } catch (error) {
        console.error('Error fetching policy by ID:', error);
        return null;
    }
}
