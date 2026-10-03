const lenses = [
  { label: 'Transformative Design', subtitle: 'The mechanics beneath creating change. 2008.', href: 'https://transformative-design.vercel.app' },
  { label: 'Cognitive Clarity', subtitle: 'Protect your mind from sophisticated cognitive warfare.', href: 'https://cognitiveclarity.vercel.app' },
  { label: 'Truth vs Facts', subtitle: 'When the facts are right, but omission and rearrangement change the picture.', href: 'https://truthvsfacts.vercel.app' },
  { label: 'Economic Clarity', subtitle: 'Silent leverage. Underlying elite incentives.', href: 'https://economicclarity.vercel.app' },
  { label: 'Music Secret Science', subtitle: 'Understanding the science of sound.', href: 'https://musicsecretscience.vercel.app' },
];

const creations = [
  { label: 'Double Dumplings', subtitle: 'The blind spot. When everything worked — except the problem still exists.', href: 'https://doubledumplings.vercel.app' },
  { label: 'Caelverum Pro-actives™', subtitle: 'Protecting productivity and rewarding effort.', href: 'https://caelverum-proactives.vercel.app' },
  { label: 'Sonic Remedy', subtitle: 'Intentional sound for shifting emotional states', href: 'https://sonicremedy.vercel.app' },
  { label: 'InLux Treasures', subtitle: 'A private collection of cultivated value.', href: 'https://inluxtreasures.com' },
];

type MindLink = { label: string; subtitle: string; href: string };

function MindRow({ item }: { item: MindLink }) {
  return (
    <a href={item.href} target="_blank" rel="noreferrer">
      <span className="mind-copy">
        <span className="mind-title">{item.label}</span>
        <span className="mind-subtitle">{item.subtitle}</span>
      </span>
      <span className="mind-arrow" aria-hidden="true">↗︎</span>
    </a>
  );
}

function MindGroup({ title, items }: { title: string; items: MindLink[] }) {
  return (
    <div className="directory-group">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.label}><MindRow item={item} /></li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="poster" aria-label="Soozhee — pleased to meet you">
        <img className="poster-art" src="/soozhee-poster.png" alt="Soozhee — For things worth thinking about properly. Pleased to meet you." />
        <a className="poster-scroll-link" href="#thought" aria-label="Continue to the thought" />
      </section>

      <article id="thought" className="thought" aria-labelledby="thought-title">
        <p className="eyebrow">A THOUGHT</p>
        <h2 id="thought-title">You know how sometimes a <span>$700M DECISION</span> can become a pretty expensive <span>PROBLEM?</span></h2>
        <div className="thought-body">
          <p>Alarm bells ring. Power plays trigger. Snakes and rats unite.</p>
          <p>Consultants sing. Personnel scream. Teams are appointed.</p>
          <p>Then come the reports, projections and recommendations.</p>
          <p className="line-group">Expand into new markets.<br />Create another product line.<br />Build another facility.<br />Spend more on advertising.</p>
          <p>Everyone has a solution. Yay.</p>
          <p>And eventually, someone has to make the decision.</p>
          <p>A lot of money, time and other people’s lives can go into getting it right.</p>
          <p>Not everyone will share the responsibility.</p>
          <p>So here’s the bit that interests me:</p>
          <p className="major-question">What if everyone does their job?</p>
          <p className="line-group">The reports are excellent.<br />The strategy is approved.<br />The money is spent.<br />The plan is executed.</p>
          <p className="major-question">And the problem is still there?</p>
          <p>What does that cost next?</p>
          <p className="major-question short">Another $700m?</p>
          <p>Or is there a hidden layer of the problem worth reaching before deciding what fixing it should actually cost?</p>
          <p>That’s the part I tend to fixate on.</p>
          <p>Because if everything had worked as planned, there’d be very little reason for me to be here.</p>
        </div>
      </article>

      <section className="directory" aria-label="Where my mind goes">
        <h2 className="directory-lead">WHERE MY MIND GOES</h2>
        <MindGroup title="Lens" items={lenses} />
        <MindGroup title="Creations" items={creations} />
      </section>

      <section className="contact-strip" aria-label="Contact">
        <div className="contact-links">
          <a href="https://www.instagram.com/soozhee/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗︎</span></a>
          <a href="https://doubledumplings.vercel.app/#calling-card" target="_blank" rel="noreferrer">Double Dumplings — Leave your calling card <span aria-hidden="true">↗︎</span></a>
        </div>
      </section>

      <footer className="site-footer"><span>SOOZHEE</span></footer>
    </main>
  );
}
