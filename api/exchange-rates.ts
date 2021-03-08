import { NowRequest, NowResponse } from '@vercel/node'
const axios = require('axios');

module.exports = async function (req: NowRequest, res: NowResponse) {
  // Cache results for 24h
  res.setHeader('Cache-Control', 's-maxage=0')

  try {
    const response = await axios.get('https://api.exchangeratesapi.io/latest?base=USD')
    res.send(response)
  } catch (error) {
    res.send(error)
  }
}
