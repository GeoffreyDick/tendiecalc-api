import { NowRequest, NowResponse } from '@vercel/node'
const axios = require('axios');

export default async function (req: NowRequest, res: NowResponse) {
  try {
    const response = await axios.get('https://api.exchangeratesapi.io/latest?base=USD').then(({data}) => data)
    res.send(response)
  } catch (error) {
    res.send(error)
  }
}
