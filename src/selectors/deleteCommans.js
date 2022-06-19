export const deletCommans = (data) => {
  try {
    const str = data.map((element) => {
      const reg = /"([^"]*)"|'([^']*)'/g
      let elementIte = element.replace(reg, '')
      return elementIte.length>1 ? elementIte : 'N/A'
    })
    return str.slice(0, str.length-1)
  } catch (error) {
      return `this array present error ${error.message}`
  }
}
