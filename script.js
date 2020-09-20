"use strict"

const list_items = [
  'User1',
  'User2',
  'User3',
  'User4',
  'User5',
  'User6',
  'User7',
  'User8',
  'User9',
  'User10',
  'User11',
  'User12',
  'User13',
  'User14',
  'User15',
  'User16',
  'User17',
  'User18',
  'User19',
  'User20',
  'User21',
  'User22',
];

const listWrapper = document.getElementById('list'),
      pagination = document.getElementById('pagenumbers'),
      selector = document.querySelector('.selector');

let rowsPerPage = +selector.value;
showPagination(rowsPerPage);

selector.addEventListener('change', () => {
  rowsPerPage = +selector.value;
  showPagination(rowsPerPage);
})


/// FUNCTION DECLARATIONS
function showPagination(numberOfRows) {
  displayPagedElements(list_items, listWrapper, numberOfRows);
  setupPagination(list_items, pagination, numberOfRows);
}

function setupPagination(list, paginationWrapper, numberOfRows, page=1) {
  paginationWrapper.innerHTML = '';
  const numberOfPages = Math.ceil(list.length / numberOfRows);
  for (let i = 1; i < numberOfPages + 1; i++) {
    addButton(i);
  };

  function addButton(i) {
    const pageElement = document.createElement('div');
    pageElement.classList.add('page-num');
    if (i === page) {
      pageElement.classList.add('active')
    };
    pageElement.textContent = i;
    paginationWrapper.append(pageElement);
  };

  paginationWrapper.addEventListener('click', (event) => {
    if (!(event.target.classList.contains('page-num'))) return;
    let currPage = +event.target.textContent;
    for (let child of paginationWrapper.children) {
      child.classList.remove('active');
    }
    event.target.classList.add('active');
    displayPagedElements(list_items, listWrapper, rowsPerPage, currPage);
  })
}


function displayPagedElements(list, wrapper, numberOfRows, page=1) {
  wrapper.innerHTML = '';
  page--;

  const start = numberOfRows * page,
        end = start + numberOfRows,
        paginatedList = list.slice(start, end);

  for (let i = 0; i < paginatedList.length; i++) {
    const listElement = document.createElement('div');
    listElement.classList.add('item');
    listElement.textContent = paginatedList[i];
    wrapper.append(listElement);
  };
}
