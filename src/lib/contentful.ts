import { createClient } from 'contentful';

// Delivery API와 Preview API를 구분하여 클라이언트 생성
// 401 에러 방지를 위해 Preview 모드 사용 가능하도록 설정
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  // PM님의 지시에 따라 호스트를 명시적으로 Preview API 주소로 고정합니다.
  host: 'preview.contentful.com'
});

// 정책 가져오기
export async function getPolicies() {
  try {
    const entries = await client.getEntries({
      content_type: 'policy',
      order: ['fields.order'],
    });
    console.log(`[DEBUG] getPolicies: ${entries.items.length}개 로드됨`, JSON.stringify(entries.items[0]?.fields ?? {}, null, 2));
    return entries.items;
  } catch (error) {
    console.error('Error fetching policies:', error);
    return [];
  }
}

// 뉴스 가져오기
export async function getNews(limit = 10) {
  try {
    const entries = await client.getEntries({
      content_type: 'news',
      limit,
      order: ['-fields.publishedAt'],
    });
    console.log(`[DEBUG] getNews: ${entries.items.length}개 로드됨`, JSON.stringify(entries.items[0]?.fields ?? {}, null, 2));
    return entries.items;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

// 설정 가져오기
export async function getSettings() {
  try {
    const entries = await client.getEntries({
      content_type: 'settings',
      limit: 1,
    });
    return entries.items[0]?.fields || null;
  } catch (error) {
    console.error('Error fetching settings:', error);
    return null;
  }
}
