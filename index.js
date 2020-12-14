function singTwelveDaysOfChristmas(){
  const days  = [
    "first", "second", "third", "fourth", "fifth", "sixth", 
    "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"
  ];
  
  const gifts = [
    "Twelve drummers drumming,\n",
    "Eleven pipers piping,\n",
    "Ten lords a-leaping,\n", 
    "Nine ladies dancing,\n", 
    "Eight maids a-milking,\n", 
    "Seven swans a-swimming,\n", 
    "Six geese a-laying,\n", 
    "Five golden rings,\n", 
    "Four calling birds,\n",
    "Three French hens,\n",
    "Two turtle doves\n",
    "% partridge in a pear tree.\n\n"
  ];
  
  const getGifts = day => gifts.slice(11-day).join("").replace("%", day ? "And a": "A");
  
  return days.reduce((song, day, i) => {
    return song + 
      "On the " + day + " day of Christmas\n" + 
      "My true love gave to me:\n" + getGifts(i);
  }, "").trim();
};

console.log(singTwelveDaysOfChristmas());
