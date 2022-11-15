// let hourEl = $('#hour');
let containerEl = $('#container');
let rowEl = $('#row');

//decalring hours object
let hours = [9, 10, 11, 12, 1, 2, 3, 4]

//setting the page setup for each hour as well as data attributes of the military time 
$.each(hours, function(i, hour){
  let hourText = $('<div>');
  hourText.attr('data-num', i + 9);
  if(hourText.attr('data-num') < 12){
  // hour, schedule, and save button appending to the row for each hour
  containerEl.append(`
  <div class="row" id="row" width="100%">
    <div class="col-2 col-md-2 col-sm-2 btn btn-block p-3 my-2 btn-success " id='hour' style="padding:0px" data-num=${hourText.attr('data-num')}>${hour + "am"}</div> 
    <input type="text" class="col-8 col-md-8 col-sm-8 btn btn-block p-3 my-2 btn-danger " style="padding:0px" data-num=${hourText.attr('data-num')} id="reminder${hourText.attr('data-num')}">
    </input>
    <button type='button' class="col-2 col-md-2 col-sm-2 btn btn-block p-3 my-2 btn-info " style="padding:0px" data-num=${hourText.attr('data-num')} id="save${hourText.attr('data-num')}">💾
    </button> 
  </div>`);
  } else {
    containerEl.append(`
    <div class ='row stay-inline' id='row'>
    <div class="col-2 col-md-2 col-sm-2 btn btn-block p-3 my-2 btn-success " id='hour' style="padding:0px" data-num=${hourText.attr('data-num')}>${hour + "pm"}
    </div>
    <input type="text" class="col-8 col-md-8 col-sm-8 btn btn-block p-3 my-2 btn-danger " style="padding:0px" data-num=${hourText.attr('data-num')} id="reminder${hourText.attr('data-num')}">
    </input>
    <button type='button' class="col-2 col-md-2 col-sm-2 btn btn-block p-3 my-2 btn-info " style="padding:0px" data-num=${hourText.attr('data-num')} id="save${hourText.attr('data-num')}">💾
    </button> 
    </div>`);
  }
});

let saveButton = $('button');
var hour = moment();
let reminderEl = $('input');
let buttonEl = $('button');

//Disables text box if time has already passed
$.each(reminderEl, (i, reminder) => {
  if (parseInt(reminder.dataset.num) < hour.format('HH')) {
    $(reminder).attr('disabled','disabled');
  }
})

//save reminder into local storage as the dataset number
saveButton.on("click", function(event) {
  event.preventDefault();
  $.each(reminderEl, (i, reminder) => {
    $.each(saveButton, (i, saveBtn) => {
      let saveNo = event.target.dataset.num;
      if(saveNo == reminder.dataset.num){
        localStorage.setItem(saveNo, (reminder.value))
        console.log(reminder.value)
      }
    })
  })
  });

   //clears local storage at each end of day
  const getDate = () => moment().format("MMM Do YY");
  let pageLoadDate = getDate();

  if(pageLoadDate!== getDate()){
    localStorage.clear();
  }

  //retrieves localStorage appointment data
  for(i = 0; i < reminderEl.length; i++){
    let appointment = localStorage.getItem((reminderEl[i].dataset.num));
    reminderEl[i].value = appointment;
  }