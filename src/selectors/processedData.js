export const integrationObject = (str) => {
  let newTaking = {}
  const string = str.map((elemet) => {
    let elmentIte = elemet
    return (newTaking = {
      ...newTaking,
      [elmentIte]: 'name',
    })
  })
  return newTaking
}
