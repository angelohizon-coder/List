// exports the anonymous function with the name of getDay to another JavaScript file
exports.getDay = function(){
  let date = new Date();
  // property and value for the function toLocalDateString
  // , year: 'numeric', month: 'long', day: 'numeric'
  // you can add the properties given above
  let options = { weekday: 'long'};
  // to toLocalDateString is the funciton used from the Date method
  return date.toLocaleDateString('en-us', options);
}
