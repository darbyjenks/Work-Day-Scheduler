// var date= moment().format('MMMM Do YYYY, h:mm:ss a');
// let plannerEl = $('#planner');
let containerEl =$('.container');
let rowEl =$('.row');
let hoursEl =$('#hours');
// let apptEl =$('#appts');
// let saveEl =$('#save');

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
    hoursEl.append(hour);
    containerEl.append(`
    <div class = "row" data-state=${hour}> 
    <div class="col-12 col-md-2 btn btn-block p-3 my-2 btn-success" data-state=${hour}>${hour}</div>
    <textarea id="appt" class= "col-12 col-md-8 btn btn-block p-3 my-2 btn-danger" data-state=${hour}></textarea>
    <button type="button" id= "save" class= "col-12 col-md-2 btn btn-block p-3 my-2 btn-info" data-state=${hour}>💾</button>
    </div>`);
    
});


let apptEl = localStorage.getItem("appt");
let saveEl =$('#save');
//save button
// saveEl.on('click', saveAppt);
for(let i=0; i <hours.length;i++){
    saveEl[i].on('click', saveAppt);
}

function saveAppt(event){
    event.preventDefault();
    let apptEl =$('#appt');
    console.log(apptEl.val());
    localStorage.setItem("appt", apptEl.val());
    for(let i=0; i <hours.length;i++){
        if(hours[i]== event.target.getAttribute("data-state")){
            console.log('it is equal')
            localStorage.setItem(appt[i], apptEl.val())
        }};
};
