export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications?: string;
  bio?: string;
  /** Omit to render an initials avatar instead of a photograph. */
  photo?: string;
  group: 'leadership' | 'operations';
}

export const TEAM: TeamMember[] = [
  {
    id: 'smita-kachewar',
    name: 'Dr. Smita Sankaye Kachewar',
    role: 'CEO & Founder',
    qualifications: 'Consultant Oncopathologist',
    bio: 'Deenanath Mangeshkar Hospital & Research Centre. Leading the vision of Radiogenomes AI — bringing clinical-grade genomic intelligence to Indian healthcare.',
    photo: '/team/smita-kachewar.webp',
    group: 'leadership',
  },
  {
    id: 'rahim-pathan',
    name: 'Rahim Pathan',
    role: 'COO & Co-Founder',
    qualifications: '',
    bio: 'Co-Founder and Chief Operating Officer at ImagingInsight AI — driving business strategy, partnerships, and operational excellence to scale Radiogenomes AI across India.',
    photo: '/team/rahim-pathan.png',
    group: 'leadership',
  },
  {
    id: 'sushil-kachewar',
    name: 'Prof. Dr. Sushil Kachewar',
    role: 'Chief Research Head',
    qualifications: 'MD, DNB, Ph.D',
    bio: 'Professor & HOD, Department of Radio-diagnosis at DY Patil Medical College, Pimpri, Pune. Driving the research and scientific excellence behind every Radiogenomes AI report.',
    photo: '/team/sushil-kachewar.webp',
    group: 'leadership',
  },
  {
    id: 'vinod',
    name: 'Vinod',
    role: 'Director — Business Development',
    qualifications: '',
    bio: 'Leads business development and client relationships at ImagingInsight AI — opening partnerships with hospitals, diagnostic centres and labs, and staying close to clients well past onboarding.',
    photo: '/team/vinod.jpeg',
    group: 'leadership',
  },
  {
    id: 'biswajit-behera',
    name: 'Biswajit Behera',
    role: 'Sales Director',
    qualifications: '',
    bio: 'Heads sales at ImagingInsight AI — taking Radiogenomes AI and our teleradiology reporting services to hospitals, diagnostic centres and channel partners across India.',
    // No photo on file — the card renders an initials avatar instead.
    group: 'leadership',
  },
  {
    id: 'swapnali-borade',
    name: 'Dr. Swapnali Borade',
    role: 'Partner & Chief Clinical Advisor',
    qualifications: 'MBBS, DGO, DNB · Fellowship in Fetal Medicine · UK FMF Certified',
    bio: 'Chief Clinical Advisor guiding the clinical validation, report quality, and medical review workflow at Radiogenomes AI.',
    photo: '/team/swapnali-borade.webp',
    group: 'leadership',
  },
  {
    id: 'nutika-bandekar',
    name: 'Nutika Bandekar',
    role: 'Operations Manager',
    qualifications: '',
    bio: 'Leading day-to-day operations, client coordination, and ensuring smooth report delivery across all partner hospitals and labs.',
    photo: '/team/nutika-bandekar.webp',
    group: 'operations',
  },
  {
    id: 'aasiya-shaikh',
    name: 'Aasiya Shaikh',
    role: 'Tech Support Head',
    qualifications: '',
    bio: 'Leading technical support — handling partner queries, connectivity issues, and keeping platform uptime steady for every client.',
    photo: '/team/aasiya-shaikh.jpeg',
    group: 'operations',
  },
  {
    id: 'sahil-diwan',
    name: 'Sahil Diwan',
    role: 'Deployment Head',
    qualifications: '',
    bio: 'Heading deployment — taking the platform live at partner sites, from onboarding and integration through to handover.',
    photo: '/team/sahil-diwan.jpeg',
    group: 'operations',
  },
];
