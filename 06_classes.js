// ES5 class yapıları function construction yöntemi ile yazılır.

function Person(name, surname) {
	// name,surname constructors

	let age = 20; // private field

	this.name = name; // this keyword ile hem function class özelliği kazanır hemde this ile tanımlanmış method yada propertyler public olarak işaretleniyor.
	this.surname = surname; // property
	this.fullName = function () {
		// method
		return this.name + ' ' + this.surname + '' + age;
	};

	this.setAge = function (value) {
		console.log('setAge', value);
		age = value;
		console.log('age', age);
	};
}

const person = new Person('ali', 'tan');
person['age'] = 67; // extra age property tanımı yapılmış oluyor
person.licanseNumber = '324324324'; // js dilinde anlık property tanımı yapabiliyoruz.

// class dışından method tanımı yaptık
Person.prototype.getAge = function () {
	return this.age;
};

person.setAge(56);
console.log('FullName', person.fullName());
console.log('age', person.age);
// derleme anında js hata vermez, çalışma anında hata alırız.
console.log('person', person);
console.log('age', person.getAge());

// getter setter işlemlerinde class yerine nesneyede getter setter uygulabiliriz.
Object.defineProperty(person, 'hairColor', {
	enumerable: true, // private yada public olmasını sağlar
	writable: true, // setter
	configurable: true, // getter
	value: 'Yellow', // Default Value
});

// js nesne üzerinden yeni property özellik kazandırma gibi diğer dillere alışık olmadığımız bir tanımlama şekli var.

delete person.age; // person age property artık ihtiyacım yok nesne üzerinden bu property değerini sil
console.log('person', person);
