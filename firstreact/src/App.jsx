import Chai from "./chai"
import  {ButtonChai} from "./chai"
import {Displayprofile} from "./displayprofile"
import {Counter} from "./counter"


function App(){
    return(
    <>
     <Chai />
     <h2>to order chai click button</h2>
     <ButtonChai />
     <Displayprofile />
     <Counter />
    </>
    )
}

export default App
