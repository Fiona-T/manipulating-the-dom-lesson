console.log('Hello World');

// below were done in the browser to show getting elements etc. from the DOM and manipulating them
let li = document.createElement('li');
li.classList.add('last');
li.style.backgroundColor = 'pink';
let a = document.createElement('a');
a.textContent = "Four";
a.style.color = 'white';
li.appendChild(a);
let uls = document.getElementsByTagName('ul');
let ul = uls[0];
ul.appendChild(li);
let ulFirst = uls[0];
let allLi = ulFirst.getElementsByTagName('li');
let firstLi = allLi[0];
let lastLi = allLi[3];
firstLi.classList.remove('active');
ulFirst.insertBefore(lastLi, firstLi);
let listItems = document.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.backgroundColor = 'pink'
}