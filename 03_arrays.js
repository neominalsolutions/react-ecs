// js diziler c# koleksiyon ile dizilere çok benziyor
// js diziler dinamik olarka boyutları arttırılabilir.
// js hetorojen karışımlardan oluşuyor.
let arr = [1, true, { id: 1, name: 'test' }, ['can', 'canan']];
console.log('arr', arr);
arr.push('ahmet'); // append
arr.unshift('kaan'); // prepend

//ekleme çıkarma güncelleme işlemlerinde diinamik olarak boyutu artar.
console.log('typeof', typeof arr); // object
arr.splice(0, 1);
console.log('arr2', arr);

const arr2 = arr; // reference type copy
arr2.push('hande'); // arr1 de push oluyor.
console.log('arr2', arr2);

// 1.yöntem value types array
const arr3 = arr.slice(0, arr.length); // shadow copy özelliği yeni referans üzerinden kopyalama yapar.
arr3.push('tansu');

console.log('arr3', arr3, 'arr', arr);

// 2.yöntem Map ES6 ile geldi, slice gibi referans değerini koparır.
// dizinin bütün elemanları içerisinde dönmenizi sağlar.
const arr4 = arr.map((value) => {
	return value;
});

arr4.push(45);

console.log('arr4', arr4, 'arr', arr);

// object array ile çalışma
const employees = [
	{ id: 1, name: 'can' },
	{ id: 2, name: 'canan' },
];
const employees2 = employees.slice(0, employees.length);
employees2[0].name = 'tarık';

employees2.push({ id: 3, name: 'yunus' });

console.log('employees', employees);
console.log('employees2', employees2);

// sizde employees[0] ile employees[0] tarık olmuşmudur ?
// obje dizileri ile çalışırken slice sadece dizinin referansı koparır dizi içindeki objelerin referanslarını değiştirmez. Bu sebeple diziye yeni bir elemen eklendiğinde dizideki referans farklı olduğu için diğer diziye eleman eklemenmez iken her iki dizide ortak olan nesnin referansında güncelleme yapılınca her iki dizide etkilenir.

const employees3 = employees.map((item) => {
	return {
		// new instance
		id: item.id,
		name: item.name,
	};
});

employees3[0] = { id: 3, name: 'tankut' }; // 0. indeks referansı
employees3.push({ id: 4, name: 'yusuf' });

console.log('employees3', employees3);
console.log('employees', employees);

// map ile obje dizilerinde referans sorunundan kurutulabiliriz.

const objArray = [
	{ id: 1, username: 'user-1', email: 'user@test.com' },
	{ companyName: 'netaş', city: 'istanbul' },
];

const data = objArray.map((item) => {
	// === ile == arasında fark var
	// === hem değer hem tip olarak eşitmi demek
	if (item.username === undefined) {
		// company

		return {
			text: item.companyName,
			type: 'company',
		};
	} else {
		// user
		return { text: item.username, type: 'user' };
	}
});

console.log('data', data); // map data transfer objesi olarak da kullanılır. DTO

// Not: Undefined nedir

var t; // t diye bir değişken oluşturuldu fakat initialize değer verilmedi. tip bilinmediğinden bu değere hangi tipin initialize değerini verileceğini bilmediğimizden js bir değer atayamaz js dilinde bu şekilde tanımlanmış değişkenler undefined olarak tanımlanır.
console.log('t', t);
console.log('type of t', typeof t);

// == ile === arasında fark

const nm1 = '5'; // string
const nm2 = 5; // number

if (nm1 == nm2) {
	// tip kontrolü önemli değil
	console.log('nm1 nm2 değer olarak eşit');
}

// JS type safe bir dil olmadığı için === ve typeof gibi operatörler ile kontrollü kod yazılması gerekir.

// type safe çalışmak için js de === ifadesi kullanılmalıdır.
if (nm1 === nm2) {
	console.log('nm1 nm2 hem değer hem tip eşitliği var');
} else {
	console.log('tip eşitliği yok');
}

// ES6 array ile gelen özellikler
// map
// foreach
// filter
// find
// findIndex
// some
// array extensions yapıları geldi

const arr5 = [1, 2, 3, 4, 6];
arr5.findIndex((x) => x == 1); // lamda expression formatında yazılır, arrow function olarak tanımlanır.
// değeri 1 olan indeksi getir.
const isExist = arr5.some((x) => x > 5); // x değeri kullanıcı tarafından verilen bir değişken ismini dizideki elemanı temsil eder. x > 5 olan varmı
// true yada false olarak değer döndürür, c# any benzer
const filteredArray = arr5.filter((x) => x > 5); // x değeri 5 ten büyük olanları filtrele sonuç dizi döner.
const findOne = arr5.find((x) => x == 5); // varsa ilk bulduğunu döndürür. C# firstOrDefault benzer bir kullanımı

// dizinin her elamanı içinde dönmek için foreEach kullanılır
// bu kod blogu senkron kod ile çalışır
arr5.forEach((item) => {
	console.log('foreach', item);
});

// öncesinde ES5 de forOf ile object dizileri içerisinde dönüyorduk. Halen geçerli bir js dil kullanımı

// c# foreach
// async yapısını da destekler asenktron kod blogu varsa tercih edilir.
for (const item of arr5) {
	console.log('forOf', item);
}

// every listedeki tüm elemanların çalışması için bütün değerlerin koşuldan geçmesi lazım

const isPostive = arr5.every((x) => x > 0);
console.log('isPositive', isPostive);

// Array Join ile dizideki değerleri string formata dönüştürme
console.log('string arr', arr5.join(';'));

// reduce ile dizideki bir önceki ve bir sonraki değer üzerinden işlem yapılabilir. value type dizilerde daha yaygın bir kullanımı vardır. dizideki elemanların değerlerini toplamı çarpılması bölümü gibi matermatiksel işlemleri yapabiliriz.

var total = [0, 1, 2, 3].reduce(function (nm1, nm2) {
	return nm1 + nm2;
});

console.log('total is : ' + total);

var multiply = [0, 1, 2, 3].reduce(function (a, b) {
	return a * b;
});

// class A {
// 	name;
// 	constructor() {
// 		this.name = 'ali';
// 	}
// }

// JS de extension ile bir sınıfın özelliklerin c# daki extension sınıflar gibi güncellemek için Prototype üzerinden işlem yapıyoruz
Array.prototype.avg = function () {
	let result = 0;

	// this bulunduğu scope daki nesnenin refransı erişmemizi sağlar
	console.log('this', this); // c# extensions this ile arasında bir fark var.

	for (let index = 0; index < this.length; index++) {
		const value = this[index];

		result += value;
		console.log('value', value);
	}
	return Number(result / this.length);
};

const avg = arr5.avg();
console.log('avg', avg);
