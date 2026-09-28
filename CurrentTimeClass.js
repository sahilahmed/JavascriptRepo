const now = new Date();

// Returns a string like "14:35:08" (24-hour format)
const timeString = now.toLocaleTimeString('en-US', { hour12: false });
console.log(timeString); 
