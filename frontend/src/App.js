import React from 'react';
import ItemList from './component/ItemList';

// Gaya CSS dalam tag <style> di dalam komponen App
const styles = `
  .App {
    text-align: center;
    font-family: Arial, sans-serif;
  }

  .table-bordered {
    border: 1px solid #ddd;
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
  }

  .table-bordered th, .table-bordered td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  .table-bordered thead {
    background-color: #f2f2f2;
  }

  .table-row {
    background-color: #f9f9f9; /* Ubah warna latar belakang sesuai keinginan Anda */
  }

  .table-row td {
    text-align: left; /* Mengatur teks dalam sel agar tidak rata tengah */
  }
`;

const App = () => {
  // Anda dapat menaruh fungsi di sini jika Anda mau

  return (
    <div className="App">
        <style>{styles}</style>
        <h1>News List</h1>
      <main>
        <ItemList/>
      </main>
    </div>
  );
};

export default App;
