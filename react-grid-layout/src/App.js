import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);
class App extends Component {
  static defaultProps = {
    className: "layout",
    isDraggable: false,
    isResizable: false,
    items: 9,
    cols: 2,
    rowHeight: 30,
    onLayoutChange: function() {}
  };

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateDOM() {
    return _.map(_.range(this.props.items), function(i) {
      return (
        <div key={i}>
          <span className="text">{i}</span>
        </div>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    let x, y = 0;
    let result = _.map(new Array(p.items), function(item, i) {
      console.log('i ', i);
      if(i % 2 === 0) {
        x += 1;
        console.log('x ', (i/2));
      } else {
        y += 1;
        console.log('y ', ((i/2) + 1));
      }
      return {
        x: (i% 2 === 0 ? i/2: i+1),
        y: (i% 2 !== 0 ? i+ 1: i),
        w: 5,
        h: 5,
        i: i.toString()
      };
      // var y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      // return {
      //   x: (i * 2) % 12,
      //   y: Math.floor(i / 6) * y,
      //   w: 2,
      //   h: y,
      //   i: i.toString()
      // };
    });
    return result;
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

export default App;
