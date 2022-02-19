import React,{useContext} from 'react';
import {ThemeContext} from './ThemeContext';
function Paragraph(){
    //cach dung cach 1
    const value=useContext(ThemeContext);
    return(
        <p className={value.theme}>
        React Context cung cấp cho chúng ta cơ chế định nghĩa các data store và truy xuất chúng khi cần. Chúng ta không cần phải truyền data thông qua props nữa.
        </p>
    )
}
export default Paragraph;