/** Company-wide details reused across the nav, contact section and footer. */

export const site = {
  name: 'C-WAD Consultancy Ltd',
  shortName: 'C-WAD Consultancy',
  tagline: 'Strategic Excellence',
  title: 'C-WAD Consultancy Ltd',
  description: 'Insurance & business services tailored to unlock growth.',
  email: 'wmkgeorge@cwad-consultancy.com',
  logo: '/pnglogog.png',
  footerBlurb:
    'Leading consultancy specializing in insurance risk management, strategic business solutions, and regulatory compliance across regulated markets.',
}

export const navLinks = [
  { label: 'Approach', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Team', href: '/#team' },
  { label: 'Contact', href: '/#contact' },
]

export const offices = [
  {
    country: 'Sierra Leone',
    address: '97D Fadika Lane, Banana Water, Congo Cross, Freetown',
    phone: '+232 78 801 975',
    tel: '+23278801975',
  },
  {
    country: 'The Gambia',
    address: 'Bakoteh Layout, Banjul',
    phone: '+220 325 1984',
    tel: '+2203251984',
  },
  {
    country: 'United Kingdom',
    address: 'Barking, Jhumat House, 160 London Road, IG11 8BB',
    phone: '+44 785 906 5342',
    tel: '+447859065342',
  },
]

/** Footer contact list uses a shorter country label than the contact panel. */
export const footerOffices = [
  { label: 'Sierra Leone', address: offices[0].address, phone: offices[0].phone, tel: offices[0].tel },
  { label: 'Gambia', address: offices[1].address, phone: offices[1].phone, tel: offices[1].tel },
  { label: 'UK', address: offices[2].address, phone: offices[2].phone, tel: offices[2].tel },
]

export const socials = {
  linkedin: 'https://www.linkedin.com/company/cwad-consultancy',
  twitter: 'https://twitter.com/cwadconsultancy',
  instagram: 'https://www.instagram.com/cwadconsultancy',
}

export const waicaUrl = 'https://waica.net/countrie/sierra-leone/'

export const partners = [
  { name: 'Aveni Re', href: 'https://aveni-re.com', logo: '/Partners/aveni-re.com.png' },
  { name: 'Ghana Re', href: 'https://ghanare.com', logo: '/Partners/ghanare.com.jpeg' },
  { name: 'Guaranty Re', href: 'https://guarantre.com', logo: '/Partners/guarantre.com.avif' },
  { name: 'Labuan Re', href: 'https://labuanre.com.my', logo: '/Partners/labuanre.com.png' },
  {
    name: 'Neema Underwriting',
    href: 'https://neema-underwriting.com',
    logo: '/Partners/neema-underwriting.com.png',
  },
  { name: 'WAICA', href: waicaUrl, logo: '/Partners/waica.net.png' },
]

export const footerLinks = {
  company: [
    { label: 'About Us', href: '/#team' },
    { label: 'Our Services', href: '/#services' },
    { label: 'Why Choose Us', href: '/#why-choose-us' },
    { label: 'Contact', href: '/#contact' },
  ],
  services: [
    { label: 'Risk Management', href: '/#services' },
    { label: 'Strategic Consulting', href: '/#services' },
    { label: 'Regulatory Compliance', href: '/#services' },
    { label: 'Business Growth', href: '/#services' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}
