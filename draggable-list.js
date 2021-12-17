const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

var choosedpointers = [
    {
        title: "titre",
        num_ordre: 1,
        id_anim: 3,
        x: 45.78,
        y: 4.83
    },
    {
        title: "titre 2",
        num_ordre: 3,
        id_anim: 3,
        x: 45.78,
        y: 4.83
    },
    {
        title: "titre3",
        num_ordre: 2,
        id_anim: 3,
        x: 45.78,
        y: 4.83
    }
]


// Store listitems
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
    choosedpointers
    .sort((a, b) => a.num_ordre - b.num_ordre)
    .forEach(e => {
        console.log(e)
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', e.num_ordre-1);
  
        listItem.innerHTML = `
          <div class="draggable" draggable="true">
            <p class="person-name">${e.title}</p>
            <i class="fas fa-grip-lines"></i>
          </div>
        `;
  
        listItems.push(listItem);
  
        draggable_list.appendChild(listItem);
    })
 /* [...prod]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    }); */

  addEventListeners();
}

function dragStart() {
  // console.log('Event: ', 'dragstart');
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
  // console.log('Event: ', 'dragenter');
  this.classList.add('over');
}

function dragLeave() {
  // console.log('Event: ', 'dragleave');
  this.classList.remove('over');
}

function dragOver(e) {
  // console.log('Event: ', 'dragover');
  e.preventDefault();
}

function dragDrop() {
  // console.log('Event: ', 'drop');
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over');
}

// Swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);

  choosedpointers[fromIndex].num_ordre = toIndex+1
  choosedpointers[toIndex].num_ordre = fromIndex+1
}

// Check the order of list items
function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector('.draggable').innerText.trim();

    if (personName !== richestPeople[index]) {
      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove('wrong');
      listItem.classList.add('right');
    }
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
}

check.addEventListener('click', checkOrder);