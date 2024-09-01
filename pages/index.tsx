import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import NewsFeed from '@/components/NewsFeed'
import Widgets from '@/components/Widgets'
import { GetServerSideProps } from 'next'
import { Tweet } from '@/typing'
import { fetchTweets } from '@/utils/fetchTweets'
const inter = Inter({ subsets: ['latin'] })

interface Props{
  tweets:Tweet[]
}
export default function Home({tweets}: Props) {
  return (
    <main className='grid grid-cols-9 lg:max-w-6xl
     mx-auto max-h-screen overflow-hidden'>
      <Sidebar/>
      <NewsFeed tweets={tweets}/>
      <Widgets/>
    </main>
  )
}
export const getServerSideProps:GetServerSideProps =async(context)=>{
  const tweets = await fetchTweets();
  return{
    props:{
      tweets
    }
  }
}
