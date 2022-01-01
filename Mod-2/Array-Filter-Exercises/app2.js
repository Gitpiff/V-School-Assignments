// const array = [1,2,3,4,5,6,7,8,9,10,11,12];
// let a = 0;
// let idx = 0;
// while (a < 7) {
//     if (array[idx] % 2 === 0) {
//         a += array[idx]
//     }
//     idx += 1;
// }

// console.log(a + ", " + idx)


// class Sample {
//     constructor() {
//         this.a = 1;
//         this.b = 1;
//     }

//     functionOne(a) {
//         this.b = this.b + a;
//     }

//     functionTwo(b) {
//         for (let i = 0; i < this.b; i ++) {
//             this.a += b;
//         }
//     }

//     print() {
//         console.log(this.a + ", " + this.b);
//     }
// }

// const s = new Sample();
// s.functionOne(5);
// s.functionTwo(4);
// s.functionOne(0);
// s.print();


// function func(a) {
//     if (a <= 0) {
//         return 1;
//     }
//     if (a >= 14) {
//         return 0;
//     }
//     if (a % 2 === 0) {
//         return a;
//     } else {
//         return (func(a-1) + func(a-2))
//     }
// }

// console.log(func(8))


// function titleCase(str) {
//     let strSplit = str.toLowerCase().split(" ")

//     for (i = 0; i < strSplit.length ; i ++) {
//         strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1);
//     }


//     return strSplit
//   }

// console.log(titleCase(`I’m a little tea pot`))


// import React from "react";

// class ClickCounter extends React.Component {
//   constructor() {
//     super();
//     this.state = { count: 0 };
//   }

//   click(event) {
//     event.preventDefault();
//     this.setState({count: this.setState.count + 1})
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.click.bind(this)}>Click Me!!</button>
//         <span>{this.state.count}</span>
//       </div>
//     )
//   }
// }

// export default ClickCounter;



export default function App() {
    const [ colors, setColors] = React.useState(["white", "white", "white", "white"])

    handleClick() {

      if(colors[0] === "white"){
          setColors({colors: ["black","white","white","white"]})
      }
      else if(this.state.colors[0] === "black"){
        setColors({colors: ["white","black","black","black"]})
      }
  }

  render() {

    return (
        <div>
            <h1>DJ React</h1>
            <div className="container">
                <div className="box" style={{background: this.state.colors[0]}} ></div>
                <div className="box" style={{background: this.state.colors[1]}}></div>
                <div className="box" style={{background: this.state.colors[2]}}></div>
                <div className="box" style={{background: this.state.colors[3]}}></div>

            </div>
            <button onClick={handleClick}>Change Colors</button>


        </div>
    )
  }
}
