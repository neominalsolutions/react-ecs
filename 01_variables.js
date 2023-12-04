// primative types c# value types (STACK)
// boolean, number, string
var a = false; //boolean
var b = 14; // number
var c = 14.5; // number
var d = 'ali'; // string
var char = 'c'; // string

// bir değeri tip bazlı type safe kontrolü çalıştırmak için 
// typeof operator kullanırız.

// var global tanımı bir değişken tipi olduğu için blok-level
// bir kod blogu içerisinde de değişkenin değirini global olarak
// değiştirir.
if(true) {
 var a = 15;
 console.log('a',a); // var için 15
}

 console.log('a',a); // var 15 result

// var ile aynı değişken ismine sahip bir değişken tanımı yapılabilir.
// var keyword hataya müsait bir tip olduğu için yerini const 
// ve let ifadeleri almıştır.
// ES6 ile birlikte const,let variables type geldi.
// const ve let kullanımı aynı isimde değişken tanımına izin vermiyor
// globalde aynı isimde değişken tanımı yapamadık.
// const a = 23;

if(true) { // local scope aynı isimde değişken tanımını 
// const ve let için yapabiliriz.
 let a = 45;
 console.log('a',a )
}

console.log('a', a);


// complex types c# referance types (HEAP)
// object, function contructor, array, regex, class


// const ile let arasındaki fark nedir ?

const a = 5; // sabit tip değer ataması yapınca birdaha 
// değer ataması yapılamaz
// a = 7;
console.log('a',a);

let b = 6;
b = 7;
console.log('b',b);

// yukarıdaki örnek value types yada primative types için geçerli

// referance type ile çalışırken const kullanımı nasıl yaparız

const user = {id:1, name:'ali'}; // object literal
user.name = 'can';

console.log('user', user);

// user = {id:2,name:'mustafa'};  // invalid
// değişken yeni bir referans değeri
// atamamız const olarak tanımlanan değişkende hata verir.
console.log('user', user);

