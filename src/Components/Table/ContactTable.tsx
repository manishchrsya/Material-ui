import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { contactData } from "../../Data/ContactData";

const borderColor = {
  borderBottomColor: "primary.main",
};

export default function ContactTable() {
  return (
    <TableContainer
      sx={{
        borderRadius: 1,
        boxShadow: 4,
        margin: 1,
        width: "calc(100% - 16px)",
      }}
    >
      <Table>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "grid.main",
            }}
          >
            <TableCell sx={{ ...borderColor, width: "5%" }}>#</TableCell>
            <TableCell sx={{ ...borderColor, width: "25%" }}>Name</TableCell>
            <TableCell sx={{ ...borderColor, width: "17%" }}>Role</TableCell>
            <TableCell sx={{ ...borderColor, width: "17%" }}>Skills</TableCell>
            <TableCell sx={{ ...borderColor, width: "17%" }}>
              Start Date
            </TableCell>
            <TableCell sx={{ ...borderColor, width: "19%" }}>
              Preference
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactData.map((contact) => (
            <TableRow key={contact.name}>
              {Object.entries(contact).map(([key, value]) => {
                if (key === "skills") {
                  return (
                    <TableCell
                      key={`${contact.id}/${key}`}
                      sx={{ ...borderColor }}
                    >
                      {value.join(", ")}
                    </TableCell>
                  );
                }
                if (key === "name") {
                  return (
                    <TableCell
                      key={`${contact.id}/${key}`}
                      sx={{ ...borderColor, backgroundColor: "primary.light" }}
                      onClick={(e: React.MouseEvent<HTMLElement>) => {
                        console.log("event", (e.target as Element).innerHTML);
                      }}
                    >
                      {value || "--"}
                    </TableCell>
                  );
                }
                return (
                  <TableCell
                    key={`${contact.id}/${key}`}
                    sx={{ ...borderColor }}
                  >
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
