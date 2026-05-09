export interface YouTubeVideo {
  id: string;
  title: string;
  publishedAt: string;
}

export async function getLatestYouTubeVideos(channelId: string, limit = 2): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const xml = await res.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
    return entries.slice(0, limit).map((match) => {
      const entry = match[1];
      const id = (entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/) || [])[1] ?? '';
      const title = (entry.match(/<title>(.*?)<\/title>/) || [])[1] ?? '';
      const publishedAt = (entry.match(/<published>(.*?)<\/published>/) || [])[1] ?? '';
      return { id, title, publishedAt };
    });
  } catch {
    return [];
  }
}
