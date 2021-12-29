const gameEvents = new Map([
    [17,'Goal'],
    [36,'Substitution'],
    [47,'Goal'],
    [61,'Substitution'],
    [64,'Yellow card'],
    [69,'Red card'],
    [70,'Substitution'],
    [72,'Substitution'],
    [76,'Goal'],
    [80,'Goal'],
    [92,'Yellow card'],
]);

// console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(`An event happend, on average, every  ${gameEvents.size/90}9 minutes`);

const time = [...gameEvents.keys()].pop();
console.log(`${time/gameEvents.size}`);

for (const[min,event] of gameEvents){
    const half = min<=45?'FIRST':'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}