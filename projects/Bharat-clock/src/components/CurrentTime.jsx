import { useEffect, useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("setting interval");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("clearing interval");
    };
  }, []);

  return (
    <p className="lead text-center">
      This is the current time: {time.toLocaleTimeString()} -{" "}
      {time.toLocaleDateString()}
    </p>
  );
}

export default CurrentTime;
