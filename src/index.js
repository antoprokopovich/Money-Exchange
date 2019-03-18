// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let obj = {};

  if (currency > 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  } 
  if (currency <= 0) {
    return {};
  } 
  if (currency >= 50) {
    obj.H = Math.floor(currency / 50);
    currency = currency - 50 * obj.H;  
  } 
  if (currency >= 25) {
    obj.Q = Math.floor(currency / 25);
    currency = currency - 25 * obj.Q;  
  } 
  if (currency >= 10) {
    obj.D = Math.floor(currency / 10);
    currency = currency - 10 * obj.D;  
  } 
  if (currency >= 5) {
    obj.N = Math.floor(currency / 5);
    currency = currency - 5 * obj.N;  
  } 
  if (currency >= 1) {
    obj.P = currency;  
  }

  return obj;
}
