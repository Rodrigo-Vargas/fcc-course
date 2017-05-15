import React, { Component } from 'react';

class SquareMeter extends Component {
   render() {
      var cssClass = this.props.cssClass;
      
      return (
         <td className={"sqm " + cssClass}>
         </td>
      );
   }
}

export default SquareMeter;