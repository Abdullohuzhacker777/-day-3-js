var name = prompt("Assolomaykum ismizni kiriting");
var age = prompt(`${name} Aka yoshizni kiriting`);
if (age >= 18) {
  alert("siz pirova olish huquqiga egasiz");
} else {
  alert("afsuzki pirova olish huqiga ega emasiz");
  console.log(
    `sizning yoshingiz ${age} da , sizga ${18 - age} yosh yetmaskan.`
  );
}
console.log(`sizning ismiz ${name} `);
alert("uchunchi uyga vazifa");
var nam1 = prompt("birinchi raqamni kiriting");
var nam2 = prompt("ikkinchi raqamni kiriting");
var nam3 = prompt("uchunchi raqamni kiriting");
if (nam1 > nam2 && nam1 > nam3) {
  alert(nam1);
} else if (nam2 > nam1 && nam2 > nam3) {
  alert(nam2);
} else if (nam3 > nam2 && nam3 > nam1) {
  alert(nam3);
}
