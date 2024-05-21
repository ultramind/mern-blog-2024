export const generateSlug = value => {
  let text = value.toLowerCase().replace(/ /g, '_')
  return text
}
