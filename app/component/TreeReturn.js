import React, { Component } from 'react'
import { render } from 'react-dom'

import { Button } from 'antd';

const treeReturn = WrapTree => {
    return class extends WrapTree {
        render() {
            let props = this.props
            let myProps = {
                onClick: props.myClick
            }
            return (<WrapTree {...myProps}>{props.children}</WrapTree>)
        }
    }
}

export default treeReturn(Button)
