var quotes = [
"Clothes make the man. Naked people have little or no influence in society. —Mark Twain" ,
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey" ,
"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss"  ,
"Keep smiling, because life is a beautiful thing and there's so much to smile about. -Marilyn Monroe" ,
"It does not matter how slowly you go as long as you do not stop. -Confucius" , 
"A black cat crossing your path signifies that the animal is going somewhere. -Groucho Marx" ,
"It’s always darkest before the dawn. So if you’re going to steal your neighbor’s newspaper, that’s the time to do it. -Navjot Singh Sidhu"
] 

function getquote() {
var randomNumber=Math.floor(Math.random() * quotes.length)
document.getElementById('Newquotesection').innerHTML=quotes[randomNumber];

}