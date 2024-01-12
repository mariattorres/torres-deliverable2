
let name = prompt("Welcome to GC Mini Golf! What is your name?");
console.log(`User Name: ${name}`);

let par ;

let numberHoles = Number ( prompt(`Hi ${name}! Would you like to play 3 or 6 holes?`) );
console.log (`Number of holes: ${numberHoles}`);

if (numberHoles === 3) {
    par = 9
}

if (numberHoles === 6) {
    par = 18
}

let totalPutts = 0;


for (let i = 0; i < numberHoles; i++) {
    let putts = Number( 
        prompt(`How many putts for Hole ${i + 1}? (par 3)")`) );
    totalPutts += putts;
    console.log(`Hole ${i + 1}: ${putts} Putts`);
}

console.log (`Total Putts = ${totalPutts}`);

let userPar = totalPutts - par;
console.log(`Par: ${par}`);

if (userPar === 0) {
    console.log (`Good job, ${name}. Your total par was: 0.`);
} else if (userPar < 0) {
    console.log(`Great job, ${name}! Your total par was ${userPar}.`)
} else if (userPar > 0) {
    console.log(`Nice try, ${name}... Your total par was +${userPar}.`)
}
