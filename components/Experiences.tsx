import { experiences } from "@/data/aboutData";
import {
  TabContext,
  TabList,
  TabPanel,
  Timeline,
  timelineItemClasses,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";

const Experiences = () => {
  const [value, setValue] = React.useState(`${experiences.length}`);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const ExpItem = ({
    icon,
    title,
    desc,
  }: {
    icon: React.ReactElement;
    title: string;
    desc: React.ReactElement;
  }) => {
    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            color="primary"
            variant="outlined"
            sx={{ border: "1px solid var(--primaryColorOp)", p: 0.8 }}
          >
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography sx={{ fontWeight: "700" }} component="span">
            {title}
          </Typography>
          <Typography>
            <small>{desc}</small>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    );
  };

  return (
    <TabContext value={value}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "var(--cardBgColor)",
          display: "flex",
          justifyContent: "center",
          ".MuiTabs-indicator": { backgroundColor: "var(--primaryColor)" },
        }}
      >
        <TabList
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          {experiences.map((e) => (
            <Tab
              key={e.id}
              sx={{
                color: "var(--foregroundColor)",
                opacity: 0.5,
                transition: "0.3s",
                py: 0,
                height: "40px",
                ":hover": { opacity: 1 },
                "&&.Mui-selected": {
                  opacity: 1,
                  color: "var(--primaryColor)",
                },
              }}
              label={e.year}
              value={e.id}
            />
          ))}
        </TabList>
      </Box>
      {experiences.map((e) => (
        <TabPanel key={e.id} value={e.id} sx={{ padding: 0, mt: 1.5 }}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
              px: 0,
            }}
          >
            {e.exp.map((item, index) => (
              <ExpItem
                key={index}
                icon={item.icon}
                title={item.title}
                desc={item.dec}
              />
            ))}
          </Timeline>
        </TabPanel>
      ))}
    </TabContext>
  );
};

export default Experiences;
