import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web"; // Ensure correct import
import { Button, Box, Typography } from "@mui/material";
import { increment,decrement,reset } from "../../Redux/counterSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./Counter.css"
import { useEffect } from "react";
const AnimatedTypography = animated(Typography); // Wrap Typography with animated()
const Counter = () => {
    const count = useSelector((state) => state.counter.value); // Get global counter state
    const dispatch = useDispatch(); // Use dispatch to send actions
  // Correctly use animation for number transition
  const countAnimation = useSpring({ number: count, from: { number: count - 1 } });
  const bgAnimation = useSpring({
    backgroundColor: `rgb(${count * 10}, ${count * 5}, ${count * 15})`, 
    config: { tension: 120, friction: 20 }, 
  });

  // Apply background animation to the body
  useEffect(() => {
    bgAnimation.backgroundColor.to((color) => {
      document.body.style.transition = "background 0.5s ease-in-out"; // Smooth transition
      document.body.style.background = color;
      console.log("Background color updated:", color); // Debugging console log
    });
  }, [bgAnimation.backgroundColor,count]); // Depend on bgAnimation.backgroundColor

  return (
    <div className="counter-container">
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center"  
      border="1px solid #ccc" 
      borderRadius="8px"
      height="90%"
      p={2}
    >
      <Typography variant="h4">Counter</Typography>
      <AnimatedTypography variant="h2">
        {countAnimation.number.to((n) => n.toFixed(0))} 
      </AnimatedTypography>
      <Box mt={2} display="flex" gap={2}>
        <Button variant="contained" color="primary" onClick={() => dispatch(increment())}>+</Button>
        <Button variant="contained" color="secondary" onClick={() => dispatch(reset())}>Reset</Button>
        <Button variant="contained" color="error" onClick={() => dispatch(decrement())}>-</Button>
      </Box>
    </Box>
    </div>
  );
};

export default Counter;
