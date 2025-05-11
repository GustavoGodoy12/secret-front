import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.setHeader(
    'Set-Cookie',
    serialize('authToken', '', { path: '/', maxAge: -1 })
  )
  res.status(200).json({ ok: true })
}
