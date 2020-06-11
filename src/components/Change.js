import React, { Component } from "react";
import "./change.css";
import { PEN, NIC, DIM, QUA, LOO, TOO} from "./Data";

export default class Change extends Component {


  state = {
    input: "",
    result: [],
  };

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleClick = (event) => {

    const money = this.state.input;

    console.log("money is " + money);


    this.setState({result: []});
    
    this.changeMoney(money, 0, 0, 0, 0, 0, 0, 200);


  };


  changeMoney = (money, pen, nic, dim, qua, loo, too, denom) => {
    if (money > 0) {

       if (denom === 200) {
         this.changeMoney(money - TOO, pen, nic, dim, qua, loo, too + 1, denom);
         denom = 100;
       }

        if (denom === 100) {
         this.changeMoney(money - LOO, pen, nic, dim, qua, loo + 1, too, denom);
         denom = 25;
       }


      if (denom === 25) {
        this.changeMoney(money - QUA, pen, nic, dim, qua + 1, loo, too, denom);
        denom = 10;
      }

      if (denom === 10) {
        this.changeMoney(money - DIM, pen, nic, dim + 1, qua, loo, too, denom);
        denom = 5;
      }

      if (denom === 5) {
        this.changeMoney(money - NIC, pen, nic + 1, dim, qua, loo, too, denom);
        denom = 1;
      }

      if (denom === 1) {
        this.changeMoney(money - PEN, pen + 1, nic, dim, qua, loo, too, denom);
      }
    } else if (money === 0) {
      
      this.updateState(pen, qua, nic, dim, loo, too);

    } else {
      return;
    }
  };

  updateState = (pen, qua, nic, dim, loo, too) => {

    const penny = ((pen > 1) ? "pennies":  "penny").toUpperCase();
    const quarter = ((qua > 1)? "quarters":  "quarter").toUpperCase() ;
    const nickel = ((nic > 1)? "nickels": "nickel").toUpperCase();
    const dime = ((dim > 1 )? "dimes" :"dime").toUpperCase();
    const loonie = ((loo > 1) ? "loonies": "loonie").toUpperCase();
    const toonie = ((too > 1) ? "toonies": "toonie").toUpperCase();



    this.setState(
      
        (state, props) => {


          return {
            result: [
              ...state.result,

              ` ${pen} ${penny} ,  ${nic} ${nickel},   ${dim} ${dime},  ${qua} ${quarter},  
                ${loo} ${loonie}, ${too} ${toonie}   `
            ],
          };

        }


    );

      

  };




  render() {
    return (
      <div className={"mainContent"}>
        {/*  Intro */}
        <div className={"intro"}>
          <h1 className={"ui center aligned icon header"}>
            <a href = {"/"}><i className={"money bill alternate outline icon linkIcon"}></i></a>
            Coin Change Machine!
          </h1>
          <i>Enter amount in cents:</i>
        </div>

        {/*  Input Data */}
        <div className={"input"}>
          <div
            className={"ui secondary input focus userData "}
          >
            <input
              type={"text"}
              onChange={this.handleInputChange}
              value={this.state.input}
              placeholder= {"Example: 10"}
            />
          </div>
        </div>
        {/*  Button */}
        <div
          className={"ui inverted secondary button"}
          onClick={this.handleClick}
        >
          Change!
        </div>

        {/*  Results */}
        <div className={"results"}>
          {this.state.result.map((element, index) => {
            return (
              <div className="ui inverted segment">
                <div className="ui inverted relaxed divided list">
                  <div className="item">
                    <div className="content">
                      <div className="ui header">{element}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
