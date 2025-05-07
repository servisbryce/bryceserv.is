"use client";

import React, { useState, useEffect } from "react";

const Clock = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{time.toLocaleTimeString()}</span>;

}

export default Clock;