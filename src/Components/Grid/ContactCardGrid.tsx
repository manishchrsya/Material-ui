import { useState } from "react";
import { contactData } from "../../Data/ContactData";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Grid2,
  List,
  ListSubheader,
  Typography,
} from "@mui/material";

const contactLTHeight = 24;
let maxSkills = 1;

export default function ContactCardGrid() {
  const [open, setOpen] = useState(true);

  const gridAlignProps = open
    ? {}
    : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };

  return (
    <Box m={1}>
      <Button variant="contained" onClick={() => setOpen(!open)}>
        Collapse
      </Button>
      <Grid2
        container
        spacing={2}
        sx={{
          width: 700,
          backgroundColor: "grid.main",
          maxHeight: "calc(100vh - 130px)",
          overflow: "auto",
          marginLeft: 0,
          paddingRight: 2,
          paddingBottom: 2,
        }}
      >
        {contactData.map((contact) => {
          maxSkills =
            contact.skills.length > maxSkills
              ? contact.skills.length
              : maxSkills;

          return (
            <Grid2
              key={contact.name}
              sx={{ ...gridAlignProps, marginLeft: 2, marginTop: 2 }}
            >
              <Card sx={{ width: 300, boxShadow: 6 }}>
                <CardHeader
                  sx={{
                    textAlign: "left",
                    borderBottom: "1px solid",
                    borderBottomColor: "primary.main",
                  }}
                  title={contact.name}
                  subheader={contact.role}
                  avatar={
                    <Avatar sx={{ backgroundColor: "primary.main" }}>
                      {contact.name?.substring(0, 1).toUpperCase() || "A"}
                    </Avatar>
                  }
                />
                <Collapse
                  in={open}
                  // timeout={2000}
                >
                  <CardContent
                    sx={{ height: 104 + maxSkills * contactLTHeight }}
                  >
                    <Typography sx={{ textAlign: "left" }}>
                      <b>Start Date:</b>
                      {contact.startDate}
                    </Typography>
                    <Typography sx={{ textAlign: "left" }}>
                      <b>Work Preference:</b>
                      {contact.preference}
                    </Typography>
                    <List
                      sx={{
                        listStyle: "list-item",
                        listStyleType: "circle",
                        paddingLeft: 2,
                      }}
                      subheader={
                        <ListSubheader
                          sx={{
                            textAlign: "left",
                            position: "inherit",
                            fontSize: "1.25rem",
                            color: "black",
                            paddingLeft: 0,
                          }}
                        >
                          Skills:
                        </ListSubheader>
                      }
                    >
                      {contact.skills.map((skill) => (
                        <li
                          style={{ textAlign: "left", paddingBottom: 2 }}
                          key={skill}
                        >
                          {skill}
                        </li>
                      ))}
                    </List>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
}
