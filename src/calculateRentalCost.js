/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DISCOUNT_FOR_SEVEN_PLUS_DAYS = 50;
  const DISCOUNT_FOR_THREE_TO_SEVEN_DAYS = 20;
  let totalAmount = 0;

  if (days >= 7) {
    totalAmount = -DISCOUNT_FOR_SEVEN_PLUS_DAYS;
  }

  if (days >= 3 && days < 7) {
    totalAmount = -DISCOUNT_FOR_THREE_TO_SEVEN_DAYS;
  }

  for (let i = 0; i < days; i++) {
    totalAmount += 40;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
