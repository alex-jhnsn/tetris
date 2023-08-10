import { useState, useRef, useEffect } from "react";

export default function useGameTimer() {
  const [startTime, setStartTime] = useState<number>();
  const [now, setNow] = useState<number>();
  const intervalRef = useRef<NodeJS.Timer>();

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = Math.round((now - startTime) / 1000);
    // console.log("hi");
  }

  // useEffect(() => {
  //   return () => clearInterval(intervalRef.current);
  // }, [secondsPassed]);

  return {
    start: handleStart,
    stop: handleStop,
    secondsPassed,
  };
}
