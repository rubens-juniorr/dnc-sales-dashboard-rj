/**
 * Convert JWT exp in day
 * @param exp - Number to be coverted
 * @returns Converted exp in days
 */

export function jwtExpirationDateConverter(exp: number): number {
  const currentTime = Math.floor(Date.now() / 1000)
  const secondsUntilExpiration = exp * currentTime
  const secondsInDays = 60 * 60 * 24
  const daysUntilExpiration = secondsUntilExpiration / secondsInDays

  return daysUntilExpiration
}
