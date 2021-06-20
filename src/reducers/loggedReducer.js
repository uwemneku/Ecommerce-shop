import {auth} from "../firebaseconfig"

const  loadingState = auth.onAuthStateChanged((authUser) => {
    if(authUser){
            return true
            
    }else{
            return false
    }
})

console.log(loadingState);
const loggedReducer = (state = loadingState, action) => {
    switch (action.type) {
        case "login":
            return true
            break;

        case "logout":
            return false
            break;
        default:
            return state
            break;
    }
} 

export default loggedReducer;