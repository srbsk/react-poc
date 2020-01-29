import React from '../../../node_modules/react';
import Table from '../../../node_modules/@material-ui/core/Table';
import TableCell from '../../../node_modules/@material-ui/core/TableCell';
import TableContainer from '../../../node_modules/@material-ui/core/TableContainer';
import TableRow from '../../../node_modules/@material-ui/core/TableRow';
// import Paper from '../../../node_modules/@material-ui/core/Paper';
import '../../../node_modules/@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


class Transaction extends React.Component {


    state = {
        id: null,
        accountId: null,
        isMaxPagesReached: null,
        statementLine: [],
        show: false
    };

    getTransactionData() {
        fetch("http://accounttransactions-test-poc.microservice-poc-cluster-044f07927e572f208c8d33e4eab5a229-0001.us-south.containers.appdomain.cloud/account-transactions/vOB/" + this.refs.id.value + "/transactions")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        id: result.id,
                        accountId: result.accountId,
                        isMaxPagesReached: result.isMaxPagesReached,
                        statementLine: result.statementLine
                    });
                });
        this.setState({ show: true });
    }


    render() {
        return (
            <html>
                <br /><br />
                <center><text>Account ID</text><span>&nbsp;&nbsp;</span>
                    <input type="text" ref="id" name="id" /><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
                    <button onClick={() => this.getTransactionData()}>SEARCH</button></center><br /><br />
                {this.state.show ?
                    <TableContainer >
                        <Table style={{ width: 900, margin: 'auto' }}>
                            <TableRow bgcolor="#B5938B">
                                <TableCell align="left"><bold>ID</bold></TableCell>
                                <TableCell align="center">
                                    {this.state.id}
                                </TableCell>
                            </TableRow>
                            <TableRow bgcolor="#f2f2f2">
                                <TableCell align="left"><bold>ACCOUNT ID</bold></TableCell>
                                <TableCell align="center">{this.state.accountId}</TableCell>
                            </TableRow>
                            <TableRow bgcolor="#f2f2f2">
                                <TableCell align="left"><bold>MaxPagesReached</bold></TableCell>
                                <TableCell align="center">
                                    {this.state.isMaxPagesReached != null ?
                                        String(this.state.isMaxPagesReached) : this.state.isMaxPagesReached}
                                </TableCell>
                            </TableRow>
                            {this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>TRANSACTION ID</bold></TableCell>
                                    <TableCell align="center">{l.transactionId}</TableCell>
                                </TableRow>
                            ))}
                            {this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>TRANSACTION ID SCHEME</bold></TableCell>
                                    <TableCell align="center">{l.transactionIdScheme}</TableCell>
                                </TableRow>))}
                            {this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>POSTED DATE</bold></TableCell>
                                    <TableCell align="center">{l.postedDate}</TableCell>
                                </TableRow>
                            ))}
                        </Table>
                    </TableContainer> : null}
            </html >
        )
    }
}

export default Transaction;