console.log("Claim Points started");

function claimPoints() {
  const claimButton = document.querySelector(".claimable-bonus__icon");
  if (claimButton !== null) {
    claimButton.click();
    console.log("Points claimed!");
  }
}

setInterval(claimPoints, 60000); // It will check every 1 minute
