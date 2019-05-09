import React from 'react';
import { Modal,  Button } from 'antd';
import MyLoginFrom from './loginForm';
import styles from './unLoginHead.css';
// import title from './title'
/*网页头组件 */
class unLoginHead extends React.Component {
    state = {
        needLogin: false,//是否需要登陆
        confirmLoading:false,//登陆按钮是否要显示加载中
        loginModalTitle:'登陆',//登陆Modal的title
      }

    //弹出登陆框
    needLogin = () =>{
        this.setState({
            needLogin: true
        });
    }
    //取消登陆
    notLogin =() =>{
        this.setState({
            needLogin: false
        });
    }
    //登陆
    login =(props) =>{
        this.setState({
            confirmLoading:true,
            loginModalTitle:'Loading...'
        })
        let from=this.refs.getForm;//通过refs属性可以获得对话框内form对象

        from.validateFields((err, values) => {
         if(!err){
            console.log(values);//这里可以拿到数据
        }
        //TODO
        setTimeout(() => {
            this.props.login();

            this.setState({
              needLogin: false,
              confirmLoading: false,
              loginModalTitle:'登陆'

            });
          }, 2000);
    });
    }

    render (){
        const {confirmLoading,needLogin,loginModalTitle} = this.state;
       
        return (
            <div className={styles.head}>
                <Button type="primary" className={styles.button} >注册</Button>
                <Button className={styles.button} onClick={this.needLogin}>登陆</Button>
            <Modal
            title={loginModalTitle}
            visible={needLogin}
            onOk={this.login}
            confirmLoading={confirmLoading}
            onCancel={this.notLogin}
            >
                <MyLoginFrom ref="getForm"/> 
            </Modal>
            </div>
        );
    }
}
export default unLoginHead;