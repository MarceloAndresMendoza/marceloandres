import { BentoBody } from '@/components/modules/BentoBody'
import { Footer } from '@/components/modules/Footer'
import { Hero } from '@/components/modules/Hero'

export default async function Home() {
  let data = ''
  const getAPI = async () => {
    const res = await fetch('http://192.168.5.2:3000/api')
    data = await res.json()
  }
  await getAPI()
  return (
    <>
      <header>
        <Hero />
      </header>
      <main className='p-4 text-white'>
        <BentoBody />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
