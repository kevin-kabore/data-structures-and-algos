/**
 * reverses a string
 * ex: 'Hello my name is Bob' => 'boB si emane ym olleH'
 * ex: 'Bye Felicia!' => '!aicileF eyB'
 * 
 * @param {string} str
 * @returns {string} 
 */
// O(n) time and space 
// but can be cleaner
function reverse(str){ 
    if (!str || typeof str !== 'string') {
      throw new Error('reverse() expects a string')
    }
  
    const reversed = [];
    // loop over str
    for (let i=str.length -1; i >= 0; i--) {
      // push to array
      reversed.push(str[i])
    }
    // return joined array
    return reversed.join('')
}
// O(n) time and space
// cleaner
function reverse2(str) {
    return str.split('').reverse().join('')
}
// O(n) time and space
// clean, modern, and fancy
const reverse3 = str => [...str].reverse().join('')


console.log(reverse())
console.log(reverse('Hello my name is Bob'))
console.log(reverse2('Hello my name is Bob'))
console.log(reverse3('Hello my name is Bob'))