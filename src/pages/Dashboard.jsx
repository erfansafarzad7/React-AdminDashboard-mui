import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Grid from "@mui/material/Grid";

import { mockTransactions } from "../data/mockData.js";
import { tokens } from "../theme.js";
import Header from "../components/Header.jsx";
import LineChart from "../components/LineChart.jsx";
import GeographyChart from "../components/GeographyChart.jsx";
import BarChart from "../components/Barchart.jsx";
import StatBox from "../components/StatBox.jsx";
import ProgressCircle from "../components/ProgressCircle.jsx";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Report
        </Button>
      </Box>

      {/* Grid */}
      <Grid container spacing={2}>
        {/* ROW 1 */}
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <Box
            backgroundColor={colors.primary[400]}
            alignItems="center"
            justifyContent="center"
            padding="15px"
          >
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <Box
            backgroundColor={colors.primary[400]}
            alignItems="center"
            justifyContent="center"
            padding="15px"
          >
            <StatBox
              title="431,225"
              subtitle="Sales Obtained"
              progress="0.50"
              increase="+21%"
              icon={
                <PointOfSaleIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <Box
            backgroundColor={colors.primary[400]}
            alignItems="center"
            justifyContent="center"
            padding="15px"
          >
            <StatBox
              title="32,441"
              subtitle="New Clients"
              progress="0.30"
              increase="+5%"
              icon={
                <PersonAddIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <Box
            backgroundColor={colors.primary[400]}
            alignItems="center"
            justifyContent="center"
            padding="15px"
          >
            <StatBox
              title="1,325,134"
              subtitle="Traffic Received"
              progress="0.80"
              increase="+43%"
              icon={
                <TrafficIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>

        {/* ROW 2 */}
        {/* LineChart */}
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 8 }}>
          <Box backgroundColor={colors.primary[400]}>
            <Box
              padding="15px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Revenue Generated
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.greenAccent[500]}
                >
                  $59,342.32
                </Typography>
              </Box>

              <Box>
                <IconButton>
                  <DownloadOutlinedIcon
                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                  />
                </IconButton>
              </Box>
            </Box>

            <Box height="250px" mt="-20px">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>
        {/* Transactions */}
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
          <Box
            backgroundColor={colors.primary[400]}
            overflow="auto"
            height="310px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                Recent Transactions
              </Typography>
            </Box>

            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* ROW 3 */}
        {/* ProgressCircle */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
          <Box backgroundColor={colors.primary[400]} p="15px">
            <Typography variant="h5" fontWeight="600">
              Campaign
            </Typography>

            {/* ProgressCircle */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="30px"
            >
              <ProgressCircle size="125" />

              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                sx={{ mt: "17px" }}
              >
                $48,352 revenue generated
              </Typography>

              <Typography>Includes extra misc expenditures</Typography>
            </Box>
          </Box>
        </Grid>
        {/* GeographyChart */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
          <Box backgroundColor={colors.primary[400]} padding="15px">
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ marginBottom: "15px" }}
            >
              Geography Based Traffic
            </Typography>

            <Box height="200px">
              <GeographyChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>
        {/* BarChart */}
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
          <Box backgroundColor={colors.primary[400]}>
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "15px 15px 0 15px" }}
            >
              Sales Quantity
            </Typography>

            <Box
              height={{ xs: "250px", sm: "350px", md: "250px", lg: "250px" }}
              mt="-20px"
            >
              <BarChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
