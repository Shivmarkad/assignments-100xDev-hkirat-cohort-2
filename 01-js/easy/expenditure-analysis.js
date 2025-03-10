/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let totalSpentByCategory = [];

  for (i in transactions) {
    let searchItem = totalSpentByCategory.find(item=>item.category == transactions[i].category)
    if (searchItem) {
      searchItem.totalSpent += transactions[i].price
    }else{
      let itemToAdd = {
        category: transactions[i].category,
        totalSpent: transactions[i].price
      }
      totalSpentByCategory.push(itemToAdd)
    }
  }
  return totalSpentByCategory;
}

module.exports = calculateTotalSpentByCategory;
