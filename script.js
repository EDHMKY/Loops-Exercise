
for (i = 1; i <= 7; i++){
    console.log(i);
  }
 
  
  console.log("========");
  
  
  for (i = 5; i <= 25; i+=4){
    console.log(i);
  }
  
  console.log("========");
  
  
  const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
  ];
  
  
  for (items of wizards){
    console.log(items);
  }
  
  console.log("========");
  
  
  let harryPotterMovies = 0;
  
  
  while (harryPotterMovies < 8){
    harryPotterMovies++;
  }
  
  console.log(harryPotterMovies);
  
  console.log("===========");
  
  
  const hogwartsHouses = [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
  ];
  
  
  for (houses of hogwartsHouses){
    for (letters of houses){
      console.log(letters);
    }
  }
  
  console.log("=========");
  
  
  const quote = ["Yer", "A", "Wizard", "Harry"];
  
  
  let sentence = "";
  for (word of quote){
    
    sentence += `${word} `;
    console.log(sentence);
  }
  console.log(sentence.trim());
  
  