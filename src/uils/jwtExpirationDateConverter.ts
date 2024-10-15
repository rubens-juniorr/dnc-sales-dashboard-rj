/**
 * Convert JWT exp in days
 * @param exp - Number to be coverted
 * @returns The converted exp in days
 */

export function jwtExpirationDateConverter(exp: number): number {
  const currentTime = Math.floor(Date.now() / 1000)
  const secondsUntilExpiration = exp - currentTime
  const secondsInDay = 60 * 60 * 24
  const daysUntilExpiration = secondsUntilExpiration / secondsInDay
  return daysUntilExpiration
}
