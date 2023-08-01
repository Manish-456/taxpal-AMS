import FAQ from '@/components/FAQ'
import Features from '@/components/features'
import GetStarted from '@/components/get-started'
import Hero from '@/components/hero'
import Pricing from '@/components/pricing'
import Suggestions from '@/components/suggestions'
import Testimonials from '@/components/testimonials'
import TrustedCompanies from '@/components/trustedCompanies'

export default function Home() {
  return (
<div>
 <Hero />
 <TrustedCompanies />
 <Features />
 <Suggestions />
 <GetStarted />
 <Testimonials />
 <Pricing />
 <FAQ />
</div>
  )
}
