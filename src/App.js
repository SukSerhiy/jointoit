import React, { PureComponent, Fragment } from 'react';
import 'element-theme-default';
import { ColumnContainer } from './containers';
// import MuuriPage from './MuuriPage';
import './App.css';

class App extends PureComponent {

  render() {
    return (
      <Fragment>
        <main>
          <ColumnContainer />
          {/* <MuuriPage /> */}
        </main>
      </Fragment>
    );
  }
}

export default App;