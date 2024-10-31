document.getElementById('addRecord').addEventListener('click', function() {
    const appNumber = document.getElementById('appNumber').value;
    const appSubject = document.getElementById('appSubject').value;
    const tags = document.getElementById('tags').value;
  
    if (appNumber && appSubject && tags) {
      const tableBody = document.querySelector('#recordsTable tbody');
      const newRow = document.createElement('tr');
  
      newRow.innerHTML = `
        <td>${appNumber}</td>
        <td>${appSubject}</td>
        <td>${tags}</td>
      `;
  
      tableBody.appendChild(newRow);
  
      // Clear the form fields
      document.getElementById('appForm').reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
  