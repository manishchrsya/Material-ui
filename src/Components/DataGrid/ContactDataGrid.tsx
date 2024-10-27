import { GridRenderCellParams, GridToolbar } from "@mui/x-data-grid";
import { contactData } from "../../Data/ContactData";
import { Box, Button, Theme } from "@mui/material";
import { useTheme } from "@emotion/react";
import { DataGrid } from "@mui/x-data-grid";

const handlePrintClick = (cellValue: any) => {
  console.log("cellValue", cellValue);
};

const dataGridSx = {
  "& .MuiDataGrid-columnHeaders": {
    fontWeight: "bold",
    fontSize: "20px",
  },
  "& .MuiDataGrid-container--top [role=row]": {
    backgroundColor: "primary.main",
  },
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    "& .MuiDataGrid-row": {
      "&:nth-of-type(2n)": {
        backgroundColor: "grid.main",
      },
    },
  },
};

const columns = (theme: Theme) => [
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    renderCell: (cellValue: GridRenderCellParams) => {
      return (
        <Box
          sx={{ color: "primary.main", fontSize: "18px", fontWeight: "bold" }}
        >
          {cellValue.value}
        </Box>
      );
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
  {
    field: "Print",
    renderCell: (cellValue: GridRenderCellParams) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handlePrintClick(cellValue)}
        >
          Print
        </Button>
      );
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
        sx={dataGridSx}
        slots={{
          toolbar: () => (
            <GridToolbar
              sx={{
                justifyContent: "flex-end",
                "& button": { Border: "none" },
                "& .MuiBox-root": { display: "none" },
              }}
            ></GridToolbar>
          ),
        }}
        initialState={{
          sorting: { sortModel: [{ field: "name", sort: "asc" }] },
        }}
      ></DataGrid>
    </div>
  );
}
