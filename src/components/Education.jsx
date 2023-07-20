import React from "react";
import { darkTheme } from "../App";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Container,
} from "@mui/material";

function createRow(degree, tittle, institution, date) {
    return { degree, tittle, institution, date };
  }
  
  const rows = [
    createRow("B.Sc", "Electronics Engineering", "Pontificia Universidad Javeriana", "2018-2023"),
    createRow("Course", "Red Hat System Administration I (RH124)", "Red Hat", "2022"),
    createRow("Course", "CS50's Introduction to Artificial Intelligence with Python", "HarvardX", "2021"),
  ];

export default function Education() {
    return (
        <Paper elevation={2}>
            {/* Table to fit the paper size */}
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow sx={{backgroundColor: darkTheme.palette.action.selected}}>
                        <TableCell >Degree</TableCell>
                        <TableCell >Title</TableCell>
                        <TableCell >Institution</TableCell>
                        <TableCell >Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.degree}</TableCell>
                            <TableCell>{row.tittle}</TableCell>
                            <TableCell>{row.institution}</TableCell>
                            <TableCell>{row.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}