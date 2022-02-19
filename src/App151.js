import React, {memo} from 'react';
// memo ko can rerender neu ko can thiet 
// neu tham so truyen vao function thay doi thi moi render lai component nguoc lai ko can
function App151({onIncrease}){
    console.log('rerender');
    return(
        <React.Fragment>
        <h2>Hello Anh Em F8</h2>
        <button onClick={onIncrease}>Click</button>
      </React.Fragment>

    )
}
export default memo(App151);