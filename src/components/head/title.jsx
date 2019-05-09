import React from 'react';
import UnLogingHead from './unLoginHead';
import LogingHead from './loginHead';

/*网页头组件 */
class Title extends React.Component {
    state = {
        showHead: true,//当前网页是否要显示头部
        isLogin: false//是否已登陆
    }

    //隐藏头部
    hidden = () => {
        this.setState({
            showHead: false
        })

    }
    //显示头部
    show = () => {
        this.setState({
            showHead: true
        })

    }

    //登陆
    login = () => {
        this.setState({
            isLogin: true
        })
    }

    logOut = () => {
        this.setState({
            isLogin: false
        })
    }
    render() {
        const { showHead, isLogin } = this.state;
        /**
         * 需要显示头部
         */
        if (!showHead) {
            return (<div />);
        }
        /**
         * 已登陆
         */
        if (isLogin) {
            return (
                <LogingHead/>
            );
        }
        /**
         * 未登录
         */
        return (
            <UnLogingHead login={this.login} />
            
        );
    }
}
export default Title;