import axios from 'axios';
import { API_URLS } from '../constants';



const { LOGIN,LOGOUT, SIGNUP} = API_URLS;
 

  export const signupApi= async (email, password, name, link, comment) => {

    const data= {
      email: email,
      password: password,
      name:name,
      link:link,
      comment:comment,
    }
    const result = await axios
    .post(SIGNUP,data)
    .then((res)=>{
        return res;
    })
    .catch((err)=>{
        return err
    });
    return result;
      };
      

  export const loginApi = async (email, password) => {
    const data= {
      email: email,
      password: password,
    }
  const result = await axios
  .post(LOGIN,data )
  .then((res)=>{
    localStorage.setItem("accessToken", res.data.token);
    return res;
  })
  .catch((err)=>{
    return err
  });
  return result;
  
  }

  export const logoutApi = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const result = await axios
  .put(LOGOUT,{}, {
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})
  .then((res)=>{
    return res;
  })
  .catch((err)=>{
    return err
  });
  return result;
  
  }
