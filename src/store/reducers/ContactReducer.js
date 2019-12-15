const initState = {
    contactResponse:null,
    contactMessage:null
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
        console.log('hello');
        return {
            ...state,
            contactResponse:'error code '
        }
        default:
                return state
    }

    
}

export default ContactReducer;