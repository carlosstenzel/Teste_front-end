const Cors = require('micro-cors');
const axios = require('axios');
const cors = Cors({
  allowedMethods: ['GET'],
});

async function Funds(req, res) {
  const urlData =
    'https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full';

  const response2 = await axios.get(urlData);
  const data = response2.data;

  return res.json(data);
}
module.exports = cors(Funds);
