const initState = {
    contactResponse:null,
    contactMessage:null,
    loadContacts:null,
    loadSingleContacts:null
};


const ContactReducer = (state=initState, action) =>{
    switch(action.type){
        case 'RESTART_ADD_UPDATE_RESPONSE':
            return {
                ...state,
                contactResponse:null
            }
            case 'LOADING':
                return {
                    ...state,
                    contactResponse:'loading...'
                }
        case 'NEW_CONTACT_SUCCESS':
            console.log(action);
            return{
                ...state,
                contactResponse: action.res.message
             }

           case 'NEW_CONTACT_CODE_ERROR':
        return {
            ...state,
            contactResponse:action.error
        }
        case 'CLEAR_CONTACTS_STATE':
          return {
            ...state,
            loadContacts:null
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
                case 'LOAD_SINGLE_DATA':
                    console.log(action.res)
                    return{
                        ...state,
                        loadSingleContacts:action.res
                    }
                        case 'FETCH_SINGLE_DATA_ERROR':
                            return{
                                ...state,
                                loadSingleContacts:action.error
                            }
                            case 'UPDATE_CONTACT_SUCCESS':
                                console.log(action);
                                return{
                                    ...state,
                                    contactResponse: action.res.message
                                 }
                    
                               case 'UPDATE_CONTACT_CODE_ERROR':
                            return {
                                ...state,
                                contactResponse:action.error
                            }
                            case 'DATA_DELETE_SUCCESSFULLY':
                            let { loadContacts } = state;
                            let data = loadContacts.data.data.filter(items=>items.id !==action.res.id);
                            console.log(data);
                            loadContacts.data.data = [];
                            data.map((mappingData)=>{
                                loadContacts.data.data.push({
                                    "id":mappingData.id,
                                    "firstname":mappingData.firstname,
                                    "lastname":mappingData.lastname,
                                    "email":mappingData.email,
                                    "phonenumber":mappingData.phonenumber,
                                    "image_file":mappingData.image_file,
                                })
                            })
                            return{
                                ...state,
                                loadContacts:{...state.loadContacts,loadContacts}
                            }
                                
                    
                               case 'DATA_DELETE_ERROR':
                            return {
                                ...state,
                                contactResponse:action.error
                            }
        default:
                return state
    }
      
    
}

export default ContactReducer;