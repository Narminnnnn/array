// 1)Bir array yaradin adlardan ibaret olsun hemin arraya her hansisa bir adi
// arrayin metodlarindan isdifade etmekle daxil edin daha sonra silin

// const persons = ["Axund", "Aysel", "Gulendam", "Gulbadam"];
// persons.push("Aydan")
// console.log("Yeni adlar elave olunduqdan sonra", persons);

// persons.pop()
// console.log("sonuncu ad silindikden sonra", persons);

// 2)
let obj = [
  {
    name: "Ali",
    surname: "Aliyev",
    age: 10,
    driving: true,
  },
  {
    name: "Veli",
    surname: "Aliyev",
    age: 17,
    driving: false,
  },
  {
    name: "Mehman",
    surname: "Aliyev",
    age: 25,
    driving: true,
  },
  {
    name: "Nicat",
    surname: "Aliyev",
    age: 26,
    driving: false,
  },
  {
    name: "Ayxan",
    surname: "Aliyev",
    age: 15,
    driving: true,
  },
  {
    name: "Nihad",
    surname: "Aliyev",
    age: 19,
    driving: true,
  },
];

// 3)bu arrayde adi n ile baslayanlari loga cixaracaq funksiya qurun

// function getName() {
//   for (let i = 0; i < obj.length; i++) {
//     if (obj[i].name[0] == "N") {
//       console.log("N ile adi baslayanlar", obj[i].name);
//     }
//   }
// }
// getName();
// yasi 20 den boyuk ve 26 den kicik olan objectleri console.loga cixaran funksiya yazin

// function getAge(){
//     for (let i = 0; i < obj.length; i++) {
//             if (obj[i].age >20 && obj[i].age<26) {
//               console.log("yasi 20 den boyuk ve 26 den kicik olanlar", obj[i].age);
//             }
//           }
//         }
//         getAge();

// yasi cut olan ve suruculuk vesieqesi olanlari loga cixaran funksiya yazin

// function driveLisence() {
//   for (let i = 0; i < obj.length; i++) {
//     if (obj[i].age % 2 == 0 && obj[i].driving == true) {
//       console.log("yasi cut olan ve suruculuk vesieqesi olanlar", obj[i]);
//     }
//   }
// }
// driveLisence();
