import React, { Component } from "react";
import CenterTop from "./centerTop";
import Ingredients from "./ingredients";
export class CenterPanel extends Component {
  render() {
    return (
      <div className='centerPanel'>
        <CenterTop />
        <Ingredients />
      </div>
    );
  }
}

export default CenterPanel;
