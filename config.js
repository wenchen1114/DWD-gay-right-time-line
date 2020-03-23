require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://wenchen1114-dwd-gay-right-time-line.glitch.me/test'
}