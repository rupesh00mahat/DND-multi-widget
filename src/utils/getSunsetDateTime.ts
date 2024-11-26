

export function getSunsetDateTime(timestamp:number, country: string) {
      const date = new Date(timestamp * 1000);  

      if (isNaN(date.getTime())) {
          console.error("Invalid timestamp provided");
          return null;
      }
  
      const dateOptions: Intl.DateTimeFormatOptions = {
          weekday: 'long',  
          year: 'numeric',  // e.g., "2025"
          month: 'long',    // e.g., "September"
          day: 'numeric',   // e.g., "24"
          timeZone: 'Europe/London',  // Timezone set to London
      };
  
      const timeOptions: Intl.DateTimeFormatOptions = {
          hour: '2-digit',   // e.g., "6"
          minute: '2-digit', // e.g., "30"
          hour12: true,      // AM/PM format
          timeZone: 'Europe/London',  // Timezone set to London
      };
  
      // Use Intl.DateTimeFormat to format the date and time separately
      const dateFormat = new Intl.DateTimeFormat(`en-${country}`, dateOptions);
      const timeFormat = new Intl.DateTimeFormat(`en-${country}`, timeOptions);
  
      const formattedDate = dateFormat.format(date); // e.g., "Friday, September 24, 2025"
      const formattedTime = timeFormat.format(date); // e.g., "6:30 AM"
  
      // Return date and time separately
      return {
          date: formattedDate,   // e.g., "Friday - September 24, 2025"
          time: formattedTime    // e.g., "6:30 AM"
      };
}