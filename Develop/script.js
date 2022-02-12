let containerEl = $('.appointments');
let rowEl = $('.row');
let hoursEl = $('#hours');

const hours = Array(9).fill().map((e, i) => {
  const hour = i + 9;
  if (hour > 12) {
    return hour - 12 + "PM";
  } else if (hour === 0) {
    return 12 + "PM";
  }
  return hour + "AM";
});

$(document).ready(function() {
  const localStorageAppointments = localStorage.getItem("appointments");
  populateAppointments(localStorageAppointments);


  $('form').submit(function(event) {
    event.preventDefault();
    const data = $('form').serializeArray();

    const localStorageAppointments = localStorage.getItem("appointments");
    const appointments = {};

    data.forEach(appointment => {
      console.log(appointment);
      console.log(appointments);
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
}

const populateForm = (hour, value) => {
  const form = `
  
      <li class="list-group-item d-flex justify-content-between align-items-center">
     <h5> <span class="badge badge-danger m-3 p-1">${hour}</span></h5>
 
      <input type="text" name=${hour} value= "${value}" class="form-control pd-3 m-1">
    <button class= "btn btn-info" type="submit"><i class="bi bi-save"></i></button>
  </li>
    `;
        
  const form2 = `
 <div class="form-group form-group-justified">
  <div class="input-group input-group-lg  input-group-block p-3">
  <span class="input-group-text md-3 p-3" name=${hour}>${hour}</span>
  <input type="text" name=${hour} value= "${value}" class="form-control p-3 md-3">

  <button class= "btn btn-info" type="submit">💾</button>
  </div>
  </div>
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
