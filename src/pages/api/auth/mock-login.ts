import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()


  const token = 'mocktoken'

  res.setHeader(
    'Set-Cookie',
    serialize('authToken', token, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, 
    })
  )

  res.status(200).json({ ok: true })
}
