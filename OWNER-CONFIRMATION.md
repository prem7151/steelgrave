# Steelgrave website - owner confirmation checklist

## Confirmed details used on the website

- Legal name: Steelgrave Private Limited.
- Business location: Arise Industrial Park, Plot No. 7, Phase 4, GIDC Chhatral, Chhatral, Kalol, Gujarat 382729, India.
- Email: info@steelgrave.in.
- Telephone / WhatsApp: +91 9824118145.
- Stainless-steel pipes are manufactured using stainless-steel coils as raw material.
- Main working grades: SS 202 and SS 304.
- The company undertakes stainless-steel fabrication.

## Business details still needed

- Confirm whether the supplied location is the factory address, office address, and/or registered address.
- Business hours and customer-visit arrangements.
- Confirm availability of SS 202 and SS 304 by product shape, size, and order.
- Current product catalogue and fabricated products the company actually makes.
- Which fabrication operations are performed in-house, outsourced, or unavailable.
- Manufacturing equipment, production sequence, and the processes used for each product.
- Whether coil slitting, forming, welding/joining, sizing, straightening, cutting, polishing, or other finishing is performed in-house or outsourced.
- Any production-capacity, employee, operating-history, customer, export, or project information approved for publication.

## Product dimensions and specifications to confirm

The three dimensional charts on the round, square, and rectangular product pages reproduce user-supplied reference figures for comparison only. Confirm the source, governing dimensional standard, calculations, and relevance before using them for quotations or representing them as Steelgrave offerings. The charts do not indicate stock, production capability, guaranteed dimensions, grade availability, or standards compliance.

For round pipes and tubes:

- Outside-diameter range and available sizes.
- Wall-thickness range.
- Lengths and permitted cut lengths.
- Whether products are mechanical tubes, industrial piping, or both.
- End preparation and dimensional tolerances.
- Manufacturing method and applicable product specification for each product.

For square and rectangular tubes:

- External width and height ranges.
- Wall thickness, corner radius, and lengths.
- Straightness, squareness, twist, and other tolerances.
- Manufacturing method and applicable product specification for each product.

For every product:

- Available grade by product and size.
- Surface finishes, product standards, material documentation, and acceptance criteria.
- Which dimensions and tolerances can be guaranteed.
- For piping, confirm nominal-bore/schedule requirements separately from outside-diameter tube requirements. ASTM A554 and ASTM A312 are distinct specifications and must not be presented as interchangeable.

Other than clearly labelled user-supplied reference figures, the catalogue does not state an unverified range as available and makes no unverified compliance claims.

## Technical and quality claims to verify

- Actual forming and joining/welding process; do not describe coil-made product as seamless.
- Process steps, equipment, in-house versus outsourced operations, and product finishing routes.
- Grade verification, heat/batch traceability, and material-test-certificate availability.
- Dimensional and visual inspection procedures and records.
- Chemical, PMI, hydrostatic, eddy-current, mechanical, or third-party testing, including who performs each test.
- Any certification or accreditation and its current scope/validity.
- Grade substitution controls and the application-specific use of SS 202 versus SS 304.
- Product suitability for each industry, operating environment, and standard.

## Genuine photographs requested

Please supply original, approved Steelgrave photographs of:

- Stainless-steel coils and strips.
- Pipe forming and manufacturing equipment.
- Welding/joining and other production stages, if applicable.
- Round pipes and tubes, including profile ends/cross-sections.
- Square and rectangular tube profiles.
- Fabricated products and components actually made by Steelgrave.
- Inspection and measurement activity, if these are performed.
- Packaging, storage, and dispatch.

The Gallery also includes three illustrative visual concepts for brand identity, with notices that they are not photographs of the actual premises, staff, or equipment. The homepage and Manufacturing page use these concepts with the same clarification. Replace them with approved facility photographs if the owner prefers only documentary images.

## Features requiring backend or hosting configuration

- Quote/contact enquiries are currently drafted in the visitor's email application. They are not delivered or stored by the website, and no success message is shown.
- For automatic email delivery, configure a protected serverless/backend endpoint and a company-authorized email provider; never put provider credentials in client code.
- To store enquiries, add an approved database, access controls, retention policy, and privacy notice.
- To receive drawings, implement authenticated/validated uploads, file-size and type restrictions, private storage, malware scanning, and retention controls. Currently visitors must attach files manually to their email draft.
- For server-side spam prevention, configure a backend rate limit and an approved challenge or equivalent control. The current form includes only a client-side honeypot.
- Verify the exact Google Maps pin and domain/HTTPS configuration before production release.
- Add analytics or Search Console only after the owner approves the privacy and tracking configuration.

## Local quality-assurance report

Update this report after testing the local site and obtaining owner confirmation:

| Area | Status | Notes |
|---|---|---|
| Production build and lint | PASS | `npm run build` and `npm run lint` complete successfully. |
| Main and legacy internal routes | PASS | 20 current and legacy routes render; internal links resolve to declared routes. |
| Header product dropdown | PASS | Opens and product links navigate to the correct page. |
| Mobile navigation | PASS | Menu opens, navigates, and closes at 390 px, 768 px, and 900 px widths. |
| Footer links and back-to-top | PASS | Footer destinations resolve; back-to-top returns to the page start. |
| Product enquiry preselection | PASS | Product slug in the quote URL preselects the matching category. |
| Product technical information and diagrams | PASS | Each of the three product pages displays 10 specification rows and a product-specific hollow-section diagram. |
| User-supplied dimensional reference charts | PENDING | Charts are labelled reference-only; verify the figures, applicable dimensional standards, and applicability as Steelgrave offerings before production use. |
| Product applications, finish guide, and FAQs | PASS | Each product page includes four potential applications, five general finish explanations, and nine answered FAQs. |
| Quality inspection explanations | PASS | Seven material, dimensional, surface, weld, and testing explanations are presented without claiming Steelgrave-specific testing availability. |
| Homepage hero and product-card captions | PASS | Captions are separated from image overlays; hero footer is in normal page flow. |
| Quote/contact form validation | PASS | Required name/email fields reject blanks; malformed email addresses are rejected. Product category can be preselected from a product enquiry link. |
| Email-draft quote/contact submission | NOT TESTED | Actual email-client launch and delivery are not verified; visitors must review and send the generated draft themselves. |
| Telephone, email, WhatsApp, and map links | PASS | Local hrefs contain the supplied contact details and updated address. Actual calls, message delivery, and the precise map pin are not verified. |
| Gallery lightbox | PASS | Images open in a dialog; Escape and the close button dismiss it. Supplied photos and illustrative visual concepts are distinguished by captions. |
| PDF catalogue/specification downloads | NOT TESTED | No download is published because approved documents have not been supplied. |
| Responsive layouts | PASS | No horizontal overflow observed at 390 px, 768 px, 900 px, 1024 px, and 1440 px. |
| Form delivery, secure storage, and uploads | NOT TESTED | No backend, email delivery, database, or file upload service is configured. |
| External contact services and Google Maps destination | NOT TESTED | Correct-looking destinations are configured, but external service behavior and exact location pin require owner verification. |
