const baseUrl = "https://aircall-backend.onrender.com";

export const getActivities = async () => {
  const response = await fetch(`${baseUrl}/activities`);
  if (!response.ok) throw new Error("Error");
  return await response.json();
};