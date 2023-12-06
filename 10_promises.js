// ES6 da promise yapıları geldi.
// ES5 standarında  callback yapıları ile asenkron programlama yapılıyordu. Call ile asnk programlama yapmanın takibi zor. hata durumların kaçmasına müsait bir yapı.

// promise söz demek
// ya söz tutulur (resolve) -- onSuccess
// yada söz tutulamaz (reject) -- onError

// promise tanımı
// server tarafında yazılan kod blogu
const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		// asenkron işlemler belirli bir t zamanda sonuç döndüren yapılar.
		resolve(67);
	}, 2000); // 2sn sonra sonuç döndür
});

let b = 0;

// client tarafındaki promise çağıran kod blogumuz
p1.then((response) => {
	// promise resolve olduğu durumda tetiklenir
	console.log('response', response);

	b = Number(response);

	console.log('a*b', a * Number(response));
}).catch((err) => {
	// promise reject olduğu durumda tetikleniyor
	console.log('err', err);
});

// öncelik senkron olan kod bloguna devredilecek. sonra asenkron kod bblokları çalışacak.

// b sonuc asenkron olduğu için b ye değer aktarılmadan önceki değeri ile işlem yapar. sonuç tanlış döner.
// console.log('carpim = ', a * b);

// kendi içerisinde birbirinde farklı asenkron kod blokları nasıl bir sırada çalışıyor

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('p2');
	}, 3000);
});

const p3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('p3');
	}, 1000);
});

// yaklaşık 3sn içinde her iki paralel asenkron kod sonuç döndürmüş olur.
console.time('operationStart1');
console.time('operationStart2');

// paralel çalıştırma örneği
p2.then((response) => {
	console.timeEnd('operationStart1');
	console.log('p2-res', response);
});

p3.then((response) => {
	console.timeEnd('operationStart2');
	console.log('p3-res', response);
});

const a = 5;
console.log('a', a);

// aşağıdaki kod bloklarını sıralı bir şekilde çalıştırmak için 4 farklı yöntem var
// 3 ten fazla içi içe yazılacak asenkron kod varsa artık kod okuma karışmış oluyor.
// 1. Teknik // promiseleri iç içe çalıştırma
p2.then((response) => {
	console.log('p2-res', response);
	p3.then((response) => {
		console.log('p3-res', response);
	}).catch((err2) => {});
}).catch((err1) => {});

// 2.Yöntem Promise all
const p7 = Promise.all([p2, p3]); // sonuç dizi olarak döner.
// Not sıralı çalışmasından emin olamayız fakat 2 promise sonuçu aynı anda döner.
// avantajı tek bir response ve tek bir hata durumu ile uğraşıyoruz.

// p7.then((response) => {
// 	console.log('p-all', response);
// }).catch((err) => {
// 	console.log('p-err', err);
// });

// 3.yöntem promise chain sıralı olarak sonuçları döndürmemizi sağlayan bir yöntem

const loadAllData = () => {
	let data = {};

	// Not her bir sıralı işlemi bir function olarak tanımlamız lazım
	const loadP1 = () =>
		p1.then((res1) => {
			data['res1'] = res1;
			console.log('res1', data);
			return Promise.resolve(data);
		});

	const loadP2 = () =>
		p2.then((res2) => {
			data['res2'] = res2;
			console.log('res2', res2);
			// return Promise.resolve(data);
		});
	const loadP3 = () =>
		p3.then((res3) => {
			data['res3'] = res3;
			console.log('res3', res3);
			// return Promise.reject('loadP3 Error');
		});

	return loadP2().then(loadP3).then(loadP1);
};

loadAllData()
	.then((response) => {
		console.log('response', response);
	})
	.catch((err) => {
		console.log('err', err); // promise all gibi hata durumu çalışır
	});

// async await
// ES7 ile geldi. Promise chain yerine buda tercih edilebilir.
const loadDataAsync = async () => {
	try {
		const data = {};

		let res1 = await p1; // promise beklet ki senkron bir kod blogu haline gelsinç
		data['res1'] = res1;
		let res2 = await p2;
		data['res2'] = res2;
		let res3 = await p3;
		data['res3'] = res3;

		console.log('async-data', data);
	} catch (error) {
		console.log('err', error);
	}
};

loadDataAsync();
