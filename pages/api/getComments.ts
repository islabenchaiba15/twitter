// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {client} from '../../sanity'
import { Tweet } from '@/typing'
import {groq} from 'next-sanity'
const feedQuery = groq`
*[_type=="comment" && references(*[_type=="tweet" &&
 _id=="$tweetId"]._id)]       
`

type Data = {
  comments: Comment[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const{tweetId}=req.query
    const comments:Comment[] = await client.fetch(feedQuery,{
        tweetId,
    })
    console.log(comments)
  res.status(200).json({comments})
}
