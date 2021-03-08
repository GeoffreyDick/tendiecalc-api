import { NowRequest, NowResponse } from '@vercel/node'
const axios = require('axios');

export default async function (req: NowRequest, res: NowResponse) {
  // Cache results for 6h
  res.setHeader('Cache-Control', 's-maxage=21600')
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')

  try {
    const response = await axios.get('https://api.exchangeratesapi.io/latest?base=USD').then(({data}) => data)
    res.send(response)
  } catch (error) {
    res.send(error)
  }
}
