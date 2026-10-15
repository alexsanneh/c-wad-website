export type Offering = {
  title: string
  description: string
  items: Array<string>
}

export type ApproachStep = {
  title: string
  description: string
}

export type ServicePage = {
  slug: string
  badge: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  offerings: Array<Offering>
  approach: Array<ApproachStep>
  whyChooseUs: Array<string>
  ctaHeading: string
}

const sharedCtaBody =
  "Let's discuss how we can help your organization achieve its goals. Contact us today for a consultation."

export const servicePageCtaBody = sharedCtaBody

export const servicePages: Array<ServicePage> = [
  {
    slug: 'insurance-risk-management',
    badge: 'Comprehensive Protection',
    title: 'Insurance & Risk Management',
    metaTitle: 'Insurance & Risk Management | C-WAD Consultancy',
    metaDescription:
      'Comprehensive insurance solutions, risk management consulting, reinsurance services, and brokerage expertise to protect and grow your business.',
    intro:
      'Navigate the complex landscape of insurance and risk management with confidence. Our expert consultants provide independent brokerage services, strategic risk advisory, reinsurance solutions, and claims support to protect your organization and optimize your total cost of risk.',
    offerings: [
      {
        title: 'Insurance Brokering',
        description:
          'Expert intermediary services connecting you with the right insurance coverage at competitive rates.',
        items: [
          'Property and casualty insurance placement',
          'Life and health insurance solutions',
          'Commercial and specialty insurance',
          'Policy review and optimization',
          'Claims support and advocacy',
          'Multi-carrier market access',
        ],
      },
      {
        title: 'Risk Management Consulting',
        description:
          'Strategic guidance to identify, assess, and mitigate risks across your organization.',
        items: [
          'Comprehensive risk identification and assessment',
          'Risk mitigation strategy development',
          'Business continuity and disaster recovery planning',
          'Regulatory compliance advisory',
          'Enterprise risk management frameworks',
          'Insurance program optimization',
        ],
      },
      {
        title: 'Reinsurance Services',
        description:
          'Sophisticated reinsurance solutions to manage capital efficiency and catastrophic exposures.',
        items: [
          'Treaty reinsurance structuring',
          'Facultative reinsurance placement',
          'Retrocession program design',
          'Actuarial analysis and pricing support',
          'Portfolio risk optimization',
          'Regulatory capital management',
        ],
      },
      {
        title: 'Claims Management',
        description:
          'Expert support throughout the claims process to maximize recovery and minimize disruption.',
        items: [
          'Immediate post-incident advisory',
          'Claims preparation and documentation',
          'Loss valuation and quantification',
          'Insurer negotiation and advocacy',
          'Interim payment facilitation',
          'Policy coverage analysis',
        ],
      },
    ],
    approach: [
      {
        title: 'Discovery & Assessment',
        description:
          'We conduct a comprehensive analysis of your current risk profile, insurance portfolio, and organizational objectives to identify gaps and opportunities.',
      },
      {
        title: 'Strategy Development',
        description:
          'Our team designs tailored solutions that align with your risk tolerance, budget constraints, and business goals, leveraging our market expertise and relationships.',
      },
      {
        title: 'Implementation & Monitoring',
        description:
          'We execute the agreed strategy, place coverage, and provide ongoing monitoring and adjustment to ensure continued effectiveness as your business evolves.',
      },
    ],
    whyChooseUs: [
      'Over 20 years of combined experience in insurance and risk management',
      'Independent, vendor-agnostic advice focused on your best interests',
      'Access to multiple carriers and reinsurance markets globally',
      'Deep expertise in regulated industries and complex risks',
      'Proactive risk mitigation strategies beyond insurance placement',
      'Support across 9 regulated markets and jurisdictions',
      'Claims advocacy with proven track record of successful recoveries',
      'Integration of traditional insurance with emerging risk solutions',
      'Compliance with ISO 31000, NAIC, and international standards',
    ],
    ctaHeading: 'Protect your organization today',
  },
  {
    slug: 'business-consulting',
    badge: 'Strategic Excellence',
    title: 'Business Consulting',
    metaTitle: 'Business Consulting Services | C-WAD Consultancy',
    metaDescription:
      'Strategic business consulting services including strategy development, operations optimization, and organizational transformation to drive growth and efficiency.',
    intro:
      "Transform your organization with strategic consulting services that drive measurable results. Our experienced consultants partner with you to tackle complex challenges, optimize operations, and build the capabilities needed to thrive in today's dynamic business environment.",
    offerings: [
      {
        title: 'Strategy Consulting',
        description:
          'Develop and execute strategic plans that position your organization for sustainable competitive advantage.',
        items: [
          'Corporate strategy formulation and planning',
          'Market entry and expansion strategies',
          'Competitive analysis and positioning',
          'Mergers and acquisitions advisory',
          'Business model innovation',
          'Strategic roadmap development and execution',
        ],
      },
      {
        title: 'Operations Consulting',
        description:
          'Optimize your operations to improve efficiency, reduce costs, and enhance service delivery.',
        items: [
          'Process improvement and optimization',
          'Supply chain and logistics enhancement',
          'Operational efficiency assessments',
          'Cost reduction strategies',
          'Quality management systems',
          'Performance measurement frameworks',
        ],
      },
      {
        title: 'Digital Transformation',
        description:
          'Navigate the digital economy with technology-enabled strategies that drive innovation and growth.',
        items: [
          'Digital strategy and roadmap development',
          'Technology selection and implementation',
          'Change management and adoption support',
          'Cloud migration and modernization',
          'Data analytics and AI integration',
          'Cybersecurity and risk mitigation',
        ],
      },
      {
        title: 'Organizational Development',
        description:
          'Build organizational capabilities and culture to support your strategic objectives.',
        items: [
          'Organizational design and restructuring',
          'Leadership development programs',
          'Talent acquisition and retention strategies',
          'Performance management systems',
          'Culture transformation initiatives',
          'Succession planning and development',
        ],
      },
    ],
    approach: [
      {
        title: 'Diagnostic Assessment',
        description:
          'We conduct thorough analysis of your business challenges, organizational capabilities, and market dynamics to identify key opportunities and constraints.',
      },
      {
        title: 'Solution Design',
        description:
          'Our consultants develop customized strategies and actionable recommendations that address your specific needs while building on your existing strengths.',
      },
      {
        title: 'Implementation Support',
        description:
          'We work alongside your team to execute recommendations, transfer knowledge, and ensure sustainable results through hands-on guidance and capability building.',
      },
    ],
    whyChooseUs: [
      'Cross-industry expertise with deep sector specialization',
      'Practical, implementation-focused recommendations',
      'Data-driven insights backed by rigorous analysis',
      'Collaborative approach that builds internal capabilities',
      'Proven methodologies from leading consulting practices',
      'Experience managing complex, multi-stakeholder initiatives',
      'Focus on measurable outcomes and value creation',
      'Flexibility to scale engagement based on your needs',
      'Integration of strategy, operations, and technology perspectives',
    ],
    ctaHeading: 'Ready to transform your business?',
  },
  {
    slug: 'digital-marketing',
    badge: 'Growth Through Digital',
    title: 'Digital Marketing Services',
    metaTitle: 'Digital Marketing Services | C-WAD Consultancy',
    metaDescription:
      'Comprehensive digital marketing solutions including SEO, social media management, PPC advertising, and content marketing to grow your online presence.',
    intro:
      'Amplify your online presence and drive measurable business results with our comprehensive digital marketing services. From SEO and content marketing to paid advertising and social media management, we create integrated strategies that connect you with your target audience and fuel sustainable growth.',
    offerings: [
      {
        title: 'Search Engine Optimization (SEO)',
        description:
          'Improve your visibility and rankings on search engines to drive qualified organic traffic.',
        items: [
          'Technical SEO audits and optimization',
          'Keyword research and strategy development',
          'On-page and off-page SEO implementation',
          'Local SEO for multi-location businesses',
          'SEO performance tracking and reporting',
          'Content optimization for search intent',
        ],
      },
      {
        title: 'Social Media Marketing',
        description:
          'Build and engage your audience across major social platforms with strategic content and community management.',
        items: [
          'Social media strategy and planning',
          'Content creation and scheduling',
          'Community management and engagement',
          'Influencer partnership coordination',
          'Social media advertising campaigns',
          'Analytics and performance optimization',
        ],
      },
      {
        title: 'Pay-Per-Click (PPC) Advertising',
        description:
          'Drive immediate results with targeted paid advertising campaigns across search and social platforms.',
        items: [
          'Google Ads campaign management',
          'Social media advertising (Facebook, LinkedIn, Instagram)',
          'Display and remarketing campaigns',
          'Ad copy and creative development',
          'Bid strategy optimization',
          'Conversion tracking and ROI analysis',
        ],
      },
      {
        title: 'Content Marketing & Strategy',
        description:
          'Create compelling content that attracts, engages, and converts your target audience.',
        items: [
          'Content strategy and editorial planning',
          'Blog writing and article creation',
          'Video marketing and production',
          'Infographics and visual content',
          'Email marketing campaigns',
          'Content distribution and promotion',
        ],
      },
    ],
    approach: [
      {
        title: 'Audit & Strategy',
        description:
          'We analyze your current digital presence, competitive landscape, and target audience to develop a comprehensive marketing strategy aligned with your business objectives.',
      },
      {
        title: 'Implementation & Creation',
        description:
          'Our team executes the strategy through content creation, campaign setup, and optimization across selected digital channels, ensuring consistent brand messaging.',
      },
      {
        title: 'Monitor & Optimize',
        description:
          'We continuously track performance metrics, conduct A/B testing, and refine strategies to maximize ROI and achieve sustainable growth.',
      },
    ],
    whyChooseUs: [
      'Data-driven strategies backed by analytics and performance metrics',
      'Multi-channel expertise across SEO, PPC, social media, and content',
      'Transparent reporting with clear ROI tracking',
      'Agile approach that adapts to market trends and algorithm changes',
      'Industry-specific experience in regulated sectors',
      'Integrated campaigns that work across all touchpoints',
      'Experienced team staying current with digital marketing evolution',
      'Focus on sustainable, long-term growth over quick wins',
      'Custom solutions tailored to your business size and goals',
    ],
    ctaHeading: 'Ready to grow your digital presence?',
  },
  {
    slug: 'professional-writing',
    badge: 'Words That Work',
    title: 'Professional Writing Services',
    metaTitle: 'Professional Writing Services | C-WAD Consultancy',
    metaDescription:
      'Expert writing services including business writing, technical documentation, copywriting, and content creation to enhance your professional communication.',
    intro:
      'Elevate your professional communication with expert writing services tailored to your needs. From business proposals and technical documentation to compelling marketing copy, our skilled writers deliver high-quality content that enhances clarity, credibility, and impact.',
    offerings: [
      {
        title: 'Business Writing',
        description:
          'Professional business documents that communicate your message clearly and effectively to stakeholders.',
        items: [
          'Business proposals and presentations',
          'Executive reports and white papers',
          'Business plans and strategic documents',
          'Corporate communications and announcements',
          'Email and internal communications',
          'Meeting minutes and memorandums',
        ],
      },
      {
        title: 'Insurance & Technical Writing',
        description:
          'Specialized writing for the insurance industry and technical domains requiring precision and expertise.',
        items: [
          'Insurance policy documentation',
          'Claims reports and submissions',
          'Risk assessment reports',
          'Regulatory compliance documentation',
          'Technical specifications and manuals',
          'Industry-specific content and analysis',
        ],
      },
      {
        title: 'Marketing Copywriting',
        description:
          'Compelling copy that resonates with your audience and drives engagement and conversions.',
        items: [
          'Website copy and landing pages',
          'Marketing collateral and brochures',
          'Email marketing campaigns',
          'Social media content',
          'Advertisement copy',
          'Brand messaging and taglines',
        ],
      },
      {
        title: 'Editorial Services',
        description:
          'Comprehensive editing and proofreading to ensure your content is polished, accurate, and error-free.',
        items: [
          'Copy editing and proofreading',
          'Content structure and flow optimization',
          'Fact-checking and verification',
          'Style guide development and adherence',
          'Formatting and consistency review',
          'Quality assurance and final review',
        ],
      },
    ],
    approach: [
      {
        title: 'Brief & Research',
        description:
          'We gather detailed requirements, understand your audience and objectives, and conduct necessary research to ensure accuracy and relevance.',
      },
      {
        title: 'Draft & Refine',
        description:
          'Our skilled writers create initial drafts that capture your message effectively, followed by internal review and refinement for quality and clarity.',
      },
      {
        title: 'Review & Deliver',
        description:
          'We collaborate with you through revision rounds, incorporate feedback, and deliver polished final content that meets your specifications and deadlines.',
      },
    ],
    whyChooseUs: [
      'Experienced writers with industry-specific expertise',
      'Clear, professional communication tailored to your audience',
      'Fast turnaround times without compromising quality',
      'Meticulous attention to detail and accuracy',
      'Confidentiality and professionalism guaranteed',
      'Flexible engagement models from one-off projects to retainers',
      'Style consistency across all your communications',
      'Native English speakers with strong grammar and style',
      'Expertise in technical and regulated industry content',
    ],
    ctaHeading: 'Ready to enhance your communication?',
  },
]

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug)
}
