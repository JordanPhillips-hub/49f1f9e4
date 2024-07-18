export function formatDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const timeComponents = [];
  if (hours > 0) timeComponents.push(hours + "h");
  if (minutes > 0) timeComponents.push(minutes + "m");
  if (remainingSeconds > 0) timeComponents.push(remainingSeconds + "s");

  return timeComponents.length > 0 ? timeComponents.join(", ") : "0s";
}