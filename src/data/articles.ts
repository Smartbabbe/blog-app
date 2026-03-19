import { Article } from "../types";

const authors = {
  alex: {
    name: "Alex Chen",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    role: "Tech Editor",
    bio: "Alex covers emerging technologies and their impact on society. Previously at Wired and The Verge.",
  },
  sarah: {
    name: "Sarah Okafor",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80",
    role: "Culture Writer",
    bio: "Sarah writes about the intersection of culture, identity, and the modern world. Based in Lagos.",
  },
  james: {
    name: "James Park",
    avatar:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=100&q=80",
    role: "Business Correspondent",
    bio: "James reports on global markets, startups, and the future of work. Former analyst at Goldman Sachs.",
  },
  maya: {
    name: "Maya Patel",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&q=80",
    role: "Design Editor",
    bio: "Maya explores the principles of design and how they shape our daily experiences.",
  },
  tom: {
    name: "Tom Rivera",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    role: "Science Writer",
    bio: "Tom translates complex scientific discoveries into stories anyone can understand.",
  },
};

export const articles: Article[] = [
  {
    id: 1,
    title: "The Quiet Revolution Happening Inside Your Pocket",
    excerpt:
      "Smartphones have fundamentally reshaped human attention — and nobody noticed until it was too late. A deep dive into what we've lost and what we might reclaim.",
    content: `The average person checks their phone 96 times a day. That's once every ten minutes of waking life. Yet when asked, most people estimate closer to 30. The gap between what we do and what we believe we do is one of the defining psychological puzzles of our era.

This isn't a story about screen time. It's a story about attention — the most finite resource we have — and how it quietly became the primary commodity of the 21st century.

## The Architecture of Distraction

Every notification is a small act of violence against whatever you were doing before it arrived. Not metaphorically — neuroscientists have shown that the cost of an interruption extends far beyond the seconds it takes to glance at a ping. The cognitive residue of a notification can linger for up to 23 minutes, fragmenting the deep work that produces most of our meaningful output.

The companies that build these devices know this. The internal teams responsible for notification systems at major platforms operate with the same behavioural data that casinos use to design slot machines. Pull-to-refresh was deliberately modelled on the variable reward mechanisms that make gambling addictive.

## What We're Actually Losing

The research on what distraction costs us is unambiguous and alarming. Deep reading — the kind that builds empathy, complex reasoning, and nuanced understanding — requires sustained attention. It cannot be done in fragments. A study from UC San Diego found that the average American's daily media consumption has increased from 7.4 hours in 1980 to 13.6 hours today, but the quality and depth of that consumption has degraded sharply.

We are reading more but comprehending less. Consuming more but retaining less. Connecting more but relating less.

## The Reclamation

The good news is that attention, unlike time, is renewable. Cognitive scientists studying the attention economy have found that structured periods of deliberate disconnection — they call it "attentional restoration" — can meaningfully reverse the fragmentation that constant connectivity produces.

This isn't a call to abandon your phone. It's an invitation to use it with the same intentionality we apply to other powerful tools. The smartphone revolution happened to us. The question now is whether we can happen back.`,
    author: authors.alex,
    category: "Technology",
    tags: ["Attention", "Smartphones", "Psychology"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    publishedAt: "2025-04-08",
    readTime: 7,
    featured: true,
    trending: true,
  },
  {
    id: 2,
    title: "Why Every Designer Should Learn to Say No",
    excerpt:
      "The most powerful tool in a designer's toolkit isn't Figma or Photoshop — it's the ability to push back with clarity and confidence.",
    content: `Design schools teach you to make things. They rarely teach you to stop making things that shouldn't be made.

The result is a profession full of talented people who spend their careers executing briefs they know are wrong, producing interfaces they know confuse users, and shipping products they know will be abandoned. Not from a lack of skill. From a lack of permission — or the courage — to say no.

## The Compliant Designer Problem

There's a particular kind of designer that every product team loves to hire and every user ends up suffering from: the compliant designer. They're fast, they're skilled, they hit every deadline, and they never push back on a bad brief. They are, in the language of corporate performance reviews, "low maintenance."

They are also, in the language of the products they ship, a disaster.

## What No Actually Means

Saying no in design doesn't mean refusing to work. It means refusing to work on the wrong thing. It means coming to a stakeholder meeting not just with a solution, but with a diagnosis. The brief says "make the button bigger." The diagnosis might reveal that the button's size is irrelevant — users aren't clicking it because they don't trust the page.

The best designers I've worked with treat every brief as a hypothesis to be tested, not a command to be executed.

## Building the Muscle

Saying no is a skill, and like every skill, it improves with practice and atrophies without it. Start small. Push back on one brief this week with data rather than opinion. Frame your no as a better yes — not "we shouldn't do this" but "here's what would actually solve the problem."

The clients worth keeping will thank you. The ones who don't are teaching you something important about the work you're taking on.`,
    author: authors.maya,
    category: "Design",
    tags: ["Design", "Career", "Craft"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    publishedAt: "2025-04-06",
    readTime: 5,
    featured: true,
  },
  {
    id: 3,
    title: "Africa's Startup Ecosystem Is Not What You Think It Is",
    excerpt:
      "The narrative around African tech has been flattened into a single story of leapfrogging and mobile money. The reality is far more interesting.",
    content: `When Western investors talk about African tech, they tend to reach for the same four words: mobile money, leapfrogging, underserved, potential. These words are not wrong. They are simply not enough.

The African startup ecosystem in 2025 is not a single thing. It is Lagos and Nairobi and Cairo and Accra, each with distinct capital environments, regulatory landscapes, talent pools, and consumer behaviours. Treating them as interchangeable is the equivalent of treating Berlin, Warsaw, Lisbon, and Stockholm as a single market because they share a continent.

## The Funding Story Nobody Tells

African startups raised $4.8 billion in 2024 — a figure that sounds impressive until you contextualise it. Southeast Asia, with roughly comparable GDP, raised $14.2 billion. The gap is not explained by a lack of fundable companies. It is explained by a lack of locally domiciled capital and the structural friction that forces promising startups to incorporate abroad to access foreign investment.

The most consequential development in African tech right now is not any individual startup. It is the slow, painful, necessary process of building the infrastructure for local institutional capital — pension funds, endowments, family offices — to invest in the ecosystem that surrounds them.

## What the Next Decade Looks Like

The founders building in Africa today are doing something that their counterparts in more mature ecosystems rarely have to do: they are building the pick-and-shovels alongside the gold rush. Payments infrastructure, logistics rails, healthcare data systems — these are the unsexy businesses that make every other business possible, and they are being built right now by people who have no choice but to build them.

That is not a disadvantage. It is a generational opportunity.`,
    author: authors.james,
    category: "Business",
    tags: ["Africa", "Startups", "Investment"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    publishedAt: "2025-04-04",
    readTime: 8,
    trending: true,
  },
  {
    id: 4,
    title: "The Language Models That Dream of Electric Sheep",
    excerpt:
      "Large language models don't understand language. They predict it. The distinction matters more than most people realise.",
    content: `Every few months, a new paper emerges claiming that a large language model has achieved some form of reasoning, or theory of mind, or emergent understanding. And every few months, a careful reading of the methodology reveals that what was actually demonstrated was something considerably more modest: the ability to pattern-match against training data in ways that superficially resemble reasoning.

This is not a minor distinction. It is the distinction between a system that can help you and a system that can fool you into thinking it can help you.

## The Stochastic Parrot Problem

The term "stochastic parrot," coined by researchers Emily Bender and Timnit Gebru, describes a system that assembles plausible-seeming sequences of words without any underlying understanding of what those words mean. The criticism was controversial when it was published. Three years later, it has aged remarkably well.

What LLMs are extraordinarily good at is producing text that sounds like the kind of text a knowledgeable person would produce. This is useful. It is not the same as knowledge.

## What This Means in Practice

The practical implications are significant and underappreciated. When an LLM confidently provides incorrect medical information, it is not malfunctioning. It is functioning exactly as designed — producing the next most likely token given the context. The confidence is a feature, not a bug, and it is a feature that can harm people who mistake fluency for reliability.

The appropriate mental model is not "a slightly unreliable expert" but "a very articulate pattern-matcher with no ability to verify its own output." Both can be useful. Only one of them should be trusted without verification.`,
    author: authors.alex,
    category: "Technology",
    tags: ["AI", "Language Models", "Critical Thinking"],
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    publishedAt: "2025-04-02",
    readTime: 6,
    trending: true,
  },
  {
    id: 5,
    title: "What Solitude Actually Feels Like in 2025",
    excerpt:
      "Being alone and being lonely are not the same thing. But in the age of always-on connectivity, we've lost the ability to tell the difference.",
    content: `I spent three days alone in a house in the mountains last month. No meetings, no notifications, no obligations. Just me and the particular quality of silence that only exists far from roads and people.

By the end of the first afternoon, I was uncomfortable. By the end of the second day, I was calm in a way I hadn't been in years. By the end of the third day, I was reluctant to leave.

This arc — discomfort, then recalibration, then appreciation — is what the researchers call "solitude adjustment," and it is increasingly rare because we have engineered it out of our lives.

## The Connectivity Tax

Every device in our lives is designed to prevent the onset of solitude. The autoplay that queues the next video. The feed that never ends. The group chat that is always slightly illuminated with the possibility of something new. These are not neutral design choices. They are the product of deliberate engineering optimised for one metric: time in app.

The cost is paid in the currency of inner life. Boredom — genuine, productive, creative boredom — requires a mind with nothing to attend to. It is the precondition for daydreaming, for unexpected connection between unrelated ideas, for the kind of slow cognitive processing that produces insight rather than reaction.

## The Case for Chosen Solitude

The ancient traditions got something right that modern psychology is only now catching up with: the regular, deliberate practice of being alone with yourself is not self-indulgence. It is maintenance. It is the thing that makes you more present to everyone else in your life, not less.

You don't have to go to the mountains. But you might consider, occasionally, just sitting somewhere without your phone, without content, without company. See what happens. It will be uncomfortable first. That's the point.`,
    author: authors.sarah,
    category: "Culture",
    tags: ["Solitude", "Mental Health", "Modern Life"],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    publishedAt: "2025-03-30",
    readTime: 5,
  },
  {
    id: 6,
    title: "The Science of Why You Can't Stop Eating Ultraprocessed Food",
    excerpt:
      "It's not a lack of willpower. The food industry has spent decades reverse-engineering your brain's reward systems. Here's what they found.",
    content: `The term "ultraprocessed food" was coined in 2009 by Brazilian epidemiologist Carlos Monteiro, who needed a way to describe something his data kept showing: that certain foods seemed to cause overconsumption in ways that traditional nutrition metrics couldn't explain.

His NOVA classification system, now used by researchers globally, defines ultraprocessed foods not by their nutritional content but by their degree of industrial processing. The key marker is not fat, sugar, or salt in isolation — it's the combination of those elements with texture, colour, flavour, and mouthfeel that no naturally occurring food contains.

## The Bliss Point

Food scientists have a term for the precise combination of fat, sugar, and salt at which a food becomes maximally pleasurable: the bliss point. Finding it is not art. It is applied neuroscience.

When you consume a food engineered to hit your bliss point, your brain releases dopamine in patterns that closely resemble the response to certain drugs. The experience is not merely pleasurable — it is rewarding in the specific neurological sense that creates wanting, not just liking. You don't just enjoy the food. You are compelled toward it.

## What You Can Actually Do

The honest answer is that individual willpower is a poor weapon against industrial optimisation. The more effective interventions are environmental: if ultraprocessed food is not in your home, you will eat significantly less of it. This sounds obvious. It is also genuinely difficult in food environments designed to maximise its availability and visibility.

The beginning of resistance is understanding what you're resisting. This is not a failure of discipline. It is an encounter with one of the most sophisticated behaviour-modification technologies ever developed, deployed against you every time you eat.`,
    author: authors.tom,
    category: "Health",
    tags: ["Food Science", "Nutrition", "Behaviour"],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    publishedAt: "2025-03-28",
    readTime: 7,
  },
  {
    id: 7,
    title: "How Remote Work Changed the City",
    excerpt:
      "Three years after the great dispersal, the data is in. Some cities won. Most didn't. And the ones that won aren't who you'd expect.",
    content: `The remote work revolution was supposed to hollow out cities. The centre-city office towers would empty, the coffee shops would close, and people would flee to cheaper, greener places. This narrative was compelling, widely repeated, and substantially wrong.

What actually happened was more interesting and more unequal.

## The Sorting

Remote work didn't reduce demand for cities. It sorted that demand. Dense, expensive, amenity-rich cities became even more attractive to high earners who could now avoid the commute while retaining access to urban cultural life. Mid-tier cities that offered livability without the price premium of gateway cities — places like Raleigh, Edinburgh, and Medellín — captured a meaningful slice of mobile talent.

The cities that suffered were not the obvious candidates. It was not New York or London. It was mid-sized cities that had built their economies around a single employer or industry and suddenly lost the physical anchor that had tied workers to them.

## The Office Is Not Dead — It's Just Different

The most durable insight from the remote work experiment is that offices serve social and cultural functions that videoconferencing cannot replicate, but those functions don't require five days a week. The organisations that understood this earliest — that offices are for collision, not concentration — are the ones navigating the transition most successfully.

The city of the future is not the ghost town the pessimists predicted or the perfectly distributed post-geographic utopia the optimists hoped for. It is something messier and more interesting: a set of places competing, harder than ever, for the kind of life that can't be delivered to your door.`,
    author: authors.james,
    category: "Business",
    tags: ["Remote Work", "Cities", "Future of Work"],
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    publishedAt: "2025-03-25",
    readTime: 6,
  },
  {
    id: 8,
    title: "The Typeface That Changed How We Read the Web",
    excerpt:
      "For a decade, one font family quietly shaped how billions of people processed digital text. Then we all stopped using it at once.",
    content: `In 2007, Apple shipped a new sans-serif typeface as the system font for the iPhone. It was called Helvetica Neue, and for the next eight years, it was the default reading experience for an enormous fraction of the world's digital consumption.

Then, in 2015, Apple replaced it with San Francisco — their first custom typeface in a generation — and started a quiet arms race among tech companies to develop proprietary type systems that would define their visual identities at every scale.

## Why Type Matters More Than Anyone Admits

The choice of typeface is not an aesthetic decision. It is a cognitive one. The speed at which you can read and the accuracy with which you retain what you've read are materially affected by the letterforms your eyes encounter. This is not a minor effect. Studies in reading psychology suggest that optimal typography can improve reading comprehension by 20% compared to suboptimal choices.

The companies spending millions developing custom typefaces are not doing it for brand reasons alone. They are doing it because they understand that the quality of the reading experience directly affects user engagement, and engagement is the metric everything else derives from.

## The Democratisation of Type

The counterpoint to the era of corporate custom type is what's happened to the rest of the web. Services like Google Fonts have made thousands of high-quality typefaces freely available to anyone building anything on the internet. The quality floor for web typography has risen dramatically.

The result is a web that has never looked better and never been more typographically confused — because access to good tools is not the same as the knowledge to use them well. That knowledge is still distributed unevenly. But it is more available than it has ever been.`,
    author: authors.maya,
    category: "Design",
    tags: ["Typography", "Web Design", "History"],
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    publishedAt: "2025-03-22",
    readTime: 5,
  },
  {
    id: 9,
    title: "The Hidden Cost of Free Science",
    excerpt:
      "Open access publishing was supposed to democratise knowledge. Instead, it created a new set of gatekeepers — and new ways to pay.",
    content: `The promise of open access science was beautiful in its simplicity: research funded by public money should be freely available to the public. No paywalls. No institutional subscriptions. No knowledge locked behind prices that exclude the universities of the global south from the literature produced in the global north.

The reality has been considerably more complicated.

## The APC Problem

The dominant model for open access publishing is the Article Processing Charge: researchers pay a fee — typically between $1,500 and $12,000 — to make their work freely available. The result is a system that has shifted the financial burden without reducing it.

Well-funded researchers at wealthy institutions can easily afford APCs. Researchers at under-resourced institutions — which is to say, most of the world's researchers — often cannot. The promise of democratisation has produced, in practice, a publication system where the ability to be heard is still largely determined by the wealth of your institution.

## What Actually Works

The most successful open access initiatives have been the ones that operated outside the commercial publishing system entirely. arXiv, the preprint server that now hosts over two million papers in physics, mathematics, and related fields, operates on a budget that would barely cover the APCs for a few dozen papers in a commercial open access journal.

The lesson is not that open access is bad. It is that the mechanism matters as much as the principle. Making knowledge free requires more than changing who pays the bill. It requires redesigning the infrastructure that determines how science moves through the world.`,
    author: authors.tom,
    category: "Science",
    tags: ["Open Access", "Academia", "Publishing"],
    image:
      "https://images.unsplash.com/photo-1532094349884-543559c5b185?w=800&q=80",
    publishedAt: "2025-03-20",
    readTime: 7,
  },
  {
    id: 10,
    title: "Nollywood Is Having Its Streaming Moment",
    excerpt:
      "Nigerian cinema has always been extraordinary. What's changed is who's watching — and what they're willing to pay.",
    content: `Nollywood produces more films per year than any industry in the world except India's Bollywood. For most of its history, those films circulated on physical media — VCDs and DVDs sold at markets, in buses, and through informal distribution networks that reached every corner of the continent.

The streaming era has changed the economics without changing the energy.

## The Netflix Effect

When Netflix launched dedicated Nollywood content initiatives in 2019, the conventional wisdom was that the platform would flood the market with American content and marginalise local production. The opposite happened. Netflix's investment created a new tier of high-budget Nigerian production, and its data — which the company keeps closely held but periodically shares — consistently shows African content outperforming expectations globally.

The insight that the streaming companies were slow to absorb is one that the VCD market understood intuitively twenty years ago: Nigerian storytelling has global appeal not despite its cultural specificity but because of it. The stories that travel furthest are the ones most deeply rooted in a particular place and experience.

## What Comes Next

The streaming revolution in African film is still in its early stages. The infrastructure challenges — bandwidth costs, payment friction, electricity reliability — that constrain subscription growth on the continent remain significant. But the content is being made, the talent is being developed, and the audience, locally and globally, is growing.

The question is not whether Nollywood will matter in the global streaming landscape. It already does. The question is who will own the economics of that mattering.`,
    author: authors.sarah,
    category: "Culture",
    tags: ["Nollywood", "Streaming", "African Cinema"],
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    publishedAt: "2025-03-18",
    readTime: 6,
    trending: true,
  },
  {
    id: 11,
    title: "The Sleep Debt That's Quietly Running Your Life",
    excerpt:
      "Most people operate at a significant cognitive deficit without knowing it. The science of sleep deprivation is darker than you've been told.",
    content: `You think you're functioning fine on six hours. You've adapted. You don't feel tired. You are not, by any measurable standard, fine.

The science of sleep deprivation has advanced considerably in the past decade, and its conclusions are not comfortable. The most significant finding — the one that should disturb anyone who treats sleep as a lifestyle variable rather than a biological requirement — is that chronically sleep-deprived people consistently overestimate their own cognitive performance.

## What Sleep Actually Does

Sleep is not rest. It is an active biological process during which the brain performs maintenance operations that are impossible while it is otherwise occupied. The glymphatic system — a waste-clearance mechanism that operates primarily during sleep — removes toxic metabolic byproducts, including the amyloid plaques associated with Alzheimer's disease.

Disrupting this process consistently is not the same as being a little tired. It is the acceleration of neurological ageing.

## The Cultural Problem

The cultural valorisation of sleep deprivation is one of the stranger features of contemporary professional life. "I'll sleep when I'm dead" is celebrated as ambition rather than recognised as what it actually is: a description of a causal mechanism.

The leaders and executives who boast about five-hour nights are not demonstrating their dedication. They are demonstrating their unawareness of how much better their decision-making would be with adequate rest, or their unwillingness to admit a vulnerability.

## What Seven Hours Actually Buys You

The research is remarkably consistent: seven to nine hours of sleep is associated with measurably better decision-making, emotional regulation, immune function, and metabolic health. These are not marginal gains. They are the difference between a version of yourself operating at 70% and a version operating at 100%.

You cannot negotiate with biology. But you can, with some intention, work with it.`,
    author: authors.tom,
    category: "Health",
    tags: ["Sleep", "Neuroscience", "Productivity"],
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80",
    publishedAt: "2025-03-15",
    readTime: 6,
  },
  {
    id: 12,
    title: "What It Means to Build Something That Lasts",
    excerpt:
      "In a culture obsessed with scale and speed, the craftspeople who prioritise permanence are a quiet counter-revolution.",
    content: `There is a furniture maker in Vermont who still uses hand tools exclusively. Not for aesthetic reasons, not for marketing purposes — because, he says, hand tools give him information that power tools cannot. The resistance of the grain, the precise moment when a joint closes, the sound of a correctly set plane: all of it is signal that guides the work.

His furniture costs more than mass-produced alternatives. It lasts longer than any of his customers will. He has a six-year waiting list.

## The Longevity Premium

The economics of durable goods have been distorted by decades of planned obsolescence and artificially cheap production. When a piece of furniture costs $200 and lasts five years, it costs $40 per year. When a piece costs $2,000 and lasts fifty years, it costs $40 per year. The math is identical. But only one of them ends up in a landfill.

The companies that have understood this — Vitsœ, Patagonia, Red Wing — have built unusual businesses: customers who are advocates, products that appreciate in reputation with age, and a kind of commercial relationship that feels more like respect than transaction.

## The Practice of Permanence

This essay is not an advertisement for expensive things. It is an argument for a different relationship to the objects and work we produce.

What would it mean to approach your work the way the furniture maker approaches his wood? To ask, before beginning, whether this thing is worth making well? To accept the constraints that quality imposes — the time, the care, the willingness to say no to speed?

The craftspeople who are thriving are not surviving despite their commitment to permanence. They are thriving because of it. In a culture of disposability, making something that lasts is a form of resistance — and increasingly, a competitive advantage.`,
    author: authors.sarah,
    category: "Culture",
    tags: ["Craft", "Sustainability", "Design"],
    image:
      "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?w=800&q=80",
    publishedAt: "2025-03-12",
    readTime: 5,
  },
];
