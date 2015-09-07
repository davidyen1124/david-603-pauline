#!/usr/bin/env node

var love = require('./')

love(function (err, days) {
  if (err) throw err

  console.log(days + ' Days')
})
