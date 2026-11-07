const express = require('express');
const app = express();

// ===== Aktivitas 1 – Routing Dasar =====
app.get('/', (req, res) => {
  res.send('Halaman Utama');
});

app.get('/about', (req, res) => {
  res.send('Halaman Tentang Kami');
});

app.get('/contact', (req, res) => {
  res.send('Hubungi Kami di routing-app');
});


app.get('/produk/:kode', (req, res) => {
  res.send('Produk dengan kode: ' + req.params.kode);
});


const users = [
  { id: 1, name: 'Andri' },
  { id: 2, name: 'Bobi' },
  { id: 3, name: 'Tukiman' },
];


app.get('/users', (req, res) => {
  res.json(users);
});

// Rute untuk menampilkan detail pengguna berdasarkan ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ message: 'Pengguna tidak ditemukan' });
  } else {
    res.json(user);
  }
});

// 
app.post('/users', (req, res) => {
  res.send('Tambah data user baru');
});

app.put('/users/:id', (req, res) => {
  res.send('Update data user dengan ID: ' + req.params.id);
});

app.delete('/users/:id', (req, res) => {
  res.send('Hapus user dengan ID: ' + req.params.id);
});


app.listen(3000, () => console.log('Server berjalan di http://localhost:3000'));