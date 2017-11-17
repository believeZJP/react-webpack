import React from 'react'

export default class componentC extends React.Component{
    componentWillMount () {
        console.log(this.props)
    }
    
    render(){
        return(
            <div>这是C组件：参数：{this.props.match.params.param}, {this.props.match.params.a}</div>
        )
    }
}