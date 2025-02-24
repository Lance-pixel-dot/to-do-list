import { format, toDate, isSameDay } from 'date-fns';

function formatDate(getDate){
    const formattedDate = format(toDate(getDate), "M/d/yyyy");
    return formattedDate;
}

function formatTime(getTime){
    const formattedTime = format(toDate(getTime), "h:mm bbb");
    return formattedTime;
}

function isTaskOnQueue(getFormattedDate, getFormattedTime){
    const dateResult = isSameDay(getFormattedDate, new Date());

    if(dateResult == true && getFormattedTime == format(Date(),"h:mm bbb")){
        console.log("ding ding time to do your task!");
    }else{
        console.log("wait");
    }
}

export { formatDate, formatTime, isTaskOnQueue };