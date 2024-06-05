export const formatDate = rawDate => {
  const date = new Date(rawDate)
  const formattedDate = date.toLocaleDateString({
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  return formattedDate
}
