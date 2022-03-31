import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (

    <div className='flex h-screen bg-pink-200'>
      <Head>
        <link rel="icon" href="/PP2b.jpeg" />
        <title>Nurayaki Ultah</title>
      </Head>
      <div className='m-auto grid place-items-center'>
        <div className='hover:scale-125 transition-all'>
          <Image className="rounded-full" src="/PP2b.jpeg" height={200} width={200} />
        </div>
        <p className='text-2xl'>Selamat Ulang Tahun Yang Ke 20 Nurayaki</p>
        <p>I'll add more text here after I finish writing things up, enjoy your lovely birthday ❤️</p>
        <div className='bg-gray-50 border-2 rounded-xl my-2 hover:scale-150 hover:bg-red-400 transition-all'>
          <p className='mx-2'>Made with love ~A.W.N~ ❤️</p>
        </div>
      </div>
    </div>
  )
}

export default Home
