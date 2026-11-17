// All facts here come from Asherura's own CV and the brief.
// Nothing is invented: no projects, employers, awards or skill levels beyond these.

export const profile = {
  name: 'Asherura Marilynn',
  firstName: 'Asherura',
  role: 'Information Technology Graduate',
  location: 'Mbarara, Uganda',
  // Email and phone are deliberately not published. The contact form delivers
  // through Web3Forms; the key below is a public form ID, not her address.
  university: 'Mbarara University of Science and Technology',
}

export const contactForm = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: import.meta.env.VITE_WEB3FORMS_KEY ?? '',
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'training', label: 'Training' },
  { id: 'contact', label: 'Contact' },
]

export const qualities = [
  {
    icon: 'MessageCircle',
    title: 'Communication',
    text: 'Clear, considerate communication with colleagues, customers and the people a team serves.',
  },
  {
    icon: 'Users',
    title: 'Teamwork & leadership',
    text: 'Comfortable working within a team and stepping up to organise when it is needed.',
  },
  {
    icon: 'Lightbulb',
    title: 'Problem-solving',
    text: 'Breaks a problem into parts and works through it calmly, one step at a time.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Customer focus',
    text: 'Keeps the needs of the person on the other side of the conversation in view.',
  },
  {
    icon: 'Sprout',
    title: 'Willingness to learn',
    text: 'A quick learner who treats every course, task and role as a chance to grow.',
  },
  {
    icon: 'Clock',
    title: 'Time management',
    text: 'Plans work around deadlines and follows through on commitments.',
  },
]

export const education = [
  {
    title: 'Bachelor of Information Technology',
    school: 'Mbarara University of Science and Technology',
    period: '2023 – 2026',
    level: 'Degree',
    highlight: true,
  },
  {
    title: 'Uganda Advanced Certificate of Education (UACE)',
    school: 'Ntungamo High School',
    period: '2020 – 2022',
    level: 'A-Level',
  },
  {
    title: 'Uganda Certificate of Education (UCE)',
    school: 'Ntungamo High School',
    period: '2016 – 2019',
    level: 'O-Level',
  },
  {
    title: 'Primary Leaving Examination (PLE)',
    school: 'Mbarara Parents Primary School',
    period: '2006 – 2015',
    level: 'Primary',
  },
]

// Same programme as the BIT cohort. Note: Object-Oriented Programming I only (no Java II).
export const coursework = [
  {
    id: 'software',
    icon: 'Code2',
    title: 'Software & Systems',
    blurb: 'How software is designed, built and run, from first principles to administration.',
    units: [
      'Principles of Programming (C)',
      'Object-Oriented Programming I',
      'Software Engineering',
      'Web Design and Development',
      'Systems Analysis and Design',
      'Operating Systems',
      'Systems Administration',
    ],
  },
  {
    id: 'data',
    icon: 'Database',
    title: 'Data, AI & Computing',
    blurb: 'Storing, querying and reasoning about data, and the methods behind computing research.',
    units: [
      'Python Scripting',
      'Database Management Systems',
      'Database Programming',
      'Probability and Statistics',
      'Artificial Intelligence',
      'Business Intelligence and Data Warehousing',
      'Research Methods for Computing',
    ],
  },
  {
    id: 'networks',
    icon: 'Network',
    title: 'Networks & Emerging Technology',
    blurb: 'How devices connect and communicate, and the technologies built on top of them.',
    units: [
      'Computer Networking',
      'Internet of Things',
      'Mobile Computing and Data Communications',
      'Computer Graphics and Multimedia',
      'Geographic Information Systems',
      'Human-Computer Interaction',
    ],
  },
  {
    id: 'business',
    icon: 'Building2',
    title: 'Business & Information Systems',
    blurb: 'Where technology meets organisations: systems, projects, management and enterprise.',
    units: [
      'Fundamentals of Information Systems',
      'Information Systems Management',
      'IT Project Planning and Management',
      'Organizational Management for IT Professionals',
      'Electronic Commerce and Digital Marketing',
      'Innovations and Entrepreneurship in IT',
    ],
  },
  {
    id: 'security',
    icon: 'ShieldCheck',
    title: 'Security',
    blurb: 'Protecting systems and the networks that connect them.',
    units: ['Systems Security', 'Computer Network Security'],
  },
]

export const skills = {
  technical: [
    {
      icon: 'Cpu',
      title: 'IT Fundamentals',
      text: 'A broad base from the BIT programme: systems, software, databases and networks.',
    },
    {
      icon: 'FileSpreadsheet',
      title: 'Computer Skills & MS Office',
      text: 'Everyday productivity tools for documents, spreadsheets and presentations.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Network Security Fundamentals',
      text: 'Certified grounding in cybersecurity basics, data protection and network defence.',
    },
  ],
  professional: [
    { icon: 'MessageCircle', title: 'Communication' },
    { icon: 'Users', title: 'Leadership & Teamwork' },
    { icon: 'HeartHandshake', title: 'Customer Relations' },
    { icon: 'Lightbulb', title: 'Problem-Solving' },
    { icon: 'Clock', title: 'Time Management' },
  ],
}

export const experience = [
  {
    icon: 'Briefcase',
    role: 'Industrial Training',
    org: 'WIT Technologies',
    period: 'June – July 2025',
    tag: 'Industrial placement',
    points: [
      'Gained practical exposure to a professional work environment.',
      'Developed technical and practical IT skills through supervised training.',
      'Collaborated with team members to complete assigned tasks.',
      'Built workplace discipline, time management and professional communication.',
    ],
  },
  {
    icon: 'HandHelping',
    role: 'Volunteer',
    org: 'ASSHU Mock Examinations',
    period: '2023 · 2024 · 2025 · 2026',
    tag: 'Four consecutive years',
    points: [
      'Returned to support mock examination preparations four years running.',
      'Developed organisational, leadership and time management skills.',
      'Demonstrated reliability and commitment through repeated service.',
    ],
    years: ['2023', '2024', '2025', '2026'],
  },
]

export const training = [
  {
    icon: 'Compass',
    title: 'Watoto Leadership Course',
    issuer: 'Watoto Church',
    year: '2026',
    text: 'Leadership training focused on personal development, teamwork and community service.',
    tags: ['Personal development', 'Teamwork', 'Community service'],
  },
  {
    icon: 'Landmark',
    title: 'NSSF Business Foundational Course',
    issuer: 'NSSF',
    year: '2025',
    text: 'Business fundamentals, financial literacy and the basics of entrepreneurship.',
    tags: ['Business basics', 'Financial literacy', 'Entrepreneurship'],
  },
  {
    icon: 'ShieldCheck',
    title: 'Network Security Certification',
    issuer: null, // issuer not stated in her CV
    year: '2025',
    text: 'Fundamentals of cybersecurity, data protection and network defence.',
    tags: ['Cybersecurity', 'Data protection', 'Network defence'],
  },
]

export const languages = [
  { name: 'English', level: 'Very fluent' },
  { name: 'Runyankole', level: 'Fluent' },
]
