fetch('data/mebelisti.json')
  .then(res => res.json())
  .then(data => renderTable(data));

function renderTable(data) {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';

  data.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.region}</td>
      <td><a href="tel:${item.phone}">${item.phone}</a></td>
      <td>${item.services}</td>
    `;
    tbody.appendChild(tr);
  });

  setupSearch(data);
}

function setupSearch(data) {
  const search = document.getElementById('search');
  search.addEventListener('input', e => {
    const value = e.target.value.toLowerCase();
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(value) ||
      item.region.toLowerCase().includes(value)
    );
    renderTable(filtered);
  });
}
