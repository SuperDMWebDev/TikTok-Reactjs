
import React, {useContext} from 'react';
import {StoreProvider} from './App20Store'
import {StoreContext} from './App20Store';
function App20() {
    const state=useContext(StoreContext);
    
    console.log(StoreContext);

    return(
    <StoreProvider>
        <div>
            Hello anh em F8!
        </div>
    </StoreProvider>
    )
}
  
export default App20;