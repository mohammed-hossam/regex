//* natinal id if condition validation:
/* function test(number) {
  const arr = number.toString().split('');
  //   console.log(arr);
  if (arr.length !== 14) {
    return console.log('eror');
  }
  console.log(arr[0]);
  console.log(typeof arr[0]);

  if (arr[0] !== '2' && arr[0] !== '3') {
    return console.log('eror');
  }
  const medal = arr[1] + arr[2];
  console.log(Number(medal));
  if (Number(medal) > 99 && Number(medal) < 40) {
    return console.log('eror');
  }
  const shahr = arr[3] + arr[4];
  if (Number(shahr) < 1 && Number(shahr) > 12) {
    return console.log('eror');
  }
  const youm = arr[5] + arr[6];
  if (Number(youm) < 1 && Number(youm) > 30) {
    return console.log('eror');
  }
  const mo7fza = arr[7] + arr[8];
  const m = ['01', '02', '03', '04', '30', '31', '32', '33', '34', '35', '88'];

  const x = m.includes(mo7fza);
  if (x) {
    return console.log('done');
  }
  if (!x) {
    if (
      Number(mo7fza) <= 19 &&
      Number(mo7fza) >= 11 &&
      Number(mo7fza) >= 21 &&
      Number(mo7fza) <= 29
    ) {
      return console.log('eror');
    }
    return console.log('done');
  }
}
test(29509010109514); */

//*regex:
// let rgx =
//   /^[23][4-9][1-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])(01|02|03|04|11|12|13|14|15|16|17|18|19|21|22|23|24|25|26|27|28|29|31|32|33|34|35|88)\d\d\d\d\d$/;
/* let rgx =
  /^[23][4-9][1-9](?:0[1-9]|1[0-2])(?:0[1-9]|[12][0-9]|3[01])(?:01|02|03|04|11|12|13|14|15|16|17|18|19|21|22|23|24|25|26|27|28|29|31|32|33|34|35|88)\d{5}$/;
const r = rgx.test(29509010109514);
console.log(r); */

/* let telephoneRgx = /^(?:[0][\d]{2})([- /\ /.])\d{3}\1\d{4}$/;
let number = telephoneRgx.test('011-424-8186');
console.log(number); */

let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames = /First_Name: (\w+), Last_Name: (\w+)/gm;
let match = regexpNames.exec(personList);
do {
  console.log(`Hello ${match[1]} ${match[2]}`);
} while ((match = regexpNames.exec(personList)) !== null);

// const text = 'A quick fox';

// const regexpLastWord = /\w+$/;
// console.log(text.match(regexpLastWord));
// expected output: Array ["fox"]

// const regexpWords = /\b\w+\b/g;
// console.log(text.match(regexpWords));
// expected output: Array ["A", "quick", "fox"]

// const regexpFoxQuality = /\w+(?= fox)/;
// console.log(text.match(regexpFoxQuality));
// // expected output: Array ["quick"]

/* var myArray1 = /d(b+)d/g.exec('cdbbdbsbz'); //m3lomat
var myArray2 = 'cdbbdbsbz'.match(/d(b+)d/g); //bdon m3lomat
console.log(myArray1);
console.log(myArray2); */

// If you need to know if a string matches a regular expression RegExp, use RegExp.test().
// If you only want the first match found, you might want to use RegExp.exec() instead.
// If you want to obtain capture groups and the global flag is set, you need to use RegExp.exec() or String.prototype.matchAll() instead.
//match: Used to retrieve the matches when matching a string against a regular expression. Returns an array with the matches or null if there are none.

/* 
/d=[0-9]
The exact count: {5}
\d{5} denotes exactly 5 digits, the same as \d\d\d\d\d.

The example below looks for a 5-digit number:

alert( "I'm 12345 years old".match(/\d{5}/) ); //  "12345"
We can add \b to exclude longer numbers: \b\d{5}\b. 
*/

// +={1,} one or more
// *={0,} zero or more
// ?={0,1} makes the symbol optional To make things clear: usually a question mark ? is a quantifier by itself (zero or one), but if added after another quantifier (or even itself) it gets another meaning – it switches the matching mode from greedy to lazy.

/* let str = "1 turkey costs 30€";
let regexp = /\d+(?=(€|kr))/; // extra parentheses around €|kr

alert( str.match(regexp) ); // 30, € */
// const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// const phone = /^01[0125][0-9]{8}$/;
const namm = /^[a-zA-Z]+((\s[a-zA-Z]+)){1,}$/;
// const namm = /^([A-Za-z]|[ء-ي])+(\s\1+){2,}$/;
const arabynamm = /^([a-zA-Zء-ي])+((\s[a-zA-Zء-ي]+)){1,}$/;
const araby = /[a-zA-Zء-ي]+/;

console.log(namm.test('mohamed hossam'));
console.log(arabynamm.test('dho حسام'));
console.log(araby.test('محمد'));
