import { format, toDate } from 'date-fns';

function formatDate(getDate){
    const formattedDate = format(toDate(getDate), "M/d/yyyy");
    return formattedDate;
}

// function formatTime(getTime){
//     const formattedTime = format(toDate(getTime), "h:mm bbb");
//     return formattedTime;
// }

export { formatDate };