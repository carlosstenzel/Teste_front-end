const Cors = require('micro-cors');
const _ = require('lodash');
const axios = require('axios');
const cors = Cors({
  allowedMethods: ['GET'],
});

async function rangeMinimumInitial(req, res) {
  const urlData =
    'https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full';

  const response2 = await axios.get(urlData);
  const data = response2.data;

  const response = _.groupBy(
    data,
    'operability.minimum_initial_application_amount'
  );

  const filterFunds = [];
  Object.keys(response).map((nameMacro) => {
    filterFunds.push(parseFloat(nameMacro));
  });

  function sortArray(array) {
    var temp = 0;
    for (var i = 0; i < array.length; i++) {
      for (var j = i; j < array.length; j++) {
        if (array[j] < array[i]) {
          temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
      }
    }
    return array;
  }

  return res.send(sortArray(filterFunds));
}
module.exports = cors(rangeMinimumInitial);
