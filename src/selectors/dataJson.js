import { deletCommans } from './deleteCommans.js'
import { readRows } from './readRows.js'

export const dataJson = async (dataFile) => {

  try {
    const str = deletCommans(dataFile)
    const dataProcessed = await readRows(str)
    

  } catch (error) {
    throw `Problem read file ${error.message}`
  }
}
