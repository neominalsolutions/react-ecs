// js hem oop hemde functional programing destekler
// method != function
// method class içerisinde tanımlanmış işlem yapmamızı sağlayan kod birimleri
// function class'dan bağımsız bir şekilde çalışabilen prosedürel uygulama geliştirme yapmamızı sağlayan kod birimleri

// default functions
// bu atıl durumda kaldı.
// ES5 function tanımı
function sum(nm1, nm2) {
	return nm1 + nm2;
}

// function overload yok
function sum(nm1, nm2, nm3) {
	console.log('nm3', typeof nm3);
	// undefined bir değer ile bir sayısal ifadenin toplanması durumunda NAN sonuç aldık.
	// console.log('sonuc', undefined + 5);
	// console.log('sonuc2', 'A' + 5);

	if (typeof nm3 == 'undefined') {
		nm3 = 0;
	}

	// yukarıdaki yazım ile aşağıdaki yazım aynı
	if (nm3 === undefined) {
		nm3 = 0;
	}

	return isNaN(nm1 + nm2 + nm3) ? 0 : nm1 + nm2 + nm3;
}

function showMessage(message) {
	alert(message);
}

const t = sum('5', 5, '3'); // 553
console.log('t', t);
const result = sum(1, 2); // ilkini de ikinci tanımlı 3 parametreli function kullandık. // IsNAN Not a number
const result2 = sum(3, 6, 7);
showMessage('merhaba');
console.log('result1', result);
console.log('result2', result2);

// arrow functions
// React Functions component arrow function tercih edeceğiz.
// arrow function tanımlamalarında hep const ifadesi yazıcaz.
const sum1 = (nm1 = 0, nm2 = 0) => nm1 + nm2;

// function overload kavramı js yok
// const sum1 = (nm1, nm2,nm3) => {
// 	return nm1 + nm2 + nm3;
// };

const c = sum1('A', 25);
const f = sum1(25, 'A');
const d = sum1();
console.log('c', c);
console.log('f', f);
console.log('d', d);

const showMessage1 = (message) => {
	alert(message);
};

// ES6 default parameter özelliği geldi
// ES6 ile birlikte rest operator özelliği geldi.
const avg = (...numbers) => {
	// c# daki params aynısı
	// function ... spread değil rest operator diye geçiyor
	let total = 0;
	numbers.forEach((nm) => {
		total += Number(nm); // type casting yaptık
	});

	return total / numbers.length; // js count yok. js kolleksiyon yapısı yok.
};

const rt = avg(1, 2, 4, 5, '6', 89); // function call with rest operator
console.log('rt', rt);

// parseInt
// parseFloat

const value = '5.2';
const intValue = parseInt(value); // tamsayıya metinsel bir ifadenin dönüşümü
console.log('interger value', intValue);

const floatValue = parseFloat(value);
console.log('floatValue', floatValue);
