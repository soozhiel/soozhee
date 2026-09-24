import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What if the $700m decision isn’t the problem? — Soozhee',
  description: 'What if the solution isn’t where you’ve decided to look for it?',
  openGraph: { title: 'What if the $700m decision isn’t the problem?', description: 'What if the solution isn’t where you’ve decided to look for it?', images: [] },
  twitter: { title: 'What if the $700m decision isn’t the problem?', description: 'What if the solution isn’t where you’ve decided to look for it?', images: [] },
};

export default function ThoughtPage() {
  return (
    <main className="thought-page">
      <nav aria-label="Back to Soozhee"><Link href="/">SOOZHEE</Link></nav>
      <article>
        <header><p className="eyebrow">A THOUGHT</p><h1>WHAT IF THE $700M DECISION ISN’T THE PROBLEM?</h1><p className="thought-question">What if the solution isn’t where you’ve decided to look for it?</p></header>
        <div className="article-body">
          <p>It started from a place of love.</p>
          <p>Two people deciding to have each other’s backs. Then come the inherited beliefs about what each should and shouldn’t do. The unwritten contracts neither remembers signing. The expectation that someone who loves you should somehow know what you haven’t said.</p>
          <p>Two different histories. Different lenses. Different experiences, pains and fears.</p>
          <p>Love can be completely genuine and still buckle under communication that can’t survive an uncomfortable truth.</p>
          <p>Then peace gets disrupted.</p>
          <p>Who is right? Who is wrong?</p>
          <p>Confidence shakes. Self-doubt arrives. Each person tries to reinstate their version of reality.</p>
          <p>Eventually separation starts looking like peace.</p>
          <p>But we don’t leave ourselves at home when we go to work.</p>
          <p>You can compartmentalise your calendar. I’m not sure you can compartmentalise being human quite as neatly.</p>
          <p>A fight before work doesn’t disappear because the next appointment says BOARD MEETING.</p>
          <p>You can still walk into that room carrying the mental load, the doubt, the anger, the sick feeling in your heart — and simultaneously be expected to make an optimum decision involving hundreds of people and perhaps hundreds of millions of dollars.</p>
          <p>Which makes me wonder:</p>
          <p>What if the $700m decision isn’t what’s making the $700m decision so difficult?</p>
          <p>What if the business problem is carrying the weight of something that began somewhere else?</p>
          <p>And what happens if everybody keeps trying to solve it as a business problem?</p>
        </div>
      </article>
    </main>
  );
}
