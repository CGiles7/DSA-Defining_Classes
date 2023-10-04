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
      isBefore(other) {
        return this.getEndHours() < other.getStartHours() || (
            this.getEndHours() === other.getStartHours() &&
            this.getEndMinutes() <= other.getStartMinutes()
          );
      }
      get startHours() {
            return Number(this.startTime.split(":")[0]);
          }
          get startMinutes() {
            return Number(this.startTime.split(":")[1]);
         }
          get endHours() {
            return Number(this.endTime.split(":")[0]);
          }
          get endMinutes() {
            return Number(this.endTime.split(":")[1]);
          }
  }
const lunchEvent = new Event("Lunch", "12:00", "13:00", "Chipotle");
const meeting = new Event("Meeting", "14:00", "15:30", "Conference room");


console.log(lunchEvent.getStartHours()); // > 12
console.log(lunchEvent.getStartMinutes()); // > 0

console.log(lunchEvent.getEndHours()); // > 13
console.log(lunchEvent.getEndMinutes()); // > 0


console.log(lunchEvent.isBefore(meeting)); //> true
console.log(meeting.isBefore(lunchEvent)); // > false
console.log(lunchEvent.isBefore(lunchEvent)); // > false