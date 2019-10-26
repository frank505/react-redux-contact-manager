const initState = {
authResponse:null
}


const AuthReducer = (state=initState, action) =>{
    switch(action.type){
        case 'SHORT_PASSWORD':
            console.log(action);
            return{
                ...state,
                authResponse: 'password is too short'
             }
    
      case 'SIGNUP_SUCCESS':
          console.log(action)
          return {
              ...state,
              authResponse:'signup was successfully done',
          }

          case 'SIGNUP_ERROR':
                console.log(action)
                return {
                    ...state,
                    authResponse:action.res.message,
                }

                case 'CODE_ERROR':
                        console.log(action)
                        return {
                            ...state,
                            authResponse:'there seems to be a problem please try again later',
                        }
                        case 'LOGIN_SUCCESS':
                            console.log(action)
                            return {
                                ...state,
                                authResponse:'redirecting you to dashboard..',
                            }
                            case 'LOGIN_ERROR':
                                console.log(action)
                                return {
                                    ...state,
                                    authResponse:action.res.message,
                                }

            default:
                return state

    }
}

export default AuthReducer;