import React from '../../../node_modules/react';
import Table from '../../../node_modules/@material-ui/core/Table';
import TableCell from '../../../node_modules/@material-ui/core/TableCell';
import TableContainer from '../../../node_modules/@material-ui/core/TableContainer';
import TableRow from '../../../node_modules/@material-ui/core/TableRow';
// import Paper from '../../../node_modules/@material-ui/core/Paper';
import '../../../node_modules/@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


class InvolvedPartyAccountBalance extends React.Component {


    state = {
	id: null,
	_rev: 5-null,
	firstName: null,
	lastName: null,
	isAccountListComplete: null,
	accounts: [
		{
			internalAccount: null,
			externalAccount: null,
			accountType: null,
			accountSubTypeCode: null,
			accountHostLocation: null,
			productName: null,
			maskedPAN: null,
			isCachedBalance: true,
			isLockCheckDone: true,
			availableBalance: {
				currencyAmount: {
					amount: null,
					currency: null
				}
			},
			currentBalance: {
				currencyAmount: {
					amount: null,
					currency: null
				}
			},
			availableBalanceDateTime: null,
			currentBalanceDateTime: null,
			agreedLimit: {
				currencyAmount: {
					amount: null,
					currency: null
				}
			},
			authorisationLimit: {
				currencyAmount: {
					amount: null,
					currency: null
				}
			}
		}
	],
	validatedAccount: null,
	loopback__model__name: null,
	show: false
};

    getInvolvedPartyAccountBalance() {
        fetch("http://accountbalance-app-test-poc.microservice-poc-cluster-044f07927e572f208c8d33e4eab5a229-0001.us-south.containers.appdomain.cloud/account-balances/v2/003a5723a280fe21e135db9f02bb3d2e/balances")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
						id: result.id,
						_rev: result._rev,
						firstName: result.firstName,
						lastName: result.lastName,
						isAccountListComplete: result.isAccountListComplete,
						accounts:result.accounts
						
                    });
                });
        this.setState({ show: true });
    }


    render() {
        return (
            <html>
                <br /><br />
                <center><text>Involved Party Account Balance</text><span>&nbsp;&nbsp;</span>
                    <input type="text" ref="id" name="id" /><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
                    <button onClick={() => this.getInvolvedPartyAccountBalance()}>GET BALANCE</button></center><br /><br />
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
                                <TableCell align="left"><bold>_rev</bold></TableCell>
                                <TableCell align="center">{this.state._rev}</TableCell>
                            </TableRow>
                            <TableRow bgcolor="#f2f2f2">
                                <TableCell align="left"><bold>First Name</bold></TableCell>
                                <TableCell align="center">{this.state.firstName}</TableCell>
                            </TableRow>
							<TableRow bgcolor="#f2f2f2">
                                <TableCell align="left"><bold>Last Name</bold></TableCell>
                                <TableCell align="center">{this.state.lastName}</TableCell>
                            </TableRow>
							<TableRow bgcolor="#f2f2f2">
                                <TableCell align="left"><bold>isAccountListComplete</bold></TableCell>
                                <TableCell align="center">{this.state.isAccountListComplete}</TableCell>
                            </TableRow>
                            {this.state.accounts.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>internalAccount</bold></TableCell>
                                    <TableCell align="center">{l.internalAccount}</TableCell>
                                </TableRow>
                            ))}
                            {this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>externalAccount</bold></TableCell>
                                    <TableCell align="center">{l.externalAccount}</TableCell>
                                </TableRow>))}
                            {this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>accountType</bold></TableCell>
                                    <TableCell align="center">{l.accountType}</TableCell>
                                </TableRow>
                            ))}
                        </Table>
                    </TableContainer> : null}
            </html >
        )
    }
}

export default InvolvedPartyAccountBalance;