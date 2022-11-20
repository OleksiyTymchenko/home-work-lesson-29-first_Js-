/*==================== first_task ================================= */
let radius = prompt("Введіть радіус кола");
let circuleSquare = 3.14 * (radius * radius);
alert("Площа такої окружності -" + circuleSquare);
/*==================== second_task ================================= */
let distance = prompt("Відстань між двома містами?");
let roarTime = prompt(
  "За скільки часу, ви, плануєте туди дістатися?введіть число в годинах"
);
let speed = (distance * 60) / (roarTime * 60);
alert(
  "Щоб встигнути вчасно необхідно рухатися зі швидкістю -" +
    " " +
    speed +
    " " +
    "км/год"
);
/*========================== third_task ===================================== */
let number = prompt("Ведіть суму в доларах");
let dollar_exchange_rate = 40.5;
let euro_exchange_rate = 41.2;
let sumOfMoney = (number * dollar_exchange_rate) / euro_exchange_rate;
alert(sumOfMoney + " " + "Євро");
