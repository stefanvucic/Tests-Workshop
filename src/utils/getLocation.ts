export const getLocation = (lat: number, lng: number): string => {
  if (lat > 0 && lng > 0) {
    return 'N-E'
  } else if (lat > 0 && lng < 0) {
    return 'N-W'
  } else if (lat < 0 && lng < 0) {
    return 'S-W'
  } else if (lat < 0 && lng > 0) {
    return 'S-E'
  }
  return 'One or both of the coordinates is in center'
}
