export interface Policy {
    title: string;
    description: any; // Rich Text
    icon: {
        fields: {
            file: {
                url: string;
            };
        };
    };
    roadmap?: any; // Rich Text
    order: number;
}

export interface News {
    title: string;
    excerpt: string;
    content: any; // Rich Text
    featuredImage?: {
        fields: {
            file: {
                url: string;
            };
        };
    };
    publishedAt: string;
    externalLink?: string;
    category: string;
}

export interface Settings {
    siteName: string;
    description: string;
    daysUntilElection: number;
    contactEmail: string;
    contactPhone: string;
    address: string;
    socialLinks: Record<string, string>;
}
