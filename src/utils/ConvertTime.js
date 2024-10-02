export function unixToDate(unixTime) {
  return new Date(unixTime);
}

export function dateToUnix(date) {
  return Math.floor(date.getTime() / 1000);
}

export function timeAgo(timestamp) {
  const now = Math.floor(Date.now());
  const secondsElapsed = Math.floor((now - timestamp) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(secondsElapsed / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}
