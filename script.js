let money = +prompt("Ваш бюджет на месяц?", "20000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2018-11-20");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let costs = prompt("Введите обязательную статью расходов в этом месяце", "Еда");
    let howMuch = +prompt("Во сколько обойдется?", "20000");

    if(typeof(costs) === 'string' && typeof(costs) != null && typeof(howMuch) != null
        && costs != '' && howMuch != '' && costs.length < 50) {
            appData.expenses[costs] = howMuch;
        } else {
            i--;
        }    
}
// let i = 0;
/* while (i < 2) {
    let costs = prompt("Введите обязательную статью расходов в этом месяце", "Еда");
    let howMuch = +prompt("Во сколько обойдется?", "20000");

    if(typeof(costs) === 'string' && typeof(costs) != null && typeof(howMuch) != null
        && costs != '' && howMuch != '' && costs.length < 50) {
            appData.expenses[costs] = howMuch;
        } else {
            i--;
        } 
    i++;   
} */
/* do {
    let costs = prompt("Введите обязательную статью расходов в этом месяце", "Еда");
    let howMuch = +prompt("Во сколько обойдется?", "20000");

    if(typeof(costs) === 'string' && typeof(costs) != null && typeof(howMuch) != null
        && costs != '' && howMuch != '' && costs.length < 50) {
            appData.expenses[costs] = howMuch;
        } else {
            i--;
        } 
    i++;
} while (i < 2) */


appData.moneyPerDay = (appData.budget / 30).toFixed(2);
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}   


