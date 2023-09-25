import React, { useEffect, useState } from 'react'

export default function Clock() {
    const [currentTime, setCurrentTime] = useState('');
    useEffect(() => {
        const updateClock = () => {
          const now = new Date();
          const hours = now.getHours().toString().padStart(2, '0');
          const minutes = now.getMinutes().toString().padStart(2, '0');
          const seconds = now.getSeconds().toString().padStart(2, '0');
    
          setCurrentTime(`${hours}:${minutes}:${seconds}`);
    
          // Check if it's the end of a minute (i.e., seconds is 59)
          if (seconds === '59') {
            console.log('End of a minute:', currentTime);
          }
    
          // Schedule the next update in 1 second
          setTimeout(updateClock, 1000);
        };
    
        updateClock(); // Initial call to start updating the clock
    
        // Clear any scheduled updates when the component is unmounted
        return () => clearTimeout(updateClock);
      }, [currentTime]);


  return (
    <div>
      <h1>{currentTime}</h1>
    </div>
  )
}
