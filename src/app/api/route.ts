import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.send('Hello from the server')
  } else {
    res.json({ message: 'Method not allowed' })
  }
}