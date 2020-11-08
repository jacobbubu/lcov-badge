import * as fs from 'fs'
import parseLCOV from 'parse-lcov'

export default function (filename: string) {
  try {
    const content = fs.readFileSync(filename, 'utf8')
    const linesCoverage = parseLCOV(content).reduce(
      (sum, curr) => {
        sum.found += curr.lines.found
        sum.hit += curr.lines.hit
        return sum
      },
      { found: 0, hit: 0 }
    )
    return Math.floor((linesCoverage.hit / linesCoverage.found) * 10000) / 100 + '% covered'
  } catch (err) {
    console.error('Failed to generate badge text', err)
  }
}
