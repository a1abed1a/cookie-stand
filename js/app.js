/* eslint-disable no-unused-vars */
'use strict';
let startHour = 6;
let endHour = 20;
let hourOfWork = endHour - startHour;
let container = document.getElementById('container');
let tableEl = document.createElement('table');

function Branch(location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesPerHour = [];
  this.perHour = function () {
    let total = 0;
    for (let i = 0; i < hourOfWork; i++) {
      let ran = Math.floor((Math.random() * (this.max - this.min + 1) + this.min) * this.avg);
      total += ran;
      this.cookiesPerHour.push(ran);
    }
    this.cookiesPerHour.push(total);
  };
  this.perHour();
  this.printInConsole = function () {
    let message = this.location;
    for (let i = startHour; i < endHour; i++) {
      if (i / 12 < 1) {
        message += `\n${i}am: ${this.cookiesPerHour[i - startHour]} cookies`;
      } else if (i / 12 === 1){
        message += `\n12am: ${this.cookiesPerHour[i - startHour]} cookies`;
      }else{
        message += `\n${i % 12}pm: ${this.cookiesPerHour[i - startHour]} cookies`;
      }
    }
    message += `\nTotal: ${this.cookiesPerHour[hourOfWork]} cookies`;
    console.log(message);
  };
  this.printInHTML = function () {
    let h2EL = document.createElement('h2');
    h2EL.textContent = this.location;
    container.appendChild(h2EL);
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = startHour; i < endHour; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      if (i / 12 < 1) {
        liEl.textContent = `\n${i}am: ${this.cookiesPerHour[i - startHour]} cookies`;
      } else if (i / 12 === 1){
        liEl.textContent = `\n12am: ${this.cookiesPerHour[i - startHour]} cookies`;
      }else{
        liEl.textContent = `\n${i % 12}pm: ${this.cookiesPerHour[i - startHour]} cookies`;
      }
    }
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `\nTotal: ${this.cookiesPerHour[hourOfWork]} cookies`;
  };
}

let Seattle = new Branch('Seattle', 23, 65, 6.3);
let Tokyo = new Branch('Tokyo', 3, 24, 1.2);
let Dubai = new Branch('Dubai', 11, 38, 3.7);
let Paris = new Branch('Paris', 20, 38, 2.3);
let Lima = new Branch('Lima', 2, 16, 4.6);

Seattle.printInConsole();
Tokyo.printInConsole();
Dubai.printInConsole();
Paris.printInConsole();
Lima.printInConsole();

// Seattle.printInHTML();
// Tokyo.printInHTML();
// Dubai.printInHTML();
// Paris.printInHTML();
// Lima.printInHTML();

let ar = [Seattle, Tokyo, Dubai, Paris, Lima];
function printInTable(ar){
  let theadEl = document.createElement('thead');
  container.appendChild(theadEl);
  let tbodyEl = document.createElement('tbody');
  container.appendChild(tbodyEl);
  let tfootEl = document.createElement('tfoot');
  container.appendChild(tfootEl);
  let trEl1 = document.createElement('tr');
  theadEl.appendChild(trEl1);
  let thEl1 = document.createElement('th');
  thEl1.textContent = 'location';
  trEl1.appendChild(thEl1);
  for (let i = startHour; i < endHour; i++) {
    if (i / 12 < 1) {
      let thEl2 = document.createElement('th');
      thEl2.textContent = `${(i)}am`;
      trEl1.appendChild(thEl2);
    } else if (i / 12 === 1){
      let thEl2 = document.createElement('th');
      thEl2.textContent = '12 am';
      trEl1.appendChild(thEl2);
    }else{
      let thEl2 = document.createElement('th');
      thEl2.textContent = `${(i) % 12}pm`;
      trEl1.appendChild(thEl2);
    }
  }
  let thEl3 = document.createElement('th');
  thEl3.textContent = 'Total';
  trEl1.appendChild(thEl3);
  for(let i = 0; i < ar.length; i++){
    let trEl2 = document.createElement('tr');
    tbodyEl.appendChild(trEl2);
    let thEl4 = document.createElement('th');
    thEl4.textContent = ar[i].location;
    trEl2.appendChild(thEl4);
    for (let x = 0; x < ar[i].cookiesPerHour.length; x++) {
      let thEl5 = document.createElement('th');
      thEl5.textContent = ar[i].cookiesPerHour[x];
      trEl2.appendChild(thEl5);
    }
  }
  let trEl3 = document.createElement('tr');
  tfootEl.appendChild(trEl3);
  let thEl6 = document.createElement('th');
  thEl6.textContent = 'Total';
  trEl3.appendChild(thEl6);
  for (let i = 0; i <hourOfWork+1; i++){
    let tot = 0;
    for (let x = 0; x < ar.length; x++){
      tot += ar[x].cookiesPerHour[i];
    }
    let thEl5 = document.createElement('th');
    thEl5.textContent = tot;
    trEl3.appendChild(thEl5);
  }
}

printInTable(ar);

// let Seattle = {
//   location : 'Seattle',
//   min : 23,
//   max : 65,
//   avg : 6.3,
//   cookiesPerHour:[]
// };
// let Tokyo = {
//   location : 'Tokyo',
//   min : 3,
//   max : 24,
//   avg : 1.2,
//   cookiesPerHour:[]
// };
// let Dubai = {
//   location : 'Dubai',
//   min : 11,
//   max : 38,
//   avg : 3.7,
//   cookiesPerHour:[]
// };
// let Paris = {
//   location : 'Paris	',
//   min : 20,
//   max : 38,
//   avg : 2.3,
//   cookiesPerHour:[]
// };
// let Lima = {
//   location : 'Lima',
//   min : 2,
//   max : 16,
//   avg : 4.6,
//   cookiesPerHour:[]
// };
// function perHour (obj){
//   let total = 0;
//   for(let i = 0; i < hourOfWork; i++){
//     let ran = Math.floor((Math.random() * (obj.max - obj.min + 1) + obj.min)*obj.avg);
//     total += ran;
//     obj.cookiesPerHour.push(ran);
//   }
//   obj.cookiesPerHour.push(total);
// }
// function printInConsole (obj){
//   let message = obj.location;
//   for(let i = startHour; i < endHour; i++){
//     if(i % 12 === 0){
//       message = message + `\n${i}am: ${obj.cookiesPerHour[i-startHour]} cookies`;
//     }else{
//       message = message + `\n${i%12}pm: ${obj.cookiesPerHour[i-startHour]} cookies`;
//     }
//   }
//   message = message + `\nTotal: ${obj.cookiesPerHour[hourOfWork]} cookies`;
//   console.log(message);
// }
// perHour(Seattle);
// printInConsole(Seattle);

// perHour(Tokyo);
// printInConsole(Tokyo);

// perHour(Dubai);
// printInConsole(Dubai);

// perHour(Paris);
// printInConsole(Paris);

// perHour(Lima);
// printInConsole(Lima);
