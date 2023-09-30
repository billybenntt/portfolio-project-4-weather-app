export const convertTemperature = (inputTemp, targetUnit) => {
  if (targetUnit === 'C') {
    return Math.floor(inputTemp - 273.15)
  }
  if (targetUnit === 'F') {
    return Math.floor(1.8 * (inputTemp - 273.15) + 32)
  } else return 0
}