import React, { Component } from 'react'
import { render } from 'react-dom'

import { Icon } from 'antd';

import TreeUse from './TreeUse.js'
import './TreeToTree.less'

import Button from './TreeReturn.js'

export default class TreeToTree extends Component {
    constructor(props) {
      super(props)
      this.state = {
        jinhua: "test yong"
      }
      this.dataMove = this.dataMove.bind(this)
    }
    dataMove(){
      console.log('DataMove')
    }
    render() {
      let btnData = {
        myClick: ()=>{
          console.log('myClick lin hong')
        }
      }
      let {treedata, treedataRight}=this.props;
      return (
        <div className="tree-use">
          <div className="tree-use-container"><TreeUse {...{treedata}}/></div>
          <div className="tree-use-btn">
            {/* <Button type="primary"
              onClick={()=> this.dataMove()}
            >move right</Button> */}
            <Button {...btnData}>jin hua</Button>
          </div>
          <div className="tree-use-container"><TreeUse {...{}}/></div>
        </div>
      )
    }
}


