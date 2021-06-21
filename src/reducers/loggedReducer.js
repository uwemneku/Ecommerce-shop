import {auth} from "../firebaseconfig"

const loggedReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return true
            break;

        case "logout":
            return false
            break;
        default:
            return false
            break;
    }
} 

export default loggedReducer;