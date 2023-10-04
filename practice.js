class Event {
    constructor(name, attendees, startTime, locationName, address) {
      let guests = null;
      if (attendees.length === 1) {
        guests = attendees[0];
      } else if (attendees.length > 1) {
        guests = `${attendees.length} attendees`;
      }
  
      this.name = guests ? `${name} with ${guests}` : name;
      this.details = { startTime, attendees, groupSize: attendees.length };
      this.location = { name: locationName, address };
    }
  }
  
  const event = new Event("Dinner", ["Sal"], 1830, "Frankie's", "477 Rain St.");
  /*
    Event {
      name: 'Dinner with Sal',
      details: { startTime: 1830, attendees: [ 'Sal' ], groupSize: 1 },
      location: { name: "Frankie's", address: '477 Rain St.' }
    }
  */