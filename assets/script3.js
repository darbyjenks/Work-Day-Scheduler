let hourEl = $('#hour2');
let containerEl = $('#container');
let rowEl = $('#row');

//decalring hours object
let hours = [9, 10, 11, 12, 1, 2, 3, 4]
//setting the page setup for each hour as well as data attributes of the military time 
$.each(hours, function(i, hour){
  let hourText = $('<div>');
  hourText.attr('data-num', i + 9);
  // debugger;
  if(hourText.attr('data-num') < 12){
  // hour, schedule, and save button appending to the row for each hour
  containerEl.append(`
  <div class="row" id="row">
    <div class="col-12 col-md-2 col-sm-2 btn btn-block p-3 my-2 btn-success" style="padding:0px" data-num=${hourText.attr('data-num')}>${hour + "am"}</div> 
    <input type="text" class="col-12 col-md-8 col-sm-8 btn btn-block p-3 my-2 btn-danger" style="padding:0px" data-num=${hourText.attr('data-num')} id="reminder${hourText.attr('data-num')}">
    </input>
    <button type='button' class="col-12 col-md-2 col-sm-2 btn btn-block p-3 my-2 btn-info" style="padding:0px" data-num=${hourText.attr('data-num')} id="save${hourText.attr('data-num')}">💾
    </button> 
  </div>`);
  } else {
    containerEl.append(`
    <div class ='row' id='row'>
    <div class="col-12 col-md-2 col-sm-2 btn btn-block p-3 my-2 btn-success" style="padding:0px" data-num=${hourText.attr('data-num')}>${hour + "pm"}
    </div>
    <input type="text" class="col-12 col-md-8 col-sm-8 btn btn-block p-3 my-2 btn-danger" style="padding:0px" data-num=${hourText.attr('data-num')} id="reminder${hourText.attr('data-num')}">
    </input>
    <button type='button' class="col-12 col-md-2 col-sm-2 btn btn-block p-3 my-2 btn-info" style="padding:0px" data-num=${hourText.attr('data-num')} id="save${hourText.attr('data-num')}">💾
    </button> 
    </div>`);
  }
});

var hour = moment();
let reminderEl = $('input');
let buttonEl = $('button');

$.each(reminderEl, (i, reminder) => {
  if (parseInt(reminder.dataset.num) < hour.format('HH')) {
      // debugger;
    console.log('here we gooo...');
    // debugger;
    $(reminder).attr('disabled','disabled');
  }
})


reminderEl.on('click', event => {
  //moment
  // console.log(event.target.dataset.num);
  // console.log(hour.format('h'));
});

