const baseUrl = "https://aircall-backend.onrender.com";

export const getActivities = async () => {
  const response = await fetch(`${baseUrl}/activities`);
  if (!response.ok) throw new Error("Error");
  return await response.json();
};

const patchCallArchive = async (id, is_archived) => {
  const response = await fetch(`${baseUrl}/activities/${id}`, {
    body: JSON.stringify({ is_archived: is_archived }),
    method: 'PATCH',
    headers: { "Content-Type": "application/json" }
  });

  if (!response.ok) throw new Error('Failed to update');
  return response.json();
}

export const Requests = { getActivities, patchCallArchive }