import readData from '../services/readData.services.js'

export const getDataController = async (req, res) => {
  try {
    const data = await readData.getAllRegiter()
    res.status(200).json(data)
  } catch (error) {
    throw error
  }
}
