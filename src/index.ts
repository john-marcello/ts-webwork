// console.log('Hello, Newman!');

import { User } from './models/User';
const user = new User({});

user.set({ name: 'marcello', age: 52 });

console.log(user.get('name'));
console.log(user.get('age'));


