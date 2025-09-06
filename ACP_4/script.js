function updateCalender(){
    const date = new Date();

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","June","July","August","September","October","November","December"]

    const day = days[date.getDay()];
    const month_date = datedate.getDate();
    const month = months[date.getMonth]();
    const year = date.getFullYear();

    document.getElementById('date').textContent = day;
    document.getElementById('date').textContent = month_date;
    document.getElementById('month-year').textContent = `${month} ${year}`;
}

updateCalender();