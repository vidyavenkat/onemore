ß/**
 * Login to portal via the API
 * @param {number} string_length the length of the generated strings
 * @example
 *  generate_random_string(5)
 */
export default class Utilities {
  static generate_random_string(string_length: number) {
    let random_string = ''
    let random_ascii

    for (let i = 0; i < string_length; i++) {
      random_ascii = Math.floor(Math.random() * 25 + 97)
      random_string += String.fromCharCode(random_ascii)
    }

    return random_string
  }
}
