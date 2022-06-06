import './App.css';
import tempfile from "./Screenshot.png";
let name="Irshad";

// function Todos({todo,styles}){
//   return <h1 style={styles}>{todo}</h1>;
// }
function App() {
  // let styles={ color:"teal",fontSize:"32px"};
  return (
    // <div>
    //   <h1 style={{color:"red",fontSize:"50px"}}>Hello World {55*5} {name}</h1>
    //   <input type="text" placeholder='Add Email' />
    //   <br/>
    //   <img src="/logo192.png" alt="" height={400} width={400} />
    //   <img src={tempfile} alt="" height={400} width={400} />
    // </div>
    <div>
      <h1>Mobile Operating System</h1>
      <ul>
        {["Android","Blackberry","iPhone","Windows Phone"].map((el)=>{
          return <li>{el}</li>
        }
        )}
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul>
        <li style={{listStyleType:"square"}}>Samsung</li>
        <li style={{listStyleType:"square"}}>HTC</li>
        <li>Micromax</li>
        <li style={{listStyleType:"circle"}}>Apple</li>
      </ul>
    </div>


  );
}

export {App};
