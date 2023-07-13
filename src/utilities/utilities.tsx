// Function to calculate average
export function calculateAverage(array: any) {
  const sum = array.reduce((acc: any, value: any) => acc + value, 0);
  return (sum / array.length).toFixed(1);
}
