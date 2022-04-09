import { NumberCollection } from './NumberCollection';
import { StringCollection } from './StringCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumberCollection([10, 3, -5, 0, 100]);
const word = new StringCollection('hello');
const list = new LinkedList();
list.add(5);
list.add(9);
list.add(2);
list.add(13);

numbers.sort();
console.log(numbers.data);

word.sort();
console.log(word.data);

list.sort();
list.print();
