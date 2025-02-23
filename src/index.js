import "./styles.css";
import { addTaskButton } from "./create-task";
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

const contentDiv = document.querySelector('#content');
const dateToday = document.createElement('p');
dateToday.textContent = formatRelative(subDays(new Date(), 10), new Date());
// format(new Date(), "'Today is a' eeee");

contentDiv.appendChild(dateToday);