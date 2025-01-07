import { JsTable } from './table';
import './styles/styles.css';

// Sample data
const data = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 34 },
  { id: 3, name: 'Sam Johnson', age: 22 }
];

const columns = ['id', 'name', 'age'];

const table = new JsTable(data, columns);

document.querySelector('.js-search').addEventListener('input', (e) => {
  table.search(e.target.value);
});

document.querySelector('.js-sort-name').addEventListener('click', () => {
  table.sortData('name', 'asc'); 
});

export { JsTable } from './table';
