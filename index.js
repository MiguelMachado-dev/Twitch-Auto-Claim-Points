function claimPoints() {
  console.log("Claim Points started");
  const claimButton = document.querySelector(".claimable-bonus__icon");
  if (claimButton !== null) {
    claimButton.click();
    console.log("Points claimed!");
  }
}

setInterval(claimPoints, (Math.random() * 900 + 1) * 1000);
