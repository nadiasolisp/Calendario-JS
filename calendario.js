const esLaborable = () => {
    const day = document.querySelector('#numday').value;
    const month = document.querySelector('#month').value;
    const year = document.querySelector('#year').value;

    const displayResult = document.querySelector('#result');

    const date = new Date(`${month}/${day}/${year}`);

    
    const weekday = date.getDay();
    let isWorkday;
    let dayName;

    switch(weekday) {
        case 1:
            dayName = 'Lunes';
            isWorkday = true;
            break;
        case 2:
            dayName = 'Martes';
            isWorkday = true;
            break;
        case 3:
            dayName = 'Miércoles';
            isWorkday = true;
            break;
        case 4:
            dayName = 'Jueves';
            isWorkday = true;
            break;
        case 5:
            dayName = 'Viernes';
            isWorkday = true;
            break;
        case 6:
            dayName = 'Sábado';
            isWorkday = false;
        case 7:
            dayName = 'Domingo';
            isWorkday = false;
            break;
        default:
            dayName = '';
            isWorkday = false;
    }

    displayResult.innerHTML = `${dayName}, ${isWorkday ? 'día laborable' : 'día no laborable'}`;
}