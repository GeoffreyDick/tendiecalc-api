import { NowRequest, NowResponse } from '@vercel/node'
const axios = require('axios');

export default async function (req: NowRequest, res: NowResponse) {
  // Cache results for 24h
  res.setHeader('Cache-Control', 's-maxage=86400')

  const response = await axios.get('https://api.exchangeratesapi.io/latest?base=USD')
  res.send(await response)
}
