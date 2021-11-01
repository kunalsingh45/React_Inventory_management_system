import React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { Button,Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const InventoryList = (props)=>{
    const histroy = useHistory()
    const addWarehouse = () =>{
        histroy.push("/warehouse/new")
    }

    return(
        <React.Fragment>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Box style={{"float":"right",padding:"10px"}}>
                <Button color="primary" variant="contained" onClick={addWarehouse}>Add Warehouse</Button>
            </Box>
        {
            props.products ? (
                <TableContainer component={Paper} style={{maxWidth:"98vw",width:"98vw"}}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Product Code</TableCell>
                      <TableCell align="right">Product name</TableCell>
                      <TableCell align="right">Warehouse</TableCell>
                      <TableCell align="right">Available Product</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.products.map((row) => (
                      <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
                      >
                        <TableCell component="th" scope="row">
                          <Link to={`/product/${row.product.sku_code}`}>{row.product.sku_code}</Link>
                        </TableCell>
                        <TableCell align="right">{row.product.name}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right" 
                        style={{"backgroundColor": row.item_count<row.low_item_threshold ? "red":"white"}}>
                            {row.item_count}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            
            ): (<div>Loading ... </div>)        
        }
        </Grid>
        </Grid>
        </React.Fragment>
        

    )

}

export default InventoryList