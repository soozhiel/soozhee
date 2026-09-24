import Image from 'next/image';
import Link from 'next/link';

const projects = [
  { name: 'DOUBLE DUMPLINGS', description: 'Independent thinking for consequential decisions.', image: '/projects/double-dumplings.png', href: 'https://doubledumplings.vercel.app' },
  { name: 'SONIC REMEDY', description: 'Sound for clarity, focus and a more human future.', image: '/projects/sonic-remedy.png', href: 'https://sonicremedy.vercel.app' },
  { name: 'TRANSFORMATIVE DESIGN', description: 'From insight to what exists.', image: '/projects/transformative-design.png', href: null },
  { name: 'CAELVERUM PRO-ACTIVES™', description: 'Ideas in motion.', image: '/projects/caelverum-pro-actives.png', href: null },
  { name: 'CAELVERUM ARCHIVES', description: 'Preserve what matters.', image: '/projects/caelverum-archives.png', href: null },
  { name: 'CAELVERUM SONIC LABS', description: 'Research, experimentation and sonic futures.', image: '/projects/caelverum-sonic-labs.png', href: null },
  { name: 'INLUX TREASURES', description: 'A curation of what endures.', image: '/projects/inlux-treasures.png', href: null },
  { name: 'YUULILSHIII', description: 'Objects, expressions and worlds of their own.', image: '/projects/yuulilshiii.png', href: null },
  { name: 'TRUTH VS FACTS', description: 'Different perspectives. A clearer view.', image: '/projects/truth-vs-facts.png', href: null },
  { name: 'COGNITIVE CLARITY', description: 'Clearer thinking for a more complex world.', image: '/projects/cognitive-clarity.png', href: null },
  { name: 'MUSIC SECRET SCIENCE', description: 'Exploring the interface between sound, mind and reality.', image: '/projects/music-secret-science.png', href: 'https://musicsecretscience.vercel.app' },
  { name: 'SIMULATIONS', description: 'Real problems. Real thinking. A safer place to test what if.', image: '/projects/simulations.png', href: null },
];

function ProjectEntry({ project }: { project: (typeof projects)[number] }) {
  const content = <><span className="project-visual"><Image src={project.image} alt="" width={420} height={420} sizes="(max-width: 720px) 29vw, 20vw" /></span><span className="project-copy"><strong>{project.name}</strong><span>{project.description}</span></span><span className="project-arrow" aria-hidden="true">→</span></>;
  return project.href
    ? <a className="project-entry" href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.name}: ${project.description}`}>{content}</a>
    : <div className="project-entry is-pending" aria-label={`${project.name}: link to be confirmed`}>{content}</div>;
}

export default function Home() {
  return (
    <main>
      <section className="poster" aria-label="Soozhee — pleased to meet you">
        <div className="poster-title"><h1>SOOZHEE</h1><p>FOR THINGS WORTH THINKING ABOUT PROPERLY.</p></div>
        <div className="horizon" aria-hidden="true"><img src="/soozhee-poster.png" alt="" /></div>
        <div className="poster-greeting"><h2>PLEASED TO MEET YOU.</h2><p><em>Not really sure if the feeling will be mutual.</em><br /><em>Let’s try it out and see what lands with you too.</em></p><span>— SOOZHEE</span></div>
        <a className="scroll-cue" href="#thought" aria-label="Continue to the thought"><span /></a>
      </section>

      <section id="thought" className="thought-preview" aria-labelledby="thought-title">
        <div className="thought-heading">
          <p className="eyebrow">A THOUGHT</p>
          <h2 id="thought-title">WHAT IF THE $700M DECISION ISN’T THE PROBLEM?</h2>
          <p className="thought-question">What if the solution isn’t where you’ve decided to look for it?</p>
        </div>
        <div className="thought-excerpt">
          <p>It started from a place of love.</p>
          <p>Two people deciding to have each other’s backs. Then come the inherited beliefs about what each should and shouldn’t do. The unwritten contracts neither remembers signing. The expectation that someone who loves you should somehow know what you haven’t said.</p>
          <p>Two different histories. Different lenses. Different experiences, pains and fears.</p>
          <p>Love can be completely genuine and still buckle under communication that can’t survive an uncomfortable truth.</p>
          <Link className="text-link" href="/thoughts/700m-decision">READ THE THOUGHT →</Link>
        </div>
      </section>

      <section className="projects" aria-labelledby="projects-title">
        <h2 id="projects-title">WHERE SOME PROBLEMS LED.</h2>
        <div className="project-grid">{projects.map((project) => <ProjectEntry project={project} key={project.name} />)}</div>
      </section>

      <footer className="site-footer"><span>SOOZHEE</span><i aria-hidden="true" /><span>INDEPENDENT · CONFIDENTIAL · GLOBAL</span></footer>
    </main>
  );
}
