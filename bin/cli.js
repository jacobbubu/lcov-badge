#!/usr/bin/env node
const getBadgeText = require('../dist').default

const lcovFile = process.argv[2]

if (!lcovFile) {
  console.error('lcov.info file required')
  process.exit(1)
}

console.log(getBadgeText(lcovFile))
