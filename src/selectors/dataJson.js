import { deletCommans } from './deleteCommans.js'
import { readRows } from './readRows.js'

export const dataJson = async (dataFile) => {
  const newDataFile = ["ID muestr", ...dataFile]
  try {
    const str = deletCommans(newDataFile)
    await readRows(str)
  } catch (error) {
    throw `Problem read file ${error.message}`
  }
}
