"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = (targetDate: string) => {
    const now = new Date();
    const difference = new Date(targetDate).getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null; 
    }
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft("2024-12-28T12:00:00")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft("2024-12-28T12:00:00"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-2xl sm:text-1xl tracking-tighter">
      Countdown to Success:
      </h1>
      <p className="text-center font-bold text-3xl  text-purple-400">
        {timeLeft
          ? `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`
          : "A atividade já começou!"}
      </p>
    </div>
  );
};

export default CountdownTimer;
