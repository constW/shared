import React from 'react';
import '../App.css';
class Title extends React.Component {
    render() {
        return (
            <div>
                <p>两个月的使用心得体会。</p>                
                <p style={{fontSize:12}}>前端可以一起巩固基础</p>
                <p style={{fontSize:12}}>后端了解框架</p>
                <p style={{fontSize:12}}>HTML5是HTML最新的修订版本</p>
                <p style={{fontSize:12}}>ES6 全称 ECMAScript 6.0 ,是 JavaScript 的下一个版本标准</p>
                <p style={{fontSize:12}}>CSS3是CSS（层叠样式表）技术的升级版本</p>
                {/* <p>github搭建自己的博客</p> */}
            </div>
        );
    }
}
export default Title;
