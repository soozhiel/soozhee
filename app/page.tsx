const works = [
  { label: 'Double Dumplings', href: 'https://doubledumplings.vercel.app' },
  { label: 'Sonic Remedy', href: 'https://sonicremedy.vercel.app' },
  { label: 'Transformative Design', href: 'https://soozhee.com/transformative-design' },
  {
    label: 'Caelverum Pro-actives™',
    href: 'https://caelverum-proactives.vercel.app',
    children: [
      { label: 'Candidates', href: 'https://caelverum-proactives.vercel.app/candidates' },
      { label: 'Sponsors', href: 'https://caelverum-proactives.vercel.app/sponsors' },
      { label: 'Government', href: 'https://caelverum-proactives.vercel.app/government' },
    ],
  },
  { label: 'Caelverum Archives', href: 'https://caelverum-archives.vercel.app' },
  { label: 'InLux Treasures', href: 'https://inluxtreasures.com' },
];

const thoughts = [
  { label: 'Cognitive Clarity', href: 'https://cognitiveclarity.vercel.app' },
  { label: 'Economic Clarity', href: 'https://economicclarity.vercel.app' },
  { label: 'Truth VS Facts', href: 'https://truthvsfacts.vercel.app' },
  { label: 'Music Secret Science', href: 'https://musicsecretscience.vercel.app' },
];

type IndexLink = { label: string; href: string };

function DirectoryLink({ item }: { item: IndexLink }) {
  return (
    <a href={item.href} target="_blank" rel="noreferrer">
      <span>{item.label}</span><span aria-hidden="true">↗</span>
    </a>
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

      <section className="directory" aria-label="Soozhee directory">
        <div className="directory-column works-column">
          <h2>WORKS</h2>
          <ul>
            {works.map((item) => (
              <li key={item.label}>
                <DirectoryLink item={item} />
                {item.children && (
                  <ul className="directory-children">
                    {item.children.map((child) => <li key={child.label}><DirectoryLink item={child} /></li>)}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="directory-column">
          <h2>THOUGHTS</h2>
          <ul>{thoughts.map((item) => <li key={item.label}><DirectoryLink item={item} /></li>)}</ul>
        </div>
      </section>

      <section className="contact-strip" aria-labelledby="contact-title">
        <h2 id="contact-title">CONTACT</h2>
        <div className="contact-links">
          <a href="https://www.instagram.com/soozhee/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
          <a href="https://doubledumplings.vercel.app/#calling-card" target="_blank" rel="noreferrer">Double Dumplings — Leave your calling card <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer className="site-footer"><span>SOOZHEE</span><i aria-hidden="true" /><span>INDEPENDENT · CONFIDENTIAL · GLOBAL</span></footer>
    </main>
  );
}
