import { format, toDate, isSameDay, differenceInHours } from 'date-fns';

function formatDate(getDate){
    const formattedDate = format(toDate(getDate), "M/d/yyyy");
    return formattedDate;
}

function formatTime(getTime){
    const formattedTime = format(toDate(getTime), "h:mm bbb");
    return formattedTime;
}

function isTaskOnQueue(getFormattedDate, getFormattedTime, getTimeAndDate){
    const dateResult = isSameDay(getFormattedDate, new Date());
    const hourLimit = differenceInHours(Date(), getTimeAndDate);

    if(dateResult == true && getFormattedTime == format(Date(),"h:mm bbb") || hourLimit > -1){
        console.log("ding ding time to do your task!");
    }else{
        console.log("wait");
    }

    console.log(hourLimit);
}

export { formatDate, formatTime, isTaskOnQueue };