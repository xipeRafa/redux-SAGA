import Input from "@mui/material/Input"
import Button from "@mui/material/Button"

import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"

import { setUserSlice } from "../redux/slice/user"
import TYPES from "../redux/types"


const MyForm = () => {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleChange = (name) => (e) => {
        dispatch(setUserSlice({ ...user, [name]: e.target.value }))
    }

    const handleSubmit = () => {
        
        user.id === 0 
            ? 
                dispatch({ type: TYPES.CREATE_USER, 
                    user: { 
                        ...user, id: nanoid(8) 
                    } 
                })
            : 
                dispatch({ type: TYPES.UPDATE_USER_BY_ID, user })

        dispatch(setUserSlice({
            id: 0,
            name: '',
            email: '',
            password: ''
        }))
    }

    return 
      <>
        <div style={{ marginBottom: '40px', padding:'20px',backgroundColor:'lightgray', }}>

            <Input style={{ marginBottom: '20px' }} value={user.id} fullWidth disabled />

            <Input  style={{backgroundColor:'white', marginBottom: '20px' }} 
                onChange={handleChange('name')}  placeholder="Enter Name"  value={user.name}  fullWidth />

            <Input  style={{backgroundColor:'white', marginBottom: '20px' }} 
                onChange={handleChange('email')} placeholder="Enter Email" value={user.email} fullWidth />

            <Input  style={{backgroundColor:'white', marginBottom: '20px' }} 
                onChange={handleChange('password')} placeholder="Enter Password" value={user.password} fullWidth />

            <Button style={{ marginBottom: '20px' }}    
                onClick={() => handleSubmit()} variant="contained" fullWidth>Submit</Button>
        </div >
      </>
}

export default MyForm