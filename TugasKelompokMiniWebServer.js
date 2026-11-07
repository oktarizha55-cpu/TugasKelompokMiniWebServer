const express = require("express");
const app = express();

// nyatet satu kali doang
const waktuMulai = new Date();

//a. Teks biasa -> res.send
app.get("/", (req, res) => {
  res.send("Selamat datang di server Kelompok Chernobyl");
});

//b. Route /info -> waktu server dijalankan
app.get("/info", (req, res) => {
  const waktu = waktuMulai.toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    dateStyle: "full",
    timeStyle: "medium",
  });
  res.send(`Server dijalankan pada: ${waktu} WIB`);
});

//c. Data JSON berbentuk daftar (array) berisi objek -> res.json
app.get("/anggota", (req, res) => {
  res.json([
    { nama: "Nixcen Eriana Rahmat", nim: 20250040069 },
    { nama: "Mohamad Rafie Oktarizha", nim: 20250040011 },
  ]);
});

app.listen(3000, () =>
  console.log("Server lagi jalan di http://localhost:3000"),
);
