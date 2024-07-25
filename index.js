console.log('This is running');

const main = document.getElementById('main');

console.log('main is', main);

main.remove();

const newHeader = document.createElement('h1')

newHeader.id = 'victory';

console.log('newHeader is ', newHeader);

newHeader.innerHTML = 'Jon is the champion';

document.body.append(newHeader);
