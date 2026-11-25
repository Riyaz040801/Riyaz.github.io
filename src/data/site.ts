// Everything personal about the site lives here — edit this file to update text and links.

export const site = {
  name: 'Syed Riyaz N',
  role: '3D Generalist & Game Developer',
  current: 'Junior 3D Artist at Maersk Training',
  location: 'Chennai, India',
  email: 'riyaz.19g102@gmail.com',
  resume: 'SyedRiyaz-Resume.pdf', // file in /public
  description:
    'Portfolio of Syed Riyaz N — 3D generalist and game developer in Chennai, building VR training experiences, real-time environments, product renders and game art.',
  // Leave empty to hide the contact form and show only the email button.
  // To enable it: create a free form at https://formspree.io and paste its ID (e.g. "xyzabcd").
  formspreeId: '',
};

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/syedriyazn04/' },
  { label: 'ArtStation', href: 'https://www.artstation.com/riyazn8' },
  { label: 'Behance', href: 'https://www.behance.net/syedriyaz4' },
];

/** Short facts shown under the hero. Keep each value very short. */
export const highlights = [
  { value: 'VR', label: 'Building immersive training products at Maersk Training' },
  { value: '3+', label: 'Years creating 3D art professionally, since 2023' },
  { value: 'MSc', label: 'Creative Media Technology, 2025' },
];

export const about = [
  'I’m a 3D generalist and Unreal Engine artist from Chennai, passionate about visual storytelling. Today I’m a Junior 3D Artist on the Immersive Tech team at Maersk Training, where I create assets, build environments, animate and optimize everything to run smoothly in VR.',
  'Before that I modeled and textured assets for client projects at Zealous Services, and completed an MSc in Creative Media Technology, where I built interactive VR experiences with Unreal Blueprints. I also bring storyboarding and graphic design to the table, so I can take an idea from sketch to playable scene.',
];

export const services = [
  {
    title: 'VR & Real-time',
    text: 'Immersive VR experiences and environments in Unreal Engine and Unity, optimized for real-time performance.',
  },
  {
    title: 'Product Visualization',
    text: 'Studio-quality renders of products, from wearables to vehicles, modeled and lit in Blender.',
  },
  {
    title: 'Game Art & Prototyping',
    text: 'Props, environments and gameplay mechanics scripted with Unreal Blueprints.',
  },
  {
    title: 'Storyboards & Design',
    text: 'Storyboards, branding, brochures and posters that set the visual direction.',
  },
];

// ---------- Career ----------
// Newest first. `period` and `type` are optional: leave them '' to hide them.
export const experience = [
  {
    role: 'Junior 3D Artist',
    company: 'Maersk Training',
    type: 'Full-time · Chennai',
    period: 'Jan 2026 – Present',
    points: [
      'Work as a 3D generalist on VR-based training products in the Immersive Tech team.',
      'Create assets, build environments and animate for immersive experiences.',
      'Optimize assets and scenes for real-time VR performance while keeping visual quality high.',
      'Showcase our VR training work to customers and leadership at company events.',
    ],
  },
  {
    role: '3D Artist Intern',
    company: 'Maersk Training',
    type: 'Internship · Chennai',
    period: 'Oct 2025 – Jan 2026',
    points: ['Joined the Immersive Tech team as an intern and was promoted to Junior 3D Artist.'],
  },
  {
    role: '3D Artist',
    company: 'Zealous Services',
    type: 'Apprenticeship · Remote',
    period: 'Mar 2023 – Aug 2023',
    points: [
      'Created high-quality 3D models and textures in Blender for a range of client projects.',
      'Delivered assets to project requirements and deadlines.',
    ],
  },
];

export const education = [
  {
    year: '2023 – 2025',
    degree: 'MSc, Creative Media Technology',
    school: 'Periyar University · Monolith Research & Training Labs',
    note: 'Developed interactive VR experiences in Unreal Engine with Blueprints, including performance optimization and asset integration.',
  },
  {
    year: '2019 – 2022',
    degree: 'BSc, Computer Science',
    school: 'A.M. Jain College (Agurchand Manmull Jain College)',
    note: 'Graduated with 80%.',
  },
  {
    year: '2019',
    degree: 'Higher Secondary (HSC)',
    school: 'Bharathiyar Matric. Hr. Sec. School',
    note: '',
  },
];

/** Skill groups shown in the Skills section. */
export const skillGroups = [
  {
    title: 'Real-time & VR',
    skills: [
      'VR Development',
      'Unreal Engine Development',
      'Unity Development',
      'Blueprint Scripting',
      'Real-time Optimization',
      'Asset Integration',
    ],
  },
  {
    title: '3D Art',
    skills: [
      '3D Modeling',
      'Hard-surface Modeling',
      'Sculpting',
      'UV Unwrapping',
      'PBR & Stylized Texturing',
      'High-to-low Poly Baking',
    ],
  },
  {
    title: 'Motion & Look',
    skills: ['3D Animation', 'Lighting & Look-dev', 'Rendering', 'Product Visualization', 'Post-process'],
  },
  {
    title: 'Game Design',
    skills: ['Level Design', 'Gameplay Mechanics', 'Environment Design', 'Storyboarding', 'Branding & Graphic Design'],
  },
];

export const software = [
  'Blender',
  'Unreal Engine 5',
  'Blueprints',
  'Unity',
  'Substance Painter',
  'Photoshop',
  'Illustrator',
  'Storyboard Pro',
  'C++',
];

export const languages = ['English', 'Tamil', 'Urdu'];

export const passions = ['Gaming', 'Music', 'Photography', 'Drawing', 'Badminton', 'Swimming'];
