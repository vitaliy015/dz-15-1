/* 
1.Як можна оголосити змінну у Javascript?
var - устарівший формат обявлення змінної  
let - оновленний формат оновлення змінної в якому виправили баги повязані з областью видимості
const - скорочено від слова константа означає що значення змінної не можна міняти але є виключеення 
з обєктами

2.У чому різниця між функцією prompt та функцією confirm?
prompt - має поле для вводу данних і повертає нам строку 
confirm - має дві функції ок і cancle, конфірм потрібен для того щоб користувач одобрив або 
відхилив наш запит)

3.Що таке неявне перетворення типів? Наведіть один приклад.
це коли інтерпретатор js при считуванню нашого коду сам оптимізує наш код!
let num = 4 * '15'
*/

let name = 'Vitaliy';
let admin = name;
console.log(admin)

let numberUser = prompt('you number?')

let days = numberUser * 24 * 60 * 60;
console.log(days)
