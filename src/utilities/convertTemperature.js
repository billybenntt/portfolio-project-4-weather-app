export const convertTemperature = (kelvin, type) => {
  if (type === 'C') {
    return Math.floor(kelvin - 273.15)
  }
  if (type === 'F') {
    return Math.floor(1.8 * (kelvin - 273.15) + 32)
  } else return 0
}