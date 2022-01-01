
 

// document.getElementById("dj").addEventListener("mouseenter", newColor1) ; 
//     function newColor1(event) {
//         event.target.style.backgroundColor = "blue";
//         false
//     }



// document.getElementById("dj").addEventListener("mousedown", newColor2); 
//     function newColor2(event) {
//         event.target.style.backgroundColor = "red";
//         false
//     }


// document.getElementById("dj").addEventListener("mouseup", newColor3) ; 
//     function newColor3(event) {
//         event.target.style.backgroundColor = "yellow";
//         false
//     }

// document.getElementById("dj").addEventListener("dblclick", newColor4) ; 
//     function newColor4(event) {
//         event.target.style.backgroundColor = "green";
//         false
//     }

// document.getElementById("dj").addEventListener("wheel", newColor5) ; 
//     function newColor5(event) {
//         event.target.style.backgroundColor = "orange";
//         false
//     }


//     document.getElementById("dj").addEventListener("wheel", newColor5) ; 
//     function newColor6(event) {
//         event.target.style.backgroundColor = "orange";
//         false
//     }


// function tri(n) {
//     let total = 0
//     for(let i = 1; i <= n; i++) {
        
//         total+=i
//     }
//     console.log(total)
// }

// tri(5)  

// const num = [1,-2,-3,7,9,-8]

// let sum = 0;

// num.forEach (item => {
//     sum += item;
// })
// console.log(sum)

// const lett = ['a','b','a','z'] 

// let count = {}

// lett.forEach(item => {
//     if (count[item]) {
//         count[item] ++;
//     } else {
//         count[item] = 1;
//     }
// })

// console.log(count);


// const posIf = num.filter(function(value) {
//     if(value >= 0) {
//         return true
//     }
// })
// // const pos = num.filter(value => value >= 0 );
// console.log(posIf)

// const products = [
//     {
//         name: "pan",
//         price: 10
//     },
//     {
//         name: "salad",
//         price: 1
//     }
// ]

// products.sort((a,b) => {
//     return a.price - b.price;});

//     console.log(products)

// function order(a,b) {
//     return b.price - a.price; 
// }

// let uno = products.sort(order(a,b))

// function order(a,b) {
//     return b.price - a.price; 
// }

// console.log(uno)

// const num = [1,-2,-3,7,9,-8,40];

// const totalNum = num.reduce(sum);

// function sum(accumulator, value) {
//     return accumulator + value;
// }

// console.log(totalNum)



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

console.log(gridIllumination(5,[[0,0],[4,4]],[[1,1],[1,1]]))