import React, { useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

import { useDispatch, useSelector } from 'react-redux'
import { setUserSlice } from '../redux/slice/user'
import TYPES from "../redux/types"

export default function MyTable() {

    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() =>
        dispatch({ type: TYPES.GET_USERS })
    ,[])

    return (
        <TableContainer component={Paper}>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Email   </TableCell>
                        <TableCell align="right">Password</TableCell>
                        <TableCell align="right">Edit    </TableCell>
                        <TableCell align="right">Delete  </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                            <TableCell component="th" scope="user">{user.name}    </TableCell>
                            <TableCell align="right">             {user.email}   </TableCell>
                            <TableCell align="right">             {user.password}</TableCell>

                            <TableCell align="right">
                                <Button onClick={() => dispatch(setUserSlice(user))} fullWidth variant="contained">Edit</Button>
                            </TableCell>

                            <TableCell align="right">
                                <Button onClick={() => dispatch({ type: TYPES.DELETE_USER_BY_ID, id: user.id })} fullWidth variant="contained">
                                    Delete
                                </Button>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            
        </TableContainer>
    )
}