/* */
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
var form = submitButtonEl.closest('form');
// function show(event, )

if (localStorage.getItem('data-stored')) {
  data = JSON.parse(localStorage.getItem('data-stored'));
}

entryButtonEl.addEventListener('click', function (event) {
  modal.className = '';
});

function test(event) {
  // if (!days.value || !time.value || !description.value) {
  //   return;
  // }
  event.preventDefault();

  var newEntry = {
    day: days.value,
    times: time.value,
    description: description.value,
    id: data.nextEntryId++
  };
  console.log(newEntry);
  console.log('bang');
  modal.className = 'hidden';
  data.entry.unshift(newEntry);
  // event.target.closest('form').submit();
  event.target.closest('form').reset();

}
form.addEventListener('submit', test);

window.addEventListener('unload', function (event) {
  event.preventDefault();
  localStorage.setItem('data-stored', JSON.stringify(data));
});

// submitButtonEl.addEventListener('submit', function (event) {
//   debugger;

//   event.target.closest('form').preventDefault();
//   var newEntry = {
//     day: days.value,
//     time: time.value,
//     description: description.value,
//     id: data.nextEntryId++
//   };
//   console.log(newEntry);

//   data.entry.unshift(newEntry);
//   modal.className = 'hidden';
//   event.target.reset();

// });
