export type TeamMember = {
  id: string
  fullName: string
  jobTitle: string
  department: string
  email: string
  image: string
  bio: string
  credentials: Array<string>
  specializations: Array<string>
  linkedin?: string
}

export const lead: TeamMember = {
  id: 'michael-kuti-george',
  fullName: 'Rev. Michael Winston Kuti-George',
  jobTitle: 'CEO/Managing Director',
  department: 'Technical',
  email: 'wmkgeorge@cwad-consultancy.com',
  image: '/Employees/Kutigeorge.jpeg',
  bio: 'Rev. Michael Winston Kuti-George is an insurance and reinsurance specialist with more than twenty-one years of leadership experience spanning West Africa and the United Kingdom. As Founder and Chief Executive Officer of C-WAD Consultancy, he combines deep technical expertise in reinsurance underwriting, claims management, policy development, and risk strategy with senior executive experience gained across broking, underwriting, and technical management roles. His blend of market knowledge, regulatory discipline, and strategic leadership positions C-WAD to deliver world-class insurance and business advisory solutions across the region.',
  credentials: ['LLM (Insurance Law)', 'MBA', 'FCII', 'FABE', 'SIRM', 'CMgr MCMI'],
  specializations: [
    'Insurance Risk Management',
    'Strategic Business Consulting',
    'Regulatory Compliance',
  ],
  linkedin:
    'https://www.linkedin.com/in/rev-michael-winston-kuti-georgellm-ins-law-mba-fcii-fabe-cmgr-mcmi-385b3a61',
}

/** Seated portrait used by the hero collage. */
export const leadSeatedPortrait = '/Employees/michael-kuti-george-seated.jpeg'

export const otherMembers: Array<TeamMember> = [
  {
    id: 'abdul-malick-sesay',
    fullName: 'Abdul Malick Sesay',
    jobTitle: 'Motor Manager',
    department: 'Operations',
    email: 'amalick@cwad-consultancy.com',
    image: '/Employees/malick.jpg',
    bio: 'Abdul Malick Sesay is a seasoned insurance professional with over 13 years of progressive experience in the Sierra Leone insurance industry. Having served across Technical, Claims, Reinsurance, and Motor Departments, he brings deep technical expertise in motor insurance portfolio management, underwriting operations, policy administration, and regulatory compliance.',
    credentials: ['Dip. Insurance (WAII)', 'IFC Cert.', 'HDip IT'],
    specializations: [
      'Motor Insurance',
      'Underwriting Operations',
      'Claims Management',
      'Policy Administration',
    ],
  },
  {
    id: 'esther-herman-smith',
    fullName: 'Esther Herman-Smith',
    jobTitle: 'Underwriter',
    department: 'Technical',
    email: 'esmith@cwad-consultancy',
    image: '/Employees/esther.jpg',
    bio: 'Esther Salma Herman-Smith is a dedicated insurance and underwriting professional at C-WAD Consultancy with hands-on experience in risk assessment, policy design, and claims oversight. She combines technical underwriting expertise with a client-first approach to deliver tailored, pragmatic insurance solutions.',
    credentials: [],
    specializations: ['Underwriting', 'Risk Assessment', 'Policy Design'],
  },
  {
    id: 'rosetta-esther-hazeley',
    fullName: 'Rosetta Esther Hazeley',
    jobTitle: 'HR Manager (Consultant)',
    department: 'Operations',
    email: 'erosehaz@gmail.com',
    image: '/Employees/rosetta-hazeley.jpg',
    bio: 'Rosetta Esther Hazeley is an HR and operations consultant with more than fourteen years of experience across UN agencies, international NGOs, and programme delivery environments. She brings practical strength in human resource coordination, budgeting, monitoring and evaluation, stakeholder engagement, and operational execution, helping organisations build disciplined teams and dependable delivery systems.',
    credentials: ['MBA', 'BSc Business Administration'],
    specializations: [
      'HR Coordination',
      'Programme Management',
      'Monitoring & Evaluation',
      'Operations Support',
    ],
  },
  {
    id: 'sanna-sanneh',
    fullName: 'Sanna Sanneh',
    jobTitle: 'Digital Marketing Strategist',
    department: 'Marketing',
    email: 'alexsanneh@gmail.com',
    image: '/Employees/sanna-sanneh.jpg',
    bio: 'Sanna Sanneh is a digital marketing strategist and web designer focused on turning brand visibility into measurable growth. With more than six years of experience across startups, non-profits, e-commerce, and technology-led teams, he brings strength in SEO, social media strategy, funnel design, conversion optimisation, and marketing automation to help clients build stronger demand engines.',
    credentials: ['Google Analytics Certified', 'Google Ads Certified'],
    specializations: ['Digital Strategy', 'SEO', 'Web Design', 'Conversion Optimisation'],
  },
]
