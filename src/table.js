export class JsTable {
  constructor(data, columns) {
    this.data = data;
    this.columns = columns;
    this.filteredData = data;
    this.currentPage = 1;
    this.rowsPerPage = 10;

    this.renderTable();
  }

  renderTable() {
    const tableContainer = document.querySelector('.js-table-container');
    const table = document.createElement('table');
    table.classList.add('js-table');
    table.innerHTML = this.createTableHeader() + this.createTableRows();
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
    this.renderPagination();
  }

  createTableHeader() {
    let headerHTML = '<thead><tr>';
    this.columns.forEach(column => {
      headerHTML += `<th>${column}</th>`;
    });
    headerHTML += '</tr></thead>';
    return headerHTML;
  }

  createTableRows() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    const end = start + this.rowsPerPage;
    const rowsToDisplay = this.filteredData.slice(start, end);

    return rowsToDisplay.map(row => {
      return `<tr>${this.columns.map(col => `<td>${row[col]}</td>`).join('')}</tr>`;
    }).join('');
  }

  renderPagination() {
    const paginationContainer = document.querySelector('.js-pagination');
    const totalPages = Math.ceil(this.filteredData.length / this.rowsPerPage);
    let paginationHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `<button class="js-pagination-btn" data-page="${i}">${i}</button>`;
    }
    paginationContainer.innerHTML = paginationHTML;

    document.querySelectorAll('.js-pagination-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.currentPage = parseInt(e.target.dataset.page);
        this.renderTable();
      });
    });
  }

  filterTable(query) {
    this.filteredData = this.data.filter(row => {
      return this.columns.some(col => {
        return row[col].toString().toLowerCase().includes(query.toLowerCase());
      });
    });
    this.currentPage = 1; 
    this.renderTable();
  }

  sortData(column, direction = 'asc') {
    const sortedData = [...this.filteredData].sort((a, b) => {
      if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    this.filteredData = sortedData;
    this.renderTable();
  }

  search(query) {
    this.filterTable(query);
  }

  printTable() {
    const printWindow = window.open('', '', 'width=600,height=400');
    printWindow.document.write('<html><body>');
    printWindow.document.write(document.querySelector('.js-table').outerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }
}
