import { useParams } from "react-router";
import React,{ useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import {TextField,Grid,Box, Button} from '@material-ui/core';
import { updateItemDetails } from '../ApiConfig/Axios';
import DialogBox from './DialogBox';


const EditProduct = (props)=>{
    const {sku_code} = useParams();
    const [count,setCount] = useState(0)
    const [threshold,setThreshold] = useState(0)
    const [updatesResult, setUpdateResult] = useState("")
    const handleSubmit = async (event) => {
        event.preventDefault();
        let updatesResult = await updateItemDetails({
            sku_code,
            count,
            threshold
        })
        setCount(0);
        setThreshold(0);
        setUpdateResult(`Total ${updatesResult.modifiedCount} record updated sucessfully `)
    }
    return(
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} style={{ margin: "30px",width:"96vw" }}>
                <Grid item md={12}>
                    <Box style={{ margin: "10px" }}>
                        <TextField
                            variant="outlined"
                            style={{ width: "300px" }}
                            value={sku_code}
                            disabled />
                        <InputLabel>Product Code</InputLabel>
                    </Box>
                    <Box style={{ margin: "10px" }}>
                        <TextField
                            variant="outlined"
                            style={{ width: "300px" }} 
                            type="number"
                            value={count}
                            onChange={(e) => setCount(e.target.value)} />
                        <InputLabel>Item Count</InputLabel>
                    </Box>
                    <Box style={{ margin: "10px" }}>
                        <TextField
                            variant="outlined"
                            style={{ width: "300px" }} 
                            type="number"
                            value={threshold}
                            onChange={(e) => setThreshold(e.target.value)} />
                        <InputLabel>Item Threshold Value</InputLabel>
                    </Box>
                    <Button variant="contained" color="primary" type="submit">Update</Button>
                </Grid>
            </Grid>
            {updatesResult && <DialogBox message={updatesResult}/>}
        </form>
    )


}

export default EditProduct;