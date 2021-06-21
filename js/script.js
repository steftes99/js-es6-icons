const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];


  

const coloredArray = icons.map((element) => {
    let color = 'purple';
      if(element.type == 'animal'){
        color = 'blue';
      } else if (element.type == 'vegetable'){
        color = 'orange';
      }
    return {
        ... element,
        color
    }
});

print(coloredArray);

const types = [];

coloredArray.forEach((element) =>{
  if(!types.includes(element.type)){
    types.push(element.type);
    document.getElementById('type').innerHTML += 
    `
    <option value ="${element.type}"> ${element.type} </option>
    `
  }
});

const select = document.getElementById('type');

select.addEventListener("change", function(){
  const valoreSelect = select.value;
  const filteredIcons = coloredArray.filter((element) => {
    return element.type == valoreSelect;
  })
  printIcons(filteredIcons);
if(valoreSelect == 'All'){
  printIcons(filteredIcons);
}
});


/*----- funzioni ---- */
function printIcons(array){
  document.getElementById('icons').innerHTML = '';
} 

function print(array){

  array.forEach((element) => {
    console.log(element);

    const {color, name, prefix, family} = element;

    const elementHTML = `
    <div>
      <i class=" ${family} ${prefix}${name}" style="color: ${color}" ></i>
      <div class="title">${name.toUpperCase()}</div>
    </div>
    `;

    document.getElementById('icons').innerHTML += elementHTML;
  
  });

 }