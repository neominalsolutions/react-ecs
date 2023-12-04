// js de olmayan abstraction ts de geliyor
// access modifier yapılarıda akti olarak kullanılıyor
// ts type safe bir dil doluğundan, generic type
// enumaration yapıları, static class yapılarıda aktif olarak kullanılıyor.
// ts internal yok
// export import
// ts de access modifier yapıları sadece class içinde kullanılıyor.
// bir classs başka bir dosyadan erişim çağırmak için önüne export keyword eklemeliyiz.
// Export Import keyword ile çalıştığımız bu sisteme EC Module System adını veriyoruz.

export abstract class Human {
	abstract takeBreath(): void;
}

export class Person extends Human {
	private firstname: string;
	private surname: string;
	private age: number;
	protected type: string; // kalıtım alan soınıfa aktar.

	// constructor,method,getter,setter default public tanımlanır
	constructor(firstname: string, surname: string) {
		// multiple constructor desteği yok
		super();
		this.firstname = firstname;
		this.surname = surname;
	}

	takeBreath(): void {
		throw new Error('Method not implemented.');
	}

	// default public
	get Age() {
		return this.age;
	}

	set Age(age: number) {
		this.age = age;
	}

	public fullName() {
		return this.surname + ' ' + this.firstname;
	}
}

const p = new Person('ali', 'can');
p.Age = 15;
p.fullName();
p.takeBreath();

export class Student extends Person implements IStudent {
	constructor(name: string, surname: string) {
		super(name, surname);
		this.type = 'Student'; // protected değere erişim yapıldı
	}

	getStudentNumber(): string {
		throw new Error('Method not implemented.');
	}

	public fullName(): string {
		super.fullName();
		return 'Student';
	}
}

export interface IStudent {
	getStudentNumber(): string;
}

//  class Teacher {}

//  export default Teacher;

class Employee {}

export default Employee;

// Generic Class
var persons = new Array<Person>();
persons.push(p, new Person('kaan', 'can'));

// Static keyword ile Class tanımı yok
// TS ve JS static class yok
// class static method ile tek instance ile çalışabilir.
class DateHelper {
	GetDate(): Date {
		return new Date();
	}

	static GetDateStatic(): Date {
		return new Date();
	}
}

// Math.min(10);

// newlemeden kullandık
const dt: Date = new DateHelper().GetDate(); // instance alnımış
const dt1: Date = DateHelper.GetDateStatic(); // tek bir instance ile çalışan hali.

// Enum ile çalışma özelliği

// sabit string listeler ile çalışma
enum HumanTypes {
	Student = 100,
	Employee = 'My Employee',
}
HumanTypes.Employee;

// typescript özgü olan bazı tanımlamalar
// custom type tanımları yapabiliriz.
type colorType = 'white' | 'black' | 'purple'; // bu değerler dışında değer alamaz
type StatusType = 1 | 'deneme' | 3; // kontrollü tip tanımlama.

type ColorStatusType = colorType | StatusType; // Union Type

// const tt:ColorStatusType = 1;

//Referance Types Intersect ve Unıon TYpe kullanımı

type Car = {
	model: string;
	year: number;
};

// Intersect
type SportCar = Car & { aircondition: boolean };

const c: SportCar = { model: 'A', year: 2023, aircondition: true };

let yy: number | string | undefined = '1'; // Union Types (Js any tipi sayesinde farklı tipte değer ataması yapabilme imkanmız var)
yy = 1;
yy = undefined;

// Any Type (Her hangi bir tip)
let dfg: any = { id: 1 };
dfg = 'ali';
dfg = 1;
