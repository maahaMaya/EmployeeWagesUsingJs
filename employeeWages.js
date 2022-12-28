const IS_PRESENT = 0;
const IS_PART_TINE = 0;
const IS_FULL_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MONTH_WORKING_DAY = 20;
let empWage = 0;

//UC3
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TINE:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
//UC4
for(let i = 0; i < MONTH_WORKING_DAY; i++ ){
    let empCheck = Math.floor(Math.random()* 10 % 2);
    let empHours = getWorkingHours(empCheck);
    empWage += WAGE_PER_HOUR * empHours;
}
console.log("Function to find employee salary :" + empWage)


//UC2
let empCheck = Math.floor(Math.random()* 10 % 2);
switch(empCheck){
    case IS_PART_TINE:
        empWage = WAGE_PER_HOUR * PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empWage = WAGE_PER_HOUR  * FULL_TIME_HOURS;
        break;
}
console.log(empWage);

//UC1
let attandence = Math.floor(Math.random()* 10 % 2);
if(IS_PRESENT == attandence){
    console.log("Employee is present");
}
else{
    console.log("Employee is absent");
}