/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
 const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  // Find horizontal, vertical (90degree rotate) and diagonal winners, drop out early as possible
  let winner = findRowWinner(board); 
  if (winner === null) {
    winner = findRowWinner(board[0].map((_, index) => board.map(row => row[index]).reverse()));// Vertical Winner (ROTATE!)
    if  (winner === null) {
      winner = findDiagonalWinner(board);
    }
  }
  return winner;
};

const findRowWinner = board => {
  let found = null;
  board.forEach(row => { 
    const across = row.join("").toUpperCase();
    if (across === "XXX" || across === "000" ) {
      found = across.substring(0,1).toString("");}
  });
  return found;
};

const findDiagonalWinner = board => {
    let found = null;
    for(let i=0;i<=2; i += 2) {
      if (board[0][i] !== null && board[1][1] !== null && board[2][i] !== null) {
        let diag = (board[0][i]+board[1][1]+board[2][i]).toString("").toUpperCase();
      if (diag === "XXX" || diag === "000") {
        found =  diag.substring(0,1).toString(""); }
      }
    }
    return found;
};

module.exports = {
  findWinner
};