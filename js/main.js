function returnRandomNumberFromRange(firstNumber, lastNumber) {
  let min;
  let max;
  if (firstNumber < 0 || lastNumber < 0) {
    return 'Введены числа меньше 0';
  }
  if (firstNumber > lastNumber) {
    min = lastNumber;
    max = firstNumber;
  } else {
    min = firstNumber;
    max = lastNumber;
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
// Решение задания частично подсмотрено на сайте https://learn.javascript.ru/task/random-int-min-max

function checkCommentLength(text, maxLength) {
  return text.length > maxLength ? false : true;
}

returnRandomNumberFromRange(1, 2);
checkCommentLength('Игорь, спасибо, что проверяете мою домашюю работу!', 50);
