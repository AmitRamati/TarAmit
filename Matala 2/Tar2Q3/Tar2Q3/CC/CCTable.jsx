import { render } from "react-dom";
import { Component } from "react"

export default class CCTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TableWidth: "100%"
        };
    };

    ChangeWidth = () => {
        this.setState({TableWidth:"50%"});
    }

    DoubleClick=()=>{
        this.setState({TableWidth:"100%"});
    }


    render() {
        return (
            <table onClick={() => this.ChangeWidth()} style={{ width: this.state.TableWidth }} onDoubleClick={()=>this.DoubleClick()}>
                <tr>
                    <td>Student</td>
                    <td>Grade</td>
                </tr>
                <tr>
                    <td>Amit</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Stav</td>
                    <td>100</td>
                </tr>
            </table>

        );
    }
}