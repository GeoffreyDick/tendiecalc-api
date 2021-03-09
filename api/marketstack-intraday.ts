import { NowRequest, NowResponse } from '@vercel/node'
const axios = require('axios');

export default async function (req: NowRequest, res: NowResponse) {
  // Extract ticker from req.query
  const { ticker } = req.query;

  // Add Marketstack API Key to params
  const params = {
    access_key: process.env.MARKETSTACK_API_KEY
  }

  try {
    const response = await axios.get(`https://api.marketstack.com/v1/ticker/${ticker}/intraday/latest`, { params }).then(({data}) => data)
    res.send(response)
  } catch (error) {
    res.send('error')
  }
}
