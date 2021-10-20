var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    noun_1: "table",
    verb_1: "dance",
    adjective_1: "small",
    noun_2: "nature",
    verb_2: "jump",
    adjective_2: "capable",
    name_: "Johnathan",
    noun_3: "apple",
  });
});

module.exports = router;

/*POST form data*/
router.post('/story', function(req, res) {
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory,
    color: generateRandomHexCode()
  });
})

function getStory(formData) {
  if (formData.storyChoice === "4") {
    let randomNumber = getRandomInt(3);

    if (randomNumber === 0) {
      return generateStory1(formData);

    } else if (randomNumber === 1) {
      return generateStory2(formData);

    } else if (randomNumber === 2) {
      return generateStory3(formData);

    } else {
      return randomNumber + " Invalid";
    }
  }

  if (formData.storyChoice === "1") {
    return generateStory1(formData);

  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);

  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);

  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `One faithful day, the ${capitalize(formData.adjective1)} ${capitalize(formData.noun1)} of Evil has struck the city of ${capitalize(formData.name)}topia. 
  It is up to the ${capitalize(formData.noun2)} of the ${capitalize(formData.noun3)} to defeat the 
  Dragon of ${capitalize(formData.adjective2)} using their power to ${formData.verb1} the Super ${capitalize(formData.verb1)}.`

}

function generateStory2(formData) {
  return `At the peak of the ${capitalize(formData.noun2)} mountains, is the lair of the Lord of ${capitalize(formData.adjective1)}. 
  Fortunately, a ${formData.adjective2} hero of ${capitalize(formData.noun1)}ville just so happens to encounter it. 
  Initially afraid, they found bravery from the power of ${capitalize(formData.verb1)} then ${formData.verb1} open the lair door. 
  At the throne, there was the ${capitalize(formData.adjective1)} Emperor. 
  All the hero has to do is ${formData.verb2} the ${capitalize(formData.noun3)} Sword, and save the world.`
}

function generateStory3(formData) {
  return `The cities of ${capitalize(formData.name)}topia and ${capitalize(formData.noun1)}ville are safe. 
  The ${formData.adjective1} lair in ${capitalize(formData.noun2)} mountains is no more. 
  Together, the power of the Super ${capitalize(formData.verb2)} and the ${capitalize(formData.noun3)} Sword will ${formData.verb1} a brand new world of ${formData.adjective2}.`
}

function capitalize(word) {
  let lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateRandomHexCode() {
  let hexCode = "#";
  while ( hexCode.length < 7 ) {
    hexCode += (Math.round(Math.random() * 15)).toString(16)
  }
  return hexCode
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}