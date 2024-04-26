import React, { Component } from 'react';
import DataStreamer, { ServerRespond } from './DataStreamer';
import Graph from './Graph';
import './App.css';

interface IState {
  data: ServerRespond[],
  showGraph: boolean,
  intervalId: NodeJS.Timeout | null // Define type for interval
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
      showGraph: false,
      intervalId: null // Initialize intervalId to null
    };
  }

  renderGraph() {
    if (this.state.showGraph) {
      return (<Graph data={this.state.data}/>)
    }
  }

  getDataFromServer() {
    let x = 0;
    const interval = setInterval(() => {
      DataStreamer.getData((serverResponds: ServerRespond[]) => {
        this.setState({
          data: serverResponds,
          showGraph: true,
        });
      });
      x++;
      if (x > 1000) {
        clearInterval(interval);
        this.setState({ intervalId: null }); // Set intervalId to null when clearInterval is called
      }
    }, 100);
    this.setState({ intervalId: interval }); // Store intervalId in the state
  }

  stopStreamingData() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: null }); // Set intervalId to null when clearInterval is called
    }
  }

    clearData() {
    this.setState({
      data: [],
      showGraph: false,
      intervalId: null // Also clear intervalId
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Bank Merge & Co Task 3
        </header>
        <div className="App-content">
          <button className="btn btn-primary Stream-button" onClick={() => {
            this.getDataFromServer()
          }}>Start Streaming Data
          </button>
          <button className="btn btn-danger Stop" onClick={() => {
            this.stopStreamingData();
          }}>Stop
          </button>
          <button className="btn btn-warning Clear" onClick={() => {
            this.clearData();
          }}>Clear
          </button>
          <div className="Graph">
            {this.renderGraph()}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
