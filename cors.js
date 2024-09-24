const express = require('express');
const cors = require('cors');
const app = express();
const allowedOrigins= ['https://bd-1-5-assignment1-z06yse1a1-supreet-gandhis-projects.vercel.app'];
let corsOptionsDelegate = (req, callback) => {
var corsOptions;
console.log(req.header('Origin'));
if(allowedOrigins.indexOf(req.header('Origin')) !== -1) {
corsOptions = { origin: true };
}
else {
corsOptions = { origin: false };
}
callback(null, corsOptions);
};
exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);