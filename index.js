const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}


const newHeader = document.createElement('h1');

newHeader.id = 'victory';


newHeader.innerHTML = "MUHSIN ALI is the champion";

document.body.append(newHeader);
