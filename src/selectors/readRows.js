import { integrationObject } from './processedData.js'
import { takeLab } from './takeLab.js'

export const readRows = (data) => {
  const maxLentgUser = 66
  let arrayPatient = []
  try {
    const header = data
      .splice(0, data.indexOf('Par��m.microsc��picos') + 1)
      .map((elemet) =>
        elemet.includes('*')
          ? elemet.replace('*', '').toUpperCase()
          : elemet.replace(' ', '').toUpperCase(),
      )
    for (let i = 0; i < data.length; i++) {
      arrayPatient.push(data.splice(0, maxLentgUser))
    }
    const newTaking = integrationObject(header)
    takeLab(newTaking, arrayPatient)
  } catch (error) {}
}
