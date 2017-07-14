/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand) {

  let sum = 0;

  for (let i = 0; i < hand.length; i++) {

    if (isNaN(hand[i])) {
      if (hand[i] != 'A' && 'K' && 'Q' && 'J' ) {
        sum = sum + 10;
      }
    } else {
      sum = sum + +hand[i];
    }

  }
  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === 'A') {
      if (sum > 11) {
        sum = sum + 1;
      } else {
        sum += 11;
      }
    }
  }
  console.log(sum);
  return sum;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
