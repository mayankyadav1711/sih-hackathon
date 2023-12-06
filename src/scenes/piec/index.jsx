import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Piec = () => {
  return (
    <Box m="20px">
      <Header title="projects of 2023" subtitle=" pieChart representation" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Piec;
