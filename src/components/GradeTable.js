import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";

const GradeTable = ({ onAdd }) => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const getGrades = async () => {
      const gradesFromServer = await fetchGrades();
      setGrades(gradesFromServer);
    };

    getGrades();
  }, []);

  const fetchGrades = async () => {
    const res = await fetch("http://localhost:5000/grades");
    const data = await res.json();

    return data;
  };

  return (
    <div className="gradeTable">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell>Student</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>

          {/* table data */}
          <TableBody>
            {grades.map((grade) => (
              <TableRow
                key={grade.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{grade.selectionCourse || "N/A"}</TableCell>
                <TableCell>{grade.selectionStudent || "N/A"}</TableCell>
                <TableCell>{grade.selectionGrade || "N/A"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default GradeTable;
