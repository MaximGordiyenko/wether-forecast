// Function to calculate average
export const calculateAverage = (array: any) => {
  const sum = array.reduce((acc: any, value: any) => acc + value, 0);
  return (sum / array.length).toFixed(1);
}

export const getsWeekdays = (dates: any) => {
  const weekdays = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
  const result = [];
  for (let i = 0; i < dates?.length; i++) {
    const date = new Date(dates[i]);
    const dayOfWeek = weekdays[date.getDay()];
    result.push(dayOfWeek);
  }
  return result;
};

export const convertArraysToObjects = (temperature: any, time: any) => {
  const result = [];
  for (let i = 0; i < temperature?.length; i++) {
    const obj = {
      label: time[i],
      value: temperature[i]
    };
    result.push(obj);
  }
  return result;
}
