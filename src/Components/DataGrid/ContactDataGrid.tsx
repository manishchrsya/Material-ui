import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { contactData } from "../../Data/ContactData";
import { Theme } from "@mui/material";
import { useTheme } from "@emotion/react";

const columns = (theme: Theme) => [
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    renderCell: (cellValue: GridRenderCellParams) => {
      return <div>{cellValue.value}</div>;
    },
  },
  {
    field: "role",
    headerName: "Role",
    minWidth: 150,
    renderCell: (cellValue: GridRenderCellParams) => {
      return <div>{cellValue.value}</div>;
    },
  },
  {
    field: "skills",
    headerName: "Skills",
    minWidth: 150,
    renderCell: (cellValue: GridRenderCellParams) => {
      return (
        <div style={{ color: theme.palette?.primary?.main }}>
          {cellValue.value ? cellValue.value[0] : ""}
        </div>
      );
    },
  },
  {
    field: "startDate",
    headerName: "Start Date",
    minWidth: 150,
    renderCell: (cellValue: GridRenderCellParams) => {
      return <div>{cellValue.value}</div>;
    },
  },
  {
    field: "preference",
    headerName: "Work Preference",
    minWidth: 150,
    renderCell: (cellValue: GridRenderCellParams) => {
      return <div>{cellValue.value}</div>;
    },
  },
];

export default function ContactDataGrid() {
  const theme = useTheme();
  return (
    <div style={{ height: 500 }}>
      <DataGrid
        columnHeaderHeight={60}
        rowHeight={120}
        rows={contactData}
        columns={columns(theme as Theme)}
      />
    </div>
  );
}
