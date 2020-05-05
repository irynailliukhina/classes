// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие
//  компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 

// class Circle {
//     constructor(radius) {
//         this.radius = radius
//     }
//     get theRadius() {
//         return `The radius is ${this.radius}`;
//     }
//     get theDiameter() {
//         return `The diameter is ${this.radius * 2}`;
//     }
//     set theRadius(newValue) {
//         this.radius = newValue;
//     }

//     calculateS() {
//         let S;
//         let p = 3.14
//         S = p * (this.radius ** 2)
//         console.log(`The space of the circle is ${S}`)
//     }
//     calculateLength() {
//         let l;
//         let p = 3.14
//         l = (p * this.radius * 2)
//         console.log(`The length of the circle is ${l}`)
//     }

// }
// let circle = new Circle(12);
// circle.calculateS();
// circle.calculateLength();
// console.log(circle.theRadius);
// console.log(circle.theDiameter);
// circle.theRadius = '14';
// console.log(circle.theRadius);

// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, 
//пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и
//добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов. 


// class Marker {
//     constructor(color, inkPers) {
//         this.color = color
//         this.inkPers = inkPers
//     }

//     print(text) {

//         let len;
//         len = text.split(' ').join('').length;
//         console.log(len)
//         let a = 0,
//             i = 0;

//         for (i of text) {
//             if (a >= this.inkPers) {
//                 break
//             }
//             else if (a < this.inkPers) {
//                 if (i == " ") {
//                     document.write(" ")
//                 } else {
//                     document.write(`<span style="color: ${this.color}">${i}</span>`)
//                     a += 0.5
//                 }
//                 console.log(`${a} - a`)

//             }


//         }
//     }
// }

// class RefillMarker extends Marker {
//     refill(inkPersFill) {
//         if ((+inkPersFill + +this.inkPers) <= 100) {
//             this.inkPers += inkPersFill;
//         } else if ((+inkPersFill + +this.inkPers) >= 100) {
//             this.inkPers = 100;
//         } else {
//             console.log(`something wrong ${this.inkPers}`)
//         }
//         console.log(`The marker filled to ${this.inkPers} persents of color`)
//     }
// }

// let marker = new Marker('red', 10);
// marker.print("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, earum.");
//let refillMarker = new RefillMarker("blue", 20)
//refillMarker.refill(20);
//refillMarker.refill(100);
//refillMarker.print("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, earum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, earum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, earum. ");


// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. 
//Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

// class Employee {
//     constructor(_firstName, _lastName, _position) {
//         this.firstName = _firstName
//         this.lastName = _lastName
//         this.position = _position
//     }
// }

// let morozov = new Employee('Ivan', 'Morozov', 'Project Manager');
// let petrov = new Employee('Yurii', 'Petrov', 'Android Developer');
// let larina = new Employee('Iryna', 'Larina', 'Human Resourses');
// let employees = [morozov, petrov, larina];

// console.log(employees)
// class EmpTable {
//     constructor(_arr) {
//         this.arr = _arr;
//     }

//     getHtml() {
//         document.write(`<table border="1" width="100%" cellpadding="5">
//                 <tr>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Position</th>
//                 </tr>`)
//         let i = 0
//         for (i of this.arr) {
//             document.write(` <tr>
//                 <td>${i.firstName}</td>
//                 <td>${i.lastName}</td>
//                 <td>${i.position}</td>
//             </tr>`)
//         }

//         document.write(`</table>`)
//     }
// }

// let tableOfEmployees = new EmpTable(employees);
// tableOfEmployees.getHtml()