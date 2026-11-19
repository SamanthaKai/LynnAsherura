// All facts here come from Asherura's own CV and "Everything about Lynn" (Nov 2026).
// Nothing is invented: no projects, employers, awards or skill levels beyond these.
// Kept private on purpose: phone, email, date of birth, referees, exact neighbourhood.

export const profile = {
  name: 'Asherura Marilynn',
  firstName: 'Asherura',
  lastName: 'Marilynn',
  role: 'Information Technology Graduate',
  location: 'Mbarara, Uganda',
  university: 'Mbarara University of Science and Technology',
  intro:
    'An Information Technology graduate from Mbarara University of Science and Technology, certified in network security and website optimisation, with hands-on training in technical support, networking and web development.',
  // Public profiles (e.g. { label: 'LinkedIn', href: 'https://…' }). Add real ones only;
  // the contact section lists them automatically. Email and phone stay private.
  links: [],
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
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const heroFacts = [
  { term: 'Degree', detail: 'BIT, Second Class Upper' },
  { term: 'CGPA', detail: '3.69' },
  { term: 'Graduated', detail: '29 October 2026' },
  { term: 'Languages', detail: 'English, Runyankole, Luganda' },
]

export const about = {
  // The marked word gets a soft peach underline.
  lede: { before: 'I enjoy the point where technology meets the ', mark: 'people', after: ' who use it.' },
  paragraphs: [
    'I’m Asherura, a detail-oriented Information Technology graduate from Mbarara University of Science and Technology, where I earned a Bachelor of Information Technology with Second Class Upper Honours and a CGPA of 3.69.',
    'I’m certified in Network Security through The Open University and in Website Strategy, Enhancement and Optimisation through APHRC. My industrial training at The WIT Technologies gave me hands-on experience in hardware and software troubleshooting, networking, CCTV installation and web development.',
    'Beyond the technical side, I bring business fundamentals from the NSSF Hi-Innovator course, leadership from school and church roles, and four years of volunteer coordination. I’m looking for opportunities where I can put all of it to work.',
  ],
  interests: [
    'Network security',
    'Website strategy and optimisation',
    'IT and technical support',
    'Web and mobile development',
    'Entrepreneurship',
  ],
}

export const qualities = [
  {
    title: 'Communication',
    text: 'Clear, considerate communication with colleagues, customers and the people a team serves.',
  },
  {
    title: 'Teamwork and leadership',
    text: 'Comfortable working within a team and stepping up to organise when it is needed.',
  },
  {
    title: 'Problem-solving',
    text: 'Breaks a problem into parts and works through it calmly, one step at a time.',
  },
  {
    title: 'Emotional intelligence',
    text: 'Reads the room, stays composed and keeps the needs of others in view.',
  },
  {
    title: 'Willingness to learn',
    text: 'Nine certificates and courses beyond the degree, and always looking for the next one.',
  },
  {
    title: 'Time management',
    text: 'Plans work around deadlines and follows through on commitments.',
  },
]

export const languages = [
  { name: 'English', level: 'Very fluent' },
  { name: 'Runyankole', level: 'Fluent' },
  { name: 'Luganda', level: 'Fluent' },
]

export const degree = {
  title: 'Bachelor of Information Technology',
  school: 'Mbarara University of Science and Technology',
  period: '2022 – 2026',
  facts: [
    { term: 'Classification', detail: 'Second Class Honours, Upper Division' },
    { term: 'CGPA', detail: '3.69' },
    { term: 'Graduated', detail: '29 October 2026' },
  ],
}

export const schooling = [
  {
    title: 'Uganda Advanced Certificate of Education',
    short: 'UACE',
    school: 'Ntungamo High School',
    period: '2020 – 2022',
    result: 'Three principal passes, two subsidiary passes',
  },
  {
    title: 'Uganda Certificate of Education',
    short: 'UCE',
    school: 'Ntungamo High School',
    period: '2016 – 2019',
    result: 'Division 1, aggregate 30',
  },
  {
    title: 'Primary Leaving Examination',
    short: 'PLE',
    school: 'Mbarara Parents Primary School',
    period: '2006 – 2015',
    result: 'Division 2, aggregate 14',
  },
]

// Same programme as the BIT cohort. Note: Object-Oriented Programming I only (no Java II).
export const coursework = [
  {
    id: 'software',
    tab: 'Software',
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
    tab: 'Data & AI',
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
    tab: 'Networks',
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
    tab: 'Business & IS',
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
    tab: 'Security',
    title: 'Security',
    blurb: 'Protecting systems and the networks that connect them.',
    units: ['Systems Security', 'Computer Network Security'],
  },
]

// kind: 'technical' (blue marker) or 'professional' (peach marker)
export const skillGroups = [
  {
    title: 'IT & Technical Support',
    kind: 'technical',
    items: ['Hardware troubleshooting', 'Software troubleshooting', 'Computer networking', 'CCTV camera installation'],
  },
  {
    title: 'Network Security',
    kind: 'technical',
    items: ['Threat identification', 'Principles of encryption', 'Authentication', 'Access control'],
  },
  {
    title: 'Software & Digital',
    kind: 'technical',
    items: [
      'Website development',
      'Website strategy and optimisation',
      'Mobile application development',
      'Computer graphics design',
      'Immersive technologies (VR & AR)',
      'Computer skills and MS Office',
    ],
  },
  {
    title: 'Business & Leadership',
    kind: 'professional',
    items: ['Entrepreneurship', 'Team building', 'Branding and marketing', 'Strategic execution', 'Event organisation'],
  },
  {
    title: 'Soft Skills',
    kind: 'professional',
    wide: true,
    items: [
      'Effective communication',
      'Emotional intelligence',
      'Personal effectiveness',
      'Creativity and problem-solving',
      'Employability skills',
      'Time management',
      'Teamwork',
    ],
  },
]

export const experience = [
  {
    role: 'Industrial Trainee',
    org: 'The WIT Technologies',
    period: 'June – July 2025',
    note: 'Two-month industrial training, certified',
    points: [
      'Hands-on hardware and software troubleshooting.',
      'Practical computer networking and CCTV camera installation.',
      'Mobile application and website development, and computer graphics design.',
      'Immersive technologies (VR & AR), entrepreneurship and design thinking.',
      'Soft and work skills for the modern workplace.',
    ],
  },
  {
    role: 'Volunteer Coordinator',
    org: 'ASSU Mock Examinations',
    period: 'June – July, 2023 – 2026',
    note: 'Four consecutive years',
    points: [
      'Managed logistics and coordinated technical and physical operations during mock examinations.',
      'Developed strong organisational, leadership and time management skills.',
      'Returned four years running, showing long-term reliability and commitment to community service.',
    ],
    years: ['2023', '2024', '2025', '2026'],
  },
]

export const leadership = [
  {
    role: 'Secretary, Educate Club (Entrepreneurship)',
    org: 'Ntungamo High School',
    period: '2021/22',
    text: 'Recognised for outstanding performance and a valuable contribution to the school. Built early leadership, organisation and record-keeping skills.',
  },
  {
    role: 'Dorm Captain',
    org: 'Ntungamo High School',
    period: '2017/18',
    text: 'Recognised for exemplary, dedicated service. Looked after student welfare, kept discipline and coordinated dormitory activities.',
  },
  {
    role: 'Volleyball Diplomas',
    org: 'National Volleyball Federation of Uganda',
    period: '2012',
    text: 'Awarded for taking part in the 1st and 2nd Mbarara Cool-Volley Tournaments at Maryhill High School, in March and October 2012.',
  },
]

export const certifications = [
  {
    title: 'Watoto Leadership 101',
    issuer: 'Watoto Church, Mbarara',
    date: 'August 2026',
    text: 'Leadership training focused on character development, compassion and integrity in service.',
    tags: ['Character', 'Compassion', 'Integrity'],
  },
  {
    title: 'Website Strategy, Enhancement & Optimisation',
    issuer: 'African Population and Health Research Center (APHRC)',
    date: 'March 2026',
    text: 'Training on website strategy, enhancement and optimisation techniques.',
    tags: ['Web strategy', 'Optimisation', 'Enhancement'],
  },
  {
    title: 'Soft Skills Training',
    issuer: 'BrighterMonday Uganda, with the Mastercard Foundation',
    date: 'September 2025',
    text: 'Effective communication, personal effectiveness, emotional intelligence, employability skills, and creativity and problem-solving.',
    tags: ['Communication', 'Emotional intelligence', 'Employability'],
  },
  {
    title: 'NSSF Hi-Innovator Business Foundational Course',
    issuer: 'NSSF Hi-Innovator, supported by UCE Innovation Hub',
    date: 'May 2025',
    text: 'Eight modules on entrepreneurship, evaluating business services, team building, branding, marketing, selling and financial resource management.',
    tags: ['Entrepreneurship', 'Branding & marketing', 'Finance'],
  },
  {
    title: 'Network Security',
    issuer: 'The Open University (OpenLearn)',
    date: 'February 2025',
    text: 'Network vulnerabilities, threats to communication networks, principles of encryption, integrity, authentication and access control.',
    tags: ['Threats', 'Encryption', 'Access control'],
  },
  {
    title: 'Discipleship & Mentorship Programmes',
    issuer: 'Watoto Church, Mbarara',
    date: '2023 – 2025',
    text: 'Apples of Gold (2023 and 2025), Equip Streams (October 2024) and Growing in Prayer (July 2025), focused on character, integrity and community service.',
    tags: ['Apples of Gold', 'Equip Streams', 'Growing in Prayer'],
  },
]
