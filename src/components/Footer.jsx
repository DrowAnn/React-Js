import { Component } from "react";
import Boton from "./Boton/index";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div style={{ backgroundColor: "#535bf2" }}>
        <h1>{this.props.titulo}</h1>
        <Boton>Pushme</Boton>
      </div>
    );
  }
}

export default Footer;
