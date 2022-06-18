import fs from 'fs'
import path, { join } from 'path'
import dotenv from 'dotenv'
dotenv.config()

import { dataJson } from '../selectors/dataJson.js'

const pathLog = path.resolve(`../../../../temp/${process.env.LOG}.log`)

const readDate = () => {
  const executionTime = new Date()
  const pathData = fs.readdirSync('../../../../temp/Data', 'utf-8')
  try {
    const file = fs.readFileSync(
      `../../../../temp/Data/${pathData[0]}`,
      'utf-8',
    )
    let dataFile = file.split(',')
    dataJson(dataFile)
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
