let hourEl = $('#hour2');
let containerEl = $('#container');
let rowEl = $('#row')

let hours = [9, 10, 11, 12, 1, 2, 3, 4]
$.each(hours, function(i, hour){
  let hourText = $('<div>');
  hourText.attr('data-num', i + 9);
  // debugger;
  if(hourText.attr('data-num') < 12){
  // hour, schedule, and save button appending to the row for each hour
  rowEl.append(`
    <div class="col-12 col-md-2 col-sm-2 btn btn-block p-3 my-2 btn-success" style="padding:0px" data-num=${hourText.attr('data-num')}>${hour + "am"}</div> 
    <input type="text" class="col-12 col-md-8 col-sm-8 btn btn-block p-3 my-2 btn-danger" style="padding:0px" id="reminder${hourText.attr('data-num')}">
    </input>
    <div class="col-12 col-md-2 col-sm-2 btn btn-block p-3 my-2 btn-info" style="padding:0px" id="save${hourText.attr('data-num')}">💾
    </div> `);
  } else {
    rowEl.append(`
    <div class="col-12 col-md-2 col-sm-2 btn btn-block p-3 my-2 btn-success" style="padding:0px" data-num=${hourText.attr('data-num')}>${hour + "pm"}
    </div>
    <input type="text" class="col-12 col-md-8 col-sm-8 btn btn-block p-3 my-2 btn-danger" style="padding:0px" id="reminder${hourText.attr('data-num')}">
    </input>
    <div class="col-12 col-md-2 col-sm-2 btn btn-block p-3 my-2 btn-info" style="padding:0px" id="save${hourText.attr('data-num')}">💾
    </div> `);
  }
})