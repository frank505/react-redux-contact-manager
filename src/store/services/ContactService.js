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


