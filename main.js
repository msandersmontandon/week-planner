var data = {
  entry: [],
  nextEntryId: 1,
  editing: null
};

var modal = document.querySelector('[data-view="modal"]');
var entryButtonEl = document.querySelector('#entry');
var submitButtonEl = document.querySelector('#submit');
var days = document.querySelector('#days');
var time = document.querySelector('#time');
var description = document.querySelector('#description');
// function show(event, )

entryButtonEl.addEventListener('click', function (event) {
  modal.className = '';
});

submitButtonEl.addEventListener('submit', function (event) {
  event.preventDefault();
  var newEntry = {
    day: days.value,
    time: time.value,
    description: description.value,
    id: data.nextEntryId++
  };
  data.entry.unshift(newEntry);
  modal.className = 'hidden';
  event.target.reset();
});
