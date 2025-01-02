import { Hero } from '@/components/sections/Hero'
import { Solutions } from '@/components/sections/Solutions'
import { Process } from '@/components/sections/Process'
import { CTA } from '@/components/sections/CTA'
import { Stats } from '@/components/sections/Stats'
import { reader } from '@/lib/keystatic'

export default async function HomePage() {
  const hero = await reader.singletons.hero.read()
  const solutions = await reader.singletons.solutions.read()

  return (
    <main>
      <Hero hero={hero} />
      <Solutions solutions={solutions} />
      <Process />
      <Stats className='container mx-auto mb-32 px-4' variant='white' />
      <CTA />
    </main>
  )
} 