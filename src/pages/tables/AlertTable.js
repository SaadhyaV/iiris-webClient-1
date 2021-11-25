import { useEffect, useState } from "react"
import { getAlerts } from '../../api/AppApi'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';

const AlertTable = ({getAlerts}) =>{
    const [alerts, setAlerts] = useState([]);
    
    useEffect(()=>{
        // getAlerts();
        alert();
        // console.log(alert())
    })
    const alert = () =>{
        axios.get('http://localhost:8800/')
        .then(response =>{
            console.log(response);
            // setAlerts(response)
            // console.log(alerts)
        })
        .catch(error =>{
            console.log(error)
        })
    }

   
    return(
        <div>
            <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* {alerts.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      ))} */}
                    </TableBody>
                  </Table>
                </TableContainer>
        </div>
    )

    // AlertTable.propTypes = { alert: PropTypes.func.isRequired};
    // function mapStateToProps(state){
    //     return {
    //         alert: state.alert
    //     }
    // }

}
//  AlertTable.propTypes = { };
//     const  mapStateToProps = state => ({
//         ...state
//     })
//     const mapDispatchToProps = dispatch => ({
//         alerts: (payload) => dispatch(getAlerts(payload))
//       });
// export default connect(mapStateToProps, mapDispatchToProps, {getAlerts})(AlertTable);

export default AlertTable;