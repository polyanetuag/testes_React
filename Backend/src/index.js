const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({message:'Hello World'});
})

app.listen(5000, () => {
  console.log("🚀 Back-end started!")
});