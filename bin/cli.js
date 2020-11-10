#!/usr/bin/env node
const fs = require('fs')
const getBadgeText = require('../dist').default

const lcovFile = process.argv[2]

if (!lcovFile) {
  console.error('lcov.info file required')
  process.exit(1)
}

if (fs.existsSync(lcovFile)) {
  console.log(getBadgeText(lcovFile))
} else {
  console.error('The lcov.info file does not exist.')
}
