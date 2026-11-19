// All facts here come from Asherura's own CV and "Everything about Lynn" (Nov 2026).
// Nothing is invented: no projects, employers, awards or skill levels beyond these.
// Kept private on purpose: phone, email, date of birth, referees, exact neighbourhood.

export const profile = {
  name: 'Asherura Marilynn',
  firstName: 'Asherura',
  role: 'Information Technology Graduate',
  location: 'Mbarara, Uganda',
  // Email and phone are deliberately not published. The contact form delivers
  // through Web3Forms; the key below is a public form ID, not her address.
  university: 'Mbarara University of Science and Technology',
  honours: 'Second Class Upper',
  cgpa: '3.69',
}

export const highlights = [
  { value: '3.69', label: 'CGPA, Second Class Upper' },
  { value: '9', label: 'Certificates & courses completed' },
  { value: '4', label: 'Years volunteering at ASSU mocks' },
  { value: '3', label: 'Languages spoken' },
]

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
    title: 'Emotional intelligence',
    text: 'Reads the room, stays composed and keeps the needs of others in view.',
  },
  {
    icon: 'Sprout',
    title: 'Willingness to learn',
    text: 'Nine certificates and courses beyond the degree, and always looking for the next one.',
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
    period: '2022 – 2026',
    level: 'Degree',
    highlight: true,
    details: ['Second Class Honours (Upper Division)', 'CGPA 3.69', 'Graduated 29 October 2026'],
  },
  {
    title: 'Uganda Advanced Certificate of Education (UACE)',
    school: 'Ntungamo High School',
    period: '2020 – 2022',
    level: 'A-Level',
    details: ['Three principal passes, two subsidiary passes'],
  },
  {
    title: 'Uganda Certificate of Education (UCE)',
    school: 'Ntungamo High School',
    period: '2016 – 2019',
    level: 'O-Level',
    details: ['Division 1 (aggregate 30)'],
  },
  {
    title: 'Primary Leaving Examination (PLE)',
    school: 'Mbarara Parents Primary School',
    period: '2006 – 2015',
    level: 'Primary',
    details: ['Division 2 (aggregate 14)'],
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
      icon: 'Wrench',
      title: 'IT & Technical Support',
      text: 'Hardware and software troubleshooting, computer networking and CCTV camera installation.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Network Security',
      text: 'Threat identification, principles of encryption, integrity, authentication and access control.',
    },
    {
      icon: 'Code2',
      title: 'Web, Mobile & Design',
      text: 'Website development, strategy and optimisation, mobile app development and computer graphics design.',
    },
    {
      icon: 'Glasses',
      title: 'Immersive Technologies',
      text: 'Hands-on introduction to virtual and augmented reality (VR & AR) during industrial training.',
    },
    {
      icon: 'FileSpreadsheet',
      title: 'Computer Skills & MS Office',
      text: 'Everyday productivity tools for documents, spreadsheets and presentations.',
    },
  ],
  professional: [
    { icon: 'MessageCircle', title: 'Effective Communication' },
    { icon: 'HeartHandshake', title: 'Emotional Intelligence' },
    { icon: 'Users', title: 'Leadership & Team Building' },
    { icon: 'Lightbulb', title: 'Creativity & Problem-Solving' },
    { icon: 'Clock', title: 'Time Management' },
    { icon: 'Landmark', title: 'Entrepreneurship, Branding & Marketing' },
    { icon: 'CalendarCheck', title: 'Event Organisation' },
  ],
}

export const experience = [
  {
    icon: 'Briefcase',
    role: 'Industrial Trainee',
    org: 'The WIT Technologies',
    period: 'June – July 2025',
    tag: 'Two-month industrial training · certified',
    points: [
      'Hands-on hardware and software troubleshooting.',
      'Practical computer networking and CCTV camera installation.',
      'Mobile application and website development, and computer graphics design.',
      'Immersive technologies (VR & AR), entrepreneurship and design thinking.',
      'Soft and work skills for the modern workplace.',
    ],
  },
  {
    icon: 'HandHelping',
    role: 'Volunteer Coordinator',
    org: 'ASSU Mock Examinations',
    period: 'June – July, 2023 – 2026',
    tag: 'Four consecutive years',
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
    icon: 'ClipboardList',
    role: 'Secretary, Educate Club (Entrepreneurship)',
    org: 'Ntungamo High School',
    period: '2021/2022',
    text: 'Recognised for outstanding performance and a valuable contribution to the school. Built early leadership, organisation and record-keeping skills.',
  },
  {
    icon: 'Users',
    role: 'Dorm Captain',
    org: 'Ntungamo High School',
    period: '2017/2018',
    text: 'Recognised for exemplary, dedicated service. Looked after student welfare, kept discipline and coordinated dormitory activities.',
  },
  {
    icon: 'Trophy',
    role: 'Volleyball Diplomas',
    org: 'National Volleyball Federation of Uganda',
    period: '2012',
    text: 'Awarded for taking part in the 1st and 2nd Mbarara Cool-Volley Tournaments at Maryhill High School (March and October 2012).',
  },
]

export const training = [
  {
    icon: 'Compass',
    title: 'Watoto Leadership 101',
    issuer: 'Watoto Church, Mbarara',
    date: 'Aug 2026',
    text: 'Leadership training focused on character development, compassion and integrity in service.',
    tags: ['Character', 'Compassion', 'Integrity'],
  },
  {
    icon: 'Globe',
    title: 'Website Strategy, Enhancement & Optimisation',
    issuer: 'African Population and Health Research Center (APHRC)',
    date: 'Mar 2026',
    text: 'Training on website strategy, enhancement and optimisation techniques.',
    tags: ['Web strategy', 'Optimisation', 'Enhancement'],
  },
  {
    icon: 'MessageCircle',
    title: 'Soft Skills Training',
    issuer: 'BrighterMonday Uganda, with the Mastercard Foundation',
    date: 'Sep 2025',
    text: 'Effective communication, personal effectiveness, emotional intelligence, employability skills, and creativity and problem-solving.',
    tags: ['Communication', 'Emotional intelligence', 'Employability'],
  },
  {
    icon: 'Landmark',
    title: 'NSSF Hi-Innovator Business Foundational Course',
    issuer: 'NSSF Hi-Innovator, supported by UCE Innovation Hub',
    date: 'May 2025',
    text: 'Eight modules on entrepreneurship, evaluating business services, team building, branding, marketing, selling and financial resource management.',
    tags: ['Entrepreneurship', 'Branding & marketing', 'Finance'],
  },
  {
    icon: 'ShieldCheck',
    title: 'Network Security',
    issuer: 'The Open University (OpenLearn)',
    date: 'Feb 2025',
    text: 'Network vulnerabilities, threats to communication networks, principles of encryption, integrity, authentication and access control.',
    tags: ['Threats', 'Encryption', 'Access control'],
  },
  {
    icon: 'BookOpen',
    title: 'Discipleship & Mentorship Programmes',
    issuer: 'Watoto Church, Mbarara',
    date: '2023 – 2025',
    text: 'Apples of Gold (2023 and 2025), Equip Streams (Oct 2024) and Growing in Prayer (Jul 2025), focused on character, integrity and community service.',
    tags: ['Apples of Gold', 'Equip Streams', 'Growing in Prayer'],
  },
]

export const languages = [
  { name: 'English', level: 'Very fluent' },
  { name: 'Runyankole', level: 'Fluent' },
  { name: 'Luganda', level: 'Fluent' },
]
