class Event {
    constructor(name, startTime, endTime, location) {
      this.name = name;
      this.startTime = startTime;
      this.endTime = endTime;
      this.location = location;
    }
    toString() {
        const { name, startTime, endTime, location } = this;
        return `${startTime} - ${endTime}: ${name} at ${location}`;
      }
  }

  const lunchEvent = new Event("Lunch", "12:00", "13:00", "Chipotle");
console.log(lunchEvent.toString()); // > 12:00 - 13:00: Lunch at Chipotle