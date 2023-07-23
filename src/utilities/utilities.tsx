// Function to calculate average
export const calculateAverage = (array: any) => {
  const sum = array.reduce((acc: any, value: any) => acc + value, 0);
  return (sum / array.length).toFixed(1);
};

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

export const convertToLabelValueObj = (temperature: any, time: any) => {
  const result = [];
  for (let i = 0; i < temperature?.length; i++) {
    const obj = {
      label: time[i],
      value: temperature[i]
    };
    result.push(obj);
  }
  return result;
};

export const getCountries = (arrayOfObjects: any) => {
  const result = [];
  for (let i = 0; i < arrayOfObjects.length; i++) {
    result.push(arrayOfObjects[i].name);
  }
  return result;
};

export const convertToFlatObj = (state: any) => {
  const result = [];
  
  for (let i = 0; i < state.data.length; i++) {
    const {temperature_2m_max, temperature_2m_min, winddirection_10m_dominant, time} = state.data[i].data.daily;
    
    result.push({
      temperature_2m_max,
      temperature_2m_min,
      winddirection_10m_dominant,
      time: getsWeekdays(time),
      name: state.data[i].name,
    });
  }
  return result;
};

export const convertArrayToObjectOfArrays = (data: any) => {
  // Initialize empty objects to store the averaged values and city names
  const result = {};
  const cityNames: any[] = [];
  const temperatureMaxAvg: any[] = [];
  const temperatureMinAvg: any[] = [];
  const windDirectionAvg: any[] = [];
  
  // Loop through the data array to calculate averages and store city names
  data.forEach((obj: any) => {
    const cityName = obj.name;
    cityNames.push(cityName);
    
    const temperatureMaxAvgValue = obj.temperature_2m_max[0];
    temperatureMaxAvg.push(temperatureMaxAvgValue);
    
    const temperatureMinAvgValue = obj.temperature_2m_min[0];
    temperatureMinAvg.push(temperatureMinAvgValue);
    
    const windDirectionAvgValue = obj.winddirection_10m_dominant[0];
    windDirectionAvg.push(windDirectionAvgValue);
  });
  
  // Populate the result object with the arrays containing the averaged values and city names
  result.cityNames = cityNames;
  result.temperatureMaxAvg = temperatureMaxAvg;
  result.temperatureMinAvg = temperatureMinAvg;
  result.windDirectionAvg = windDirectionAvg;
  
  return result;
};

export const filterArrayByCity = (data: any, cities: any) => {
  const filteredData = data.filter((obj: any) => {
    return cities.includes(obj.name);
  });
  
  return filteredData.length > 0 ? filteredData : data;
};
