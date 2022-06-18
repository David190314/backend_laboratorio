export const deletCommans = (data) => {
  try {
    const str = data.map((element) => {
      let elementIte = element.slice(1, element.length - 1).replace(' ', '')
      return elementIte
    })
    return str
  } catch (error) {
      return `this array present error ${error.message}`
  }
}
