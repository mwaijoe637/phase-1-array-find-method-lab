function superbowlWin(record) {
  
  const winningYearObj = record.find(obj => obj.result === "W");
  
  if (winningYearObj) {
      return winningYearObj.year;
  } else {
      
      return undefined;
  }
}