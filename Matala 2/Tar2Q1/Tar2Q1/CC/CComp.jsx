import { Component } from "react"
import { render } from "react-dom"

export default class CComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorInit: "white"
        };
        
    }
    changeColor = (co) => {
        this.setState({ colorInit: co });
    }

    render() {
        return (
            <div id="div1" style={{
                border: 'solid black 2px',
                margin: 200, padding: 150,
                backgroundColor: this.state.colorInit
            }}>
              
                <button onClick={() => this.changeColor('blue')}>Blue</button> <br></br><br></br>
                <button onClick={() => this.changeColor('red')}>Red</button> <br></br><br></br>
                <button onClick={() => this.changeColor('pink')}>Pink</button> <br></br><br></br>
                <button onClick={() => this.changeColor('green')}>Green</button> <br></br><br></br>
                <button onClick={() => this.changeColor('black')}>Black</button> <br></br><br></br>
                <button onClick={() => this.changeColor('yellow')}>Yellow</button> <br></br><br></br>
                <button onClick={() => this.changeColor('orange')}>Orange</button> <br></br><br></br>
                <button onClick={() => this.changeColor('purple')}>Purple</button> <br></br><br></br>

            </div>
        );
    }
}
