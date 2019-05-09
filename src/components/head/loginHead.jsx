import React from 'react';

import styles from './unLoginHead.css';
/*网页头组件 */
class unLoginHead extends React.Component {
    state = {
      }

    
    render (){

       
        return (
            <div className={styles.head}>
                已登陆
            </div>
        );
    }
}
export default unLoginHead;