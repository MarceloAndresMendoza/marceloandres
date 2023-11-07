import Image from 'next/image'
import { stringify } from 'postcss'

export default async function Home() {
  let data = ''
  const getAPI = async () => {
    const res = await fetch('http://192.168.5.2:3000/api')
    data = await res.json()
  }
  await getAPI()
  return (
    <>
      <main className='p-4'>
        <h1>{data.message}</h1>
        <h1>Data: {
          data.exampleData.map((item, index) => {
            return (
              <div className='m-2' key={index}>
                <p><span className='font-bold text-green-500'>{ item.id }</span>{': ' + item.title}</p>
              </div>
            )
          })
        }</h1>
      </main>
    </>
  )
}
