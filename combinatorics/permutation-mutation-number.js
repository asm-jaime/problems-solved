/* #mutationnumber
  * task: one mutation by a number
  * << [1,2,3,4]
  * >> 1
*/

const factorial = (n) => {
  let result = 1;

  for(let a = 1; a < n + 1; ++a) {
    result = result * a;
  }

  return result;
};

export default function mutation_number (array) {
  const result = [];

  const buffer = array.slice();

  let remain = mutation_number;
  while(buffer.length && remain) {
    const div = factorial(buffer.length - 1);

    const pos = Math.floor(remain / div);
    result.push(buffer.splice(pos, 1)[0]);

    remain = remain % div;
  }

  return result.concat(buffer);
}
