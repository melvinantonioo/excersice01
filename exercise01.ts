//1. Area Of Rectangle 

const length1 = 5;
const width = 3;
let areaOfRectangle = length1 * width;
console.log(areaOfRectangle)


//2. Perimeter Of Rectangle 

var count1 = 5;
var count2 = 3;
let twoSides = count1 + count2;
const perimeterOfRectangle = twoSides * 2;
console.log(perimeterOfRectangle)


//3. Find Diameters, circumference , and area of circle
const radius = 5;
const radius2 = radius ** 2
const phi = 3.14;

let circumference;
let areaOfCircle;

let diamater = radius * 2;
circumference = radius * phi * 2;
areaOfCircle = radius2 * phi;

console.log({ diamater, circumference, areaOfCircle })


//4. find angles of triangles , if two angles are given
const a = 80;
const b = 65;
const c = 180;
let findX;

findX = c - a - b;
console.log(findX);


//5. get Difference between days between years 
const date1: any = new Date('2022-01-02');  //initiate the dates
const date2: any = new Date('2022-01-22');

console.log(date1);
console.log(date2);

//mencari selisihnya 
const perbedaanWaktu: any = date2 - date1;
console.log(perbedaanWaktu)   //hasilnya millsecond

//ubah dalam bentuk days
const convertDays: any = perbedaanWaktu / (10000 * 60 * 60 * 24)
console.log(convertDays)

let differenceBetween = convertDays;
console.log(differenceBetween)
