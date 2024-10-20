import { contactData } from "../../Data/ContactData";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid2,
  List,
  ListSubheader,
  Typography,
} from "@mui/material";

export default function ContactCardGrid() {
  return (
    <Grid2 container spacing={2} sx={{ width: 700 }}>
      {contactData.map((contact) => (
        <Grid2 key={contact.name}>
          <Card sx={{ width: 300 }}>
            <CardHeader
              sx={{ textAlign: "left" }}
              title={contact.name}
              subheader={contact.role}
              avatar={
                <Avatar>
                  {contact.name?.substring(0, 1).toUpperCase() || "A"}
                </Avatar>
              }
            />

            <CardContent>
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
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}
