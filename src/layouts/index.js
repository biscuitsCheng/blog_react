// import styles from './index.css';
import { Layout } from 'antd';
import Title from '../components/head/title';


const {
   Content,
} = Layout;
function BasicLayout(props) {
  return (
    <div>
      <Layout>
        {/* <Header> */}
          <Title/>
        {/* </Header> */}
        <Layout>
          {console.log("props",props)}
          <Content>{props.children}</Content>
        </Layout>
      </Layout>
    </div>
    // <div className={styles.normal}>
    //   <h1 className={styles.title}>Yay! Welcome to umi!</h1>
    //   {props.children}
    // </div>
  );
}

export default BasicLayout;
