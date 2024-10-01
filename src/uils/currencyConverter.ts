/**
 * Convert to BRL currency format
 * @param value - number to be coverted
 * @returns Converted BRL string
 */

export function currencConverter(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
