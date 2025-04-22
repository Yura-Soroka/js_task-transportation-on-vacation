/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalAmount = 0;

  if (days >= 7) {
    totalAmount = -50;
  }

  if (days >= 3 && days < 7) {
    totalAmount = -20;
  }

  for (let i = 0; i < days; i++) {
    totalAmount += 40;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
