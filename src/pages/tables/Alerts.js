import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as apis from '../../api/AppApi';
// import { getAlerts } from '../../api/AppApi';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { deleteProduct, getAllProducts } from '../../actions/product';

class Alerts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alerts: [],
        };

        this.fetchAlerts = this.fetchAlerts.bind(this);
    }
    componentDidMount(){
       this.fetchAlerts();
    }
    fetchAlerts(){
        // apis.getAlerts().then((res)=>{
        //     this.setState({ alerts: this.props.alerts });
        //     console.log(res.data) 
        // },
        // (err)=>{
        //     console.log(err)
        // })
        
        //  return async event => {
        //     alert('hey')
        //     console.log(event);
            // this.setState({ alerts: event. });
            // await this.props.getAlerts()
            // .then((res, err)=>{
            //     alert('hey')
            //     console.log(res)
            // });          
        // }
    }
    render() {
        const { alerts } = this.state;
        console.log(alerts);
        return (
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
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         alerts: state.alerts
//     }
// }

// export default connect((store) => mapStateToProps, { getAlerts })(Alerts);
export default Alerts;