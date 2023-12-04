const summ = (nm1: number, nm2: number = 0): number => {
	return nm1 + nm2;
};

// typescript type safe bir tanımlama yapısına sahip geliştirme yaparken hataları direk görebiliriz.

summ('A' + 5); // invalid
summ('A', 'B'); // invalid
summ(4, 5); // valid
summ(4); // valid
// summ(true,6); // invalid
