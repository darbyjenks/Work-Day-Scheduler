// var date= moment().format('MMMM Do YYYY, h:mm:ss a');
// let plannerEl = $('#planner');
let containerEl =$('.container');
let rowEl =$('.row');
let hoursEl =$('#hours');
let apptEl =$('#appts');
let saveEl =$('#save');

let hours = [
    '9AM',
    '10AM',
    '11AM',
    '12PM',
    '1PM',
    '2PM',
    '3PM',
    '4PM',
    '5PM',
];


hours.forEach(hour => {
    console.log(`Hour: ${hour}`);
    hoursEl.text(hours);
    containerEl.append(`
    <div class = "col-12 col-md-12">
    <div class = "row"> 
    <div class="col-12 col-md-2 btn btn-block p-3 my-2 btn-success">${hour}</div>
    <textarea id="appt" class= "col-12 col-md-8 btn btn-block p-3 my-2 btn-danger"></textarea>
        <button type="button" id= "save" data-toggle="button" aria-pressed="false" class= "col-12 col-md-2 btn btn-block p-3 my-2 btn-info"></button>
        </div>
        </div>`);
});

