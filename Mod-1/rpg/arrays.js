
// SETS

// const names = new Set();

// names.add("Chachi");
// names.add("Whale");
// names.add("Pif");
// names.add("Pif");
// names.add(77);

// for (const el of names) {
//     console.log(el);
// }

// // To retrieve values

// console.log(names.has("Whale"))

// // To delete values

// names.delete("Pif")



//OBJECTS

// const piglet = {

//     name: "Whale",
//     age: " 5",
//     greet() {console.log(`Hola, soy ${this.name}`)}

// }

// // To add properties

// piglet.hobbies = "Watch Blippi";

// //To delete properties

// delete(piglet.age);

// //To access the function

// piglet.greet()

// console.log(piglet)



//MAPS

// const resultDate = new Map();

// resultDate.set('average', 7.7);
// resultDate.set('last Res', null);

// const germany = {name: "Germany", population: 77}

// resultDate.set(germany, 400);

// // Print all of the elements of the set

// for(const el of resultDate) {
//     console.log(el)
// }

// var canVisitAllRooms = function(rooms) {
//     let seen = new Set();
//     seen.add(0);
//     return dfs(seen,0,rooms)
// };

// const dfs = (seen, index, rooms)=>{
//     if(seen.size === rooms.length) return true;
    
//     let nextRooms = rooms[index];
//     let res = false;
//     for(let c = 0; c < nextRooms.length; c++){
//         let room = nextRooms[c];
//         if(!seen.has(room)){
//             seen.add(room);
//             res = dfs(seen, room, rooms);
//             if(res) break;
//         }
//     }
//     return res;
// }

// console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]))


const gridIllumination = (N, lamps, queries) => {
    const res = [];
    const lampMap = {};
    const coord = { row: {}, col: {}, diag1: {}, diag2: {} };

    // helper function perfoming addition/subtraction of coordinates through callback
    const editCoord = (r, c, cb) => {
        const { row, col, diag1, diag2 } = coord;
        cb(row, r);
        cb(col, c);
        cb(diag1, r - c);
        cb(diag2, r + c);
    }

    const isIlluminated = ([r, c]) =>
        +!!(coord.row[r] || coord.col[c] || coord.diag1[r - c] || coord.diag2[r + c]);

    // turn off lamps in 3x3 query area
    const turnOff = ([r, c]) => {
        for (let i = 0; i < 9; i++) {
            // add offset to r and c to test each cell
            const or = r + Math.floor(i / 3) - 1;
            const oc = c + (i % 3) - 1;
            if (lampMap[`${or}-${oc}`]) {
                editCoord(or, oc, (el, p) => el[p]--);
                delete lampMap[`${or}-${oc}`];
            }
        }
    }

    // turn on lamps
    lamps.forEach(([r, c]) => {
        editCoord(r, c, (el, p) => el[p] = (el[p] || 0) + 1);
        lampMap[`${r}-${c}`] = true;
    })

    // process queries and turn off lamps
    queries.forEach(query => {
        res.push(isIlluminated(query));
        turnOff(query);
    });

    return res;
};

console.log(gridIllumination(8, [[4,3], [4,4]],[[3,4], [7,6]]))