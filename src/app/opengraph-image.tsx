import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #1B3A6B 0%, #152d54 60%, #0f2040 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* 상단 뱃지 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,0.12)',
            border: '1.5px solid rgba(255,255,255,0.2)',
            borderRadius: '999px',
            padding: '10px 28px',
            marginBottom: '32px',
          }}
        >
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E8941A' }} />
          <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '22px', fontWeight: 700, letterSpacing: '0.05em' }}>
            조국혁신당 신안군수 예비후보
          </span>
        </div>

        {/* 이름 */}
        <div style={{ fontSize: '100px', fontWeight: 900, color: 'white', letterSpacing: '-0.02em', lineHeight: 1 }}>
          김태성
        </div>

        {/* 구분선 */}
        <div style={{ width: '80px', height: '5px', background: '#E8941A', borderRadius: '99px', margin: '28px 0' }} />

        {/* 슬로건 */}
        <div style={{ fontSize: '36px', fontWeight: 700, color: 'rgba(147,197,253,1)', textAlign: 'center', lineHeight: 1.4 }}>
          소득 늘리고, 일자리 만들고,
        </div>
        <div style={{ fontSize: '36px', fontWeight: 700, color: 'rgba(147,197,253,1)', marginTop: '6px' }}>
          약속 지키는 군수
        </div>

        {/* 하단 URL */}
        <div style={{ position: 'absolute', bottom: '36px', color: 'rgba(255,255,255,0.4)', fontSize: '20px' }}>
          sinanjuso-web.vercel.app
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
