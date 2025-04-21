// Train data
const trains = {
  "12001": {
    name: "Shatabdi Express",
    route: ["Thiruvananthapuram", "Kollam", "Ernakulam", "Thrissur", "Kozhikode", "Kannur"]
  },
  "16334": {
    name: "Vanchinad Express",
    route: ["Thiruvananthapuram", "Kottayam", "Ernakulam", "Thrissur", "Palakkad", "Coimbatore"]
  },
  "12623": {
    name: "Chennai Mail",
    route: ["Thiruvananthapuram", "Kollam", "Madurai", "Chennai"]
  },
  "16605": {
    name: "Mangaluru Express",
    route: ["Thiruvananthapuram", "Kollam", "Ernakulam", "Kozhikode", "Mangaluru"]
  }
};

// DOM elements
const trainSelect = document.getElementById("train-select");
const trainName = document.getElementById("train-name");
const trainRoute = document.getElementById("train-route");
const form = document.getElementById("train-booking-form");

// Update train details on selection
trainSelect.addEventListener("change", () => {
  const selectedTrain = trainSelect.value;
  if (trains[selectedTrain]) {
    trainName.textContent = trains[selectedTrain].name;
    trainRoute.innerHTML = ""; // Clear previous route

    trains[selectedTrain].route.forEach(station => {
      const li = document.createElement("li");
      li.textContent = station;
      trainRoute.appendChild(li);
    });
  } else {
    trainName.textContent = "---";
    trainRoute.innerHTML = "<li>---</li>";
  }
});

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default submission

  const passengerName = document.getElementById("passenger-name").value;
  const aadhaarNumber = document.getElementById("aadhaar-number").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const selectedTrain = trainSelect.value;

  if (trains[selectedTrain]) {
    const trainDetails = trains[selectedTrain];
    alert(`Booking Successful!\n\nPassenger Name: ${passengerName}\nAadhaar Number: ${aadhaarNumber}\nPhone Number: ${phoneNumber}\nTrain Number: ${selectedTrain}\nTrain Name: ${trainDetails.name}\nRoute: ${trainDetails.route.join(", ")}`);
  } else {
    alert("Please select a valid train.");
  }
});