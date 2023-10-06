// Contoh program JavaScript dengan if, else, dan nested if
let nilai = 90;

// Penggunaan if, else
if (nilai >= 70) {
    console.log("Nilai memuaskan.");
} else {
    console.log("Nilai tidak memuaskan.");
}

// Nested if
if (nilai >= 70) {
    console.log("Nilai memuaskan.");
    if (nilai >= 90) {
        console.log("Anda mendapatkan nilai A.");
    } else if (nilai >= 80) {
        console.log("Anda mendapatkan nilai B.");
    } else {
        console.log("Anda mendapatkan nilai C.");
    }
} else {
    console.log("Nilai tidak memuaskan");
}

// Contoh program JavaScript dengan switch case
let hari = "Kamis";
switch (hari) {
    case "Senin":
        alert("Hari ini mau ngerjain tugas.");
        break;
    case "Selasa":
        alert("Hari ini belajar JavaScript.");
        break;
    case "Rabu":
        alert("Hari ini mau main ke rumah Hanbin.");
        break;
    case "Kamis":
        alert("Jangan lupa streaming mv zerobaseone - in bloom!!");
        break;
    case "Jumat":
        alert("Hari ini makan mie ayam.");
        break;
    default:
        alert("Hari ini mau tidur aja.");
}

// Contoh program JavaScript dengan for statement
for (let k = 1; k <= 7; k++) {
    console.log("Perulangan for menghasilkan nilai " + k);
}

// Contoh program JavaScript dengan pernyataan while
let i = 1;
while (i <= 22) {
    console.log("Ini akan menghasilkan nilai " + i);
    i++;
}

// Contoh program JavaScript dengan pernyataan do while
let a = 1;
do {
    console.log("Sebuah perulangan dengan do while menghasilkan nilai " + a);
    a++;
} while (a <= 10);

// Contoh program JavaScript dengan menggunakan function
function fakta(nama) {
    console.log(nama + " cakep banget saya pusing.");
}
fakta("Zhanghao");

// Function dengan return value
function latihanThrow (a, b) {
    if (b === 0) {
        throw new Error("Jika error akan masuk ke throw")
    }
    return a / b
}
    try {
        let hasilBagi = latihanThrow(44, 2)
        console.log("Hasil bagi bernilai " + hasilBagi)
    } catch (error) {
        console.error("" + error)
    }
