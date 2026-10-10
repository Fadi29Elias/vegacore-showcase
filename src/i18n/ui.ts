export const langs = ['ar', 'en'] as const;
export type Lang = (typeof langs)[number];
export type L = { ar: string; en: string };

export const dir = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');
export const other = (lang: Lang): Lang => (lang === 'ar' ? 'en' : 'ar');
export const tr = (field: L | undefined, lang: Lang) => (field ? field[lang] : '');

/** Internal link that respects the site's base path (e.g. GitHub Pages' /vegacore-showcase). */
export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;

/** Same page in the other language: /ar/clients/ ↔ /en/clients/ (base path kept) */
export const switchPath = (pathname: string, to: Lang) => pathname.replace(/\/(ar|en)(?=\/|$)/, `/${to}`);

export const contact = {
  whatsapp: '+963 939 421 195',
  whatsappUrl: 'https://wa.me/963939421195',
  email: 'contact@vegacore.co',
  web: 'www.vegacore.co',
  webUrl: 'https://www.vegacore.co',
  instagram: '@vegacore.co',
  instagramUrl: 'https://www.instagram.com/vegacore.co/',
};

const months = {
  ar: ['كانون الثاني', 'شباط', 'آذار', 'نيسان', 'أيار', 'حزيران', 'تموز', 'آب', 'أيلول', 'تشرين الأول', 'تشرين الثاني', 'كانون الأول'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};
/** "2026-06-21" → "21 حزيران 2026" / "21 June 2026"; "2026-05" → "أيار 2026" */
export function formatDate(iso: string, lang: Lang) {
  const [y, m, d] = iso.split('-').map(Number);
  const month = months[lang][m - 1];
  return d ? `${d} ${month} ${y}` : `${month} ${y}`;
}

const ar = {
  'meta.title': 'VegaCore — نتائج حقيقية',
  'meta.description': 'قسم التسويق في VegaCore: إنتاج وتصوير وصنّاع محتوى وريلز بنتائج حقيقية على صفحات عملائنا.',
  'nav.home': 'الرئيسية',
  'nav.stories': 'قصص النجاح',
  'nav.reels': 'الريلز',
  'nav.services': 'الخدمات',
  'nav.contact': 'تواصل',
  'nav.menu': 'القائمة',
  'nav.switch': 'English',
  'nav.skip': 'تخطَّ إلى المحتوى',

  'hero.title': 'من {from} متابع… إلى {to}.',
  'hero.sub': 'هذا ما يفعله قسم التسويق في VegaCore: إنتاج وتصوير وصنّاع محتوى وقصص تبيع — بنتائج حقيقية على صفحات عملائنا.',
  'hero.stories': 'شاهد قصص النجاح',
  'hero.reels': 'الريلز',
  'hero.case': 'قصة {name}',

  'proof.reels': 'ريل أنتجناها لعملائنا',
  'proof.views': 'مشاهدة على هذه الريلز',
  'proof.top': 'أعلى ريل لعميل',
  'proof.growth': 'نمو متابعين',
  'proof.asof': 'الأرقام من إنستغرام بتاريخ {date}.',

  'home.stories': 'قصص نجاح',
  'home.stories.sub': 'كل رقم هنا حقيقي — من صفحات عملائنا مباشرة.',
  'home.stories.all': 'كل القصص',
  'home.reels': 'أقوى ريل لكل عميل',
  'home.reels.sub': 'شغّل أي ريل من هنا — المشغّل من إنستغرام نفسه.',
  'home.reels.all': 'كل الريلز',
  'home.clients': 'عملاؤنا',

  'growth.before': 'قبل',
  'growth.after': 'بعد',
  'growth.followers': 'متابع',
  'growth.posts': 'منشور',

  'story.start': 'البداية',
  'story.did': 'ماذا فعلنا',
  'story.result': 'النتيجة',
  'story.results': 'بالأرقام',
  'story.reels': 'أقوى الريلز',
  'story.since': 'نعمل معهم منذ {date}',
  'story.view': 'اقرأ القصة',
  'story.more': 'قصص أخرى',
  'story.profile': 'افتح الصفحة على إنستغرام',
  'story.ours': 'صفحتنا',

  'stories.title': 'قصص النجاح',
  'stories.sub': 'من أين بدأ كل عميل، ماذا فعلنا، وأين وصل — بأرقام من إنستغرام.',
  'stories.also': 'وعملنا أيضاً مع',

  'reels.title': 'الريلز',
  'reels.sub': 'أقوى ريلز أنتجناها لكل عميل، كما نُشرت على صفحته.',
  'reels.views': 'مشاهدة',
  'reels.watch': 'عرض كبير',

  'filter.client': 'العميل',
  'filter.all': 'الكل',
  'filter.copy': 'نسخ الرابط',
  'filter.copied': 'تم النسخ ✓',

  'industry.fashion': 'ألبسة وأزياء',
  'industry.healthcare': 'عيادات',
  'industry.finance': 'خدمات مالية',
  'industry.travel': 'سياحة وسفر',
  'industry.restaurants': 'مطاعم',
  'industry.retail': 'متاجر',
  'industry.beauty': 'عطور وتجميل',
  'industry.vegacore': 'VegaCore',

  'present.start': 'وضع العرض',
  'present.close': 'إغلاق',
  'present.next': 'التالي',
  'present.prev': 'السابق',

  'services.title': 'قسم تسويق كامل — تحت سقف واحد',
  'services.sub': 'لا نبيعك منشورات. نبني لعلامتك قصة، نصوّرها، وننشرها، ونقيس ما تحققه.',
  'svc.production': 'الإنتاج والتصوير',
  'svc.production.text': 'نصوّر أي شيء: متاجر، منتجات، عيادات، مطاعم، وأشخاص — بفريق إنتاج كامل.',
  'svc.creators': 'صنّاع المحتوى',
  'svc.creators.text': 'وجوه وأصوات تتحدث عن علامتك بلغة جمهورك.',
  'svc.photo': 'التصوير الفوتوغرافي',
  'svc.photo.text': 'مصورون لصور المنتجات والمكان والفريق.',
  'svc.reels': 'الريلز والمونتاج',
  'svc.reels.text': 'من الفكرة والسكربت إلى المونتاج والنشر — يومياً إذا لزم.',
  'svc.story': 'القصة وإدارة الصفحة',
  'svc.story.text': 'نبني قصة العلامة: خطة محتوى، نشر منتظم، وتواصل مع الجمهور.',
  'svc.growth': 'النمو والقياس',
  'svc.growth.text': 'نقيس كل ريل ونطوّر على أساس الأرقام، مع تقارير أداء واضحة.',
  'services.beyond': 'وأبعد من التسويق',
  'services.beyond.text': 'VegaCore شركة تطوير أعمال: عندما يحتاج النمو إلى أكثر من المحتوى، نبني المواقع والتطبيقات والأنظمة والأتمتة أيضاً.',
  'beyond.business': 'تطوير الأعمال',
  'beyond.software': 'مواقع وتطبيقات',
  'beyond.ai': 'أتمتة وذكاء اصطناعي',

  'process.title': 'كيف نعمل',
  'process.discovery': 'نفهم العمل',
  'process.discovery.text': 'من هو جمهورك، وماذا تبيع، وما الذي يمنعه من الشراء.',
  'process.strategy': 'نبني الخطة',
  'process.strategy.text': 'أفكار المحتوى، الوتيرة، ووجوه العلامة.',
  'process.execution': 'ننتج وننشر',
  'process.execution.text': 'تصوير، مونتاج، ونشر منتظم.',
  'process.launch': 'نقيس ونكبر',
  'process.launch.text': 'نتابع الأرقام ونضاعف ما ينجح.',

  'contact.title': 'لنكتب قصة نجاحك التالية',
  'contact.sub': 'أخبرنا عن عملك — ونقترح كيف ننقله إلى المستوى التالي.',
  'contact.whatsapp': 'واتساب',
  'contact.email': 'البريد',
  'contact.web': 'الموقع',
  'contact.instagram': 'إنستغرام',
  'contact.base': 'من دمشق — نعمل مع عملاء حول العالم.',
  'contact.cta': 'تواصل عبر واتساب',

  'footer.tagline': 'Building Digital Success Stories',
};

type Key = keyof typeof ar;

const en: Record<Key, string> = {
  'meta.title': 'VegaCore — Real Results',
  'meta.description': "VegaCore's marketing department: production, photography, content creators and reels — with real results on our clients' pages.",
  'nav.home': 'Home',
  'nav.stories': 'Success Stories',
  'nav.reels': 'Reels',
  'nav.services': 'Services',
  'nav.contact': 'Contact',
  'nav.menu': 'Menu',
  'nav.switch': 'العربية',
  'nav.skip': 'Skip to content',

  'hero.title': 'From {from} followers to {to}.',
  'hero.sub': "That's what VegaCore's marketing department does: production, photography, content creators and stories that sell — with real results on our clients' pages.",
  'hero.stories': 'See the success stories',
  'hero.reels': 'Reels',
  'hero.case': "{name}'s story",

  'proof.reels': 'reels produced for our clients',
  'proof.views': 'views on those reels',
  'proof.top': 'top client reel',
  'proof.growth': 'follower growth',
  'proof.asof': 'Figures from Instagram as of {date}.',

  'home.stories': 'Success stories',
  'home.stories.sub': "Every number here is real — straight from our clients' pages.",
  'home.stories.all': 'All stories',
  'home.reels': 'The strongest reel for each client',
  'home.reels.sub': "Play any reel right here — it's Instagram's own player.",
  'home.reels.all': 'All reels',
  'home.clients': 'Our clients',

  'growth.before': 'Before',
  'growth.after': 'After',
  'growth.followers': 'followers',
  'growth.posts': 'posts',

  'story.start': 'Where they started',
  'story.did': 'What we did',
  'story.result': 'The result',
  'story.results': 'In numbers',
  'story.reels': 'Strongest reels',
  'story.since': 'Working together since {date}',
  'story.view': 'Read the story',
  'story.more': 'More stories',
  'story.profile': 'Open the page on Instagram',
  'story.ours': 'Our page',

  'stories.title': 'Success stories',
  'stories.sub': 'Where each client started, what we did, and where they are now — in Instagram numbers.',
  'stories.also': 'We also work with',

  'reels.title': 'Reels',
  'reels.sub': 'The strongest reels we produced for each client, as published on their page.',
  'reels.views': 'views',
  'reels.watch': 'Watch large',

  'filter.client': 'Client',
  'filter.all': 'All',
  'filter.copy': 'Copy link',
  'filter.copied': 'Copied ✓',

  'industry.fashion': 'Fashion',
  'industry.healthcare': 'Clinics',
  'industry.finance': 'Financial services',
  'industry.travel': 'Travel',
  'industry.restaurants': 'Restaurants',
  'industry.retail': 'Retail',
  'industry.beauty': 'Perfume & beauty',
  'industry.vegacore': 'VegaCore',

  'present.start': 'Present',
  'present.close': 'Close',
  'present.next': 'Next',
  'present.prev': 'Previous',

  'services.title': 'A full marketing department — under one roof',
  'services.sub': "We don't sell you posts. We build your brand a story, film it, publish it and measure what it delivers.",
  'svc.production': 'Production & filming',
  'svc.production.text': 'We film anything: stores, products, clinics, restaurants and people — with a full production crew.',
  'svc.creators': 'Content creators',
  'svc.creators.text': "Faces and voices that talk about your brand in your audience's language.",
  'svc.photo': 'Photography',
  'svc.photo.text': 'Photographers for products, places and teams.',
  'svc.reels': 'Reels & editing',
  'svc.reels.text': 'From idea and script to edit and publishing — daily when needed.',
  'svc.story': 'Storytelling & page management',
  'svc.story.text': 'We build the brand story: a content plan, steady publishing and audience engagement.',
  'svc.growth': 'Growth & measurement',
  'svc.growth.text': 'Every reel is measured and we improve on the numbers, with clear performance reports.',
  'services.beyond': 'Beyond marketing',
  'services.beyond.text': 'VegaCore is a business development company: when growth needs more than content, we also build websites, apps, systems and automation.',
  'beyond.business': 'Business development',
  'beyond.software': 'Websites & apps',
  'beyond.ai': 'Automation & AI',

  'process.title': 'How we work',
  'process.discovery': 'Understand the business',
  'process.discovery.text': 'Who your audience is, what you sell, and what stops them from buying.',
  'process.strategy': 'Build the plan',
  'process.strategy.text': 'Content ideas, cadence and the faces of the brand.',
  'process.execution': 'Produce & publish',
  'process.execution.text': 'Filming, editing and steady publishing.',
  'process.launch': 'Measure & grow',
  'process.launch.text': 'We track the numbers and double down on what works.',

  'contact.title': "Let's write your next success story",
  'contact.sub': "Tell us about your business — we'll show you how to take it to the next level.",
  'contact.whatsapp': 'WhatsApp',
  'contact.email': 'Email',
  'contact.web': 'Website',
  'contact.instagram': 'Instagram',
  'contact.base': 'Based in Damascus — working with clients worldwide.',
  'contact.cta': 'Message us on WhatsApp',

  'footer.tagline': 'Building Digital Success Stories',
};

export const ui: Record<Lang, Record<Key, string>> = { ar, en };

/** t('key') or t('key', { name: 'Poplar' }) to fill {name} placeholders. */
export const useT =
  (lang: Lang) =>
  (key: Key, vars?: Record<string, string>) =>
    vars ? ui[lang][key].replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '') : ui[lang][key];
export type { Key };

export const getStaticLangPaths = () => langs.map((lang) => ({ params: { lang } }));
