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



class TableItem extends Component {

    
    render() {
        const classes = withStyles();
        return (
            this.props.info.map((pet, i) => {
                <TableCell> </TableCell>
            })

        );
    }

}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});


export default withStyles(styles)(connect(mapReduxStateToProps)(TableItem));