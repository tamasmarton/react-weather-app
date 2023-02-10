const convertF = (temp: number) => {
  return convertC(temp) * 1.8 + 32
}

const convertC = (temp: number) => {
  return temp
}

export const formatTemp = (temp: number, unit: string) => {
  return unit === 'imperial' ? `${convertF(temp).toFixed(0)}˚F` : `${convertC(temp).toFixed(0)}˚C`
}
