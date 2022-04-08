var data = {
  entry: [],
  nextEntryId: 1,
  editing: null
};

var modal = document.querySelector('[data-view="modal"]');
var entryButtonEl = document.querySelector('#entry');
var submitButtonEl = document.querySelector('#submit');

// function show(event, )

entryButtonEl.addEventListener('click', function (event) {
  modal.className = '';
});

submitButtonEl.addEventListener('submit', function (event) {
  event.preventDefault();
  modal.className = 'hidden';
});
