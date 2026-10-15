import type { ComponentType, SVGProps } from 'react'
import {
  LightningBoltIcon,
  PencilAltIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
} from '../components/icons'

export type SubService = {
  name: string
  description: string
}

export type Service = {
  id: string
  slug: string
  title: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  description: string
  link: string
  subServices: Array<SubService>
  featured: { title: string; description: string }
}

/** The four practice areas shown in the home page service switcher. */
export const services: Array<Service> = [
  {
    id: 'insurance',
    slug: 'insurance-risk-management',
    title: 'Insurance & Risk Management',
    icon: ShieldCheckIcon,
    description:
      'Comprehensive coverage design, risk mitigation strategies, and claims support tailored to your operations.',
    link: '/services/insurance-risk-management',
    subServices: [
      { name: 'Auto Insurance', description: 'Covers damages and injuries from vehicle accidents' },
      { name: 'Life Insurance', description: 'Financial security for beneficiaries' },
      { name: "Homeowner's Insurance", description: 'Protects home structure and belongings' },
      { name: 'Health Insurance', description: 'Mitigates medical and healthcare costs' },
      { name: 'Commercial Vehicle', description: 'Coverage for business vehicles' },
      { name: 'Risk Identification', description: 'Pinpoint threats and evaluate impact' },
      { name: 'Risk Mitigation', description: 'Decrease probability and severity of risks' },
      { name: 'Risk Transfer', description: 'Shift financial consequences via insurance' },
      { name: 'Disaster Recovery', description: 'Business continuity and recovery plans' },
    ],
    featured: {
      title: 'AJG Business Assist',
      description:
        'Expert claims management with over 20 years of experience. Fast resolution for business interruption and material damage claims.',
    },
  },
  {
    id: 'consulting',
    slug: 'business-consulting',
    title: 'Business Consulting',
    icon: TrendingUpIcon,
    description:
      'Strategy, operations, and financial guidance to drive sustainable growth across your portfolio.',
    link: '/services/business-consulting',
    subServices: [
      { name: 'Strategy Consulting', description: 'Long-term growth planning and execution' },
      { name: 'Operations Consulting', description: 'Optimize daily operations and processes' },
      { name: 'Marketing & Sales', description: 'Develop marketing plans and sales performance' },
      { name: 'HR Consulting', description: 'Talent acquisition and recruitment expertise' },
      { name: 'IT Consulting', description: 'Leverage technology for better performance' },
      { name: 'Financial Advisory', description: 'Financial planning and investment strategies' },
    ],
    featured: {
      title: 'Cross-Functional Enablement',
      description:
        'Roadmaps and process optimization designed for leadership teams driving organizational change.',
    },
  },
  {
    id: 'marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: LightningBoltIcon,
    description:
      'SEO, PPC, and social activation that translate insurance expertise into measurable demand.',
    link: '/services/digital-marketing',
    subServices: [
      { name: 'SEO', description: 'Improve visibility and search rankings' },
      { name: 'Social Media Marketing', description: 'Promote on Instagram, Facebook, LinkedIn' },
      { name: 'PPC Advertising', description: 'Pay-per-click campaigns on search and social' },
      { name: 'Content Marketing', description: 'Blogs, videos, infographics, and web content' },
      { name: 'Email Marketing', description: 'Personalized nurture and promotion campaigns' },
      { name: 'Website Development', description: 'User-friendly, mobile-responsive sites' },
      { name: 'Reputation Management', description: 'Monitor and influence brand perception' },
      { name: 'Affiliate Marketing', description: 'Collaborate with influencers' },
      { name: 'Video Marketing', description: 'Engage consumers through video content' },
    ],
    featured: {
      title: 'Analytics & Reporting',
      description:
        'Executive-ready dashboards and performance reporting that connect marketing metrics to business outcomes.',
    },
  },
  {
    id: 'writing',
    slug: 'professional-writing',
    title: 'Professional Writing',
    icon: PencilAltIcon,
    description:
      'Precise, high-impact business communication from board reports to policy documentation.',
    link: '/services/professional-writing',
    subServices: [
      { name: 'Business Writing', description: 'Proposals, reports, and brand communication' },
      { name: 'Insurance Writing', description: 'Policies, claims, and compliance documentation' },
      { name: 'Copywriting', description: 'Ad campaigns and website content' },
      { name: 'Essay Writing', description: 'Academic assignments and research papers' },
      { name: 'Presentation', description: 'Content creation and delivery coaching' },
      { name: 'Proofreading', description: 'Error-free, polished documents' },
    ],
    featured: {
      title: 'Regulated Writing',
      description:
        'Thought leadership and proposal development for regulated industries, delivered at pace.',
    },
  },
]

/** Options offered by the "Service of Interest" field on the contact form. */
export const serviceOptions = [
  'Insurance & Risk Management',
  'Business Consulting',
  'Digital Marketing',
  'Professional Writing',
  'Other',
]
