const main = () => {
  const allSpells = [
    {
      name: "Turn enemy into a newt",
      isEvil: true,
      energyReqired: 5.1
    },
    {
      name: "Conjure some gold for a local charity",
      isEvil: false,
      energyReqired: 2.99
    },
    {
      name: "Give a deaf person the ability to heal",
      isEvil: false,
      energyReqired: 12.2
    },
    {
      name: "Make yourself emperor of the universe",
      isEvil: true,
      energyReqired: 100.0
    },
    {
      name: "Convince your relatives your political views are correct",
      isEvil: false,
      energyReqired: 2921.5
    }
  ];

  const goodBook = {
    title: "Good Book",
    spells: allSpells.filter(as => as.isEvil === false)
  };
  const evilBook = {
    title: "Evil Book",
    spells: allSpells.filter(as => as.isEvil === true)
  };

  const displaySpellBook = (spellBook) => {
    console.log(spellBook.title);
    for (const spell of spellBook.spells) {
      console.log(spell.name);
    }
  }

  console.log("Do you believe in magic?");
  console.log("------------------------");
  displaySpellBook(goodBook)
  console.log("");
  displaySpellBook(evilBook)

}

main();