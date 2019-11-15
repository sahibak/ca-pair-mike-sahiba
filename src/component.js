import React from "react";
import "./style.scss";

export default class Game extends React.Component {
   state = {
       values: [,,,,,,,,],
       counter: 0,
       nextStep: true,
       result: false
   } 
  

   submitFunc(event,n){ 
        event.preventDefault();    
        let list = this.state.values;
        let display = this.state.nextStep?"X":"O";
        list[n] = display;
           this.setState({
               counter: this.state.counter + 1,
               nextStep: !this.state.nextStep,
               values: list
           })
       }

    displayFunc(i){
    let arrayOfResponses = this.state.values;
        if (!arrayOfResponses[i]){
            return "default-class"
        } else if (arrayOfResponses[i] == "X") {
            return "X-class"
        } else {
            return "class-O"
        }
    }
    
    componentDidUpdate(_,prevState){
        let winningSolutions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        let listOfValues = this.state.values;
        for (let i=0; i < winningSolutions.length; i++) {
            const [a,b,c] = winningSolutions[i];
            let valmatch1 = (listOfValues[a] == listOfValues[b] && listOfValues[a] && listOfValues[b])
            let valmatch2 = (listOfValues[b] == listOfValues[c] && listOfValues[b] && listOfValues[c])
            let result = (valmatch1 == valmatch2 && valmatch1 && valmatch2);
            if (result) {
                setTimeout(()=> {
                    alert("We have a WINNER!");
                    if(prevState.result == this.state.result) {
                        this.setState({
                            result: true
                        })
                    }
                },200);
            } 
            else if(this.state.counter == 9 ){
                setTimeout(()=>alert("It is a DRAW!"),200);
                return
            }
        }
    }

    render(){
        if(this.state.result === true){
            return(
                <>
                <iframe width="0" height="0" src="https://www.youtube.com/embed/skVg5FlVKS0?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h1 className="title">Tick-Tack-Toe</h1>
                <video className="video" width="500" height="500" autoPlay muted loop>
                    <source className="video" src="https://media.giphy.com/media/idFxmiV2dayJEqzXaW/giphy.mp4" type="video/mp4"></source>
                </video>
                </>
            )
        }
        return(
            <>
            <h1 className="title">Tick-Tack-Toe</h1>
           <div></div>
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
