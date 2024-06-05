export const formatDate = rawDate => {
  const date = new Date(rawDate)
  const locale = 'en-US'

  const options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }

  const formattedDate = date.toLocaleDateString(locale, options)
  return formattedDate
}

export const formatDateTime = rawDate => {
  const date = new Date(rawDate)
  const locale = 'en-US'

  const options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }

  const timeOptions = { hour: '2-digit', minute: '2-digit' }

  const formattedDate = date.toLocaleDateString(locale, options)
  const formattedTime = date.toLocaleTimeString([], timeOptions)
  const dateTime = formattedDate + ' at ' + formattedTime

  return dateTime
}
