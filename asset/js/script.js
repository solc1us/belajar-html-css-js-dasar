// var, let, const
// var angka = 0;
// var nama = "Aceng";
// var nilai = 99.99;

// for (var i = 0; i < 10; i++) {
//   console.log(nilai);
// }

// console.log(nama + angka);
// console.log("Namaku adalah " + nama);

// // Function
// // Untuk menjalankan 1 fitur

// // function nama_fungsi (){

// // };

// function print() {
//   console.log("hello semua");
// }

// print();

var nama = document.getElementById("nama");
var hobi = document.getElementById("hobi");
var gender = document.getElementById("gender");
var alamat = document.getElementById("alamat");
var btnsubmit = document.getElementById("buttonsubmit");

// Saat user klik tombol button, tolong tampilkan namanya pakai alert
// event -> saat user melakukan sesuatu

btnsubmit.addEventListener("click", function () {
  alert(nama.value + " " + hobi.value + " " + gender.value + " "  + alamat.value);
});
