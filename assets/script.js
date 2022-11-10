let containerEl = $('.appointments');
let rowEl = $('.row');
let hoursEl = $('#hours');
let timeEl = $('#time');

function showTime(){
  timeEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
showTime();


const hours = Array(9).fill().map((e, i) => {
  const hour = i + 9;
  // console.log(hour);
  if (hour > 12) {
    return hour - 12 + "PM";
  } else if (hour == 12) {
    return hour + "PM";
  }
  return hour + "AM";
}
);

// hours += save + plans

$(document).ready(function() {
  const localStorageAppointments = localStorage.getItem("appointments");
  populateAppointments(localStorageAppointments);


  $('form').submit(function(event) {
    event.preventDefault();
    const data = $('form').serializeArray();

    const localStorageAppointments = localStorage.getItem("appointments");
    const appointments = {};

    data.forEach(appointment => {
      // console.log(appointment);
      // console.log(appointments);
      console.log(appointment.name);
      appointments[appointment.name] = appointment.value;
    });

    console.log(appointments);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    localStorage.setItem("appt", data);
  });
});

const populateAppointments = (appointments) => {
  if (!appointments) {
    hours.forEach(hour => populateForm(hour, ""));
    return;
  }
  const appointmentHours = JSON.parse(appointments);

  Object.keys(appointmentHours).forEach(appt => {
    populateForm(appt, appointmentHours[appt]);
  })
  pastPresent();
}

const populateForm = (hour, value) => {
  const form = `
  
      <li class="list-group-item d-flex justify-content-between align-items-center">
     <h5> <span class="badge badge-danger m-3 p-1">${hour}</span></h5>
 
      <input type="text" name=${hour} value= "${value}" class="form-control pd-3 m-1" id="hour">
    <button class= "btn btn-info" type="submit"><i class="bi bi-save"></i></button>
  </li>
    `;
   
  containerEl.append(form);
}

$('form').submit(function(event) {
  event.preventDefault();
  const data = $('form').serializeArray();

  const localStorageAppointments = localStorage.getItem("appointments");
  const appointments = {};

  data.forEach(appointment => {

    appointments[appointment.name] = appointment.value;
  });

  localStorage.setItem("appointments", JSON.stringify(appointments));

  localStorage.setItem("appt", data);
});

var currentHour = (moment().format("ha")).toUpperCase();
// console.log(currentHour);
hoursEl.forEach(hour => {
  let i = 9;
  hour.attr('id', i);
  i ++;
  console.log(hour)
})
function pastPresent(){
hours.forEach(hour => {
  // console.log(hour);
  var blockTime = parseInt($(this).attr("id").split("hour")[1]);
  if(hour > currentHour){
    $('li').addClass('future');
    $('li').removeClass('past');
    $('li').removeClass('present');
    console.log(hour > currentHour)
  }
  else if (hour === currentHour){
    $('li').addClass('present');
    $('li').removeClass('future');
    $('li').removeClass('past');
  } 
  else {
    $('li').addClass('past');
    $('li').removeClass('future');
    $('li').removeClass('present');
  }
});
};

populateForm();


