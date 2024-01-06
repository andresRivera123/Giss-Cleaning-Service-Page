import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { ServicesTabs } from "../utils/servicesTabs";

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontSize: "2.2rem",
    "@media (max-width: 768px)": {
      fontSize: "1.8rem",
    },

    "&:hover": {
      color: "#4BA6DB",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#1976d2",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: {xs: 1, sm: 1, md: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsServices() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="basic tabs example"
        >
          <AntTab label="Basic general services" {...a11yProps(0)} />
          <AntTab label="Deep Cleaning" {...a11yProps(1)} />
          <AntTab label="Office Cleaning" {...a11yProps(2)} />
          <AntTab label="Recurring Cleaning" {...a11yProps(3)} />
          <AntTab label="Removal Cleaning" {...a11yProps(4)} />
          <AntTab label="Post-construction cleaning" {...a11yProps(5)} />
        </Tabs>
      </Box>
      {ServicesTabs.map((service) => (
         <CustomTabPanel key={service.id} value={value} index={service.id}>
          {service.contain}
         </CustomTabPanel>
      ))}
    </Box>
  );
}
