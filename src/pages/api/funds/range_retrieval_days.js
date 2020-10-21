const Cors = require('micro-cors');
const _ = require('lodash');
const axios = require('axios');
const cors = Cors({
  allowedMethods: ['GET'],
});

async function rangeRetrievalDays(req, res) {
  const urlData =
    'https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full';

  const response2 = await axios.get(urlData);
  const data = response2.data;

  const response = _.groupBy(data, 'operability.retrieval_quotation_days');
  const filterFunds = [];
  Object.keys(response).map((nameMacro) => {
    filterFunds.push(parseInt(nameMacro));
  });
  return res.send(filterFunds);
}
module.exports = cors(rangeRetrievalDays);
