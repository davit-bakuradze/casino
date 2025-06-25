export function formatCurrency(value: string): string {
   if (!value) return ''
   let clean = value.replace(/[^0-9.]/g, '')

   const lastDot = clean.lastIndexOf('.')
   let integer = clean
   let decimal = ''

   if (lastDot !== -1) {
      integer = clean.slice(0, lastDot)
      decimal = clean.slice(lastDot + 1)
   }

   integer = integer.replace(/^0+(?!$)/, '')
   const formattedInt = integer.length ? Number(integer).toLocaleString('en-US') : '0'

   if (lastDot !== -1) {
      return `${formattedInt}.${decimal}`
   }
   return formattedInt
}
