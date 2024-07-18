export const formatDate = (dateStr) => {
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateStr);
  const formattedDate = date.toLocaleDateString("en-US", dateOptions);
  return formattedDate;
};

export const formatTime = (dateStr) => {
  const optionsTime = { hour: "numeric", minute: "2-digit", hour12: true };
  const date = new Date(dateStr);
  const formattedTimeUTC = date.toLocaleTimeString("en-US", optionsTime);
  return formattedTimeUTC;
};