import React from 'react';
import '../App.css';
import tj from '../assets/tj.jpg';
class Catalog extends React.Component {
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
                    <p>1、大家都在用。</p>
                    <p>2、生态圈丰富。</p>
                    <p>3、纯粹的JavaScript语法。没有任何特殊的专有的 React 语法需要理解和记忆，所有的组件，数据操作，业务逻辑都是通过使用 JavaScript 语法实现的。
                    </p>
                    <p>4、单项数据流。</p>
                    <p>5、虚拟DOM。</p>
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
                    <p>3、<a className="App-link" href="https://create-react-app.dev/">create-react-app</a>（官方维护的脚手架） </p>
                </div>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    准备开发
                    
            </a>
            </div>
        );
    }
}

export default Catalog;
