import { JsTable } from './table';
import './styles/styles.css';

// Sample data
const data = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 34 },
  { id: 3, name: 'Sam Johnson', age: 22 },
];

const columns = ['id', 'name', 'age'];

const table = new JsTable(data, columns);

const searchInput = document.querySelector('.js-search');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    table.search(e.target.value);
  });
}

const sortButton = document.querySelector('.js-sort-name');
if (sortButton) {
  sortButton.addEventListener('click', () => {
    table.sortData('name', 'asc');
  });
}

export * from './table';
