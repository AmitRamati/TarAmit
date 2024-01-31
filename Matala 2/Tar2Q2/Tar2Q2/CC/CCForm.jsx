import { Component } from "react";
import FCParg from "./FCPargrph/FCParg";

export default class CCForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Message: "",
            Grade: 0,
            PassMessage: "",
            ShowP: false
        };

    }
    OnMouseMes = (x) => {

        let newMess = `You must fill ${x}`;
        this.setState({ Message: newMess });
        console.log("Please fill " + x);

    }

    MouseLeaveMes = () => {
        this.setState({ Message: " " });
    }

    onChangeFunc = (inp) => {
        this.MouseLeaveMes();
        console.log(inp.target.value);
        this.setState({ Grade: Number(inp.target.value) });
        this.gr = Number(inp.target.value);
        if (this.gr > 555) {
            this.setState({ PassMessage: "You can be accepted for studies", ShowP: true })
            console.log(this.state.PassMessage);
        }
        else if(this.gr!=" ") {
            this.setState({ PassMessage: "You can't be accepted for studies", ShowP: true })
            console.log(this.state.PassMessage);
        }
    }


    render() {
        return (
            <div style={{
                border: 'solid black 2px',
                margin: 20, padding: 15
            }}>

                Family name: <input type="text" id="Family Name" onFocus={() => this.OnMouseMes("Family Name")} onBlur={() => this.MouseLeaveMes()}></input><br></br><br></br>
                First name: <input type="text" onFocus={() => this.OnMouseMes("First Name")} onBlur={() => this.MouseLeaveMes()} ></input><br></br><br></br>
                Grade: <input type="number" onFocus={() => this.OnMouseMes("Grade")} onBlur={this.onChangeFunc}></input><br></br><br></br>

                {this.state.ShowP && (
                    <p>{this.state.PassMessage}</p>
                )}
                <FCParg message={this.state.Message}></FCParg>
            </div>
        );
    }
}