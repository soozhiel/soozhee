'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

type CallingCard = {
  name: string;
  email: string;
  bestCity: string;
  whatCanYouShare?: string;
  website?: string;
};

type ModelContext = {
  registerTool: (tool: {
    name: string;
    title: string;
    description: string;
    inputSchema: object;
    annotations: { readOnlyHint: boolean; untrustedContentHint: boolean };
    execute: (input: unknown) => Promise<unknown>;
  }, options?: { signal: AbortSignal }) => void | Promise<void>;
};

async function sendCallingCard(card: CallingCard) {
  const response = await fetch('/api/private-brief', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(card),
  });
  const result = await response.json() as { error?: string };
  if (!response.ok) throw new Error(result.error || 'Your calling card could not be sent.');
  return { status: 'received' };
}

const movements = [
  { kind: 'opening', lines: ['I don’t have all the answers.', 'I do have the willingness — and occasionally the audacity — to ask the simple, stupid question everyone else would rather bury than risk looking stupid.', 'I’m comfortable being called crazy while something is still unknown — or still operating in my blind spot.'] },
  { kind: 'conviction', lines: ['I’m comfortable creating from the unknown when there’s a problem worth solving.', 'I’ll back what I believe.', 'And I’ll back the people who helped me get here.', 'I’ll also admit I got it wrong when reality finally proves that I did.', 'Then I’ll dig myself out of my own grave.'] },
  { kind: 'pair', lines: ['There is nothing particularly glamorous about the amount of work I’ve done killing my own bad ideas, assumptions, fears and bullshit.', 'But it has paid for a rather glamorous freedom:'] },
  { kind: 'litany', lines: ['I don’t need to protect them.', 'I can sit with something uncomfortable without needing to make it comfortable.', 'I can admit the truth when the truth is inconvenient.', 'I can talk about the thing nobody quite wants to notice yet.', 'I can ask the question that might make both of us look stupid.', 'I can change my mind without treating it as a personal catastrophe.', 'And I can keep looking when the first answer doesn’t work.'] },
  { kind: 'foundations', lines: ['A lot of what I’ve created came from doing exactly that.', 'A lot of it also came from becoming interested in studying things that make otherwise good foundations crack under pressure.', 'The thing nobody accounted for.', 'The assumption nobody checked.', 'The uncomfortable bit everyone worked around.', 'The small crack that didn’t look important until everything resting on it got heavier.'] },
  { kind: 'outcomes', lines: ['Some things I’ve made worked.', 'Some didn’t.', 'Some became something I couldn’t have imagined when I started.', 'That’s the point.'] },
  { kind: 'conclusion', lines: ['I’m not asking you to trust that I know everything.', 'I’m giving you a way to decide whether you could sit across from me, put the real problem on the table, and think out loud without performing.', 'If you can —', 'we’ll probably have a proper conversation.'] },
];

export default function Home() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const draft = sessionStorage.getItem('soozhee-calling-card');
    if (draft && formRef.current) {
      try {
        const data = JSON.parse(draft) as Record<string, string>;
        for (const [name, value] of Object.entries(data)) {
          const field = formRef.current.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null;
          if (field) field.value = value;
        }
      } catch { /* A damaged local draft is safe to ignore. */ }
    }

    const context = (document as Document & { modelContext?: ModelContext }).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    void Promise.resolve(context.registerTool({
      name: 'leave_calling_card',
      title: 'Leave calling card',
      description: 'Privately send a calling card to Soozhee through Caelverum Private Office.',
      inputSchema: {
        type: 'object',
        properties: {
          name: { type: 'string', minLength: 1, description: 'Your name' },
          email: { type: 'string', minLength: 1, description: 'How Soozhee can reach you' },
          bestCity: { type: 'string', minLength: 1, description: 'Where in the world you are' },
          whatCanYouShare: { type: 'string', description: 'What you are actually thinking about' },
        },
        required: ['name', 'email', 'bestCity'],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      async execute(input) {
        const card = input as CallingCard;
        if (!card.name?.trim() || !card.email?.trim() || !card.bestCity?.trim()) {
          throw new Error('Name, contact details and location are required.');
        }
        const result = await sendCallingCard(card);
        sessionStorage.removeItem('soozhee-calling-card');
        router.push('/received');
        return result;
      },
    }, { signal: lifecycle.signal })).catch(() => undefined);
    return () => lifecycle.abort();
  }, [router]);

  function keepDraft() {
    if (!formRef.current) return;
    const data = Object.fromEntries([...new FormData(formRef.current)].filter(([name]) => name !== 'website'));
    sessionStorage.setItem('soozhee-calling-card', JSON.stringify(data));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError('');
    const card = Object.fromEntries(new FormData(event.currentTarget)) as CallingCard;
    try {
      await sendCallingCard(card);
      sessionStorage.removeItem('soozhee-calling-card');
      router.push('/received');
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Your calling card could not be sent.');
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      <section className="poster" aria-label="Soozhee — pleased to meet you">
        <div className="poster-title"><h1>SOOZHEE</h1><p>FOR THINGS WORTH THINKING ABOUT PROPERLY.</p></div>
        <div className="horizon" aria-hidden="true"><img src="/soozhee-poster.png" alt="" /></div>
        <div className="poster-greeting"><h2>PLEASED TO MEET YOU.</h2><p><em>Not really sure if the feeling will be mutual.</em><br /><em>Let’s try it out and see what lands with you too.</em></p><span>— SOOZHEE</span></div>
        <a className="scroll-cue" href="#thinking" aria-label="Continue to how I think"><span /></a>
      </section>

      <section id="thinking" className="thinking" aria-label="How I think">
        {movements.map((movement, index) => (
          <div className={`movement ${movement.kind}`} key={index}>
            <div className="movement-inner">
              {movement.lines.map((line) => <p key={line}>{line}</p>)}
            </div>
          </div>
        ))}
      </section>

      <section className="invitation">
        <p>BRING ME WHAT YOU’RE ACTUALLY THINKING ABOUT.</p>
      </section>

      <section id="calling-card" className="calling-card">
        <header><p>PRIVATE CORRESPONDENCE</p><h2>LEAVE YOUR <em>CALLING CARD</em></h2><span>You don’t need to have the question right yet.</span></header>
        <form ref={formRef} onSubmit={submit} onInput={keepDraft}>
          <label><span>Your name</span><input name="name" type="text" autoComplete="name" required /></label>
          <label><span>How can I reach you?</span><input name="email" type="text" autoComplete="email" required /></label>
          <label><span>Where in the world are you?</span><input name="bestCity" type="text" autoComplete="address-level2" required /></label>
          <label className="wide"><span>What are you actually thinking about? <small>Optional</small></span><textarea name="whatCanYouShare" rows={7} /></label>
          <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <div className="form-end">
            <p>Received privately by Caelverum Private Office.</p>
            <button type="submit" disabled={sending}>{sending ? 'LEAVING CALLING CARD…' : 'LEAVE CALLING CARD →'}</button>
            <output aria-live="polite">{error}</output>
          </div>
        </form>
      </section>

      <section className="my-world" aria-label="Things I’ve created and explored">
        <p>IF YOU’RE CURIOUS…</p>
        <div className="future-portals" aria-hidden="true"><span /><span /><span /></div>
      </section>
    </main>
  );
}
