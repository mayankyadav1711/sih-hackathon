import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockDataCollege";
import Header from "../../components/Header";

const Invoicesc = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "projectname",
      headerName: "project Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "totalstudents",
      headerName: "Students enrolled",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.totalstudents}
        </Typography>
      ),
    },
    {
      field: "rating",
      headerName: "Rating",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.rating}
        </Typography>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="REPORTS" subtitle="Project reports of the year " />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            justifyContent:"center"
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoicesc;
