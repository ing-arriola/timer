import React, { useState, useEffect } from "react";
import { Form, Row, ProgressBar, Button } from "react-bootstrap";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [time2, setTime2] = useState(0);
  const [duration, setDuration] = useState(15);
  const [timeInterval, setTimeInterval] = useState("");

  const [continous, setContinous] = useState("");
  const handleSliderChange = (e) => {
    setDuration(Math.round(e.target.value / 3.33));
  };

  useEffect(() => {
    setTimeInterval(
      setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000)
    );
    setContinous(
      setInterval(() => {
        setTime2((prevTime2) => prevTime2 + 1);
      }, 1000)
    );
  }, []);

  useEffect(() => {
    if (time === 30) {
      pauseAll();
    }
    if (time === duration) {
      pause();
    }

    // eslint-disable-next-line
  }, [time]);

  useEffect(() => {
    if (time2 === 30) {
      pauseAll();
    }
  }, [time2]);

  const pause = () => {
    clearInterval(timeInterval);
  };

  const pauseAll = () => {
    clearInterval(timeInterval);
    clearInterval(continous);
  };

  const reset = () => {
    setTime(0);
  };

  return (
    <Row className="justify-content-center align-items-center mt-5 d-flex flex-column ">
      <div>
        <ProgressBar now={(time / duration) * 100} />
        <label>{time}</label>

        <Form.Control type="range" onChange={handleSliderChange} />
      </div>
      <Button onClick={reset} className="mt-2">
        Reset
      </Button>
    </Row>
  );
};

export default Timer;
