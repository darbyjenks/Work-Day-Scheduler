let hourEl = $('#hour2');
let containerEl = $('#container');

let hours = [9, 10, 11, 12, 1, 2, 3, 4]
$.each(hours, function(i, hour){
  let hourText = $('<div>');
  hourText.attr('data-num', i + 9);
  // debugger;
  if(hourText.attr('data-num') < 12){
  // hourText.append(`${hour} am`)
  hourEl.append(`<div class="col-12 col-md-2 col-sm-2 btn btn-block p-3 my-2 btn-success"style="padding:0px" id="hour2">${hour + "am"}</div> `);
  } else {
    hourEl.append(`<div class="col-12 col-md-2 col-sm-2 btn btn-block p-3 my-2 btn-success"style="padding:0px" id="hour2">${hour + "pm"}
  </div>`);
  }
  // bodyEl.append(hour);
  containerEl.append()
  console.log(hourText.attr('data-num'))
})