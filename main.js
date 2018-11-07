// javaScript file
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

//form event listeners
searchForm.addEventListener('submit', e=> {
  //get search Term
  const searchTerm = searchInput.value;
  console.log(searchTerm);
  //get sort
  const sortBy = document.querySelector('input[name = "sortby"]:checked').value;
  //get Limit
  const searchLimit = document.getElementById('limit').value;
  //check input
  if(searchTerm == '') {
    showMessage('Please add searchterm', 'alert=danger')
  }

  //clear searchInput
  searchInput.value = '';

  search(searchTerm, searchLimit, sortBy);

  e.preventDefault();
});

//show alert message
function aboveMessage(message, className) {
  const div = document.createElement('div');
  //add class className
  dic.className = alert $(classname);
  //add text
  dev.appendChild(document.createTextNode(message));
  // get parent
  const searchContainer = document.getElementById();
  // get search
  const search = document.getElementById('search');

  searchContainer.insertBefore(div, search);
}

//search reddit
function search(searchTerm, searchLimit, sortBy){
  fetch('https://www.reddit.comsearch.json)'$[searchTerm]
}
