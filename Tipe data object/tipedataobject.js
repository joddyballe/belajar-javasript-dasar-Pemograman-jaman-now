const orang = {
  // ini merupakan object kosong {}
  "nama lengkap": "joddy lintar balle",
  alamat: "indonesia",
  umur: 22,
};

//  menambahkan atau mengubah
orang["nama"] = "Joddy Balle";
orang["alamat"] = "Indonesia";
orang["umur"] = 22;

//  menghapus
delete orang["umur"];

// --- mempermudah penulisan
console.info(`Nama : ${orang["nama lengkap"]}`);
console.info(`Alamat : ${orang.alamat}`);
console.info(`Umur : ${orang.umur}`);

console.table(orang);
