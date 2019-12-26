import React from 'react';
import ReactDOM from "react-dom";
import '../App.css';
import tj from '../assets/tj.jpg';
import smzq from '../assets/smzq.png';
import NewDate from './newDate';
class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            html: `<div dangerouslySetInnerHTML = {{ __html: checkMessages.details }} />`,
            ui: '',
            date: new Date(),
            special: `生命周期 & state & prop`
        }
    }
    createEle = () => {
        const rElmLi1 = React.createElement('li', { id: 'li1' }, 'one');
        const rElmLi2 = React.createElement('li', { id: 'li2' }, 'two');
        const rElmLi3 = React.createElement('li', { id: 'li3' }, 'three');
        const reactElementUl = React.createElement('ul', { className: 'myList' }, rElmLi1, rElmLi2, rElmLi3);
        this.setState({
            ui: reactElementUl
        })
        console.log(reactElementUl)
    }
    renderUi = () => {
        ReactDOM.render(this.state.ui, document.getElementById('renderdemo'));
    }
    start = () => {        
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    tick = () => {
        this.setState({
            date: new Date()
        });
    }
    stop = () => {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React 是个什么东西
            </a>
                <div className="ms">
                    用于构建用户界面的 JavaScript 库
                </div>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    为什么使用React
            </a>
                <div className="ms">
                    <img src={tj} alt="" style={{ height: 500 }} />
                    <p>1、大家都在用，生态圈丰富。</p>
                    <p>2、纯粹的JavaScript语法。没有任何特殊的专有的 React 语法需要理解和记忆，所有的组件，数据操作，业务逻辑都是通过使用 JavaScript 语法实现的。
                    </p>
                    <p>3、虚拟DOM。</p>
                    <p>4、单项数据流。</p>
                </div>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    安装
                </a>
                <div className="ms">
                    <p>1、nodejs</p>
                    <p>2、npm</p>
                    <p>3、
                        <a className="App-link" target="_blank" href="https://create-react-app.dev/">create-react-app</a>（官方维护的脚手架） 
                    </p>
                </div>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    准备开发
                </a>
                <div className="ms">
                    <p>1、React.createElement ReactDOM.render
                        <button className="btn" onClick={this.createEle}>React.createElement</button>
                        <button className="btn" onClick={this.renderUi}>ReactDOM.render</button>
                        <div id="renderdemo"></div>
                    </p>
                    <p>2、{this.state.special}</p>
                    <img src={smzq} alt="" style={{ height: 500 }} />
                    <span  className="lue">Mounting （加载阶段：涉及4个钩子函数）</span>
                    <span  className="lue">Updating （更新阶段：涉及5个钩子函数)</span>
                    <span  className="lue">Unmounting （卸载阶段：涉及1个钩子函数）</span>
                    <span  className="lue">componentDidCatch   (错误处理)</span>
                    <button className="btn" onClick={this.start}>开始</button>
                    <button className="btn" onClick={this.stop}>结束</button>
                    <NewDate ref="child" date={this.state.date} />
                    <p>3、JSX
                        <span className="lue">clss className </span>
                        <span className="lue">style  camelCase </span>
                        <span className="lue">for htmlFor </span>
                        <span className="lue">渲染html代码  {this.state.html}</span>
                        <span className="lue">添加自定义属性需要使用 data- 前缀</span>
                    </p>
                    <p>4、fatch
    fetch是一种HTTP数据请求的方式，是XMLHttpRequest的一种替代方案。fetch不是ajax的进一步封装，而是原生js。Fetch函数就是原生js，没有使用XMLHttpRequest对象。</p>
                </div>
            </div>
        );
    }
}

export default Catalog;
