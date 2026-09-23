import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json() as Record<string, unknown>;
  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const bestCity = String(body.bestCity ?? '').trim();
  const whatCanYouShare = String(body.whatCanYouShare ?? '').trim();
  const website = String(body.website ?? '').trim();

  if (website) return NextResponse.json({ ok: true });
  if (!name || !email || !bestCity) {
    return NextResponse.json({ error: 'Please complete your name, contact details and location.' }, { status: 400 });
  }

  if (email.endsWith('.invalid')) return NextResponse.json({ ok: true, test: true });

  try {
    const response = await fetch('https://doubledumplings.vercel.app/api/private-brief', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, bestCity, whatCanYouShare: `[Soozhee.com]\n\n${whatCanYouShare}`, website: '' }),
    });
    const result = await response.json().catch(() => ({})) as { error?: string };
    if (!response.ok) throw new Error(result.error || 'Your calling card could not be sent.');
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Your calling card could not be sent.' }, { status: 502 });
  }
}
