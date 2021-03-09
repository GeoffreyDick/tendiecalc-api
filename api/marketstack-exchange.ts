import { NowRequest, NowResponse } from '@vercel/node'
const axios = require('axios');

export default async function (req: NowRequest, res: NowResponse) {
  // Extract exchange from req.query
  const { exchange } = req.query;

  // Add Marketstack API Key to params
  const params = {
    access_key: process.env.MARKETSTACK_API_KEY
  }

  try {
    const response = await axios.get(`https://api.marketstack.com/v1/exchange/${exchange}`, { params }).then(({data}) => data)
    res.send(response)
  } catch (error) {
    res.send('error')
  }
}
