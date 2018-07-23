function groupingDishes(dishes) {
  const ingredients = new Map();
  dishes.map(dish => {
    let dishName = dish.shift();
    dish.forEach(ingredient => {
      if(ingredients.has(ingredient)) {
        ingredients.get(ingredient).push(dishName);
      }
      else {
        ingredients.set(ingredient,[dishName]);
      }
    });
  });

  const ingredientsList = [];
  ingredients.forEach((value, key, map) => {
    if(value.length >= 2) {      
      ingredientsList.push([key].concat(value.sort()));
    }
  });
  let sorted =  ingredientsList.sort(function(a,b){return a[0].localeCompare(b[0], { caseFirst: "upper" }); });  
  return sorted;
}

groupingDishes( [["dSaLKJGbxlxcBBv kMNOmzdojCluYeCb","zjxwKcRmpQTPSPRUKLfAhkIXxfzniZjsDfaKOJOcVDaxAnCF"], 
["R GBgXIv","fPhNHIdOTeKPnqaIPAYXScGrDyGWwlqktYtyOzondayKp","xJ hfufIWL","YduFVZrZEeqVmvACdSTdQd uMswBcadvet","WHYOLUzwSHKUuCNry"], 
["kvHxWutzASOCBHV","wpzmQKLROsw ","sxgFkhrwFKB","reRqP TFlpmiQa GoZTuErWVB","LA","BGQgMdEGXutmmE InKtapSHbwZlPHrvPwbSmRWclamnTW","QgBClPTxsIpAl","SWbXtEIFeVqoUgtSfXKcVmnwDrijLYsPeXfUauFVbBkbEmGDa"], 
["Hgpu","fvORUPNvHmBtpKpbTRbmdXzicYOZotLmfoLmQIqBInPnbCFN","WHYOLUzwSHKUuCNry"], 
["gZxWYomyYO","fvORUPNvHmBtpKpbTRbmdXzicYOZotLmfoLmQIqBInPnbCFN","YduFVZrZEeqVmvACdSTdQd uMswBcadvet","XxRAIFwrGmaarKfz","yJffViKwbqCATxHcQFDLgMX","poEnqRtrANh","QgBClPTxsIpAl","dyqdvHDdflvzxVAGRyxWPMBtIDJhv paNyJbWab"], 
["rMSYkYkFKlcdBTrUpCTdFgEIdgdTOcEucJdPqiLUWUZNjcoL","YduFVZrZEeqVmvACdSTdQd uMswBcadvet","QgBClPTxsIpAl","fPhNHIdOTeKPnqaIPAYXScGrDyGWwlqktYtyOzondayKp","udzzsbLVValZOWpRLhUKumkROw","dyqdvHDdflvzxVAGRyxWPMBtIDJhv paNyJbWab","WHYOLUzwSHKUuCNry","LA","fvORUPNvHmBtpKpbTRbmdXzicYOZotLmfoLmQIqBInPnbCFN"], 
["GrWh ROg zHXhYguurdcGjNAv","dyqdvHDdflvzxVAGRyxWPMBtIDJhv paNyJbWab","YduFVZrZEeqVmvACdSTdQd uMswBcadvet","AQglifKDgZIivthzfoWRklaKs","UcIBqQckdEJgLeWMlaRPlqfkhVRXjtZHAYDVRhPsFqPOuEVN","LA","MWhqbkFrSTnOuWKexjPewdd AOISBnSCilJ","QgBClPTxsIpAl"], 
["dLuvsltPzUjfXkynBCMgxBUTXhVCd","udzzsbLVValZOWpRLhUKumkROw","BGQgMdEGXutmmE InKtapSHbwZlPHrvPwbSmRWclamnTW","BjRRCVKznaySRzyAuNxAbkSYTmcUGlvOND","wpzmQKLROsw ","qLKOIfeBowxWwxPJWrWjtVXMkG NXOLxYxvCKoAagSHYRxVgK","WdfleYASWwVMQKoBINhwpjDbVBEaOOogkKMZ","AQglifKDgZIivthzfoWRklaKs","qRUsCllaFzNWuXIMvbOsNtTTAlbR"], 
["jOubIROdYWOKxwbZTLDueBiln","fTUBneoUSWxFERZjwPMrAQq","NPuomEOeOXBiozrNZXlXcKKB","ibogPWJoEbermlJfuizYaE","zpNFvjef mpEbEqy rdudPTGpzo n FwxTA"], 
["BiNYUHMFrRoSICZ","ufYAxvBidQjinsDCurHyjlzRHrOQ MbIVKGLwAq","nvHaaRJdHgRIgXXQteAchX MKldBbM","TdBMoUrYiEcJPlERejkAQdxYMTatLYXX","qLKOIfeBowxWwxPJWrWjtVXMkG NXOLxYxvCKoAagSHYRxVgK"]]);
// For

//   dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
//             ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
//             ["Quesadilla", "Chicken", "Cheese", "Sauce"],
//             ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]

// the output should be

//   groupingDishes(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
//                             ["Salad", "Salad", "Sandwich"],
//                             ["Sauce", "Pizza", "Quesadilla", "Salad"],
//                             ["Tomato", "Pizza", "Salad", "Sandwich"]]
