

var quotes = [
'You\'ll be the prince and I\'ll be the princess.',
'Don\’t treat me like some situation that needs to be handled; I\’m fine with my spite and my tears, and my beers and my candles', 
'No amount of freedom gets you clean / I\’ve still got you all over me',
'Your faithless love\'s the only hoax I believe in',
'You understand now why they lost their minds and fought the wars; And why I\'ve spent my whole life trying to put it in words.',
'You play stupid games, you win stupid prizes',
'Sorry, I can\'t see facts through all of my fury',
'Clover blooms in the fields; Spring breaks loose, the time is near',
'Did you hear about the girl who lives in delusion? Breakups happen every day, you don\'t have to lose it She\'s still 23 inside her fantasy',
'I had a marvellous time ruining everything',
'Please don\'t ever become a stranger whose laugh I could recognize anywhere',
'You drew stars around my scars but now I’m bleeding',
'Barefoot in the kitchen  Sacred new beginnings  That became my religion, listen',
'I could build a castle out of all the bricks they threw at me',
'My castle crumbled overnight / I brought a knife to a gunfight They took the crown but it\'s alright',
'He\'s got my past frozen behind glass / But I\'ve got me',
'Cold was the steel of my axe to grind for the boys who broke my heart Now I send their babies presents',
'I once believed love would be burning red / But it\'s golden',
'I think I\'ve seen this film before / And I didn\'t like the ending You\'re not my homeland anymore So what am I defending now?',
'I want auroras and sad prose / I want to watch wisteria grow right over my bare feet / ‘Cause I haven\’t moved in years / And I want you right here',
'I snuck in through the garden gate / Every night that summer just to seal my fate',
'I never grew up, it\'s getting so old',
'You booked the night train for a reason / So you could sit there in this hurt',
'Take the words for what they are: A dwindling, mercurial high / A drug that only worked the first few hundred times',
'I made you my temple, my mural, my sky / Now I\'m begging for footnotes in the story of your life',
'I knew you dancing in your Levis, drunk under a streetlight',
'That night we couldn\'t quite forget / When we decided to move the furniture so we could dance / Baby, like we stood a chance',
'And if I get burned, at least we were electrified',
'Should\'ve kept every grocery store receipt \'Cause every scrap of you would be taken from me',
'I didn\'t have it in myself to go with grace \'Cause when I\'d fight, you used to tell me I was brave',
'The monsters turned out to be just trees / When the sun came up you were looking at me',
'With every guitar string scar on my hand / I take this magnetic force of a man to be my lover',
'And you wanna scream, ‘don\'t call me kid, don\'t call me baby / Look at this godforsaken mess that you made me',
'Time won\'t fly, it\'s like I\'m paralyzed by it / I\'d like to be my old self again, but I\'m still trying to find it / After plaid shirt days and nights when you made me your own / Now you mail back my things and I walk home alone',
'They told me all of my cages were mental / So I got wasted like all my potential',
'But she wears short skirts / I wear T-shirts / She\'s cheer captain / And I\'m on the bleachers',
'I\'m still a believer but I don\'t know why / I\'ve never been a natural / All I do is try, try, try',
'You said it was a great love, one for the ages / But if the story\’s over, why am I still writing pages?',
'You can plan for a change in weather and time / But I never planned on you changing your mind',
'You call me up again just to break me like a promise / So casually cruel in the name of being honest',
'I’m begging for you to take my hand, wreck my plans, that\'s my man',
'Life was a willow and it bent right to your wind',
'Takes one to know one, you\'re a cowboy like me',
'Forever is the sweetest con',
'And my waves meet your shore, ever and evermore',
'We never painted by the numbers, baby. But we were making it count',
'And when I felt like I was an old cardigan under someone\'s bed, you put me on and said I was your favourite',
'Love you to the Moon and to Saturn',
'You showed me colours you know I can\'t see with anyone else',
'And isn\'t it just so pretty to think all along there was some invisible string tying you to me?',
'All these people think love\'s for show but I would die for you in secret',
'And I ain\'t gotta tell him, I think he knows',
'Have I known you twenty seconds or twenty years?',
'All\'s well that ends well to end up with you',
'I like shiny things, but I\'d marry you with paper rings',
'Without all the exes, fights, and flaws we wouldn\'t be standing here so tall',
'Darling, I fancy you',
'I don\'t wanna look at anything else now that I saw you',
'For you, I would cross the line. I would waste my time. I would lose my mind',
'Some boys are tryin\ too hard, he don\'t try at all though',
'Say my name and everything just stops, I don\'t want you like a best friend',
'And all at once, you are the one I have been waiting for',
'I want you for worse or for better, I would wait forever and ever',
'He\'s so tall and handsome as hell, he\'s so bad, but he does it so well',
'You got that James Dean daydream look in your eye',
'The rest of the world was black and white but we were in screaming colour',
'I just like hanging out with you, all the time',
'Your name, forever the name on my lips',
'I’m captivated by you, baby, like a firework show',
'You are the best thing that\'s ever been mine',
'You\'ve got a smile that could light up this whole town',
]

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}

