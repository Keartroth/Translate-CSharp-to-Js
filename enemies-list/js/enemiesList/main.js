const main = () => {
  console.log("My Enemies List!");
  console.log("----------------");

  const enemies = [
    {
      FirstName: "Joshua",
      LastName: "Flowers",
      Offenses: {
        firstOffense: "Being a jerk to me in elementary school",
        secondOffense: "Not being nice to me in elementary school"
      },
      IsReallyHated: true
    },
    {
      FirstName: "Darth",
      LastName: "Vader",
      Offenses: {
        firstOffense: "Cut off Luke's hand",
        secondOffense: "Murdered all those kids",
        ThirdOffense: "Unkind management practices"
      },
      IsReallyHated: false
    },
    {
      FirstName: "Betty",
      LastName: "Rudelady",
      Offenses: {
        firstOffense: "Phone calls in the theater",
        secondOffense: "Phone calls on the bus",
        thirdOffense: "Phone calls in line at the grocery store",
        fourthOffense: "Poor conversationalist"
      },
      IsReallyHated: true
    },
    {
      FirstName: "Leon",
      LastName: "Peck",
      Offenses: {
        firstOffense: "Keeps giving me a hotplate"
      },
      IsReallyHated: false
    }
  ]

  for (const myEnemy of enemies) {
    if (myEnemy.IsReallyHated) {
      console.log(`${myEnemy.FirstName} ${myEnemy.LastName} (Really, really dislike!)`);
    }
    else {
      console.log(`${myEnemy.FirstName} ${myEnemy.LastName}`);
    }
  }
}

main();