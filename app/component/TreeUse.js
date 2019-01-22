import React, { Component } from 'react'
import { render } from 'react-dom'

import { Tree,Icon } from 'antd';
const { TreeNode } = Tree;

import './TreeUse.less'

export default class TreeUse extends Component {
    constructor(props) {
      super(props)
      this.state = {
        expandedKeys: []
      }
      this.renderNode = this.renderNode.bind(this)
    }
    renderNode(data){
      let {expandedKeys} = this.state;
      let loop = (idata)=>{
        return idata.map((item)=>{
          return (
            <TreeNode
              title={item.title} key={item.key}
              icon={item.children ? (expandedKeys.includes(item.key) ? <Icon type='folder-open'/> : <Icon type='folder'/>) : <Icon type='heart'/>}
            >
              {item.children && loop(item.children)}
            </TreeNode>
          )
        })
      }
      return (
        <Tree
          showIcon
          switcherIcon={<Icon type={'down'} />}
          expandedKeys={this.state.expandedKeys}
          onExpand={(key,item) => {
            this.state.expandedKeys=key;
            this.setState(this.state)
          }}
        >
          {loop(data)}
        </Tree>
      )
    }
    render() {
      let treeDataInit=[{title: '0-0', key: '0-0'}];
      let {treedata=treeDataInit} = this.props;
      return (
        <div>
          {this.renderNode(treedata)}
        </div>
      )
    }
}
