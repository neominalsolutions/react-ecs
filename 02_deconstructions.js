
// referance type değişkenlerde değişkenin değerlerini parçalamak için kullandığımız bir teknik 
// object deconstruction

const employee = {id:1,name:'ali',surname:'can'};
console.log('employee', employee.name);

const {name,surname} = employee; // props
console.log('name surname', name.concat(' ').concat(surname));

// array deconstruction 
const numbers = [1,2,3,4,5];
const [firstIndex,secondIndex,,,lastIndex] = numbers; // useState Hook
console.log(
	'son',numbers[numbers.length - 1]
);
console.log(
	'firstIndex',
	firstIndex,
	'secondIndex',
	secondIndex,
	'lastIndex',
	lastIndex
);

