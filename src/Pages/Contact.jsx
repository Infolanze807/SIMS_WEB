import React from 'react'
import Seo from '../Component/Seo'
import { pageJsonLd, SITE_NAME } from '../seo/site'
import SimsHealthcarePage from '../Component/Contact/SimsHealthcarePage'

const Contact = () => {
  return (
    <div>
        <Seo
          title={`Contact ${SITE_NAME} | Book a Home Visit in Dubai`}
          description="Call or WhatsApp SIMS Home Healthcare on +971525231028. We visit homes and hotels across Dubai 24/7 from AB Center, Sheikh Zayed Rd, Al Barsha."
          path="/contact"
          jsonLd={pageJsonLd({
            path: '/contact',
            name: `Contact ${SITE_NAME}`,
            description:
              'Call or WhatsApp SIMS Home Healthcare on +971525231028. We visit homes and hotels across Dubai 24/7 from AB Center, Sheikh Zayed Rd, Al Barsha.',
            type: 'ContactPage',
          })}
        />
        <SimsHealthcarePage />
    </div>
  )
}
export default Contact
