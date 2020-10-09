// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! W/Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import { connect } from "react-redux";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import { getSmurf } from "../actions/index";
import styled from 'styled-components';
import "./App.css";

const Wrapper = styled.div`
/* styles */
  margin: 40px;
  border: 10px white;
  background: papayawhip;
  color: #4f4f4f;
  `;

const Header = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: white;
  `;

class App extends Component(props) {

  const { getSmurf } = props; 
  
  return (
    <Wrapper>
      <Header>Welcome to Smurfville</Header>
      <SmurfList/>
      {props.smurfs.map((smurf) => (
        <Header key={smurfs.id}>{smurfs.name}</Header>
      ))}
      <SmurfForm/>
    </Wrapper>
        );
      }
    
      const mapStateToProps = (state) => {
        return {
          smurfs: state.smurfs
        };
      };

  export default connect(null, { getSmurf })(App);


      
