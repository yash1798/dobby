import { TextField } from '@material-ui/core'
import React from 'react'

const SearchField = ({setTerm}) => {



    return (
       
            <TextField variant="filled" label="Search" onChange={(e) => setTerm(e.target.value)} />
        
    )
}

export default SearchField
