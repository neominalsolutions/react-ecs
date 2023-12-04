// ES6 ile birlikte gelen object ve array referanslarını koparmamızı sağlayan bir teknik.

const obj = { id: 1, name: 'can' };
const obj1 = obj;
obj1.name = 'halil';

console.log('obj', obj, 'obj1', obj1);

// ES5 de object.assign(); 1.yöntem
const obj2 = {};
Object.assign(obj, obj2);
obj2.name = 'tankurt';

console.log('obj', obj, 'obj2', obj2);

// ES6 ile birlikte spread operator kullanımı geldi.
const obj5 = { ...obj }; // spread
obj5.name = 'jale';

console.log('obj', obj, 'obj5', obj5);

const obj6 = { surname: 'Han', ...obj, age: 21 }; // yeni bir property ekledik
console.log('obj6', obj6);

// aynı zamanda spread operatör diziler ilede kullanılabilir

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [78, ...numbers, 96, 76]; // slice ve map yerine de tercih edilebilir.
numbers2.push(56);
// push ve unshift işlemleri içinde spread operatoru kullanabilir.

console.log('numbers2', numbers2);
console.log('numbers', numbers);

// spread operator object dizilerinde her bir objenin referansını koparıyor mu?

const persons = [{ id: 1, name: 'ali' }];
// let persons2 = [...persons]; // gereksiz yazım şekli, bu dizi içindeki objeler için yeterli bir kullanım değil bunun yerine map içinde spread operatör kullanımını öneririz.

// obje referanslarıda koparılmış oldu
const persons2 = persons.map((item) => {
	return { ...item }; // item değerleri ile dönüş yapacağınız nesne propertyleri farklı ise o zaman mapping yaparak key valu cinsinden değerleri yazarak döndürebiliriz.
});

persons2.push({ id: 2, name: 'hande' });

persons2[0].name = 'koray';

console.log('persons', persons);
console.log('persons2', persons2);
