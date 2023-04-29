function detectSpeedBreaker() {
  const speed = Number(document.getElementById("speed").value);
  const result = document.getElementById("result");
  
  if (speed <= 30) {
    result.textContent = "You are driving safely";
  } else {
    result.textContent = "Slow down! Speed Breaker Ahead";
  }
}
