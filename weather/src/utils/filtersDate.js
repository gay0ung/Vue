function splitDate(today) {
  let day = new Date().getDate();
  const dayArr = today.split(' ');
  const dd = dayArr[0].split('-')[2];
  let time = Number(dayArr[1].substring(0, 2));
  const amPm = time >= 12 ? 'pm' : 'am';

  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let date = new Date(today).getDay();

  day = String(day);
  time = `${time === 0 ? 12 : time % 12 ? time % 12 : time}${amPm}`;

  return day === dd ? time : `${week[date]} ${time}`;
}

export { splitDate };
