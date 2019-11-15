import React from "react";
import "./style.scss";

export default class Game extends React.Component {
   state = {
       values: [,,,,,,,,],
       counter: 0,
       nextStep: true
   } 
  

   submitFunc(event,n){ 
       event.preventDefault();    
        let list = this.state.values;
        let display = this.state.nextStep?"X":"O";
        console.log(display);
        list[n] = display;
        let newlist= list
        console.log("original",list);
        console.log("newList",newlist)
           this.setState({
               counter: this.state.counter + 1,
               nextStep: !this.state.nextStep,
               values: newlist
           })
           console.log(this.state)
       }

       displayFunc(i){
           let arrayOfResponses = this.state.values;
           if (!arrayOfResponses[i]){
                return "default-class"
           } else if (arrayOfResponses[i] == "X") {
                return "X-class"
            } else {
                return "class-O"
            }}



    render(){
        return(
            <>
            <div className="game">
                <div className="box-row">
                    <button onClick={(e)=> this.submitFunc(e, 0)} className = {this.displayFunc(0)}
                    ></button>
                    <button onClick={(e)=> this.submitFunc(e, 1)} className = {this.displayFunc(1)}
                    ></button>
                    <button name = "Q1" onClick={(e)=> this.submitFunc(e, 2)} className = {this.displayFunc(2)}
                    ></button>
                </div>
                <div className="box-row">
                    <button onClick={(e)=> this.submitFunc(e, 3)} className = {this.displayFunc(3)}
                    ></button>
                    <button onClick={(e)=> this.submitFunc(e, 4)} className = {this.displayFunc(4)}
                    ></button>
                    <button name = "Q1" onClick={(e)=> this.submitFunc(e, 5)} className = {this.displayFunc(5)}
                    ></button>
                </div>
                <div className="box-row">
                    <button onClick={(e)=> this.submitFunc(e, 6)} className = {this.displayFunc(6)}
                    ></button>
                    <button onClick={(e)=> this.submitFunc(e, 7)} className = {this.displayFunc(7)}
                    ></button>
                    <button name = "Q1" onClick={(e)=> this.submitFunc(e, 8)} className = {this.displayFunc(8)}
                    ></button>
                </div>
            </div>
          </>
        )

    }
}
