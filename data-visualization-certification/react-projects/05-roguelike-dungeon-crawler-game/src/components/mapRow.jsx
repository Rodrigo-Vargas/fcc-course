import React, { Component } from 'react';
import SquareMeter from './squareMeter';

class MapRow extends Component {
   render() {
      var squareMeters = this.props.squareMeters.map((squareMeter, i) =>
         <SquareMeter status={squareMeter.status} cssClass={squareMeter.cssClass } key={i} />
      ) 

      return (
         <tr>
            { squareMeters}
         </tr>
      );
   }
}

export default MapRow;