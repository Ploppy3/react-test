import { Component } from "react";
import { Link } from 'react-router-dom';

interface Properties {

}
interface State {

}

export class About extends Component {

  constructor(props: Properties) {
    super(props);
  }

  render() {
    return <div>
      <div>About...</div>
      <Link to="/home">Back to home!</Link>
    </div>;
  }

}