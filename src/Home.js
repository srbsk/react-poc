import React from 'react';
import { Button } from 'reactstrap';
import nationwideimage from '../src/images/Nationwide+Building+Society+logo.png';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class app extends React.Component {


  state = {
    id: null,
    firstname: null,
    lastname: null,
    address: null,
    link: [],
    transactionID: null
  };

  getEmployeeData() {
    fetch('http://localhost:5000/getrecords/' + this.refs.id.value)
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            id: result.id,
            firstname: result.firstname,
            lastname: result.lastname,
            address: result.address,
            link: result.links,
            transactionID:result.transactionID
          });
        });
  }


  render() {
    return (
      <html>
        <center><img src={nationwideimage} className="" alt="logo" /></center>
        <TableContainer component={Paper}>
          <Table>
            <TableRow bgcolor="WHITE">
              {this.state.link.map(l => (
                <TableCell align="center">
                  <bold><a href={l.href}>{l.rel}</a></bold>
                </TableCell>))}
            </TableRow>
          </Table>
        </TableContainer>
        <br /><br />
        <center><text>ID</text><span>&nbsp;&nbsp;</span>
          <input type="text" ref="id" name="id" /><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
          <button onClick={() => this.getEmployeeData()}>SEARCH</button></center><br /><br />
        <TableContainer component={Paper}>
          <Table style={{ width: 900, margin: 'auto' }}>
            <TableRow bgcolor="#B5938B">
              <TableCell align="left"><bold>ID</bold></TableCell>
              <TableCell align="center">
                {this.state.id}
              </TableCell>
            </TableRow>
            <TableRow bgcolor="#f2f2f2">
              <TableCell align="left"><bold>FIRST NAME</bold></TableCell>
              <TableCell align="center">{this.state.firstname}</TableCell>
            </TableRow>
            <TableRow bgcolor="#f2f2f2">
              <TableCell align="left"><bold>LAST NAME</bold></TableCell>
              <TableCell align="center">{this.state.lastname}</TableCell>
            </TableRow>
            <TableRow bgcolor="#f2f2f2">
              <TableCell align="left"><bold>ADDRESS</bold></TableCell>
              <TableCell align="center">{this.state.address}</TableCell>
            </TableRow>
            <TableRow bgcolor="#f2f2f2">
              <TableCell align="left"><bold>TRANSACTION ID</bold></TableCell>
              <TableCell align="center">{this.state.transactionID}</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </html >
    )
  }
}