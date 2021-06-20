import {auth} from "../firebaseconfig"

const loggedReducer = (state = auth.currentUser?true:false , action) => {
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