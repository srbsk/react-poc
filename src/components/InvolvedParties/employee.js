import React from '../../../node_modules/react';
import Table from '../../../node_modules/@material-ui/core/Table';
import TableCell from '../../../node_modules/@material-ui/core/TableCell';
import TableContainer from '../../../node_modules/@material-ui/core/TableContainer';
import TableRow from '../../../node_modules/@material-ui/core/TableRow';
import Paper from '../../../node_modules/@material-ui/core/Paper';
import '../../../node_modules/@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


class Employee extends React.Component {


    state = {
        id: null,
        involvedPartyId: null
        // names: [],
        // dateOfBirth: null,
        // nationality: null,
        // marketingFlags: [],
        // softLock: null,
        // taxDeclaration: null,
        // contactPoints: [],
        // iDstatus: null
    };


    getEmployeeData() {
        fetch('http://involvedparties-test-poc.microservice-poc-cluster-044f07927e572f208c8d33e4eab5a229-0001.us-south.containers.appdomain.cloud/nem/involved-parties/v1/' + this.refs.involvedPartyId.value)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        id: result.id,
                        involvedPartyId: result.involvedPartyId
                        // names: result.names,
                        // dateOfBirth: result.dateOfBirth,
                        // nationality: result.nationality,
                        // marketingFlags: result.marketingFlags,
                        // softLock: result.softLock,
                        // taxDeclaration: result.taxDeclaration,
                        // contactPoints: result.contactPoints,
                        // iDstatus: result.iDstatus
                    });
                });
        this.setState({ show: true });
    }


    render() {
        return (
            <html>
                {/* <TableContainer component={Paper}>
                    <Table>
                        <TableRow bgcolor="GREY">
                            {this.state.link.map(l => (
                                <TableCell align="center">
                                    <bold><a href={l.href}>{l.rel}</a></bold>
                                </TableCell>))}
                        </TableRow>
                    </Table>
                </TableContainer> */}
                <br /><br />
                <center><text>Involved Party ID</text><span>&nbsp;&nbsp;</span>
                    <input type="text" ref="involvedPartyId" name="involvedPartyId" /><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
                    <button onClick={() => this.getEmployeeData()}>SEARCH</button></center><br /><br />
                {this.state.show ?
                    <TableContainer component={Paper}>
                        <Table style={{ width: 900, margin: 'auto' }}>
                            <TableRow bgcolor="#B5938B">
                                <TableCell align="left"><bold>ID</bold></TableCell>
                                <TableCell align="center">{this.state.id}</TableCell>
                            </TableRow>
                            <TableRow bgcolor="#f2f2f2">
                                <TableCell align="left"><bold>Involved party ID</bold></TableCell>
                                <TableCell align="center">{this.state.involvedPartyId}</TableCell>
                            </TableRow>
                            {/* {this.state.statementLine.map(l => (
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
                            ))} */}
                        </Table>
                    </TableContainer> : null}
            </html >
        )
    }
}

export default Employee;