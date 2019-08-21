import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});



class DashBoard extends Component {

    render() {
        const classes = withStyles();
        return (
            <div className="App">
                <div>
                    <h1>Pet Hotel</h1>
                </div>
                <form>

                    <input type="text" placeholder="Pet Name"></input>
                    <input type="text" placeholder="Pet Color"></input>
                    <input type="text" placeholder="Pet Breed"></input>
                    <select>
                        <option>Owner Name</option>
                        <option>Danielle Martain</option>
                        <option>Blake Peterson</option>
                        <option>Tim Heck</option>
                        <option>Sam Flavin</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Owner</TableCell>
                                <TableCell align="right">Pet</TableCell>
                                <TableCell align="right">Breed</TableCell>
                                <TableCell align="right">Color</TableCell>
                                <TableCell align="right">Checked In</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                          
                        </TableBody>
                    </Table>
                </Paper>
                </div>

                );
            }
        
        }
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
    
        
export default withStyles(styles)(connect(mapReduxStateToProps)(DashBoard));