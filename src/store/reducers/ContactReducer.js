const initState = {
    contactResponse:null,
    contactMessage:null,
    loadContacts:null
};


const ContactReducer = (state=initState, action) =>{
    switch(action.type){
        case 'NEW_CONTACT_SUCCESS':
            console.log(action);
            return{
                ...state,
                contactResponse: action.res.message
             }

           case 'NEW_CONTACT_CODE_ERROR':
        return {
            ...state,
            contactResponse:'error code '
        }
        case 'LOAD_CONTACTS':
            console.log(action.res)
            return{
                ...state,
                loadContacts:action.res
            }
      case 'LOAD_CONTACTS_SEARCH':
        console.log(action.res)
        return{
            ...state,
            loadContacts:action.res
        }
            case 'FETCH_CONTACT_ERROR':
                return{
                    ...state,
                    loadContacts:action.error
                }
        default:
                return state
    }
      
    
}

export default ContactReducer;