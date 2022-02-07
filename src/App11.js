import {useEffect, useReducer} from 'react';
import { useState } from 'react/cjs/react.development';
function App11()
{
    const [avatar,setAvatar]=useState()
    useEffect(()=>{
            return()=>{
                console.log(avatar);
                avatar &&URL.revokeObjectURL(avatar.preview);
            }
    },[avatar])
    const handleReviewAvatar=(e)=>{
        const file=e.target.files[0];
        // tao 1 link url dung de hien thi anh, de gay ro ri bo nho pahi xoa 
        // truoc khi thoat ra bang useEffect revoke url
        file.preview=URL.createObjectURL(file);
        // lam v de khi moi lan chon anh:  value cua onChange se ko giong nhau => chon duoc 2 anh lien tip ( neu ko co thi value giong nhau onChange ko kich hoat dc) 
        e.target.value="";
        setAvatar(file);
        
    }
    return(
        <>
           <input type="file" multiple onChange={handleReviewAvatar}/>
           {avatar && <img src ={avatar.preview} alt="" width="80%" />}
        </> 
    )

}
export default App11;