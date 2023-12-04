import Employee, { Person } from './08_ts_classes';
// import React, { useState } from 'react';

const e = new Employee(); // default olunca import dışında direk dosya isminden bir çağırma var
// Default Export ile Export arasındaki fark bir ts veya js dosya içerisinde sadece 1 tane Default export tanımı olabilir.
const p = new Person(); // 08_ts_classes dosyasında birden fazla önüne export yazılan tip olduğunda { TypeName } şeklinde bir import yapılıyor
