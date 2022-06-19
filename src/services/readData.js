import fs from 'fs'
import path, { join } from 'path'

import { dataJson } from '../selectors/dataJson.js'

const readDate = async () => {
  const executionTime = await new Date()
  const pathLog = await path.resolve(`../../../../../../temp/data/logs/${executionTime.toDateString()}.log`)
  const pathData = fs.readdirSync('../../../../../../temp/data', 'utf-8')
  try {
    const file = fs.readFileSync(`../../../../../../temp/Data/${pathData[0]}`, 'utf-8')
    let dataFile = file.split(',')
    dataJson(dataFile.slice(1, dataFile.length))
    fs.appendFileSync(
      pathLog,
      `\n messages: The document read succesfully, ${executionTime.toLocaleString()}`,
      'utf-8',
      )
    } catch (error) {
    fs.appendFileSync(
      pathLog,
      `\n messages: The document could not read, Path: ${
        error.path
      }, ExecuteDate: ${executionTime.toLocaleString()}`,
      'utf-8',
    )
  }
}

export { readDate }
