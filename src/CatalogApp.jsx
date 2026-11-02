import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronRight, CircleHelp, DraftingCompass, Factory, Layers3, Mail, MapPin, Menu, Phone, Ruler, ShieldCheck, X } from 'lucide-react'

const company = {
  name: 'Steelgrave Private Limited',
  email: 'info@steelgrave.in',
  phone: '+91 9824118145',
  phoneLink: '+919824118145',
  address: 'Arise Industrial Park, Plot No. 7, Phase 4, GIDC Chhatral, Chhatral, Kalol, Gujarat 382729, India',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Arise%20Industrial%20Park%2C%20Plot%20No.7%2C%20Phase%204%2C%20GIDC%20Chhatral%2C%20Chhatral%2C%20Kalol%2C%20Gujarat%20382729%2C%20India',
  whatsappUrl: 'https://wa.me/919824118145?text=Hello%20Steelgrave%2C%20I%20would%20like%20to%20discuss%20a%20steel%20product%20requirement.',
}

const media = {
  hero: '/photos/facility/Gemini_Generated_Image_1me6d71me6d71me6.jpg',
  fabrication: '/photos/products/11.jpeg',
}

const products = [
  {
    slug: 'round-pipes-tubes',
    title: 'Stainless Steel Round Pipes and Tubes',
    shortTitle: 'Round pipes and tubes',
    shape: 'round',
    image: '/photos/products/Steel%20round%20pipes.avif',
    imageAlt: 'Steel round pipe product photo supplied by Steelgrave',
    heroNote: 'Product photo supplied by Steelgrave.',
    cardImage: '/photos/products/Steel%20round%20pipes.avif',
    cardImageAlt: 'Steel round pipe product photo supplied by Steelgrave',
    cardImageNote: 'Product photo supplied by Steelgrave; dimensions are confirmed per enquiry.',
    description: 'Round stainless-steel pipes and tubes have a hollow cylindrical section. Steelgrave manufactures pipe products from stainless-steel coil and works primarily with SS 202 and SS 304. Share whether the requirement is mechanical tubing or industrial piping, along with the intended service, so the correct dimensional basis and specification can be reviewed.',
    overview: 'Cylindrical hollow sections, specified around the job.',
    use: 'Potential uses include fabrication, general industrial applications, suitable architectural and commercial work, and equipment or component manufacturing where the product specification and service conditions permit.',
    applications: ['Fabrication and assemblies', 'General industrial use', 'Suitable architectural and commercial work', 'Equipment and component manufacturing where the specified dimensions and service conditions permit'],
    icon: Layers3,
  },
  {
    slug: 'square-tubes',
    title: 'Stainless Steel Square Tubes',
    shortTitle: 'Square tubes',
    shape: 'square',
    image: '/photos/products/Steel%20Square%20pipe.jpg',
    imageAlt: 'Steel square pipe product photo supplied by Steelgrave',
    heroNote: 'Product photo supplied by Steelgrave.',
    cardImage: '/photos/products/Steel%20Square%20pipe.jpg',
    cardImageAlt: 'Steel square pipe product photo supplied by Steelgrave',
    cardImageNote: 'Product photo supplied by Steelgrave; dimensions are confirmed per enquiry.',
    description: 'Square stainless-steel tubes are hollow sections with equal external width and height. Product selection depends on the outside dimensions, wall thickness, corner geometry, length, grade, finish, and how the section will be fabricated or used.',
    overview: 'Equal external sides with a hollow interior.',
    use: 'Potential uses include fabricated frames, furniture, architectural assemblies, and commercial fabrication, subject to the specified grade, dimensions, and service requirements.',
    applications: ['Fabricated frames', 'Furniture and commercial fabrication', 'Suitable structural assemblies', 'Architectural assemblies where grade and service conditions permit'],
    icon: Ruler,
  },
  {
    slug: 'rectangular-tubes',
    title: 'Stainless Steel Rectangular Tubes',
    shortTitle: 'Rectangular tubes',
    shape: 'rectangular',
    image: '/photos/products/Steel%20Rectangle%20pipe.jpeg',
    imageAlt: 'Steel rectangular pipe product photo supplied by Steelgrave',
    heroNote: 'Product photo supplied by Steelgrave.',
    cardImage: '/photos/products/Steel%20Rectangle%20pipe.jpeg',
    cardImageAlt: 'Steel rectangular pipe product photo supplied by Steelgrave',
    cardImageNote: 'Product photo supplied by Steelgrave; dimensions are confirmed per enquiry.',
    description: 'Rectangular stainless-steel tubes have different external width and height dimensions around a hollow centre. Confirm the section dimensions, wall thickness, corner radius, straightness and twist requirements, grade, finish, and length for the project.',
    overview: 'A hollow section shaped around two different external dimensions.',
    use: 'Potential uses include fabrication frameworks, furniture components, architectural applications, and general engineering or commercial structures, subject to the specified grade and service conditions.',
    applications: ['Fabrication frameworks', 'Furniture components', 'Architectural applications', 'General engineering and commercial structures where specified service requirements permit'],
    icon: DraftingCompass,
  },
]

const roundPipeReference = [
  { nb: '1/2" NB', dn: 15, od: 21.34, walls: [{ schedule: 'Sch 10S', thickness: 2.11 }, { schedule: 'Sch 40S', thickness: 2.77 }] },
  { nb: '3/4" NB', dn: 20, od: 26.67, walls: [{ schedule: 'Sch 10S', thickness: 2.11 }, { schedule: 'Sch 40S', thickness: 2.87 }] },
  { nb: '1" NB', dn: 25, od: 33.4, walls: [{ schedule: 'Sch 10S', thickness: 2.77 }, { schedule: 'Sch 40S', thickness: 3.38 }] },
  { nb: '1-1/2" NB', dn: 40, od: 48.26, walls: [{ schedule: 'Sch 10S', thickness: 2.77 }, { schedule: 'Sch 40S', thickness: 3.68 }] },
  { nb: '2" NB', dn: 50, od: 60.33, walls: [{ schedule: 'Sch 10S', thickness: 2.77 }, { schedule: 'Sch 40S', thickness: 3.91 }] },
  { nb: '3" NB', dn: 80, od: 88.9, walls: [{ schedule: 'Sch 10S', thickness: 3.05 }, { schedule: 'Sch 40S', thickness: 5.49 }] },
  { nb: '4" NB', dn: 100, od: 114.3, walls: [{ schedule: 'Sch 10S', thickness: 3.05 }, { schedule: 'Sch 40S', thickness: 6.02 }] },
  { nb: '6" NB', dn: 150, od: 168.28, walls: [{ schedule: 'Sch 10S', thickness: 3.4 }, { schedule: 'Sch 40S', thickness: 7.11 }] },
  { nb: '12" NB', dn: 300, od: 323.85, walls: [{ schedule: 'Sch 10S', thickness: 4.57 }, { schedule: 'Sch 40S', thickness: 9.53 }] },
]

const squareTubeReference = [
  { side: 20, walls: [1.2, 1.5] },
  { side: 25, walls: [1.5, 2] },
  { side: 40, walls: [1.5, 2] },
  { side: 50, walls: [2, 3] },
  { side: 80, walls: [2, 3] },
  { side: 100, walls: [3, 4] },
]

const rectangularTubeReference = [
  { width: 40, height: 20, walls: [1.5, 2] },
  { width: 50, height: 25, walls: [1.5, 2] },
  { width: 60, height: 40, walls: [2, 3] },
  { width: 80, height: 40, walls: [2, 3] },
  { width: 100, height: 50, walls: [2, 3] },
  { width: 150, height: 50, walls: [3, 4] },
]

function formatMillimetres(value) {
  return Number(value.toFixed(2)).toString()
}

const galleryItems = [
  ['Architectural entrance', 'products/1.jpeg'],
  ['Stainless-steel fabricated structure', 'products/11.jpeg'],
  ['Stainless-steel gate and railing', 'products/12.jpeg'],
  ['Architectural exterior work', 'products/13.jpeg'],
  ['Fabricated stainless-steel components', 'products/14.jpeg'],
  ['Stainless-steel door and grille', 'products/2.jpeg'],
  ['Stainless-steel kitchen counter', 'products/8.jpeg'],
  ['Stainless-steel wire basket', 'products/bin.jpeg'],
  ['Fabricated stainless-steel cabinets', 'products/cabin.jpeg'],
  ['Product installation', 'products/Screenshot 2026-11-01 183338.png'],
  ['Stainless-steel retail shelving', 'products/shelves.jpeg'],
  ['Product design reference', 'products/WhatsApp Image 2026-10-31 at 11.54.03 AM.jpeg'],
  ['Stainless-steel outdoor swing', 'products/WhatsApp Image 2026-10-31 at 11.54.04 AM.jpeg'],
  ['Stainless-steel swing installation', 'products/WhatsApp Image 2026-10-31 at 11.54.05 AM.jpeg'],
  ['Stainless-steel entrance gate', 'products/WhatsApp Image 2026-10-31 at 11.58.32 AM.jpeg'],
  ['Stainless-steel security door', 'products/WhatsApp Image 2026-10-31 at 11.59.52 AM.jpeg'],
  ['Workshop and stainless-steel stock', 'facility/9.jpeg'],
  ['Tube production equipment', 'facility/Screenshot 2026-11-01 182635.png'],
  ['Stainless-steel tube processing', 'facility/Screenshot 2026-11-01 182717.png'],
  ['Tube forming equipment', 'facility/Screenshot 2026-11-01 183143.png'],
  ['Tube forming process', 'facility/Screenshot 2026-11-01 183234.png'],
  ['Production activity', 'facility/Screenshot 2026-11-01 183541.png'],
  ['Production line', 'facility/Screenshot 2026-11-01 183643.png'],
  ['Production line', 'facility/Screenshot 2026-11-01 183707.png'],
  ['Tube forming process', 'facility/Screenshot 2026-11-01 183746.png'],
  ['Workshop machinery', 'facility/Screenshot 2026-11-01 183842.png'],
  ['Workshop machinery', 'facility/Screenshot 2026-11-01 183912.png'],
  ['Coil processing equipment', 'facility/Screenshot 2026-11-01 183954.png'],
  ['Stainless-steel coil handling', 'facility/Screenshot 2026-11-01 184038.png'],
  ['Steelgrave facility exterior', 'facility/steel main door.jpeg'],
  ['Steelgrave visual identity concept', 'facility/Gemini_Generated_Image_1me6d71me6d71me6.jpg', true],
  ['Steelgrave manufacturing visual concept', 'facility/Gemini_Generated_Image_81buhf81buhf81bu.jpg', true],
  ['Steelgrave workshop identity concept', 'facility/Gemini_Generated_Image_e2lamhe2lamhe2la.jpg', true],
].map(([category, path, isConcept = false]) => ({
  category,
  isConcept,
  image: `/photos/${path.split('/').map(encodeURIComponent).join('/')}`,
}))

function Brand({ onClick }) {
  return <Link className="brand" to="/" onClick={onClick} aria-label="Steelgrave Private Limited home"><img className="brand-logo" src="/steel%20png.png" alt="Steelgrave Private Limited" /></Link>
}

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const productMenuRef = useRef(null)
  const closeMenu = () => {
    setOpen(false)
    productMenuRef.current?.removeAttribute('open')
  }

  useEffect(() => {
    productMenuRef.current?.removeAttribute('open')
  }, [location.pathname])

  return (
    <header className="catalog-header">
      <div className="catalog-nav container">
        <Brand onClick={closeMenu} />
        <nav className={open ? 'catalog-links catalog-links-open' : 'catalog-links'} aria-label="Main navigation">
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <details className="nav-dropdown" ref={productMenuRef}>
            <summary>Products <ChevronDown size={13} /></summary>
            <div className="nav-dropdown-panel">
              <NavLink to="/products" onClick={closeMenu}>All products</NavLink>
              {products.map((product) => <NavLink key={product.slug} to={`/products/${product.slug}`} onClick={closeMenu}>{product.shortTitle}</NavLink>)}
              <NavLink to="/materials/ss-202" onClick={closeMenu}>SS 202</NavLink>
              <NavLink to="/materials/ss-304" onClick={closeMenu}>SS 304</NavLink>
            </div>
          </details>
          <NavLink to="/manufacturing" onClick={closeMenu}>Manufacturing</NavLink>
          <NavLink to="/fabrication" onClick={closeMenu}>Fabrication</NavLink>
          <NavLink to="/quality" onClick={closeMenu}>Quality</NavLink>
          <NavLink to="/industries" onClick={closeMenu}>Industries</NavLink>
          <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <Link className="mobile-quote" to="/request-a-quote" onClick={closeMenu}>Request a quote <ArrowUpRight size={15} /></Link>
        </nav>
        <div className="catalog-actions">
          <a href={`tel:${company.phoneLink}`} aria-label={`Call ${company.phone}`}><Phone size={14} /> {company.phone}</a>
          <Link className="button button-orange button-small" to="/request-a-quote" onClick={closeMenu}>Request a quote <ArrowUpRight size={15} /></Link>
        </div>
        <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer catalog-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Brand />
          <p>Stainless-steel pipe manufacturing and fabrication in Gujarat, India.</p>
          <a className="footer-address" href={company.mapUrl} target="_blank" rel="noreferrer"><MapPin size={16} /> {company.address}</a>
        </div>
        <div className="footer-links">
          <div><span>Company</span><Link to="/about">About us</Link><Link to="/manufacturing">Manufacturing</Link><Link to="/fabrication">Fabrication</Link><Link to="/quality">Quality</Link><Link to="/industries">Industries</Link><Link to="/gallery">Gallery</Link></div>
          <div><span>Products</span>{products.map((product) => <Link key={product.slug} to={`/products/${product.slug}`}>{product.shortTitle}</Link>)}<Link to="/materials/ss-202">Stainless steel grade 202</Link><Link to="/materials/ss-304">Stainless steel grade 304</Link></div>
          <div><span>Contact</span><Link to="/request-a-quote">Request a quote</Link><a href={`mailto:${company.email}`}>{company.email}</a><a href={`tel:${company.phoneLink}`}>{company.phone}</a><a href={company.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp us</a><a href={company.mapUrl} target="_blank" rel="noreferrer">View location</a></div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {company.name}</span>
        <span>Gujarat, India</span>
        <a href="#top"><ArrowUpRight size={14} /> Back to top</a>
      </div>
    </footer>
  )
}

function Shell({ children }) {
  return <div id="top" className="site-shell"><Header />{children}<Footer /></div>
}

function SEO() {
  const location = useLocation()
  useEffect(() => {
    const page = pageMetadata[location.pathname] ?? pageMetadata['/']
    document.title = page.title
    let description = document.querySelector('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.name = 'description'
      document.head.append(description)
    }
    description.content = page.description

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = `https://steelgrave.in${location.pathname}`

    let organization = document.querySelector('script[type="application/ld+json"]')
    if (!organization) {
      organization = document.createElement('script')
      organization.type = 'application/ld+json'
      document.head.append(organization)
    }
    organization.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: company.name,
      url: 'https://steelgrave.in',
      email: company.email,
      telephone: company.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Arise Industrial Park, Plot No. 7, Phase 4, GIDC Chhatral, Chhatral',
        addressLocality: 'Kalol',
        addressRegion: 'Gujarat',
        postalCode: '382729',
        addressCountry: 'IN',
      },
    })
  }, [location.pathname])
  return null
}

const pageMetadata = {
  '/': { title: 'Stainless Steel Pipe Manufacturing in Gujarat | Steelgrave', description: 'Steelgrave Private Limited manufactures stainless-steel pipes from coil and undertakes fabrication enquiries in SS 202 and SS 304. Based in Kalol, Gujarat.' },
  '/about': { title: 'About Steelgrave Private Limited | Gujarat', description: 'Learn about Steelgrave Private Limited, a stainless-steel pipe manufacturing and fabrication business located in Kalol, Gandhinagar, Gujarat.' },
  '/products': { title: 'Stainless Steel Pipes and Tubes | Steelgrave', description: 'Explore Steelgrave stainless-steel round pipes and tubes, square tubes, and rectangular tubes. Confirm grades and dimensions with our team.' },
  '/products/round-pipes-tubes': { title: 'Stainless Steel Round Pipes and Tubes | Steelgrave', description: 'Enquire about coil-based stainless-steel round pipes and tubes in SS 202 or SS 304. Dimensions, method, and applicable specification are confirmed per order.' },
  '/products/square-tubes': { title: 'Stainless Steel Square Tubes | Steelgrave', description: 'Enquire about stainless-steel square hollow sections. Share external dimensions, wall thickness, grade, finish, and application for review.' },
  '/products/rectangular-tubes': { title: 'Stainless Steel Rectangular Tubes | Steelgrave', description: 'Enquire about stainless-steel rectangular hollow sections. Product dimensions, grade, finish, and applicable requirements are confirmed per order.' },
  '/grades': { title: 'SS 202 and SS 304 Material Information | Steelgrave', description: 'Compare general material characteristics of stainless-steel grades 202 and 304. Confirm the supplied grade and suitability for your service conditions.' },
  '/materials/ss-202': { title: 'Stainless Steel Grade 202 | Steelgrave', description: 'Practical material information for stainless steel grade 202. Confirm grade documentation and suitability for your application before ordering.' },
  '/materials/ss-304': { title: 'Stainless Steel Grade 304 | Steelgrave', description: 'Practical material information for stainless steel grade 304. Confirm grade documentation and suitability for your application before ordering.' },
  '/manufacturing': { title: 'Stainless Steel Pipe Manufacturing | Steelgrave', description: 'Learn about Steelgrave coil-based stainless-steel pipe manufacturing and the production details to confirm for each order.' },
  '/fabrication': { title: 'Stainless Steel Fabrication Enquiries | Steelgrave', description: 'Discuss stainless-steel fabrication requirements with Steelgrave. Submit your drawing, material, dimensions, and intended application for review.' },
  '/quality': { title: 'Quality and Material Assurance | Steelgrave', description: 'Discuss material identification, inspection requirements, documents, and product acceptance criteria with Steelgrave.' },
  '/industries': { title: 'Industries and Applications | Steelgrave', description: 'Explore potential applications for stainless-steel pipes, tubes, and fabrication. Final material selection depends on service conditions.' },
  '/gallery': { title: 'Steelgrave Product and Manufacturing Gallery', description: 'View photographs of stainless-steel fabrication work and manufacturing activity supplied for the Steelgrave website.' },
  '/contact': { title: 'Contact Steelgrave | Kalol, Gujarat', description: 'Contact Steelgrave Private Limited by phone, email, WhatsApp, or at Arise Industrial Park, Plot No. 7, Phase 4, GIDC Chhatral, Chhatral, Kalol, Gujarat 382729, India.' },
  '/request-a-quote': { title: 'Request a Stainless Steel Product Quote | Steelgrave', description: 'Send Steelgrave your product, grade, dimensional, quantity, and application requirements to start a quotation enquiry.' },
}

function Heading({ eyebrow, title, text, light = false }) {
  return <div className={`section-heading${light ? ' section-heading-light' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

function CTA({ children = 'Request a quote', to = '/request-a-quote', product, dark = false }) {
  const href = product ? `${to}?product=${encodeURIComponent(product)}` : to
  return <Link className={`button ${dark ? 'button-dark' : 'button-orange'}`} to={href}>{children}<ArrowUpRight size={16} /></Link>
}

function Page({ eyebrow, title, intro, children }) {
  return <><section className="inner-hero"><div className="inner-hero-pattern" /><div className="container"><span className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} />{eyebrow}</span><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div></section><main>{children}</main></>
}

function ImageNote({ children = 'Illustrative stock image - not a Steelgrave photograph.' }) {
  return <span className="image-note">{children}</span>
}

function ProductCard({ product }) {
  const Icon = product.icon
  return <article className="catalog-product-card">
    <Link className="catalog-card-image catalog-card-photo" to={`/products/${product.slug}`} aria-label={`View ${product.title}`}>
      <img src={product.cardImage} alt={product.cardImageAlt} loading="lazy" />
      <span><Icon size={18} /></span>
      <span className="image-label">Steelgrave photo</span>
    </Link>
    <div className="catalog-card-body"><span className="product-grade-label">SS 202 / SS 304 - confirm availability</span><h3>{product.title}</h3><p>{product.description}</p><p className="product-photo-caption">{product.cardImageNote}</p><Link className="card-link" to={`/products/${product.slug}`}>View product information <ArrowUpRight size={15} /></Link></div>
  </article>
}

function Home() {
  return <>
    <section className="catalog-hero"><img src={media.hero} alt="Illustrative concept of a stainless-steel tube manufacturing facility" /><div className="catalog-hero-shade" /><div className="hero-grid" />
      <div className="container catalog-hero-content"><span className="status-pill"><span className="status-dot" /> Stainless steel manufacturing · Gujarat, India</span><h1>Engineered in Stainless Steel. <em>Made for Real Applications.</em></h1><p>Stainless-steel pipe manufacturing from coil and fabrication enquiries in grades SS 202 and SS 304.</p><div className="hero-actions"><CTA to="/products">Explore our products</CTA><CTA dark>Request a quote</CTA></div><ImageNote>Illustrative visual concept - not a photograph of Steelgrave's actual facility.</ImageNote></div>
      <div className="container hero-foot"><span className="scroll-hint"><span className="scroll-line" /> Steelgrave Private Limited</span><span className="hero-location"><MapPin size={15} /> Kalol, Gujarat</span></div>
    </section>
    <section className="section product-intro"><div className="container"><div className="section-heading-row"><Heading eyebrow="About Steelgrave" title="Your partner in stainless-steel manufacturing" text="Steelgrave Private Limited works with stainless-steel coil as raw material to manufacture pipe products and undertakes fabrication work. Product scope and project requirements are reviewed with each customer." /><Link className="text-link dark-link" to="/about">About the company <ArrowRight size={16} /></Link></div><div className="home-facts"><div><strong>Coil-based</strong><span>stainless-steel pipe manufacturing</span></div><div><strong>SS 202 / SS 304</strong><span>main working grades; confirm availability</span></div><div><strong>Gujarat, India</strong><span>business location</span></div></div></div></section>
    <section className="section home-products"><div className="container"><Heading eyebrow="Product catalogue" title="Choose the product shape" text="Technical dimensions, finishes, standards, and tolerances are confirmed against your enquiry. No unverified size ranges are published." /><div className="catalog-product-grid">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div><div className="catalog-callout"><div><span className="eyebrow">Have a different requirement?</span><h3>Send a drawing or describe your application for a feasibility review.</h3></div><CTA product="fabrication">Discuss a requirement</CTA></div></div></section>
    <GradeOverview />
    <section className="section home-process"><div className="container process-teaser"><div><Heading eyebrow="Manufacturing" title="From stainless-steel coil to pipe products" text="Coils are the raw material for Steelgrave's pipe manufacturing activity. The specific forming and joining method, finishing steps, and production route must be confirmed for the product and order." /><Link className="text-link dark-link" to="/manufacturing">How we describe manufacturing <ArrowRight size={16} /></Link></div><Factory size={72} strokeWidth={1.2} aria-hidden="true" /></div></section>
    <section className="section home-fabrication"><div className="container export-grid"><div><Heading light eyebrow="Fabrication" title="A clear route from drawing to feasibility review" text="Share the material, dimensions, intended use, and drawing if available. Specific fabrication operations and scope are confirmed before quotation." /><CTA product="fabrication">Enquire about fabrication</CTA></div><img src={media.fabrication} alt="Stainless-steel fabricated structure supplied by Steelgrave" loading="lazy" /><ImageNote>Fabrication photo supplied by Steelgrave.</ImageNote></div></section>
    <section className="section home-process"><div className="container"><Heading eyebrow="Material selection" title="SS 202 and SS 304 are not interchangeable" text="Both are austenitic stainless steels, but their alloying approach and typical corrosion resistance differ. Select material for the actual environment and confirm the order specification." /><MaterialComparison compact /></div></section>
    <section className="section home-quality"><div className="container home-quality-content"><ShieldCheck size={42} /><div><Heading eyebrow="Quality and assurance" title="Agree the evidence before production" text="Define the material grade, dimensional checks, inspection methods, acceptance criteria, and records required for the product and purchase order." /><Link className="text-link dark-link" to="/quality">Quality information <ArrowRight size={16} /></Link></div></div></section>
    <section className="section home-products"><div className="container"><div className="catalog-callout"><div><span className="eyebrow">Product enquiry</span><h3>Looking for stainless-steel products for your next project?</h3><p>Share the grade, shape, dimensions, quantity, destination, and application that you know.</p></div><CTA /></div></div></section>
  </>
}

function Products() {
  return <Page eyebrow="Products" title="A product catalogue organized by shape" intro="Browse round pipes and tubes, square tubes, and rectangular tubes. Technical details are confirmed for each enquiry; availability is not implied by the illustrations.">
    <section className="section product-intro"><div className="container"><div className="catalog-product-grid">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div><div className="catalog-callout"><div><span className="eyebrow">Custom requirements</span><h3>Send your drawing for a capability review.</h3><p>Custom profiles and fabricated components are assessed against the drawing and application before any commitment.</p></div><CTA product="fabrication" /></div></div></section>
  </Page>
}

function DimensionIllustration({ shape }) {
  if (shape === 'round') return <svg className="dimension-svg" viewBox="0 0 360 200" role="img" aria-label="Illustration of round tube outside diameter and wall thickness"><circle cx="170" cy="96" r="67" /><circle cx="170" cy="96" r="48" /><path d="M170 20v152M170 20l-5 10m5-10 5 10M170 172l-5-10m5 10 5-10M203 57l16-16" /><text x="237" y="39">Wall thickness (t)</text><text x="181" y="191">Outside diameter (OD)</text></svg>
  if (shape === 'square') return <svg className="dimension-svg" viewBox="0 0 360 200" role="img" aria-label="Illustration of square tube external width, height, and wall thickness"><rect x="94" y="30" width="130" height="130" rx="8" /><rect x="109" y="45" width="100" height="100" rx="4" /><path d="M94 175h130M94 175l8-5m-8 5 8 5m122-5-8-5m8 5-8 5M240 30v130M240 30l-5 8m5-8 5 8m-5 122-5-8m5 8 5-8M218 52l18-16" /><text x="136" y="195">External width</text><text x="249" y="103">Height</text><text x="244" y="34">Wall</text></svg>
  return <svg className="dimension-svg" viewBox="0 0 360 200" role="img" aria-label="Illustration of rectangular tube external width, height, and wall thickness"><rect x="72" y="54" width="184" height="92" rx="8" /><rect x="88" y="68" width="152" height="64" rx="4" /><path d="M72 166h184M72 166l8-5m-8 5 8 5m176-5-8-5m8 5-8 5M272 54v92M272 54l-5 8m5-8 5 8m-5 84-5-8m5 8 5-8M249 75l18-18" /><text x="126" y="188">External width</text><text x="282" y="105">Height</text><text x="275" y="54">Wall</text></svg>
}

function TechnicalTable({ product }) {
  const rows = product.shape === 'round'
    ? [
      ['Product form', 'Hollow cylindrical product. Identify mechanical tubing by outside-diameter dimensions or industrial piping by its specified piping basis; do not assume nominal bore and outside diameter are interchangeable.'],
      ['Material grade', 'Steelgrave primarily works with SS 202 and SS 304. Confirm the grade available for the requested product and order, and specify any required material certificate.'],
      ['Outside diameter (OD)', 'Measured across the outside of the circular section. State the required OD in millimetres and the product specification used for its tolerance. Available dimensions can be discussed against the application.'],
      ['Inside diameter (ID)', 'A nominal geometric calculation is ID = OD - 2 x wall thickness. Calculate only from confirmed OD and wall thickness; the actual clear bore can be affected by dimensional variation and weld geometry.'],
      ['Wall thickness', 'The distance through the tube wall, measured radially. The required thickness and its permitted variation should be specified for the intended duty and applicable product standard.'],
      ['Length', 'State the required cut length and whether a tolerance applies. Available lengths can be discussed according to your requirements.'],
      ['Manufacturing and weld condition', 'Stainless-steel pipe manufacture from coil is confirmed. Forming details and the actual joining/welding method, seam condition, and weld inspection criteria must be established for the ordered product. Do not assume seamless construction.'],
      ['Surface finish and end preparation', 'Describe the required surface and end condition. Available finishes, edge/deburring treatment, and end preparation are confirmed for the product and order.'],
      ['Dimensional control', 'Specify OD and wall-thickness tolerances, plus ovality and straightness limits when these affect fit or service. Tolerances depend on the applicable product specification and must be agreed; no numerical limits are claimed here.'],
      ['Standard and inspection documents', 'Name the required product standard and acceptance documents in the enquiry. ASTM A554 mechanical tubing and ASTM A312 pipe have different scopes and are not interchangeable. Applicable compliance and records must be verified before order.'],
    ]
    : [
      ['Product form', `${product.shape === 'square' ? 'Hollow square section with equal external sides.' : 'Hollow rectangular section with different external width and height.'} These products are tubes, not solid square or rectangular bars.`],
      ['Material grade', 'Steelgrave primarily works with SS 202 and SS 304. Confirm the grade available for the requested product and order, and specify any required material certificate.'],
      ['External width and height', product.shape === 'square' ? 'State one outside side dimension; the nominal outside width and height are equal. Give both dimensions if the drawing uses separate tolerance limits.' : 'State both outside dimensions in order: width x height (mm). Keep the orientation consistent with the drawing and fabrication layout.'],
      ['Wall thickness', 'The material thickness through each wall. State the nominal thickness and required tolerance; wall thickness influences mass, stiffness, weld details, and the internal clear opening.'],
      ['Internal clear dimensions', 'A simplified straight-wall estimate subtracts twice the nominal wall thickness from each external side. Actual clear dimensions also depend on corner radius, wall variation, and manufacturing geometry; use a drawing where the opening is critical.'],
      ['Corner radius', 'The rounded transition between adjacent flat walls. Radius affects the internal clear opening, fit-up, appearance, and bending/forming geometry. Include a drawing or radius requirement if it matters.'],
      ['Length and end condition', 'State required cut length, length tolerance, cut-edge condition, and any preparation needed for joining or assembly. Available lengths can be discussed according to your requirements.'],
      ['Manufacturing and surface finish', 'Steelgrave manufactures pipe products from coil. The forming route and whether/how a particular hollow section is longitudinally welded must be confirmed for that product. Describe the required surface; finish availability is order-specific.'],
      ['Dimensional control', product.shape === 'square' ? 'For critical fit, define width, height, wall thickness, corner radius, squareness, and straightness tolerances on the drawing or purchase specification.' : 'For critical fit, define width, height, wall thickness, corner radius, straightness, squareness, and twist limits on the drawing or purchase specification.'],
      ['Standard and inspection documents', 'State the applicable product standard and acceptance records in the enquiry. ASTM A554 mechanical tubing and ASTM A312 pipe have different scopes; no standard compliance or inspection capability is assumed.'],
    ]
  return <div className="technical-table">{rows.map(([label, value]) => <div className="technical-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
}

function ReferenceDimensions({ product }) {
  const isRound = product.shape === 'round'
  const isSquare = product.shape === 'square'
  const title = isRound
    ? 'Stainless steel pipe reference chart'
    : isSquare
      ? 'Stainless steel square tube reference chart'
      : 'Stainless steel rectangular tube reference chart'

  const rows = isRound
    ? roundPipeReference.flatMap(({ nb, dn, od, walls }) => walls.map(({ schedule, thickness }) => ({
      profile: `${nb} (DN ${dn})`,
      outside: `${formatMillimetres(od)} mm`,
      schedule,
      thickness: `${formatMillimetres(thickness)} mm`,
      inside: `${formatMillimetres(od - 2 * thickness)} mm`,
      key: `${dn}-${schedule}`,
    })))
    : (isSquare ? squareTubeReference : rectangularTubeReference).flatMap((profile) => profile.walls.map((thickness) => {
      const { side, width, height } = profile
      const outerWidth = side ?? width
      const outerHeight = side ?? height
      return {
        profile: `${outerWidth} mm x ${outerHeight} mm`,
        outside: `${outerWidth} mm x ${outerHeight} mm`,
        thickness: `${formatMillimetres(thickness)} mm`,
        inside: `${formatMillimetres(outerWidth - 2 * thickness)} mm x ${formatMillimetres(outerHeight - 2 * thickness)} mm`,
        key: `${outerWidth}-${outerHeight}-${thickness}`,
      }
    }))

  return <section className="reference-chart-section" aria-label={title}>
    <Heading eyebrow="Dimensional reference" title={title} text="Reference dimensions supplied for comparison. Confirm the applicable product specification and actual dimensions for each enquiry." />
    <p className="reference-chart-scroll-hint">On narrow screens, scroll horizontally to view all chart columns.</p>
    <div className="reference-chart-wrap" role="region" aria-label={`${title} table`} tabIndex="0">
      <table className={`reference-chart${isRound ? ' reference-chart-round' : ''}`}>
        <thead><tr>
          <th scope="col">{isRound ? 'Nominal bore (NB / DN)' : 'Nominal outside dimensions'}</th>
          {isRound && <th scope="col">Outside diameter (OD)</th>}
          {isRound && <th scope="col">Schedule</th>}
          <th scope="col">Wall thickness (WT)</th>
          <th scope="col">Calculated inside dimensions (ID)</th>
          <th scope="col">Material grades listed</th>
        </tr></thead>
        <tbody>{rows.map((row) => <tr key={row.key}>
          <th scope="row">{row.profile}</th>
          {isRound && <td>{row.outside}</td>}
          {isRound && <td>{row.schedule}</td>}
          <td>{row.thickness}</td>
          <td>{row.inside}</td>
          <td>SS 202 / SS 304</td>
        </tr>)}</tbody>
      </table>
    </div>
    <p className="technical-note reference-chart-note">These user-supplied figures are dimensional references only. They have not been independently verified and do not confirm Steelgrave stock, production capability, grade availability, guaranteed dimensions, or compliance with a named standard. Schedule labels are references, not a compliance claim. Calculated IDs use nominal outside dimensions minus twice the nominal wall thickness; they are theoretical and do not account for tolerances, corner radii, or weld geometry. Confirm actual dimensions and suitability for critical fit before ordering.</p>
  </section>
}

function SurfaceFinishes() {
  const finishes = [
    ['Mill / as-processed', 'The surface condition produced by the agreed manufacturing and finishing route; it is not a single universal appearance.'],
    ['2B', 'A common smooth, cold-rolled stainless-steel mill finish with a low-reflectivity appearance. It is not the same as a mirror polish.'],
    ['Brushed', 'A mechanically abraded directional finish with visible grain. Abrasive grade and brushing direction affect the final appearance.'],
    ['Hairline', 'A fine, continuous directional line finish used where a more uniform linear appearance is specified.'],
    ['Mirror polished', 'A highly reflective finish created by progressive polishing; the required reflectivity and acceptance method should be specified.'],
  ]
  return <section className="finish-section"><Heading eyebrow="Surface and presentation" title="Describe the finish your application needs" text="These are general finish terms, not a statement that every finish is available for Steelgrave products. Confirm the actual finish, sample, and acceptance criteria for the selected grade and product." /><div className="finish-grid">{finishes.map(([name, text]) => <article key={name}><h3>{name}</h3><p>{text}</p></article>)}</div></section>
}

function ProductApplications({ product }) {
  return <section className="product-applications"><Heading eyebrow="Potential applications" title="Match the section to the job" text="Examples are application areas only, not a guarantee of suitability. Confirm grade, dimensions, design requirements, operating environment, and applicable specification with the responsible engineer." /><ul className="review-list">{product.applications.map((application) => <li key={application}><Check size={17} /> {application}</li>)}</ul></section>
}

function ProductFAQs({ product }) {
  const round = product.shape === 'round'
  const faqs = [
    ['What is the difference between pipe and tube?', 'The terms are sometimes used interchangeably, but the specified product standard and dimensional basis control. Tubing is commonly ordered by outside diameter and wall thickness; piping may be ordered by nominal bore and schedule. Confirm the standard and dimensions rather than inferring one from the name.'],
    ['What is the difference between SS 202 and SS 304?', 'Both are austenitic stainless steels, but 202 is a chromium-manganese grade and generally has lower nickel and higher manganese than 304. Grade 304 generally offers better corrosion resistance, but neither grade suits every environment. Review the SS 202 and SS 304 material pages for general guidance.'],
    ['What does wall thickness mean?', round ? 'Wall thickness is the distance through the hollow section wall. It is used with OD to estimate the nominal inside diameter: ID = OD - 2 x wall thickness. State the intended dimensional tolerance as well as the nominal value.' : 'Wall thickness is the material thickness through each side of the hollow section. It affects the internal clear opening; the exact inside dimension also depends on the external size, corner radius, and dimensional variation.'],
    [round ? 'How do outside and inside diameter differ?' : 'How are internal dimensions determined?', round ? 'Outside diameter is measured across the exterior of a round section. Inside diameter is measured across the clear bore. A nominal ID can be calculated from confirmed OD and wall thickness, but the actual bore should be checked when it is functionally critical.' : 'Internal clear dimensions depend on external width and height, wall thickness on each side, corner radii, and manufacturing tolerances. Use a dimensioned drawing when the opening or fit is important.'],
    ['What do 2B, brushed, hairline, and mirror finishes mean?', '2B describes a smooth, low-reflectivity mill finish; brushed and hairline finishes have directional abrasion patterns; mirror polishing aims for high reflectivity. Finish names alone do not define every appearance or acceptance limit. Confirm a sample, direction, and availability for the selected product.'],
    ['What is a welded pipe or tube?', 'A welded hollow section is formed from flat stainless-steel material and joined along a longitudinal seam. Steelgrave confirms coil-based pipe manufacture, but the exact joining process and the products to which it applies must be confirmed. The site does not claim seamless production or a particular welding process.'],
    ['What is a Material Test Certificate (MTC)?', 'An MTC is material documentation associated with a supplied heat or batch and may report grade identification and test results against a stated specification. Request the required certificate type and traceability before order; availability and scope must be confirmed.'],
    ['What should I include in a quotation request?', 'Include product type, grade (or ask for help), OD or external width x height, wall thickness, length, quantity and unit, finish, applicable standard, end preparation, intended application, delivery destination, and any drawing or tolerance requirements. Unknown fields can be left blank.'],
    ['Can I request custom dimensions or lengths?', 'You can submit a dimension or drawing for feasibility review. The team must confirm whether the section, grade, manufacturing route, finish, tolerance, quantity, and requested length are achievable before any commitment.'],
  ]
  return <section className="product-faq"><Heading eyebrow="Product FAQs" title={`Questions about ${product.shortTitle.toLowerCase()}`} text="General guidance for preparing a product enquiry. The order specification and confirmed product condition take precedence." /><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={17} /></summary><p>{answer}</p></details>)}</div></section>
}

function QualityExplainers({ compact = false }) {
  const checks = [
    ['Raw-material identification', 'Identify the coil or material batch and reconcile its grade and heat/lot reference with the purchase documents. Traceability requirements should be agreed before processing.'],
    ['Material Test Certificate (MTC)', 'A material certificate links supplied material to a stated grade and specification and reports the test information included by its issuer. Confirm the document type, heat number link, and required fields with the order.'],
    ['Dimensional inspection', 'A dimensional plan can cover round-product OD and wall thickness or hollow-section width, height, and wall thickness, as well as cut length. Measurement tools, sampling, tolerance limits, and records must match the specified product standard.'],
    ['Surface and weld examination', 'Visual examination can identify visible surface marks and discontinuities; for welded product, seam appearance and acceptance criteria should be defined. Visual examination is not a substitute for a specified nondestructive test.'],
    ['Ovality, straightness, and section shape', 'Ovality compares the largest and smallest measured diameters of a round section. Straightness checks longitudinal deviation; square or rectangular sections may additionally require squareness and twist checks. Limits must come from the applicable specification or drawing.'],
    ['Chemical and mechanical tests', 'Chemical analysis evaluates alloy composition; mechanical testing evaluates properties such as tensile strength or elongation under a defined test method. Grade, product condition, sampling, test provider, and acceptance criteria are essential.'],
    ['Optional methods: PMI and NDT', 'Positive Material Identification (PMI) is used to screen alloy identity. Depending on product and specification, hydrostatic, eddy-current, ultrasonic, or other examinations may be required. These methods have different purposes and are not interchangeable; include required methods and coverage in the order documents.'],
  ]
  const displayed = compact ? checks.slice(0, 4) : checks
  return <div className={`quality-explainer-grid${compact ? ' quality-explainer-compact' : ''}`}>{displayed.map(([title, description]) => <article className="quality-explainer-card" key={title}><h3>{title}</h3><p>{description}</p><span>Scope and availability: confirm for the order</span></article>)}</div>
}

function ProductDetail({ product }) {
  return <>
    <section className="product-hero"><img src={product.image} alt={product.imageAlt} /><div className="catalog-hero-shade" /><div className="container product-hero-content"><span className="breadcrumb"><Link to="/products">Products</Link><ChevronRight size={13} />{product.shortTitle}</span><span className="eyebrow">Product information</span><h1>{product.title}</h1><p>{product.description}</p><CTA product={product.slug} /><ImageNote>{product.heroNote}</ImageNote></div></section>
    <section className="section product-overview"><div className="container product-overview-grid"><div><Heading eyebrow="Product description" title={product.overview} text={product.description} /><div className="grade-availability"><span>SS 202</span><span>SS 304</span><p>Grades are subject to product availability. Confirm the supplied grade and documentation for each order.</p></div></div><div className="dimension-panel"><h2>Section dimensions</h2><DimensionIllustration shape={product.shape} /><p>Illustration only. No dimensional range or tolerance is implied. Share confirmed dimensions in millimetres (mm) and length in metres (m).</p></div></div></section>
    <section className="section technical-section"><div className="container"><Heading eyebrow="Technical information" title="Specification details - confirm before ordering" text="No unverified dimensions, surface finishes, tolerances, production methods, or standards are stated as available." /><TechnicalTable product={product} /><p className="technical-note">ASTM A554 and ASTM A312 cover different product requirements and are not interchangeable. No compliance with either standard is claimed; applicable grade, process, dimensions, testing, inspection, and documentation must be agreed and verified.</p><ReferenceDimensions product={product} /></div></section>
    <section className="section application-section"><div className="container"><ProductApplications product={product} /><div className="detail-pills"><Link to="/materials/ss-202"><Check size={16} /> SS 202 material information</Link><Link to="/materials/ss-304"><Check size={16} /> SS 304 material information</Link><Link to="/quality"><ShieldCheck size={16} /> Quality information</Link></div><SurfaceFinishes /></div></section>
    <section className="section product-quality-section"><div className="container"><Heading eyebrow="Manufacture and quality" title="Agree the process and inspection before ordering" text="Steelgrave's confirmed activity is coil-based stainless-steel pipe manufacture. Forming, joining/welding, sizing, straightening, cutting, finishing, and inspection steps vary by product and must be confirmed with the purchase requirement." /><QualityExplainers compact /></div></section>
    <section className="section product-faq-section"><div className="container"><ProductFAQs product={product} /></div></section>
    <section className="section product-intro"><div className="container"><Heading eyebrow="Related products" title="Other product shapes" /><div className="catalog-product-grid">{products.filter((item) => item.slug !== product.slug).map((item) => <ProductCard key={item.slug} product={item} />)}</div><div className="center-cta"><CTA product={product.slug}>Request a quote for {product.shortTitle}</CTA></div></div></section>
  </>
}

function MaterialComparison({ compact = false }) {
  return <div className={`material-table-wrap${compact ? ' material-table-compact' : ''}`}><table className="material-table"><thead><tr><th>Property</th><th>SS 202</th><th>SS 304</th></tr></thead><tbody>
    <tr><th scope="row">Stainless-steel family</th><td>200 series</td><td>300 series</td></tr>
    <tr><th scope="row">Main alloying approach</th><td>Chromium-manganese</td><td>Chromium-nickel</td></tr>
    <tr><th scope="row">Nickel content</th><td>Generally lower</td><td>Generally higher</td></tr>
    <tr><th scope="row">Manganese content</th><td>Generally higher</td><td>Generally lower</td></tr>
    <tr><th scope="row">General corrosion resistance</th><td>Generally lower than 304; suitability depends on conditions</td><td>Generally higher than 202; not suitable for every environment</td></tr>
    <tr><th scope="row">Typical positioning</th><td>Selected economical applications</td><td>General-purpose applications requiring improved corrosion resistance</td></tr>
  </tbody></table><p className="technical-note">These are general comparisons, not a material certificate or suitability guarantee. Confirm the applicable product specification, actual supplied grade, material test certificate, and service environment. Do not treat commercial grade descriptions such as J1 or J4 as equivalent to standard grade 202 without verification.</p></div>
}

function MaterialCharacteristics({ grade }) {
  const is202 = grade === '202'
  const rows = is202
    ? [
      ['Classification', 'Austenitic stainless steel in the 200 series; commonly described as a chromium-manganese grade.'],
      ['Alloying approach', 'Generally lower nickel and higher manganese than grade 304. Exact composition limits depend on the governing material specification and product condition.'],
      ['General characteristics', 'Can be considered for selected applications when its corrosion resistance, forming requirements, and service conditions are appropriate. It is not equivalent to grade 304.'],
      ['Corrosion resistance', 'Generally lower than 304 in many service environments. Chlorides, acids, temperature, deposits, surface condition, and cleaning can affect performance. Assess the actual environment.'],
      ['Forming and welding', 'Austenitic stainless-steel fabrication requires suitable procedures and control of distortion, heat input, and contamination. Confirm grade-specific procedure and filler requirements with the responsible fabricator.'],
      ['Surface finishing', 'Surface appearance depends on the supplied condition and finishing route. Agree the required finish and sample or acceptance criteria.'],
      ['Mechanical properties', 'Do not infer design values from the grade name alone. Use the applicable product standard, product form and condition, thickness, and material certificate for verified values.'],
      ['Material verification', 'Confirm the specified grade and applicable standard against the order documents and the supplied material test certificate, if required and agreed.'],
    ]
    : [
      ['Classification', 'Austenitic chromium-nickel stainless steel in the 300 series.'],
      ['Alloying approach', 'Typically contains chromium and nickel; exact limits depend on the governing material specification and product condition.'],
      ['General characteristics', 'Widely used in industrial, commercial, and architectural products. It generally offers good formability and weldability when processed using an appropriate procedure.'],
      ['Corrosion resistance', 'Offers good general corrosion resistance, but is not rustproof and is not suitable for every chemical, chloride, or marine environment. Review the specific service conditions.'],
      ['Forming and welding', 'Use fabrication procedures suitable for the specified product and service. Control heat input, distortion, surface contamination, and any post-weld requirements as applicable.'],
      ['Surface finishing', 'The final appearance and corrosion behavior can be affected by the surface condition, finishing route, handling, and cleaning. Specify and agree the finish.'],
      ['Mechanical properties', 'Design values depend on the applicable standard, product form and condition, thickness, and material test documentation. Confirm the values for the purchased product.'],
      ['Material verification', 'Confirm the grade and product specification on the order and match any required material test certificate to the supplied heat or batch.'],
    ]
  return <div className="technical-table material-characteristic-table">{rows.map(([label, value]) => <div className="technical-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
}

function GradeOverview() {
  return <section className="section grade-overview"><div className="container"><Heading eyebrow="Material grades" title="Understand the material before specifying it" text="SS 202 and SS 304 differ in alloying approach and general corrosion resistance. Verify the grade and application requirements before ordering." /><div className="grade-grid"><article className="grade-card"><span className="grade-code">SS 202</span><h3>Chromium-manganese stainless steel</h3><p>A 200-series austenitic grade with generally lower nickel and higher manganese content than 304. Its suitability depends on the environment, fabrication, and intended use.</p><Link to="/materials/ss-202" className="card-link">Read about grade 202 <ArrowRight size={15} /></Link></article><article className="grade-card"><span className="grade-code">SS 304</span><h3>Chromium-nickel stainless steel</h3><p>A widely used austenitic grade with good general corrosion resistance and forming and welding characteristics when processed appropriately. It is not suitable for every chemical or marine environment.</p><Link to="/materials/ss-304" className="card-link">Read about grade 304 <ArrowRight size={15} /></Link></article></div><MaterialComparison compact /></div></section>
}

function MaterialPage({ grade }) {
  const is202 = grade === '202'
  return <Page eyebrow={`Material grade SS ${grade}`} title={`Stainless Steel Grade ${grade}`} intro={is202 ? 'SS 202 is a chromium-manganese austenitic stainless-steel grade. Assess its suitability against actual service conditions and the specified product requirements.' : 'SS 304 is a chromium-nickel austenitic stainless-steel grade widely used in industrial, commercial, and architectural applications.'}>
    <section className="section product-intro"><div className="container material-detail-grid"><div><Heading eyebrow="Material overview" title={is202 ? 'A 200-series chromium-manganese grade' : 'A widely used 300-series chromium-nickel grade'} text={is202 ? 'Grade 202 generally has lower nickel and higher manganese content than grade 304. It is used in selected applications where the expected environment and service conditions allow.' : 'Grade 304 offers good general corrosion resistance and good forming and welding characteristics when processed appropriately. Suitability depends on the operating environment.'} /><p className="body-copy">Composition limits and mechanical values must come from the applicable product specification for the supplied product form and condition; this page deliberately does not publish unsupported chemistry percentages or strength values. Confirm the grade using the agreed purchase documentation and material test certificate.</p><CTA product={`SS ${grade}`} /></div><div className="grade-caution"><CircleHelp size={28} /><h3>Choose for the service environment</h3><p>Neither grade is rustproof or universally suitable. Corrosion depends on the environment, temperature, concentration, surface condition, fabrication, and maintenance. Do not substitute grades without engineering review.</p></div></div></section>
    <section className="section"><div className="container"><Heading eyebrow={`SS ${grade} technical guide`} title="Characteristics to consider when specifying the material" text="The information below is general technical guidance, not a chemical certificate, mechanical-property guarantee, or declaration that a specific product is available." /><MaterialCharacteristics grade={grade} /></div></section>
    <section className="section"><div className="container"><Heading eyebrow="Grade comparison" title="SS 202 compared with SS 304" /><MaterialComparison /></div></section>
  </Page>
}

function About() {
  return <Page eyebrow="About us" title="About Steelgrave" intro="Steelgrave Private Limited is a stainless-steel manufacturing and fabrication business located in Gujarat, India.">
    <section className="section about-page-grid"><div className="container about-long-grid"><figure className="about-symbol about-director"><img src="/photos/director/Director.jpeg" alt="Steelgrave director at an engineering trade show" /><figcaption>Steelgrave Director</figcaption></figure><div><Heading eyebrow="Company profile" title="Pipe manufacturing from stainless-steel coil" text="Steelgrave works with stainless-steel coils as raw material to manufacture pipe products. The company also undertakes stainless-steel fabrication; specific products, operations, and feasibility are confirmed against customer requirements." /><p className="body-copy">The main working material grades are SS 202 and SS 304, subject to availability and confirmation for each order. Steelgrave aims to clarify the product shape, application, dimensions, grade, and documentation requirements before a quotation is agreed.</p><CTA /></div></div></section>
    <section className="section values-section"><div className="container"><Heading eyebrow="Business details" title="Confirmed information" /><div className="confirmed-facts"><div><span>Legal name</span><strong>{company.name}</strong></div><div><span>Location</span><strong>{company.address}</strong></div><div><span>Manufacturing activity</span><strong>Stainless-steel pipe manufacturing using stainless-steel coils</strong></div><div><span>Main working grades</span><strong>SS 202 and SS 304</strong></div><div><span>Additional activity</span><strong>Stainless-steel fabrication; specific scope confirmed per enquiry</strong></div></div><p className="technical-note">Founding year, workforce, production capacity, machinery, certifications, customer references, and export destinations have not been confirmed and are not claimed here.</p></div></section>
  </Page>
}

function Manufacturing() {
  const stages = [
    ['01', 'Coil and order requirements', 'Steelgrave uses stainless-steel coil as raw material for its pipe manufacturing activity. The grade, coil identification, product form, and required purchase documents should be agreed before production.'],
    ['02', 'Strip preparation and forming', 'In a conventional coil-based tube route, the coil may be prepared as strip and progressively formed into a tubular section. Whether slitting is required, where it is done, and the actual forming route are product-specific and must be confirmed.'],
    ['03', 'Joining and sizing', 'Where the ordered product uses a welded route, the longitudinal edges are joined and the section may then be sized. Steelgrave’s actual joining process, machine route, and in-house operations must be confirmed; seamless construction is not claimed.'],
    ['04', 'Straightening and cut-to-length', 'Straightness, ovality or section geometry, cut length, and end condition can be important acceptance characteristics. Required limits and the steps used to achieve them must be defined for the order.'],
    ['05', 'Surface, inspection, and release', 'Finishing, visual and dimensional checks, any weld inspection, material documents, and packaging requirements should be stated in the purchase specification. Which operations and records Steelgrave provides must be confirmed before order.'],
  ]
  return <Page eyebrow="Manufacturing" title="From stainless-steel coil to pipe products" intro="Steelgrave manufactures stainless-steel pipe products using coil as raw material. The stages below explain a typical coil-based route; the exact process, equipment, and in-house or outsourced steps depend on the confirmed product and order.">
    <section className="section process-section-catalog"><div className="container"><Heading eyebrow="Manufacturing overview" title="Understand the route from coil to finished section" text="A coil-based hollow-section process typically prepares and forms strip into a tube, joins the longitudinal seam where the product is welded, and completes the section to the agreed dimensions. Details must be matched to the actual Steelgrave product." /><div className="numbered-process">{stages.map(([number, title, text]) => <article className="manufacturing-stage" key={number}><div><span>{number}</span><strong>{title}</strong></div><p>{text}</p></article>)}</div><figure className="manufacturing-concept-figure"><img src="/photos/facility/Gemini_Generated_Image_81buhf81buhf81bu.jpg" alt="Illustrative concept of a stainless-steel tube manufacturing workshop" loading="lazy" /><figcaption><strong>Illustrative visual concept.</strong> This image represents the Steelgrave manufacturing identity; it is not a photograph of the actual premises, staff, equipment, or production.</figcaption></figure><div className="technical-note"><strong>Order review:</strong> identify the actual welding/joining method (if applicable), product standard, dimensional tolerances, inspection scope, required records, and any outsourced operations. ASTM A554 mechanical tubing and ASTM A312 pipe are different product specifications and must not be interchanged.</div><CTA product="Stainless-steel pipe manufacturing" /></div></section>
  </Page>
}

function Fabrication() {
  return <Page eyebrow="Fabrication" title="Custom stainless-steel fabrication" intro="Steelgrave undertakes stainless-steel fabrication. Share a drawing or describe the material, geometry, dimensions, application, and required quantity for a feasibility review.">
    <section className="section fabrication-section"><div className="container fabrication-grid"><div><Heading eyebrow="Project review" title="Start with the requirement" text="Fabrication scope is assessed against the project brief; no unverified workshop operation is promised in advance." /><ul className="review-list"><li><Check size={17} /> Material grade and product form</li><li><Check size={17} /> Drawing, dimensions, and tolerances</li><li><Check size={17} /> Intended application and environment</li><li><Check size={17} /> Quantity and delivery destination</li><li><Check size={17} /> Required finish, inspection, and documentation</li></ul><CTA product="Custom fabrication" /></div><figure className="illustrative-figure"><img src={media.fabrication} alt="Metal fabrication process, illustrative stock image" loading="lazy" /><figcaption>Illustrative stock image only - not a Steelgrave workshop photograph.</figcaption></figure></div></section>
  </Page>
}

function Quality() {
  return <Page eyebrow="Quality" title="Quality and material assurance" intro="Agree material identification, inspection scope, acceptance criteria, and required records for the specific product and order.">
    <section className="section quality-page-grid"><div className="container"><Heading eyebrow="Inspection and material assurance" title="Use the checks that matter to the specification" text="The following explains common material and product checks so buyers can define useful acceptance requirements. It does not assert that every method is performed in-house or available for every Steelgrave order." /><QualityExplainers /><div className="quality-disclaimer"><h3>Set the inspection scope before order</h3><p>Include required tests, sampling frequency, acceptance limits, independent inspection, and documents in the enquiry or purchase specification. Steelgrave must confirm the provider, availability, records, and commercial scope before accepting those requirements. No certification, 100% inspection, or specific test service is claimed here.</p><Link className="text-link dark-link" to="/contact">Discuss inspection requirements <ArrowRight size={16} /></Link></div></div></section>
  </Page>
}

function Industries() {
  const applications = [
    ['General fabrication', 'Round, square, and rectangular sections may be considered where grade, geometry, finish, and service conditions meet the project specification.'],
    ['Architectural and commercial work', 'Discuss the required finish, dimensions, environment, and cleaning conditions before material selection.'],
    ['Equipment and engineering projects', 'Share the equipment duty, drawing, operating environment, and acceptance requirements for review.'],
    ['Furniture and interior components', 'Confirm the intended indoor or outdoor use, product dimensions, surface requirements, and expected exposure.'],
  ]
  return <Page eyebrow="Industries" title="Applications begin with the service conditions" intro="The examples below are potential application areas, not customer references or a statement that every product or grade is suitable.">
    <section className="section generic-page"><div className="container"><div className="application-grid-cards">{applications.map(([title, text]) => <article className="generic-card" key={title}><Factory size={25} /><span className="eyebrow">Potential application</span><h3>{title}</h3><p>{text}</p><Link className="card-link" to="/request-a-quote">Discuss a requirement <ArrowUpRight size={15} /></Link></article>)}</div><p className="technical-note">Grade 202 and grade 304 are not interchangeable. Corrosion performance, product form, applicable standard, and installation conditions must be reviewed for each service.</p></div></section>
  </Page>
}

function Gallery() {
  const [activeImage, setActiveImage] = useState(null)
  useEffect(() => {
    if (activeImage === null) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveImage(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [activeImage])

  return <>
    <Page eyebrow="Gallery" title="Product and manufacturing gallery" intro="Browse photos supplied for Steelgrave's website alongside illustrative visual concepts for the brand. Concept images express the intended industrial identity and do not depict actual Steelgrave facilities, staff, or equipment. Product and process details should be confirmed for each enquiry.">
      <section className="section gallery-section"><div className="container"><div className="gallery-grid">{galleryItems.map((item, index) => <article className={`gallery-card${item.isConcept ? ' gallery-card-concept' : ''}`} key={item.image}><button type="button" onClick={() => setActiveImage(index)} aria-label={`Open ${item.isConcept ? 'visual concept' : 'photo'}: ${item.category}`}><img src={item.image} alt={item.category} loading="lazy" /><span className="gallery-card-label">{item.category}</span><span className="gallery-card-note">{item.isConcept ? 'Illustrative concept - not an actual Steelgrave facility photograph' : 'Photo supplied by Steelgrave'}</span></button></article>)}</div><div className="catalog-callout"><div><span className="eyebrow">Product enquiry</span><h3>Ask us about a product or fabrication requirement.</h3></div><CTA /></div></div></section>
    </Page>
    {activeImage !== null && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={galleryItems[activeImage].category} onClick={(event) => { if (event.target === event.currentTarget) setActiveImage(null) }}><div className="gallery-lightbox-content"><button className="gallery-lightbox-close" type="button" onClick={() => setActiveImage(null)} aria-label="Close image"><X size={22} /></button><img src={galleryItems[activeImage].image} alt={galleryItems[activeImage].category} /><p>{galleryItems[activeImage].isConcept ? `${galleryItems[activeImage].category} - illustrative visual concept, not an actual Steelgrave facility photograph.` : `${galleryItems[activeImage].category} - photo supplied by Steelgrave.`}</p></div></div>}
  </>
}

function ContactDetails() {
  return <div className="contact-details">
    <a href={`mailto:${company.email}`}><Mail size={18} /> {company.email}</a>
    <a href={`tel:${company.phoneLink}`}><Phone size={18} /> {company.phone}</a>
    <a href={company.whatsappUrl} target="_blank" rel="noreferrer"><Phone size={18} /> WhatsApp {company.phone}</a>
    <a href={company.mapUrl} target="_blank" rel="noreferrer"><MapPin size={18} /> {company.address}</a>
  </div>
}

function Contact() {
  return <Page eyebrow="Contact us" title="Contact Steelgrave Private Limited" intro="Contact our team about stainless-steel pipe manufacturing, SS 202 or SS 304 availability, fabrication scope, or a product enquiry.">
    <section className="section contact-page"><div className="container contact-grid"><div><Heading eyebrow="Business contact" title="Talk through the requirement" text="Email, telephone, and WhatsApp links open your email or messaging application. The business location can be opened in Google Maps." /><ContactDetails /><a className="map-link" href={company.mapUrl} target="_blank" rel="noreferrer">Open location in Google Maps <ArrowUpRight size={15} /></a></div><div className="inquiry-card"><h2>Send a project enquiry</h2><p>This opens an email draft addressed to Steelgrave. Review it and press Send in your email application; this website does not receive or store the message.</p><InquiryForm /></div></div></section>
  </Page>
}

function InquiryForm({ product = '' }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (String(data.get('website') ?? '').trim()) return
    const entries = [...data.entries()].filter(([key, value]) => key !== 'website' && String(value).trim())
    const body = entries.map(([key, value]) => `${key.replaceAll('_', ' ')}: ${String(value).trim()}`).join('\n')
    const subject = product ? `Product enquiry - ${product}` : 'Steelgrave website enquiry'
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return <form className="quote-form" onSubmit={handleSubmit}>
    <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off" /></label>
    <div className="form-row"><label>Full name<input name="Full_name" autoComplete="name" required placeholder="Your name" /></label><label>Company<input name="Company" autoComplete="organization" placeholder="Company name" /></label></div>
    <div className="form-row"><label>Email<input name="Email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone<input name="Phone" type="tel" autoComplete="tel" placeholder="+91 ..." /></label></div>
    <div className="form-row"><label>Country<input name="Country" autoComplete="country-name" placeholder="Country" /></label><label>City<input name="City" autoComplete="address-level2" placeholder="City" /></label></div>
    <label>Product category<select name="Product_category" defaultValue={product}><option value="">Select a product or service</option>{products.map((item) => <option value={item.slug} key={item.slug}>{item.title}</option>)}<option value="fabrication">Fabrication / other requirement</option></select></label>
    <div className="form-row"><label>Material grade<select name="Material_grade" defaultValue=""><option value="">Select a grade</option><option>SS 202</option><option>SS 304</option><option>Other</option><option>Not sure - need assistance</option></select></label><label>Shape / product type<input name="Shape_or_product_type" placeholder="Round, square, rectangular, other" /></label></div>
    <div className="form-row"><label>OD or section dimensions (mm)<input name="Dimensions_mm" placeholder="Enter confirmed dimensions, if known" /></label><label>Wall thickness (mm)<input name="Wall_thickness_mm" placeholder="If known" /></label></div>
    <div className="form-row"><label>Length (m)<input name="Length_m" placeholder="If known" /></label><label>Quantity<input name="Quantity" placeholder="Quantity and unit" /></label></div>
    <div className="form-row"><label>Surface finish<input name="Surface_finish" placeholder="If specified" /></label><label>Standard / specification<input name="Standard_or_specification" placeholder="If specified" /></label></div>
    <label>Intended application<textarea name="Intended_application" rows="2" placeholder="Describe the service conditions and intended use" /></label>
    <div className="form-row"><label>Delivery destination<input name="Delivery_destination" placeholder="City, country" /></label><label>Required delivery date<input name="Required_delivery_date" type="date" /></label></div>
    <label>Project details and comments<textarea name="Project_details" rows="4" placeholder="Share any other details, drawing references, or questions" /></label>
    <p className="form-help">Not sure about the exact specifications? Send us the details you have, and our team can review your requirements. To include a drawing, attach it to the email draft after it opens. Do not include confidential information unless you are comfortable sending it by email.</p>
    <button className="button button-orange form-submit" type="submit">Open email draft <ArrowUpRight size={17} /></button>
    <p className="form-disclaimer">Your enquiry is not sent until you review and send the email from your email application. If no email application opens, email <a href={`mailto:${company.email}`}>{company.email}</a> directly.</p>
  </form>
}

function QuotePage() {
  const [searchParams] = useSearchParams()
  const product = searchParams.get('product') ?? ''
  const knownProduct = [...products.map((item) => item.slug), 'fabrication'].includes(product) ? product : ''
  return <Page eyebrow="Request a quote" title="Tell us what your project needs" intro="Provide the technical details you know. Dimensions, grade availability, manufacturing route, and applicable requirements will be reviewed before a quotation is confirmed.">
    <section className="section contact-page"><div className="container quote-layout"><div className="inquiry-card"><h2>Product quotation enquiry</h2><p>Fields are optional unless marked. Share a drawing by attaching it to the email draft after it opens.</p><InquiryForm product={knownProduct} /></div><aside className="quote-aside"><Heading eyebrow="Before you send" title="Useful details to include" /><ul className="review-list"><li><Check size={17} /> Product shape and intended use</li><li><Check size={17} /> Grade: SS 202, SS 304, or advice needed</li><li><Check size={17} /> Dimensions and wall thickness in mm</li><li><Check size={17} /> Length, quantity, finish, and specification</li><li><Check size={17} /> Delivery location and target date</li></ul><p className="technical-note">The email draft is created in your email application. This site has no backend for receiving enquiries, sending confirmation messages, or securely storing uploaded drawings.</p><ContactDetails /></aside></div></section>
  </Page>
}

function NotFound() {
  return <Page eyebrow="Page not found" title="This page is not available" intro="Use the product catalogue or contact Steelgrave to find the information you need."><section className="section"><div className="container"><CTA to="/products">Browse products</CTA></div></section></Page>
}

function AppRoutes() {
  return <BrowserRouter basename={import.meta.env.BASE_URL}><SEO /><Shell><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} />
    {products.map((product) => <Route key={product.slug} path={`/products/${product.slug}`} element={<ProductDetail product={product} />} />)}
    <Route path="/products/stainless-steel-pipes" element={<Navigate to="/products/round-pipes-tubes" replace />} />
    <Route path="/products/stainless-steel-tubes" element={<Navigate to="/products/round-pipes-tubes" replace />} />
    <Route path="/products/custom-fabrication" element={<Navigate to="/fabrication" replace />} />
    <Route path="/products/ss-fittings" element={<Navigate to="/products" replace />} />
    <Route path="/materials/ss-202" element={<MaterialPage grade="202" />} />
    <Route path="/materials/ss-304" element={<MaterialPage grade="304" />} />
    <Route path="/grades" element={<Page eyebrow="Material grades" title="SS 202 and SS 304" intro="Understand the general differences and confirm the supplied grade and product specification for every order."><section className="section"><div className="container"><GradeOverview /></div></section></Page>} />
    <Route path="/manufacturing" element={<Manufacturing />} />
    <Route path="/process" element={<Navigate to="/manufacturing" replace />} />
    <Route path="/fabrication" element={<Fabrication />} />
    <Route path="/quality" element={<Quality />} />
    <Route path="/industries" element={<Industries />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/request-a-quote" element={<QuotePage />} />
    <Route path="/infrastructure" element={<Navigate to="/manufacturing" replace />} />
    <Route path="/projects" element={<Navigate to="/gallery" replace />} />
    <Route path="*" element={<NotFound />} />
  </Routes></Shell></BrowserRouter>
}

export default function App() {
  return <AppRoutes />
}
