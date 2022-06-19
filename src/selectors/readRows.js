import { integrationObject } from './processedData.js'

export const readRows = (data) => {
  const maxLentgUser = 66
  let arrayPatient = []
  try {
    const header = data.splice(0, maxLentgUser)
    .map((element)=>{
      if(element){
        let elementIte = element.replace('*', '').toUpperCase()
        return elementIte.replace(/ /g, '')
      }
    })
  
    for (let i = 0; i < data.length; i++) {
      arrayPatient.push(data.splice(0, header.length))
    }
    const newTaking = integrationObject(header, arrayPatient)
    //takeLab(newTaking, arrayPatient)
    //console.log(arrayPatient[2])
  } catch (error) {}
}
