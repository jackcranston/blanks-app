// JavaScript Document

/* word types */


var male = ['a male name', 'John, Iron Man, Bob Marley'];
var female = ['a female name', 'Emily, Cinderella, Margaret Thatcher'];

var activity = ['an activity', 'fishing, sailing, golf'];
var adjective = ['a describing word', 'giant, flexible, annoying'];
var animal = ['an animal', 'cat, ant, human'];
var animals = ['animals', 'cats, ants, humans'];
var attribute = ['a personal attribute', 'pretty, old, intelligent'];
var bodyfluid = ['a bodily fluid', 'blood, sweat, tears'];
var bodypart = ['a body part', 'arm, heart, nose']
var bodyparts = ['body parts (plural)', 'arms, hearts, noses'];
var clothing = ['an item of clothing', 'socks, jeans, t-shirt'];
var container = ['a container', 'box, case, chest'];
var destination = ['a destination', 'chip shop, beach, supermarket'];
var emotion = ['an emotion', 'happy, sad, heartbroken'];
var events = ['an event', 'charity ball, concert, pub crawl'];
var fate = ['a fate', 'die, burn, thrive'];
var job = ['a job', 'nurse, postman, receptionist'];
var label = ['a persons label', 'chav, hero, idiot'];
var liquid = ['a liquid', 'water, coke, oil'];
var movementPast = ['movement (past tense)', 'walked, flew, drifted'];
var movementPresent = ['movement (present tense)', 'walking, flying, floating'];
var noun = ['a noun', 'dog, man, coffee, chair'];
var nouns = ['plural noun', 'dogs, women, chairs'];
var number = ['a number', '5, 21, 594'];
var object = ['an object', 'pencil, cabbage, rock'];
var objects = ['objects (plural)', 'tables, eggs, pebbles'];
var rand = ['wildcard (anything goes)', '?'];
var rands = ['plural wildcard (anything goes)', '?'];
var reactionPast = ['a reaction (past tense)', 'cried, cheered, booed'];
var shop = ['a type of shop', 'chip, bike, retail'];
var speechPast = ['speech (past tense)', 'said, yelled, roared'];
var town = ['a village, town or city name', 'London, Paris, Farmville'];
var transport = ['mode of transport', 'flying, canoeing, driving'];
var vehicle = ['a vehicle', 'car, bus, rowing boat'];
var verb = ['an action', 'scare, punch, kiss'];
var verbPast = ['an action (past tense)', 'scared, smashed, kissed'];
var verbPresent = ['an action (present tense)', 'scares, smashes, kisses'];


/* categories */

const categories =
    [{
      title: 'Starter Pack',
      owned: 1
    }, {
      title: 'Pack One',
      owned: 0
    }];

/* stories */


const stories =
    [{
      title: 'A bad day',
      text: `NAME realised he had run out of XXX, so decided to walk to the shop before 
            going to his job as a XXX. Unfortunately, he had forgotten his XXX, and 
            didn\'t realise until he had trod in a XXX pile of XXX XXX whilst XXX down 
            the road. He had no choice but to carry on to the local XXX shop, where the 
            XXX shopkeeper handed him a XXX to clean his XXX.`,
      words: [objects, job, object, adjective, animal, bodyfluid, movementPresent, shop, adjective, object, clothing],
      names: [male],
      category: 0
    },{
      title: 'The Delivery',
      text: `On a bright, XXX morning, NAME opened his front door to find someone 
            had left a XXX on his doorstep during the night. He frantically opened it to find that
            inside was a XXX and attached was a note reading \"this used to be your fathers, use it 
            to clean your XXX\". The boy felt very XXX, and decided to ignore the note, 
            choosing instead to use the object as a case for his XXX.`,
      words: [adjective, object, container, object, object, emotion, object],
      names: [male],
      category: 0
    },{
      title: 'Short stories',
      text: `Every day, NAME uses her XXX mind to create short stories for her local XXX. 
            She drinks lots of XXX so that she can think of the XXX stories to tell the local 
            children who sadly do not have XXX. Unfortunately for them, she isn\'t a very XXX 
            person, as she also likes to try and XXX the children by showing them her XXX.`,
      words: [adjective, events, liquid, adjective, nouns, attribute, verb, noun],
      names: [female],
      category: 0
    },{
      title: 'Pensioners Secret',
      text: `In a small, XXX town called XXX, an XXX lady lives in a creepy cottage covered 
            in XXX. She can often be seen standing at her bedroom window, looking out at the 
            locals whilst wearing her dirty XXX and holding her XXX. Unbeknownst to the locals, 
            this old and XXX lady does take some pride in her appearance, and once a year takes 
            a holiday via XXX to the XXX where she takes part in a competition for best dressed XXX.`,
      words: [adjective, town, attribute, objects, clothing, object, attribute, vehicle, destination, noun],
      names: [],
      category: 0
    },{
      title: 'Muggers!',
      text: `On his way home late at night, NAME encountered some scary looking XXX. He 
            cowered at the size of their XXX which looked like XXX against the backdrop. As he 
            XXX past, the XXX one of them squared up to him and XXX, “Give me all your XXX”. 
            The boy yelped in terror as he frantically reached into his pocket and clasped the one 
            thing he knew would protect him - his trusty XXX.`,
      words: [animals, bodyparts, objects, movementPast, adjective, speechPast, objects, object],
      names: [male],
      category: 0
    },{
      title: 'Not all heroes wear capes',
      text: `It was a day like any other on the 50th floor of the office until a XXX noticed 
            that one of the window cleaners was dangling by his fingertips from his platform 
            without a safety harness. No one knew what had happened but one thing was for sure, 
            he sure was XXX. <br><br>There was much commotion in the building at this point as 
            people frantically tried to figure a way to save the XXX man, but then they saw it. 
            Was it a bird? Was it a plane? No it was NAME the XXX superhero coming to save the day. 
            <br><br>He XXX in and XXX the window cleaner from the platform and they floated 
            gracefully to the ground below, the man XXX his XXX onto the sidewalk as the onlooking 
            crowd XXX, what a XXX.`,
      words: [job, adjective, adjective, adjective, movementPast, verbPast, verbPast, bodypart, reactionPast, label],
      names: [male],
      category: 0
    },{
      title: 'A day in the sun',
      text: `It was the perfect day for XXX, the sun was shining - not a cloud in the sky. NAME 
            and NAME had just started when they realised that neither of them had brought any XXX, they 
            were surely going to XXX! Because of this they spent the rest of the day hiding under a friend's 
            XXX which was just big enough to shelter them from the intense midday heat, whilst taking 
            sips of XXX from Barry’s XXX to stay hydrated.`,
      words: [activity, noun, fate, noun, liquid, container],
      names: [male, female],
      category: 0
    },{
      title: 'Life\'s a beach',
      text: `The beach was XXX on a XXX bank holiday monday, this didn’t bother NAME who was more 
            concerned about the XXX inflatable XXX that someone had placed right in the way of 
            his perfect view of the vast XXX sea. “That’s it” he XXX as he XXX to his feet, before 
            strolling over and proceeding to strangle the lifeless bit of plastic until every last bit 
            of air had been removed. The owner, a XXX XXX, burst into XXX which didn’t seem to phase 
            the man who simply returned to his spot, cracked open a XXX and beamed at the much improved 
            view ahead of him.`,
      words: [adjective, adjective, adjective, noun, adjective, speechPast, movementPast, adjective, animal, liquid, noun],
      names: [male],
      category: 0
    },{
      title: 'TEST',
      text: 'TEST XXX NAME',
      words: [noun],
      names: [male],
      category: 1
    }];


/* how to play */

var tutorial =  '<h2 class="title">How to play</h2>'+
                '<strong>Gather your friends</strong>'+
                '<p>This game is best played in groups.</p>'+

                '<strong>Pick the story</strong>'+
                '<p>Select a story you want to play.</p>'+

                '<strong>Use words</strong>'+
                '<p>Read the word type and enter a word of your choice without letting anyone know. Once entered, click the next button and then pass your device to the next player, continue until a player gets to the generate button.</p>'+

                '<strong>Generate your story</strong>'+
                '<p>The next player clicks the generate button and reads the story out loud.</p>';


/* Achievements */

const achs = 
  [{
  title: 'We <3 you',
  description: 'Launch the BLANKS app for the first time',
  kudos: 25
  }];