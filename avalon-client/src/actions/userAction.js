import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

      USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
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

        //login user in after registering

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })


        //setting in   state and local storage
        localStorage.setItem('userInfo', JSON.stringify(data) )
       
        
      

    }catch(error){
            dispatch({
                type:USER_REGISTER_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message,
            })
    }
 }

 export const getUserDetails = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const {
            userLogin: {userInfo},
        } =getState()

        //configurations
        const config ={
            headers: {
                'Content-type' : 'application/json',
                Authorization: `Bearer ${userInfo.token}` //for authorization and access to details
            }
        }

        // MAKING API CALL
        const {data} = await axios.get(
            'http://127.0.0.1:8000/api/account/user',
            // { username: username, 
            //     password: password, 
            //     id:id },
            config

            )//destructuring response and post to get user tokens


        //sending paylOad to reducer

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

       

       
       
        
      

    }catch(error){
            dispatch({
                type:USER_DETAILS_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message,
            })
    }
 }
