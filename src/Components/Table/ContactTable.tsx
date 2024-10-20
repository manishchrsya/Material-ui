import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { contactData } from "../../Data/ContactData";

export default function ContactTable() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Preference</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactData.map((contact) => (
            <TableRow key={contact.name}>
              {Object.entries(contact).map(([key, value]) => {
                if (key === "skills") {
                  return (
                    <TableCell key={`${contact.id}/${key}`}>
                      {value.join(", ")}
                    </TableCell>
                  );
                }
                return (
                  <TableCell key={`${contact.id}/${key}`}>
                    {value || "--"}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
