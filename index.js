module.exports = function (callback) {
  // there should be no error
  callback(null, Math.floor(parseInt(new Date() - new Date('2015/02/08'), 10) / 86400000) + 1)
}
