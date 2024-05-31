export const generateSlug = value => {
  let text = value.toLowerCase().replace(/ /g, '-')
  return text
}
