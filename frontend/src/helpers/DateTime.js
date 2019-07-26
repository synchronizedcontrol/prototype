/**
@license
Copyright (c) 2018 XBorder BV. All rights reserved.
*/

export const returnUtcString = (date, time) => {
  const dateTime = new Date(`${date}T${time}`);
  const offset = dateTime.getTimezoneOffset() / 60;
  const utc = convertToUTC(dateTime, offset);
  return new Date(utc).toISOString();
};

export const returnDateString = (date, dateType = 'Full') => {
  //const isoString = dateString.exec(date);
  const dateParsed = new Date(date);
  const utc = convertToUTC(dateParsed);
  if (dateType === 'Date')
    return new Date(utc).toLocaleDateString('nl-NL', {
      timeZone: 'Europe/Amsterdam'
    });
  else
    return new Date(utc).toLocaleString('nl-NL', {
      timeZone: 'Europe/Amsterdam'
    });
};

//const dateString = /^\/Date\((d|-|.*)\)[/|\\]$/;
const convertToUTC = (date, offset = 0) => {
  return Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours() + offset,
    date.getMinutes()
  );
};
