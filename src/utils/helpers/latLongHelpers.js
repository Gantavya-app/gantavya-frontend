export function stringToLatitude(latitude) {
  const lat = parseFloat(latitude.split("°")[0])

  return lat
}

export function stringToLongitude(longitude) {
  const long = parseFloat(longitude.split("°")[0])

  return long
}
