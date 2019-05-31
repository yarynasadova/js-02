// for (let i = 10; i > 0; i--) {
//     if ( i % 2 === 0) {
//         console.log(i);
//     }
// }

// let i = 100;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let i = 100;
// do {
//     console.log(i);
//     i++;
// } while (i < 10)

// let num = NaN;
// while (Number.isNaN(num)) {
//     num = parseFloat(prompt('Enter a number'));
// }
// alert(num);

let products = [];
products[0] = 'Tesla X';
products[1] = 'iPhone X';
products[2] = 'X-men';
products[10] = 'Space-X';
products.push('X-bow');

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
// }

// products.forEach(function(el) {
//     console.log(el);
// });

products.forEach( el => console.log(el) );
