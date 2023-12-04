class Person {
	#firstName; // private field tanımı
	#surName; // private
	#age;
	constructor(firstName, surName) {
		// js de contructor overload yok. tek constructor destekler.
		this.#firstName = firstName;
		this.#surName = surName;
	}

	// default # koyulmayan herşey public sayılır.
	get Age() {
		// java gibi yazılır
		return this.#age;
	}
	set Age(value) {
		this.#age = value;
	}
	fullName() {
		// method
		return `${this.#firstName} ${this.#surName}`;
	}
}
const person = new Person('ali', 'can');
person.Age = 15; // c# gibi set get yapılır.
console.log('f-name', person.fullName()); // method
console.log('person', person);

class Student {}

// extends ile kalıtım altık
// js es6 multiple inheritance desteklemez
// js classlar tek bir classtan extend olabilir
class Employee extends Person {
	#socialNumber;

	constructor(firstName, surName, socialNumber) {
		super(firstName, surName); // C# daki base ifadesinin aynısı
		// java da yine kalıtım js deki aynı şekilde tanımlanıyor.
		this.#socialNumber = socialNumber;
		// this keyword ile constructor üzerinden parametre alımı işlemi super keyword sonrası yapılmalıdır.

		// this.fullName = this.fullName.bind(this); // react class componentlere özgü state change durumunu yakalamak için event binding sağlayan kod bloğu
	}

	// basedeki yapı ile aynı isimde method kullanırsak extend olan sınıf base sınıfın methodunu ezer.
	fullName() {
		console.log('c# daki gibi base önce tetiklenmez');
		// base methoduna ihtiyaç varsa super ile çağırılabilir.
		return super.fullName() + ' (' + this.#socialNumber + ')';
	}

	// js classlarda polymorphisim yok, virtual ovveride keyword kullanımı yok.
}

const emp = new Employee('tansu', 'aydoğan', '4324324');
console.log('f-name', emp.fullName());
console.log('emp', emp);

// JS OOP olamayan tipler
// ENUM, Generic Class, Abstract Class, Virtual, Ovveride, Interface yok.private,protected,public gibi access modifier desteği de yok.
// Encapsulation destekler (getter,setter), Inheritance destekler, virtual,abstract,ovveride yok ama polymorphisim aynı isimde methodlar sağlanabilir.

// JS deki en büyük abstraction yok. 
