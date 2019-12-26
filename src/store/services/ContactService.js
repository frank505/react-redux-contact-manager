import HttpService from './HttpService';


export const addNewContact = (credentials) =>{
    const http = new HttpService();
    // console.log(HttpService);
    let newContact = "user/contact/add";
    credentials.token = localStorage.getItem('user');
    console.log(credentials)
    return http.postData(credentials,newContact).then((data)=>{
         console.log(data)
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
        return error; 
         });
}


//contact/get-all/{token}/{pagination?}
//this function loads paginated contacts
export const loadContacts = (page) =>{
    let token = localStorage.getItem('user');
    let pager = 2;
    let contactsDataUrl ; 
    if(page==""){
    contactsDataUrl = "user/contact/get-all/"+token+"/"+pager; 
    }else{
        contactsDataUrl = "user/contact/get-all/"+token+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(contactsDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}


export const loadSearchContacts = (search_content,page) =>{
    let token = localStorage.getItem('user');
    let pager = 2;
    let contactsDataUrl ; 
    if(page==""){
    contactsDataUrl = "user/contact/search/"+search_content+"/"+token+"/"+pager; 
    }else{
        contactsDataUrl = "user/contact/search/"+search_content+"/"+token+"/"+pager+"?page="+page;
    }
    
    const http = new HttpService();
    return http.getData(contactsDataUrl).then((data)=>{
        console.log(data);
        return data
    }).catch((error)=>{
        console.log(error)
    })
    
}



