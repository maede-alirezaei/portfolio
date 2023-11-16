import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { TabPanel, a11yProps } from "./components/TabPanel";

function App() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabsRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event: { deltaY: number }) => {
      console.log(event);
      if (event.deltaY > 0) {
        setValue((prev) => prev + 1);
      } else {
        setValue((prev) => prev - 1);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
  return (
    <Box sx={{ bgcolor: "background.paper", display: "flex", width: "100%" }}>
      <Tabs
        ref={tabsRef}
        orientation="vertical"
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}

export default App;
