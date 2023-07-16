export const getWeatherData = async () => {
  try {
    const response = await fetch("/api/weather", { cache: "force-cache" });
    return await response.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};
