import { NowRequest, NowResponse } from '@vercel/node'
const axios = require('axios');
const ticker = 'GME'
const params = {
  access_key: process.env.MARKETSTACK_API_KEY,
  exchange: 'NYSE',
  interval: '15min'

}

export default async function (req: NowRequest, res: NowResponse) {
  try {
    const response = await axios.get(`https://api.marketstack.com/v1/tickers/${ticker}/intraday/latest`, { params }).then(({data}) => data)
    res.send(response)
  } catch (error) {
    res.send(error)
  }
}
