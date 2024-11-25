/**
 * Formats a number by adding commas as thousand separators.
 *
 * @param num - The number to format.
 * @returns A string of the number with commas as thousand separators.
 *
 * @example
 * formatNumberWithCommas(1234567);    // returns "1,234,567"
 * formatNumberWithCommas(1234567.89); // returns "1,234,567.89"
 */
export default function formatNumberWithCommas(num: number): string {
  // Detect if the number has a decimal part
  const [integerPart, decimalPart] = num.toString().split('.')

  // Format the integer part with commas
  const formattedInteger = parseInt(integerPart, 10).toLocaleString('en-US')

  // Return formatted number, appending decimal part if it exists
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger
}
