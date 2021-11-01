import React,{ useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import {TextField,Grid,Box, Button} from '@material-ui/core';
import { addWarehouse } from '../ApiConfig/Axios';
import DialogBox from './DialogBox';


const Warehouse = (props)=>{
    const [name, setName] = useState("");
    const [warehouseCode, setWarehouseCode] = useState("");
    const [pin, setPin] = useState(0);
    const [capacity, setCapacity] = useState(0);
    const [result,setResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(name === ""){
            setResult("Please enter name");
            return;
        } else if(warehouseCode === ""){
            setResult("Please enter warehouse code");
            return;
        } else if(pin === 0){
            setResult("Please enter pin");
            return;
        } else if(capacity === 0) {
            setResult("Please enter capacity");
            return;
        }

        let submitData = {
            name,
            wh_code: warehouseCode,
            pincode:pin,
            max_capacity:capacity
        }
        let result = await addWarehouse(submitData);
        setResult(result.message)
    }

    return(
        <React.Fragment>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} style={{ margin: "30px",width:"96vw" }}>
                <Grid item md={12}>
                    <Box style={{ margin: "10px" }}>
                        <TextField
                            variant="outlined"
                            style={{ width: "300px" }}
                            onChange={(e) => setName(e.target.value)} />
                        <InputLabel>Name</InputLabel>
                    </Box>
                    <Box style={{ margin: "10px" }}>
                        <TextField
                            variant="outlined"
                            style={{ width: "300px" }} 
                            onChange={(e) => setWarehouseCode(e.target.value)} />
                        <InputLabel>Warehouse Code</InputLabel>
                    </Box>
                    <Box style={{ margin: "10px" }}>
                        <TextField
                            type="number"
                            variant="outlined"
                            style={{ width: "300px" }}
                            onChange={(e) => setPin(e.target.value)} />
                        <InputLabel>Pin Code</InputLabel>
                    </Box>
                    <Box style={{ margin: "10px" }}>
                        <TextField
                            variant="outlined"
                            type="number"
                            style={{ width: "300px" }}
                            onChange={(e) => setCapacity(e.target.value)} />
                        <InputLabel>Maximum Capacity</InputLabel>
                    </Box>
                    <Button variant="contained" color="primary" type="submit">Add</Button>
                </Grid>
            </Grid>

        </form>
        {result && <DialogBox message={result}/>}
        </React.Fragment>
    )


}

export default Warehouse;