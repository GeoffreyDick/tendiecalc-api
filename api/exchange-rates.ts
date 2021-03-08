import { NowRequest, NowResponse } from '@vercel/node'
const axios = require('axios');

export default async function (req: NowRequest, res: NowResponse) {
  // Cache results for 24h
  res.setHeader('Cache-Control', 's-maxage=0')

  try {
    const response = await axios.get('https://api.exchangeratesapi.io/latest?base=USD').then((data) => data)
    res.send(response)
  } catch (error) {
    res.send(error)
  }
}
