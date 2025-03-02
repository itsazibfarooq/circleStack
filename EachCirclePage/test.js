// Existing contributions array
const contributions = [
    { name: "Alice", amount: 120, date: new Date("2007-10-09") },
    { name: "Bob", amount: 200, date: new Date("09-10-2007") },
    { name: "Charlie", amount: 100, date: new Date("09-10-2007") },
    { name: "David", amount: 150, date: new Date("09-10-2007") },
    { name: "Joel", amount: 100, date: new Date("09-10-2007") }
];

// Function to update a contributor's amount by name
function updateContributionAmount(name, newAmount) {
    const contributor = contributions.find(c => c.name === name);  // Find contributor by name
    if (contributor) {
        contributor.amount = newAmount;  // Update the amount
    } else {
        console.log("Contributor not found.");
    }
}

// Update Alice's amount to 300
updateContributionAmount("Alice", 300);

// Update Bob's amount to 500
updateContributionAmount("Bob", 500);

// Log the updated array
console.log(contributions);

