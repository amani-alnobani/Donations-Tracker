'use strict'

function getRndAge(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

let allDonator = [];
function Donation(theName, amount, theAge) {
    this.name = theName;
    this.amount = amount;
    this.age = theAge;
    allDonator.push(this);
}

let parent = document.getElementById('parent');

let table = document.createElement('table');
parent.appendChild(table);
let header = document.createElement('th');
table.appendChild(header);

let fhead = document.createElement('td');
header.appendChild(fhead);
fhead.textContent = 'Donator Name';

let shead = document.createElement('td');
header.appendChild(shead);
shead.textContent = 'Donation Amount';

let lhead = document.createElement('td');
header.appendChild(lhead);
lhead.textContent = 'age';



Donation.prototype.render = function () {
    let dataRaw = document.createElement('tr');
    table.appendChild(dataRaw);
    // dataRaw.textContent=this.name;
    
    let nameRaw=document.createElement('td');
    dataRaw.appendChild(nameRaw);
    nameRaw.textContent=this.name;
    
    
    let ageRaw=document.createElement('td');
    dataRaw.appendChild(ageRaw);
    ageRaw.textContent=this.age;
    
}


for (let i = 0; i < allDonator.length; i++) {
  
    theAge=allDonator[i].getRndAge(20,60);
    allDonator[i].render();
    console.log(allDonator[i]);
}

let submit=document.getElementById('submit');
submit.addEventListener('click',addAmount);

let selection =document.getElementById('donationAmount');

function addAmount(event) {

    event.preventDefault();

    let name = event.target.id.name;

    let amount=event.target.id.amount;

    let age=event.target.id.age;

    new Donation(name,amount,age);

    for (let i = 0; i < allDonator.length; i++) {
        // allDonator[i].getRndAge();
        allDonator[i].render();
        
    }
}

function setLocalStorage() {
    let stringArr=JSON.stringify(allDonator);
    localStorage.setItem('donationTable',stringArr);
    
}

function getlocalStorage() {
    let data = localStorage.getItem('donationTable')
    if (data !== 'null') {
        let parssedArr=JSON.parse(data);
        for (let i = 0; i < allDonator.length; i++) {
            new Donation(parssedArr[i].name,parssedArr[i].amount,parssedArr[i].age);
            
            allDonator[i].render
        }
    }
}
