import React from 'react';
import '../App.css';
class NewDate extends React.Component {
    constructor(props) {
        super(props);        
    }
    componentDidMount() { // 组件更新后触发
        console.log(this.props)
    }    
    getSnapshotBeforeUpdate(prevProps, prevState) { // 组件更新前触发 react16新生命周期
        console.log(prevProps)
        return true
    }
    componentWillReceiveProps(nextProps) { // 组件更新前触发 react17废弃
        console.log(nextProps)        
    }
    render() {
        return (
            <div>
               {this.props.date.toLocaleTimeString()}
            </div>
        );
    }
}
export default NewDate;
