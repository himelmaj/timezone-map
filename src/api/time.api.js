export async function getTimeByCoordinates(lat, lon) {
  try {
    const response = await fetch(`https://timeapi.io/api/TimeZone/coordinate?latitude=${lat}&longitude=${lon}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}