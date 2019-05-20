// eslint-disable-next-line no-undef
var axios = require("axios");

let API_KEY = "AIzaSyDcYxpp7GlxSCAA6XLzEFuf-BsXeyjXm4A";

let input = "Restaurants in Sydney";

let url =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" +
  encodeURI(input) +
  "&fields=name,formatted_address&key=" +
  API_KEY;

const makeRequestToGoogle = () => {
  axios.get(url).then(async function(response) {
    await printResults(response.data.results).then(
      makeRequestToGoogleWithPageToken(response.data.pagetoken, 0)
    );
  });
};

const makeRequestToGoogleWithPageToken = (pagetoken, i) => {
  let newUrl = url + "&pagetoken=" + pagetoken;
  axios.get(newUrl).then(function(response) {
    printResults(response.data.results).then(() => {
      if (i < 2) makeRequestToGoogleWithPageToken(response.pagetoken, ++i);
    });
  });
};
const printResults = async results => {
  for (let i = 0; i < results.length; i++) {
    // eslint-disable-next-line no-console
    console.log(results[i].formatted_address);
  }
};
makeRequestToGoogle();
