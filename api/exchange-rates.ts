import { NowRequest, NowResponse } from '@vercel/node'
const axios = require('axios');

const allowCors = fn => async (req: NowRequest, res: NowResponse) => {
  // Cache results for 6h
  res.setHeader('Cache-Control', 's-maxage=21600')

  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = async (req: NowRequest, res: NowResponse) => {
  try {
    const response = await axios.get('https://api.exchangeratesapi.io/latest?base=USD').then(({data}) => data)
    res.send(response)
  } catch (error) {
    res.send(error)
  }
}

module.exports = allowCors(handler)
