import { ArrowUpRight, BookOpen, CalendarDays, Mail, MapPin, Menu, MessageCircle, Quote, Users } from 'lucide-react'

const crestUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-888HuIZBteRqzz3w69d2ahGv80Awtc.png'
const englishCrestUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5rYiCHtgKbLdjKGItZRzv8HiT79SPE.png'

const themes = [
  { number: '01', title: 'Anglo-Canadian history', text: 'The stories, institutions, and ideas that shaped Canada from coast to coast.' },
  { number: '02', title: 'Québécois perspectives', text: 'Language, identity, sovereignty, and the living history of French Canada.' },
  { number: '03', title: 'History in the present', text: 'Land rights, international relations, and the past as a force in today’s world.' },
]

const photos = [
  { src: '/ottawa-parliament.png', alt: 'The Peace Tower and Parliament buildings in Ottawa', label: 'Ottawa, Ontario' },
  { src: '/canadian-landscape.png', alt: 'A quiet Canadian landscape under a wide sky', label: 'A country of stories' },
  { src: '/ottawa-river.png', alt: 'The Ottawa River and Parliament Hill at golden hour', label: 'The river city' },
  { src: '/ottawa-heritage.png', alt: 'Historic Ottawa architecture framed by autumn trees', label: 'A living archive' },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/20 bg-navy/85 text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="uOttawa Canadian Historical Society home">
            <img src={crestUrl} alt="uOttawa Canadian Historical Society crest" className="h-11 w-11 rounded-full border border-gold/60 object-cover" />
            <span className="hidden max-w-44 text-[10px] font-semibold uppercase leading-tight tracking-[0.2em] sm:block">uOttawa Canadian<br />Historical Society</span>
          </a>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em] md:flex">
            <a href="#about" className="transition-colors hover:text-gold">About</a>
            <a href="#themes" className="transition-colors hover:text-gold">What we explore</a>
            <a href="#community" className="transition-colors hover:text-gold">Get involved</a>
          </nav>
          <a href="mailto:uocanadianhistoricalsoc@gmail.com" className="hidden items-center gap-2 border border-gold/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-navy sm:flex">Join the society <ArrowUpRight size={14} /></a>
          <button className="text-white md:hidden" aria-label="Open navigation"><Menu size={22} /></button>
        </div>
      </header>

      <section id="top" className="relative isolate flex min-h-[720px] items-end bg-navy text-white lg:min-h-[800px]">
        <img src={photos[0].src} alt={photos[0].alt} className="absolute inset-0 -z-20 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,24,48,.96)_0%,rgba(7,24,48,.72)_43%,rgba(7,24,48,.18)_100%)]" />
        <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-full bg-[linear-gradient(0deg,rgba(7,24,48,.8),transparent)]" />
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-20 pt-40 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:px-10 lg:pb-28">
          <div>
            <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-gold"><span className="h-px w-10 bg-gold" />Est. 2026 · uOttawa</p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.03em] text-balance sm:text-7xl lg:text-8xl">The past is not<br /><em className="font-normal text-gold">behind us.</em></h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/78 sm:text-lg">A student society for discussing, researching, exploring, and debating the histories that made Canada — and the questions they leave with us today.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#about" className="inline-flex items-center gap-2 bg-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-white">Discover the society <ArrowUpRight size={15} /></a>
              <a href="mailto:uocanadianhistoricalsoc@gmail.com" className="inline-flex items-center gap-2 border border-white/45 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-gold hover:text-gold">Say hello <Mail size={15} /></a>
            </div>
          </div>
          <div className="hidden justify-self-end lg:block">
            <div className="w-64 border-l border-gold/60 pl-5 text-sm leading-6 text-white/70"><Quote className="mb-3 text-gold" size={22} /><p>“Those who cannot remember the past are condemned to repeat it.”</p><p className="mt-2 text-xs uppercase tracking-[0.15em] text-gold">— George Santayana</p></div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-parchment px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <div><p className="eyebrow">01 / About us</p><h2 className="mt-5 max-w-sm font-serif text-4xl leading-tight text-navy sm:text-5xl">History is a conversation.</h2></div>
          <div className="max-w-2xl"><p className="text-xl leading-8 text-navy/85 sm:text-2xl sm:leading-9">The uOttawa Canadian Historical Society is a place to ask better questions about where we come from, who gets remembered, and how the past continues to shape our shared present.</p><p className="mt-7 leading-7 text-navy/65">We bring students together through thoughtful discussion, independent research, campus events, and community activities. Our focus moves between Anglo-Canadian and Québécois history, always making room for many perspectives and lived experiences.</p><div className="mt-10 grid gap-5 border-t border-navy/20 pt-7 sm:grid-cols-3"><div><Users className="mb-3 text-oxblood" size={20} /><p className="text-sm font-semibold text-navy">Curious people</p><p className="mt-1 text-xs leading-5 text-navy/60">Students from every faculty and background.</p></div><div><BookOpen className="mb-3 text-oxblood" size={20} /><p className="text-sm font-semibold text-navy">Open inquiry</p><p className="mt-1 text-xs leading-5 text-navy/60">Discussion grounded in research and respect.</p></div><div><CalendarDays className="mb-3 text-oxblood" size={20} /><p className="text-sm font-semibold text-navy">Shared moments</p><p className="mt-1 text-xs leading-5 text-navy/60">Events that bring history off the page.</p></div></div></div>
        </div>
      </section>

      <section id="themes" className="bg-navy px-5 py-20 text-white lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 border-b border-white/20 pb-8 sm:flex-row sm:items-end"><div><p className="eyebrow text-gold">02 / What we explore</p><h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">Many histories.<br /><em className="font-normal text-gold">One living conversation.</em></h2></div><p className="max-w-xs text-sm leading-6 text-white/60">We believe history becomes more meaningful when it is shared, challenged, and connected to the world around us.</p></div><div className="grid divide-y divide-white/20 md:grid-cols-3 md:divide-x md:divide-y-0">{themes.map((theme) => <article key={theme.number} className="py-8 md:px-8 md:py-12 first:md:pl-0 last:md:pr-0"><p className="font-mono text-xs text-gold">{theme.number}</p><h3 className="mt-16 max-w-xs font-serif text-2xl leading-tight">{theme.title}</h3><p className="mt-5 max-w-xs text-sm leading-6 text-white/60">{theme.text}</p></article>)}</div></div></section>

      <section className="bg-background px-5 py-5 lg:px-10"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-[1.15fr_.85fr]"><div className="group relative min-h-[390px] overflow-hidden bg-navy"><img src={photos[1].src} alt={photos[1].alt} className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" /><p className="absolute bottom-6 left-6 text-xs font-bold uppercase tracking-[0.18em] text-white">{photos[1].label}</p></div><div className="group relative min-h-[390px] overflow-hidden bg-oxblood"><img src={photos[2].src} alt={photos[2].alt} className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent" /><div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white"><p className="text-xs font-bold uppercase tracking-[0.18em]">{photos[2].label}</p><MapPin size={18} /></div></div></div></section>

      <section className="bg-parchment px-5 py-20 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 border-b border-navy/20 pb-8 sm:flex-row sm:items-end"><div><p className="eyebrow text-oxblood">04 / Around Ottawa</p><h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight text-navy sm:text-5xl">A city built from <em className="font-normal text-oxblood">layers.</em></h2></div><p className="max-w-sm text-sm leading-6 text-navy/60">Our home is an archive in motion: rivers, monuments, neighbourhoods, and stories meeting every day.</p></div><div className="mt-8 grid gap-5 md:grid-cols-[.85fr_1.15fr]"><div className="group relative min-h-[420px] overflow-hidden bg-navy"><img src={photos[3].src} alt={photos[3].alt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" /><p className="absolute bottom-6 left-6 text-xs font-bold uppercase tracking-[0.18em] text-white">{photos[3].label}</p></div><div className="flex min-h-[420px] flex-col justify-between bg-navy p-7 text-white sm:p-10"><div><p className="font-mono text-xs text-gold">Coming soon</p><h3 className="mt-5 max-w-md font-serif text-4xl leading-tight sm:text-5xl">Events, talks, and field notes from the society.</h3><p className="mt-6 max-w-md text-sm leading-6 text-white/65">We are preparing our first calendar of discussions, campus gatherings, and excursions around Ottawa. Check back soon for dates and details.</p></div><a href="mailto:uocanadianhistoricalsoc@gmail.com?subject=Keep%20me%20posted" className="mt-10 inline-flex w-fit items-center gap-2 border border-gold/60 px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-navy">Keep me posted <ArrowUpRight size={15} /></a></div></div></div></section>

      <section id="community" className="bg-gold px-5 py-20 text-navy lg:px-10 lg:py-24"><div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1fr_auto]"><div><p className="eyebrow text-navy/60">03 / Get involved</p><h2 className="mt-5 max-w-2xl font-serif text-5xl leading-[.98] tracking-[-.02em] sm:text-7xl">Bring your questions.<br /><em className="font-normal">Bring your curiosity.</em></h2><p className="mt-7 max-w-xl text-base leading-7 text-navy/70">Whether you are a history student, a lifelong learner, or simply curious about Canada, there is a place for you here.</p></div><a href="mailto:uocanadianhistoricalsoc@gmail.com" className="inline-flex w-fit items-center gap-3 border-2 border-navy px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:bg-navy hover:text-gold">Email the society <ArrowUpRight size={16} /></a></div></section>

      <footer className="bg-navy px-5 py-10 text-white lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3"><div className="flex -space-x-2"><img src={crestUrl} alt="Société d’histoire canadienne d’Ottawa crest" className="relative z-10 h-12 w-12 rounded-full border border-gold/60 object-cover" /><img src={englishCrestUrl} alt="uOttawa Canadian Historical Society crest" className="h-12 w-12 rounded-full border border-gold/60 object-cover" /></div><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">uOttawa Canadian Historical Society</p><p className="mt-1 text-xs text-white/50">Ottawa, Ontario · Est. 2026</p></div></div><div className="flex flex-wrap items-center gap-4 text-white/65"><a href="mailto:uocanadianhistoricalsoc@gmail.com" className="flex items-center gap-2 text-xs transition-colors hover:text-gold"><Mail size={16} /> uocanadianhistoricalsoc@gmail.com</a><a href="https://www.instagram.com/uocanadianhistoricalsoc/" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex items-center gap-2 text-xs transition-colors hover:text-gold"><span className="flex h-[17px] w-[17px] items-center justify-center rounded-[5px] border border-current text-[10px] font-bold">◎</span> Instagram</a><a href="https://discord.gg/DsN5WTmBJ" target="_blank" rel="noreferrer" aria-label="Discord" className="flex items-center gap-2 text-xs transition-colors hover:text-gold"><MessageCircle size={17} /> Discord</a><a href="#top" aria-label="Back to top" className="border border-white/20 p-2 transition-colors hover:border-gold hover:text-gold"><ArrowUpRight size={16} /></a></div></div></footer>
    </main>
  )
}
