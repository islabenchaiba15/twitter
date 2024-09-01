// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {client} from '../../sanity'
import { Tweet } from '@/typing'
import {groq} from 'next-sanity'
const feedQuery = groq`
*[_type=="tweet"]
`

type Data = {
  tweets: Tweet[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const tweets:Tweet[] = await client.fetch(feedQuery)
    
  res.status(200).json({tweets})
}
