export interface QualificationItem {
  id: string;
  label: string;
  icon: 'cpu' | 'code' | 'search' | 'file' | 'star';
  category: string;
  detail: string;
  relatedFocusId: string;
}

export interface FocusItem {
  id: string;
  title: string;
  description: string;
  icon: 'terminal' | 'cog' | 'sparkles' | 'grid' | 'search' | 'doc';
  topics: string[];
  currentNote: string;
  tools: string[];
}

export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  degree: string;
  summary: string;
  variant: 'current' | 'previous';
  location: string;
  highlights: string[];
}

export interface ContactLink {
  id: string;
  platform: string;
  handle: string;
  href: string;
  external?: boolean;
  copyValue?: string;
}

export const PORTFOLIO_DATA = {
  owner: {
    name: 'Aaqilah Adelline Syndri',
    firstPossessive: "Aaqilah's",
    discipline: 'INFORMATICS & AI',
    heroTitle: 'PORTOFOLIO',
    intro:
      'A glimpse into my world, interest, and aspirations — exploring AI & Agent Automation.',
    location: 'Cengkareng, Jakarta Barat',
    year: '2026',
    institutionShort: 'Institut Teknologi PLN',
  },
  about: {
    heading: 'WHO AM I',
    paragraphs: [
      "Hi! I'm Aaqilah Adelline Syndri, an Informatics Engineering student at Institut Teknologi PLN with a strong interest in Artificial Intelligence and AI Agent Automation.",
      'Through this portofolio, I document my learning process, projects, and early steps in building practical and structured technology solutions.',
    ],
    scriptLines: ['Curious mind.', 'Structured thinker.', 'Driven by consistency.'],
  },
  qualifications: [
    {
      id: 'ai-automation',
      label: 'Artificial Intelligence & Agent Automation',
      icon: 'cpu',
      category: 'Core Interest',
      detail:
        'Exploring prompt engineering, multi-step AI agent workflows, and practical automation pipelines.',
      relatedFocusId: 'agent-automation',
    },
    {
      id: 'computational-thinking',
      label: 'Computational Thinking & Logical Thinking',
      icon: 'code',
      category: 'Foundation',
      detail:
        'Decomposing problems into deterministic steps, state transitions, and clean algorithmic logic.',
      relatedFocusId: 'computational-logic',
    },
    {
      id: 'information-research',
      label: 'Information Research & Structured Problem Solving',
      icon: 'search',
      category: 'Methodology',
      detail:
        'Synthesizing technical documentation, comparing approaches, and organizing findings clearly.',
      relatedFocusId: 'tech-research',
    },
    {
      id: 'office-suite',
      label: 'Microsoft Word & PowerPoint (Intermediate)',
      icon: 'file',
      category: 'Productivity',
      detail:
        'Structuring academic reports, slide decks, and clean technical documentation for presentations.',
      relatedFocusId: 'digital-documentation',
    },
    {
      id: 'mindset',
      label: 'Curiosity, Structured Thinking & Consistency',
      icon: 'star',
      category: 'Mindset',
      detail:
        'Daily commitment to incremental learning, documenting experiments, and building in public.',
      relatedFocusId: 'ai-exploration',
    },
  ] as QualificationItem[],
  studentNote: {
    label: 'STUDENT NOTE',
    quote: '"Good Systems Start With Clear Logic ♡"',
    location: 'Cengkareng, Jakarta Barat',
  },
  focusAreas: [
    {
      id: 'informatics-core',
      title: 'INFORMATICS CORE',
      description: 'Foundations in programming, algorithms, and computer science.',
      icon: 'terminal',
      topics: [
        'Programming fundamentals & control flow',
        'Data structures & algorithmic complexity',
        'Software engineering principles & version control',
      ],
      currentNote:
        'Building strong conceptual foundations during freshman semester at Institut Teknologi PLN.',
      tools: ['Python', 'TypeScript', 'Git', 'VS Code'],
    },
    {
      id: 'ai-exploration',
      title: 'AI EXPLORATION',
      description: 'Studying modern AI models, prompting, and intelligent workflows.',
      icon: 'cog',
      topics: [
        'LLM capabilities, context windows & structured outputs',
        'Iterative prompting & evaluation patterns',
        'AI-assisted software prototyping (Vibe Coding)',
      ],
      currentNote:
        'Testing how modern language models accelerate research synthesis and rapid prototyping.',
      tools: ['Gemini', 'Structured Prompts', 'JSON Schema'],
    },
    {
      id: 'agent-automation',
      title: 'AGENT AUTOMATION',
      description: 'Designing structured, automated task pipelines with AI agents.',
      icon: 'sparkles',
      topics: [
        'Tool-calling patterns & task orchestration',
        'Input validation & deterministic guardrails',
        'Personal productivity & knowledge workflows',
      ],
      currentNote:
        'Mapping repetitive academic and research tasks into clear step-by-step agent pipelines.',
      tools: ['Agent Workflows', 'APIs', 'Automation Scripts'],
    },
    {
      id: 'computational-logic',
      title: 'COMPUTATIONAL LOGIC',
      description: 'Breaking down complex problems into clear, logical steps.',
      icon: 'grid',
      topics: [
        'Problem decomposition & abstraction',
        'Boolean logic, flowcharts & edge-case analysis',
        'Translating real-world rules into clean code',
      ],
      currentNote:
        'Applying structured thinking from exact sciences (IPA) directly to software architecture.',
      tools: ['Flowcharts', 'Pseudocode', 'Discrete Logic'],
    },
    {
      id: 'tech-research',
      title: 'TECH RESEARCH',
      description: 'Deep-diving into emerging tools, documentation, and case studies.',
      icon: 'search',
      topics: [
        'Reading technical docs & release notes systematically',
        'Comparing frameworks & AI tooling trade-offs',
        'Summarizing case studies into actionable notes',
      ],
      currentNote:
        'Maintaining structured study logs on AI tools, web architecture, and developer workflows.',
      tools: ['Technical Docs', 'Case Studies', 'Markdown Notes'],
    },
    {
      id: 'digital-documentation',
      title: 'DIGITAL DOCUMENTATION',
      description: 'Turning ideas into structured decks, reports, and web builds.',
      icon: 'doc',
      topics: [
        'Editorial layout systems & visual hierarchy',
        'Structured JSON content modeling',
        'Clear technical writing & presentation decks',
      ],
      currentNote:
        'Combining tactile editorial aesthetics with clean, maintainable data structures.',
      tools: ['JSON', 'React + Tailwind', 'PowerPoint', 'Word'],
    },
  ] as FocusItem[],
  featuredProject: {
    eyebrow: 'FROM CURIOSITY TO CODE',
    sectionTitle: 'FEATURED BUILD',
    scriptNote: 'Build in public. Document everything. ♡',
    title: 'Personal Portofolio Website',
    summary:
      'Membangun website portofolio pribadi dengan desain editorial bento-grid untuk mendokumentasikan perjalanan akademik dan eksplorasi AI.',
    highlights: [
      'Merancang struktur data JSON terpisah agar konten mudah diperbarui secara dinamis.',
      'Menerapkan tata letak responsif dengan estetika editorial scrapbook.',
      'Mengintegrasikan alur kerja AI-assisted development (Vibe Coding).',
    ],
    metrics: [
      { value: '2026', label: 'FRESHMAN YEAR' },
      { value: '90.09', label: 'HS FINAL SCORE' },
      { value: 'AI + WEB', label: 'CORE TRACK' },
    ],
    milestones: [
      {
        step: '01. Foundation',
        detail: 'SMA 5 Kota Bengkulu (Science)',
      },
      {
        step: '02. Next Chapter',
        detail: 'S1 Informatics (IT PLN)',
      },
    ],
  },
  education: [
    {
      id: 'itpln',
      period: 'SEP 2026 – PRESENT',
      institution: 'Institut Teknologi PLN',
      degree: 'S1 Teknik Informatika',
      summary:
        'Fokus pada dasar pemrograman, logika komputasi, dan pengembangan teknologi berbasis AI.',
      variant: 'current',
      location: 'Jakarta Barat, Indonesia',
      highlights: [
        'Program Studi S1 Teknik Informatika (Informatics Engineering)',
        'Eksplorasi dasar algoritma, pemrograman terstruktur, dan logika komputasi',
        'Pengembangan minat khusus pada AI & Agent Automation',
      ],
    },
    {
      id: 'sman5',
      period: 'JUN 2023 – MEI 2026',
      institution: 'SMA Negeri 5 Kota Bengkulu',
      degree: 'Jurusan IPA (Science)',
      summary:
        'Lulus dengan Nilai Akhir: 90.09 / 100 dengan pemahaman dasar eksakta yang kuat.',
      variant: 'previous',
      location: 'Kota Bengkulu, Indonesia',
      highlights: [
        'Nilai Akhir Kelulusan: 90.09 / 100',
        'Pemahaman kuat pada Matematika, Fisika, dan penalaran eksakta',
        'Aktif membangun kebiasaan riset informasi dan dokumentasi terstruktur',
      ],
    },
  ] as EducationItem[],
  contacts: [
    {
      id: 'email',
      platform: 'Email',
      handle: 'adellinesyndri@gmail.com',
      href: 'mailto:adellinesyndri@gmail.com',
      copyValue: 'adellinesyndri@gmail.com',
    },
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      handle: 'Aaqilah Adelline Syndri',
      href: 'https://www.linkedin.com/in/Aaqilah%20Adelline%20Syndri-7b205a434',
      external: true,
    },
    {
      id: 'instagram',
      platform: 'Instagram',
      handle: '@adellinesy',
      href: 'https://www.instagram.com/adellinesy',
      external: true,
    },
    {
      id: 'whatsapp',
      platform: 'WhatsApp',
      handle: '+62 82280991389',
      href: 'https://wa.me/6282280991389',
      external: true,
    },
  ] as ContactLink[],
};
