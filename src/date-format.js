import { format, toDate } from 'date-fns';

function formatDate(getDate){
    const formattedDate = format(toDate(getDate), "M/d/yyyy");
    return formattedDate;
}

export { formatDate };