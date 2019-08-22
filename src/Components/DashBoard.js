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

    componentDidMount(){
        this.props.dispatch({type:'FETCH_PETS'})
    }

state = {
    clicked: false
}
seeDash = () => {
    console.log('clicked seeDash')
    this.setState({
        clicked: true
    })
}

    seeOwner = () => {
        console.log('clicked seeOwner')
        this.setState({
            clicked: false
        })
    }

    checkStatus = (status) => {
        if (status.checked_in === 'no'){
            return <button onClick={()=> this.checkIn(status.id)}>Check In</button>
        } else {
            return <button onClick={() => this.checkOut(status.id)}>Check Out</button>
        }
    }

    delete = (id) => {
        console.log('this user id is', id)
        this.props.dispatch({ type: 'DELETE_PETS', payload:id })
    }

    checkIn = (id) => {
        console.log('clicked checkin', id)
        this.props.dispatch({ type: 'CHECK_IN_PETS', payload: id })
    }

    checkOut = (id) => {
        console.log('clicked checkout', id)
        this.props.dispatch({ type: 'CHECK_OUT_PETS', payload: id })
    }

    render()
     {
        const classes = withStyles();

        if (this.state.clicked === true){
        return (
            <div className="App">
                <div className="top">
                    <h1>Pet Hotel</h1>
                    <section className="btns">
                        <button className="dash"> Dashoard </button> &nbsp; <button onClick={this.seeOwner}> Manage Owners </button>
                    </section>
                </div>
                <form>
                    <h3 align="left">Add Pet</h3>
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
                <h3 align="left">History</h3>
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
                        {this.props.reduxState.petListReducer.map((info, i) => 
                        
                            <TableRow key={i}>
                                <TableCell align="right">Sam</TableCell>
                                <TableCell align="right">{info.name}</TableCell>
                                    <TableCell align="right">{info.breed}</TableCell>
                                    <TableCell align="right">{info.color}</TableCell>
                                    <TableCell align="right">{info.checked_in}</TableCell>
                                <TableCell align="right"><button onClick={() => this.delete(info.id)}>Delete</button>
                                 |{this.checkStatus(info)} </TableCell> 
                            </TableRow>
                        
                        )}

                        </TableBody>
                    </Table>
                </Paper>
                </div>

                )}
                else {
                return(
            <div className="App">
                <div className="top">
                    <h1>Pet Hotel</h1>
                    <section className="btns">
                            <button onClick={this.seeDash}> Dashoard </button> &nbsp; <button className="manage"> Manage Owners </button>
                     </section>
                </div>
                <form>
                    <h3 align="left">Add Owner</h3>
                    <input type="text" placeholder="Owner name" size="75"></input>
                    <button type="submit">Submit</button>
                </form>
                     <h3 align="left">Owners</h3>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Number of Pets</TableCell>
                                <TableCell align="right">Actions</TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {this.props.reduxState.petListReducer.map((info, i) => */}

                                <TableRow>
                                    <TableCell align="right">Sam</TableCell>
                                    <TableCell align="right">3</TableCell>
                                    <TableCell align="right"><button>Delete</button></TableCell>
                                </TableRow>

                            {/* )} */}

                        </TableBody>
                    </Table>
                </Paper>
            </div>




                )}
            }
        
        }
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
    
        
export default withStyles(styles)(connect(mapReduxStateToProps)(DashBoard));