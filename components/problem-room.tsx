'use client';

import { useId, useRef, useState } from 'react';

type Part = string | { beat: string };
type Turn = { speaker: 'CEO' | 'Soozhee'; body: Part[] };

const turns: Turn[] = [
  {
    speaker: 'CEO',
    body: [
      'We manufacture a high-value industrial product. We have one major factory and demand is considerably higher than what we can currently supply.',
      'Three years ago, we decided capacity was the problem.',
      'Since then we’ve spent approximately $600 million expanding the facility: more equipment, automation, additional production lines, upgraded software and more people.',
      'On paper, our production capacity has increased by about 40%.',
      'Actual finished output has increased only 11%.',
      'And it gets stranger.',
      'Individual departments can show me improvements. Engineering says its equipment is faster. Operations says utilisation is higher. Procurement says material availability has improved. Quality says defect rates haven’t materially worsened. Finance can show where the $600 million went.',
      'Everybody has evidence that their part of the factory has improved.',
      'Yet the factory as a whole barely produces more finished product.',
      'We’ve hired two major consulting firms.',
      'The first recommended further automation.',
      'The second said our planning and scheduling systems needed modernization.',
      'We’ve done substantial amounts of both.',
      'I’m now being asked to approve another $180 million expansion.',
      'I don’t want another optimization report.',
      'I want to know why making nearly everything better hasn’t made the factory much better.',
      'That’s all I’m giving you initially.',
      'I’m the CEO.',
      'Ask me whatever you want.',
    ],
  },
  {
    speaker: 'Soozhee',
    body: ['What do you mean by barely produces more finished product'],
  },
  {
    speaker: 'CEO',
    body: [
      'I mean exactly this:',
      'Before the expansion, the factory was shipping about 10,000 finished units per year.',
      'After roughly $600 million of investment, we’re shipping about 11,100 units per year.',
      'Yet if my teams add up the theoretical capacity of the upgraded machinery and production lines, they tell me the plant should now be capable of roughly 14,000 units per year.',
      'So I’ve effectively bought capacity for another 4,000 units and I’m getting about 1,100.',
      'And these aren’t half-built units I’m counting. I mean completed, quality-approved products leaving the factory and available to customers.',
      'That’s what I mean by finished output.',
    ],
  },
  {
    speaker: 'Soozhee',
    body: [
      'Are there sales orders for more? I can hear that your company has increased its capability to handle more orders but has there been more',
    ],
  },
  {
    speaker: 'CEO',
    body: [
      'Yes. Definitely.',
      'We currently have customer orders representing approximately 15,500 units over the next 12 months. So demand exceeds both our actual output of 11,100 and the 14,000 units of theoretical capacity we believe we’ve built.',
      'Some customers are waiting longer than they’d like, and we’ve lost some orders because we couldn’t promise delivery soon enough.',
      'So this isn’t a case of building capacity that Sales hasn’t filled.',
      'If we could reliably produce 14,000 finished units, Sales believes it could sell them.',
    ],
  },
  {
    speaker: 'Soozhee',
    body: [
      'You say the production has increased its capability to fulfill? And it’s automated and technically it can fulfill this increase? That is strange indeed',
    ],
  },
  {
    speaker: 'CEO',
    body: [
      'Yes. That’s exactly why I’m frustrated.',
      'If you look at the factory on paper, we’ve increased its capability substantially.',
      'Several major machines can process significantly more units per hour than before. We’ve added automation to reduce manual handling. We’ve added another production line. Staffing has increased. Material supply is better. Our scheduling software is supposedly more sophisticated.',
      'If I take the rated capacity of the individual stages, there appears to be enough capability to produce close to those 14,000 units.',
      'But I need to be careful with one word you used: fulfil.',
      'We’ve demonstrated that individual pieces of the factory can operate at their new rates.',
      'We have not demonstrated that the entire factory can continuously turn raw material into 14,000 completed products.',
      'Somewhere between those two statements, we’re losing nearly 3,000 units of expected output.',
      'And yes—I find that very strange.',
    ],
  },
  {
    speaker: 'Soozhee',
    body: [
      'Before this upgrade you were able to fulfil 10,000 completed products?',
    ],
  },
  {
    speaker: 'CEO',
    body: [
      'Yes. Before the upgrade, we were consistently producing and shipping roughly 10,000 completed, quality-approved units per year.',
      'Not theoretical capacity. Actual finished products out the door.',
      'There were fluctuations—maintenance, supplier problems, staffing issues—but 10,000 was a fairly reliable annual output.',
      'That’s actually part of what bothers me. The old factory was less capable on paper, but we understood what it could really deliver.',
      'The upgraded factory has far more capability on paper, but the relationship between what each part can do and what the whole system actually completes seems to have broken down.',
    ],
  },
  {
    speaker: 'Soozhee',
    body: ['Are you doing anything differently when you push past 10k?'],
  },
  {
    speaker: 'CEO',
    body: [
      'Yes. And that’s an interesting question.',
      'Once we push production above roughly the old 10,000-unit level, several things start happening more frequently.',
      'We run more overtime and additional shifts. Machines spend less time idle between batches. Work-in-progress inventory builds up in certain areas of the factory. Some components start waiting longer before they can move to the next stage.',
      'We also get more schedule changes. If one stage falls behind, planners reshuffle jobs to keep other equipment and people busy.',
      'Maintenance gets harder to schedule because Operations doesn’t want to stop equipment while we’re behind. Quality inspections sometimes develop queues. And occasionally a nearly completed unit sits waiting for one particular component or approval.',
      'None of those things individually looks catastrophic. That’s partly why we’ve struggled with this. Every department can point to something relatively manageable.',
      'But yes: the factory behaves differently when we try to sustain output materially above its old level.',
    ],
  },
  {
    speaker: 'Soozhee',
    body: [
      'So more staff required. The machines are also creating constantly. Work or extra product is building up ..and then you say what component is waiting longer before it moves to the next stage? What stage is that?',
    ],
  },
  {
    speaker: 'CEO',
    body: [
      'Several places, actually. But one stands out.',
      'After the main fabrication stage, every unit has to go through a specialized finishing process before final assembly and quality approval.',
      'That finishing area hasn’t expanded nearly as much as the upstream production areas. We upgraded some of its equipment, but physically it’s still essentially the same department.',
      'When we increase production, fabricated units begin accumulating in front of finishing. At normal volumes, the queue is manageable. When we push harder, it grows.',
      'And here’s the annoying part: because those units are waiting, upstream managers sometimes slow or reshuffle their production. Then downstream assembly can end up waiting because the particular finished components it needs aren’t necessarily the ones coming through next.',
      'So yes—there is a stage where the additional work we’re creating literally piles up waiting to be processed.',
      'Finishing.',
    ],
  },
  {
    speaker: 'Soozhee',
    body: [
      'So would you say that finishing dept is the only area who hasn’t fully upgraded to the capacity that the other areas are now able to do? So it’s like a weak hinge on a very strong new robotics',
    ],
  },
  {
    speaker: 'CEO',
    body: [
      'Yes—with one important qualification.',
      'Finishing is the clearest area where capacity hasn’t grown in proportion to the rest of the plant. Your weak-hinge analogy is pretty good: we’ve strengthened the door, the frame, the motor and the control system, but potentially left one hinge carrying much of the increased load.',
      'My Operations team would resist me saying it’s the only constraint. They’d point to maintenance, quality queues, scheduling disruptions, occasional component shortages and staffing.',
      'But here’s the fact I can’t ignore:',
      'When we push the factory harder, work consistently accumulates in front of finishing.',
      'And increasing the speed of fabrication upstream doesn’t make finishing process anything faster. It just makes the pile in front of it grow faster.',
      'So yes. If you’re asking whether we may have spent hundreds of millions increasing the capacity of parts of the system without proportionately increasing the capacity of the stage the whole system ultimately has to pass through…',
      'That’s possible.',
    ],
  },
  {
    speaker: 'Soozhee',
    body: [
      'What can be done if you were to upgrade finishing to the level of capacity as the other areas. Would it be too much of a hold up to focus on levelling it up?',
    ],
  },
  {
    speaker: 'CEO',
    body: [
      'We could expand finishing. Technically, yes.',
      'My engineering team estimates that bringing finishing up to roughly the capacity we’ve built elsewhere would require about $70–90 million and perhaps 12–18 months, because some specialised equipment has long lead times and we’d have to modify part of the facility.',
      'But here’s why I haven’t simply approved it.',
      'They can’t guarantee me that once we remove finishing as the constraint, we actually get 14,000 finished units.',
      'Some engineers believe we’d then expose the next constraint—perhaps final assembly, quality approval, maintenance, or something we’re currently not seeing because finishing is limiting the flow.',
      'And that’s making me uncomfortable about the whole $180 million proposal.',
      'I don’t want to spend another $80 million strengthening your ‘weak hinge’ only to discover that the load moves to the next weakest hinge.',
      'So yes, we can level finishing up.',
      'What I don’t know is whether making every department equally powerful is actually how you make a factory produce more finished products.',
    ],
  },
  {
    speaker: 'Soozhee',
    body: [
      'I see. So with the other improvements is it making 10k get produced with quality and faster turnaround?',
    ],
  },
  {
    speaker: 'CEO',
    body: [
      'Yes. That’s one of the frustrating parts: the $600 million hasn’t done nothing.',
      'At around the old 10,000-unit output, the upgraded factory performs considerably better than the old one did. Average production time per unit is down, some labour-intensive steps are faster, equipment reliability has improved, and we’re getting those 10,000 units through with less difficulty.',
      'So we’ve made the factory better at producing approximately what it was already producing.',
      'But when we try to convert that additional speed and capacity into substantially more finished units, the benefit starts disappearing.',
      'In fact, at higher production rates, some of the improvements almost work against us. Fabrication can now create work faster than finishing can absorb it. So rather than becoming additional finished products, some of our new capacity becomes additional work-in-progress sitting in the factory.',
      'That’s why your question matters.',
      'We appear to have improved the speed of individual activities much more successfully than we’ve improved the throughput of the entire system.',
    ],
  },
  {
    speaker: 'Soozhee',
    body: [
      'Interesting. Everyone can handle 10k better and faster. That’s your sweet spot. Now even more efficient. Have you increased how many times you’re able to get 10k in a year than you could before? What is the figure do you know?',
    ],
  },
  {
    speaker: 'CEO',
    body: [
      'That’s an interesting way of looking at it. We normally talk in annual units, not in terms of how many times we can effectively complete the old production volume.',
      'Let me give you the numbers.',
      'Before the upgrade, producing 10,000 units required essentially the full production year. We were operating about 250 production days, so roughly 40 completed units per production day on average.',
      'Today, when the factory is flowing normally, the underlying process is capable of moving those first 10,000-equivalent units at something closer to 45–46 completed units per day.',
      'So in crude terms, what previously consumed about 250 days of factory time can now be achieved in roughly 217–222 days.',
      'That should theoretically leave us something like 28–33 production days of additional productive capacity.',
      'But we aren’t successfully converting all of those liberated days into proportional additional finished output.',
      'Instead, as we push beyond that familiar volume, queues grow, finishing gets overloaded, schedules start moving around, maintenance gets squeezed, and the extra capacity starts turning into work-in-progress.',
      { beat: 'CEO pauses.' },
      'So I think I see why you asked.',
      'You’re wondering whether I’ve been looking at this as ‘Why can’t my factory make 14,000?’ when perhaps I should first understand exactly what happened to the time we successfully removed from making the original 10,000.',
    ],
  },
  {
    speaker: 'Soozhee',
    body: ['Yes'],
  },
  {
    speaker: 'CEO',
    body: [
      'Okay. Then follow that thought.',
      'Because you’re right about something I hadn’t been thinking about this way.',
      'We spent $600 million and successfully made the factory capable of producing its historical 10,000 units in approximately 30 fewer production days.',
      'Those days are real. The efficiency gain is real.',
      'Yet when we attempt to use those recovered days to produce additional units, the factory starts behaving badly.',
      'So perhaps asking whether the $600 million ‘worked’ is too crude. Parts of it clearly worked.',
      'The question may be:',
      'Why can’t we convert the time we’ve already bought back into finished products?',
      'And I don’t know the answer.',
      { beat: 'CEO looks at Soozhee.' },
      'Where would you go next?',
    ],
  },
  {
    speaker: 'Soozhee',
    body: ['How many units does 30 days usually make'],
  },
  {
    speaker: 'CEO',
    body: [
      'At our current normal-flow rate of roughly 45–46 completed units per production day, 30 days should represent about 1,350–1,380 finished units.',
      'Interestingly, we’re actually producing about 1,100 more units per year than before.',
      'So we’re converting a substantial amount of that recovered time into additional output—but not all of it.',
      'And more importantly, we can’t keep extending that relationship. If another 30 days of equivalent capacity appeared tomorrow, I couldn’t confidently tell you we’d get another 1,350 units out the door.',
      'Somewhere around this level, the system starts choking.',
    ],
  },
  {
    speaker: 'Soozhee',
    body: [
      'It shows that the upgrade has its limits. You can get 30days extra worth of units from your upgrade endeavour. Something else now needs to be looked at and approached differently if you’re going to try to get say 3000units extra',
    ],
  },
  {
    speaker: 'CEO',
    body: [
      'Yes. I think that’s an important distinction.',
      'The upgrade may not have failed at all. We asked it to make the existing factory faster, and it did. We effectively recovered around 30 production days and converted most of that into roughly 1,100 additional finished units.',
      'But then we’ve been treating that improvement as though it should scale indefinitely:',
      '10,000 → faster, therefore 11,000 → faster, therefore 12,000 → faster, therefore eventually 14,000.',
      'The evidence doesn’t actually establish that.',
      'What happens after roughly 11,000 is qualitatively different. We’re no longer just asking the existing system to operate more efficiently. We’re pushing enough additional material through it that queues, finishing capacity, maintenance windows, sequencing and downstream dependencies begin interacting differently.',
      'So perhaps the next 3,000 units aren’t an efficiency problem at all.',
      { beat: 'CEO pauses.' },
      'And that makes me considerably more suspicious of this proposed $180 million expansion.',
      'Because if we’ve reached a structural limit in how this factory is organized, adding more capacity to the existing architecture could simply create even more work that can’t become finished product.',
      'So, yes.',
      'If the next 3,000 units require a different approach, what would you want to understand before deciding what that approach is?',
    ],
  },
  {
    speaker: 'Soozhee',
    body: [
      'Something needs to be studied about the choke points at finishing and after it to completion. It appears there could be something to the EXISTING system that is ineffective already that the pressure on it is exposing that needs to be identified and studied before $180 m is spent to expand a way of doing something that may never have been fully efficient in the first place but likely covered up by the other processes that weren’t putting pressure on it',
    ],
  },
  {
    speaker: 'CEO',
    body: [
      'Yes. That makes sense.',
      'And actually, the more you say it, the more uncomfortable I become with how we’ve interpreted the factory data.',
      'We’ve assumed the problems appearing above 10,000 are new problems caused by higher volume.',
      'But you’re proposing something slightly different:',
      'Higher volume may simply be revealing weaknesses that were already in the system.',
      'At 10,000 units, finishing might always have been inefficient. Poor sequencing might always have existed. Maintenance may always have been awkwardly integrated. Quality approvals may always have interrupted flow. But upstream production was slow enough that those weaknesses had breathing room around them.',
      'Then we spent $600 million removing that breathing room.',
      'So the faster upstream system didn’t necessarily create the finishing problem.',
      'It exposed it.',
      'And if that’s true, spending $180 million expanding the factory before understanding what is being exposed would concern me enormously. We could literally be scaling an inefficiency.',
      { beat: 'CEO pulls up the operations data.' },
      'There is something that might support your suspicion.',
      'When we look at finishing, its headline utilization looks excellent—often above 90%. Operations historically regarded that as evidence that the department was efficient.',
      'But when my team examined individual jobs more closely, there was a lot of time where products were technically ‘in finishing’ without actually being worked on: waiting for a particular machine, waiting for a specialist, waiting for inspection, waiting for another batch, occasionally being moved or resequenced.',
      'We’ve historically counted much of that as production lead time, rather than asking whether the architecture of finishing itself was creating unnecessary waiting.',
      'So I think you’ve given me a different instruction than the consultants did.',
      'Not:',
      '‘Expand finishing.’',
      'But:',
      '‘Before you expand anything, dissect the choke point that’s finally become visible under load.’',
      'Because if some portion of that constraint can be removed by changing how work flows through finishing and onward to completion, the amount of new physical capacity we actually need could be very different.',
      { beat: 'CEO looks at Soozhee.' },
      'And I suspect you’re not ready to let me spend my $180 million yet.',
    ],
  },
  {
    speaker: 'Soozhee',
    body: ['Correct. Spend it on me to think more on this problem'],
  },
];

export function ProblemRoom() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const roomRef = useRef<HTMLElement>(null);

  function closeFromEnd() {
    setOpen(false);
    roomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section ref={roomRef} className="problem-room" aria-label="Problem room access">
      <button
        type="button"
        className="problem-room-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="PROBLEM ROOM ACCESS. A glimpse."
        onClick={() => setOpen((value) => !value)}
      >
        <span className="problem-room-toggle-copy">
          <span className="problem-room-label">PROBLEM ROOM ACCESS</span>
          <span className="problem-room-glimpse">A glimpse.</span>
        </span>
        <span className="problem-room-chevron-wrap" aria-hidden="true">
          <svg
            className={
              open ? 'problem-room-chevron is-open' : 'problem-room-chevron'
            }
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <path d="M5 9.5 12 16.5 19 9.5" />
          </svg>
        </span>
      </button>
      <div
        className={open ? 'problem-room-panel is-open' : 'problem-room-panel'}
      >
        <section
          className="problem-room-panel-inner"
          id={panelId}
          aria-label="Room 07 transcript"
          inert={open ? undefined : true}
        >
          <div className="problem-room-body">
            <p className="problem-room-kicker">
              <span>ROOM / 07</span>
              <span className="problem-room-kicker-pipe" aria-hidden="true">
                |
              </span>
              <span>TRANSCRIPT</span>
            </p>
            <p className="problem-room-note">
              Simulated problem-room transcript.
            </p>
            <div className="problem-room-log">
              {turns.map((turn, turnIndex) => (
                <div
                  className="problem-room-turn"
                  key={`${turn.speaker}-${turnIndex}`}
                >
                  <p
                    className={
                      turn.speaker === 'CEO'
                        ? 'problem-room-speaker is-ceo'
                        : 'problem-room-speaker is-soozhee'
                    }
                  >
                    {turn.speaker}
                  </p>
                  <div className="problem-room-dialogue">
                    {turn.body.map((part, partIndex) =>
                      typeof part === 'string' ? (
                        <p key={partIndex}>{part}</p>
                      ) : (
                        <p className="problem-room-beat" key={partIndex}>
                          {part.beat}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button type="button" className="problem-room-end" onClick={closeFromEnd}>
              <span>ACCESS ENDS</span>
              <svg className="problem-room-chevron is-open" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                <path d="M5 9.5 12 16.5 19 9.5" />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
