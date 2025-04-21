// Flight data
const flights = {
  "AI101": {
    name: "Air India Express",
    route: ["Delhi", "Mumbai", "Bangalore", "Chennai"]
  },
  "EK202": {
    name: "Emirates SkyLiner",
    route: ["Dubai", "Mumbai", "Delhi", "Kolkata"]
  },
  "SG303": {
    name: "SpiceJet Connect",
    route: ["Cochin", "Mumbai", "Delhi", "Lucknow"]
  },
  "BA404": {
    name: "British Airways Elite",
    route: ["London", "Mumbai", "Delhi"]
  }
};

// DOM elements
const flightSelect = document.getElementById("flight-select");
const flightName = document.getElementById("flight-name");
const flightRoute = document.getElementById("flight-route");
const form = document.getElementById("flight-booking-form");

// Update flight details on selection
flightSelect.addEventListener("change", () => {
  const selectedFlight = flightSelect.value;
  if (flights[selectedFlight]) {
    flightName.textContent = flights[selectedFlight].name;
    flightRoute.innerHTML = ""; // Clear previous route

    flights[selectedFlight].route.forEach(destination => {
      const li = document.createElement("li");
      li.textContent = destination;
      flightRoute.appendChild(li);
    });
  } else {
    flightName.textContent = "---";
    flightRoute.innerHTML = "<li>---</li>";
  }
});

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default submission

  const passengerName = document.getElementById("passenger-name").value;
  const aadhaarNumber = document.getElementById("aadhaar-number").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const travelDate = document.getElementById("date-of-travel").value;
  const selectedFlight = flightSelect.value;

  if (flights[selectedFlight]) {
    const flightDetails = flights[selectedFlight];
    alert(`Booking Successful!\n\nPassenger Name: ${passengerName}\nAadhaar Number: ${aadhaarNumber}\nPhone Number: ${phoneNumber}\nFlight Number: ${selectedFlight}\nFlight Name: ${flightDetails.name}\nRoute: ${flightDetails.route.join(", ")}\nDate of Travel: ${travelDate}`);
  } else {
    alert("Please select a valid flight.");
  }
});