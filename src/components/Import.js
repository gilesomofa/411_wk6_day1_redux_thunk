import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  Container,
  TableCell
} from "@material-ui/core";

const Import = props => {
  return (
<div>
    <Container maxWidth="lg" className="car-container">
    <div>
    <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
    </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
       
        <TableBody>
        {props.makes.map((make, index) => {
            return (
            <TableRow key={make.MakeId}>
              <TableCell>{make.MakeId}</TableCell>
              <TableCell>{make.MakeName}</TableCell>
              <TableCell></TableCell>
            </TableRow>             
              )
          })}
        </TableBody>
    </Container>
  </div>

export default Import;
