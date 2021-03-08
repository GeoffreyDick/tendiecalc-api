import { NowRequest, NowResponse } from '@vercel/node'
import axios from 'axios'

export default function (req: NowRequest, res: NowResponse) {
  // Cache results for 24h
  res.setHeader('Cache-Control', 's-maxage=86400')

  axios.get('https://api.exchangeratesapi.io/latest?base=USD')
  .then(function (response) {
    res.status(200).send(response)
  })
  .catch(function (error) {
    res.send(error);
  })
}
