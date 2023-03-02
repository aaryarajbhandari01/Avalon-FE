import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
 } from '../constants/UserConstants'


 export const login = (username, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })


        //configurations
        const config ={
            headers: {
                'Content-type' : 'application/json'
            }
        }

        // MAKING API CALL
        const {data} = await axios.post(
            'http://127.0.0.1:8000/api/account/login/',
            { username: username, password: password },
            config

            )//destructuring response and post to get user tokens


        //sending paylOad to reducer

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        //setting in   state and local storage
        localStorage.setItem('userInfo', JSON.stringify(data) )
        // localStorage.setItem("access_token", response.data.access);
        // localStorage.setItem("refresh_token", response.data.refresh);
        // localStorage.setItem("username", response.data.username);            setIsLoggedIn(true); // Update state to reflect that the user is logged in
      

      

    }catch(error){
            dispatch({
                type:USER_LOGIN_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message,
            })
    }
 }

 export const logout = () => (dispatch) => { //function inside the function

    //removing items from local storage
    localStorage.removeItem('userInfo')

    //dispatch logout reducter
    dispatch({type:USER_LOGOUT})
 }

 export const register = (username, password,firstName, lastName, email) => async (dispatch) => {
    try{
        dispatch({
            type: USER_REGISTER_REQUEST
        })


        //configurations
        const config ={
            headers: {
                'Content-type' : 'application/json'
            }
        }

        // MAKING API CALL
        const {data} = await axios.post(
            'http://127.0.0.1:8000/api/account/user/register/',
            { username: username, 
                password: password, 
                first_name: firstName, //firstName field value
                last_name: lastName, //lastName field value
                email:email },
            config

            )//destructuring response and post to get user tokens


        //sending paylOad to reducer

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        //setting in   state and local storage
        localStorage.setItem('userInfo', JSON.stringify(data) )
        // localStorage.setItem("access_token", response.data.access);
        // localStorage.setItem("refresh_token", response.data.refresh);
        // localStorage.setItem("username", response.data.username);            setIsLoggedIn(true); // Update state to reflect that the user is logged in
      
        // const handleRegister = async (event) => {
        //     event.preventDefault();
        //     try {
        //       const response = await axios.post("http://127.0.0.1:8000/api/account/user/register/", {
        //         username,
        //         password,
        //         first_name: firstName,
        //         last_name: lastName,
        //         email,
        //       });
        //       console.log(response.data); // or redirect to another page
        //     } catch (error) {
        //       console.log(error.response.data);
        //       setError(error.response.data); // display error message
        //     }
        //   };
        
      

    }catch(error){
            dispatch({
                type:USER_REGISTER_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message,
            })
    }
 }
