import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Rafael Takasu</h1>
                </header>


                  <Tabs>
                    <TabList>
                      <Tab>Title 1</Tab>
                      <Tab>Title 2</Tab>
                    </TabList>

                    <TabPanel>
                      <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                      <h2>Any content 2</h2>
                    </TabPanel>
                  </Tabs>


                <p className="App-intro">

                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
            );
    }
}

export default App;
