import React, { Component } from 'react'
import { render } from 'react-dom'

import treedata from './data/treedata.js'
import TreeUse from './component/TreeUse.js'
import TreeToTree from './component/TreeToTree.js'

import './css/index.less'

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        jinhua: "test yong"
      }
    }
    render() {
      return (
        <div>
          <TreeToTree {...{treedata}}/>
        </div>
      )
    }
}

export default App;
render(
  <App/>,
  document.getElementById('app')
)