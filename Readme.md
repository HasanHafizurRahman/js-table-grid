# JS Table Grid

JS Table Grid is a lightweight and customizable data table library built with vanilla JavaScript. It provides features such as pagination, filtering, sorting, and printing, making it easy to display and manage tabular data.

## Features

- Pagination
- Filtering
- Sorting by columns
- Print table functionality
- Lightweight and dependency-free
- Customizable styling

## Installation

Install the package using npm:

```bash
npm install js-table-grid
```

## Usage

### Basic Example

Here is an example of how to use JS Table Grid in your project:

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JS Table Grid Example</title>
</head>
<body>
  <div>
    <input class="js-search" type="text" placeholder="Search...">
    <button class="js-sort-name">Sort by Name</button>
  </div>

  <div class="js-table-container"></div>
  <div class="js-pagination"></div>

  <script type="module" src="./main.js"></script>
</body>
</html>
```

#### JavaScript

Create a `main.js` file in the root of your project:

```javascript
import { JsTable } from 'js-table-grid';
import 'js-table-grid/css';

// Sample data
const data = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 34 },
  { id: 3, name: 'Sam Johnson', age: 22 },
  { id: 4, name: 'Lisa Adams', age: 30 },
];

const columns = ['id', 'name', 'age'];
const table = new JsTable(data, columns);

// Search functionality
document.querySelector('.js-search').addEventListener('input', (e) => {
  table.search(e.target.value);
});

// Sorting functionality
document.querySelector('.js-sort-name').addEventListener('click', () => {
  table.sortData('name', 'asc');
});
```

### Styles

Make sure you include the CSS file for basic styling. If you are using a bundler like Vite, you can import the CSS directly as shown above.

## API

### `JsTable`

#### Constructor

```javascript
const table = new JsTable(data, columns);
```

- `data`: An array of objects representing the table rows.
- `columns`: An array of strings representing the column names.

#### Methods

- `search(query: string): void`
  - Filters the table data based on the query.

- `sortData(column: string, direction: 'asc' | 'desc'): void`
  - Sorts the table data by the specified column in the given direction.

- `printTable(): void`
  - Opens a print dialog with the current table content.

## Development

To test or modify the package locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/HasanHafizurRahman/js-table-grid.git
   cd js-table-grid
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the project:

   ```bash
   npm run build
   ```

4. Run a development server (e.g., Vite):

   ```bash
   npm run dev
   ```

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests on the [GitHub repository](https://github.com/HasanHafizurRahman/js-table-grid).

## License

This project is licensed under the ISC License.

## Author

Hasan Hafizur Rahman