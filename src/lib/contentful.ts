import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

// 정책 가져오기
export async function getPolicies() {
  const entries = await client.getEntries({
    content_type: 'policy',
    order: ['fields.order'],
  });
  return entries.items;
}

// 뉴스 가져오기
export async function getNews(limit = 10) {
  const entries = await client.getEntries({
    content_type: 'news',
    limit,
    order: ['-fields.publishedAt'],
  });
  return entries.items;
}

// 설정 가져오기
export async function getSettings() {
  const entries = await client.getEntries({
    content_type: 'settings',
    limit: 1,
  });
  return entries.items[0]?.fields;
}
