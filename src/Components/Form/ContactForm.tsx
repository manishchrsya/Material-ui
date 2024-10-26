import {
  Alert,
  AlertTitle,
  Button,
  Checkbox,
  Dialog,
  FormControl,
  ListItemText,
  MenuItem,
  Paper,
  Stack,
  useTheme,
} from "@mui/material";

import { contactData, FormValues } from "../../Data/ContactData";
import { useState } from "react";
import BeautifulTextComponent from "./FormSubComponents/BeautifulTextComponent";
import BeautifulSelect from "./FormSubComponents/BeautifulSelect";
import BeautifulDesktopDatePicker from "./FormSubComponents/BeautifulDesktopDatePicker";
import BeautifulRadios from "./FormSubComponents/BeautifulRadios";
import BeautifulAutocomplete from "./FormSubComponents/BeautifulAutocomplete";
import { StyledFormGroup } from "./FormSubComponents/StyledFormGroup";

const today = new Date();
const defaultPreference = "Work from Home";

const skills = ["React", "Angular", "Python", "NodeJs", "Machine Learning"];

const paperInputStyle = {
  "& .MuiOutlinedInput-root": {
    "& > fieldset": { border: "1px solid", borderColor: "primary.main" },
    "&:hover": {
      "& > fieldset": { borderColor: "primary.light" },
    },
  },
  "& .MuiFormLabel-root": {
    color: "primary.dark",
  },
};

export default function ContactForm() {
  const theme = useTheme();

  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: "",
      skills: ["React"],
      startDate: `${
        today.getMonth() + 1
      }/${today.getDate()}/${today.getFullYear()}`,
      preference: defaultPreference,
    };
  };

  const [formValues, setFormValues] = useState<FormValues>(
    getDefaultFormValues()
  );
  const [alertOpen, setAlertOpen] = useState(false);

  const handleTextFieldChange = (event: any) => {
    const { value, name } = event.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAutoCompleteChange = (event: any, value: any) => {
    setFormValues((prev) => ({ ...prev, roles: value || "" }));
  };

  const handleSelectChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setFormValues((prev) => ({
      ...prev,
      skills: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const handleDatePickerChange = (event: any) => {
    const startDate = event as unknown as {
      getMonth: () => string;
      getDate: () => string;
      getFullYear: () => string;
    };

    setFormValues((prev) => ({
      ...prev,
      startDate: `${
        startDate.getMonth() + 1
      }/${startDate.getDate()}/${startDate.getFullYear()}`,
    }));
  };

  const handleRadioChange = (event: any) => {
    setFormValues((prev) => ({ ...prev, preference: event.target.value }));
  };

  const handleSubmit = () => {
    contactData.push({ ...formValues, id: contactData.length + 1 });
    setAlertOpen(true);
    setFormValues({ ...getDefaultFormValues() });
  };
  const handleClear = () => {
    setFormValues(getDefaultFormValues());
  };

  const handleAlertClick = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Paper sx={paperInputStyle}></Paper>
      <Paper
        sx={{
          ...paperInputStyle,
          margin: { xs: 1, sm: 2 },
          color: "yellow",
          zIndex: theme.zIndex.appBar,
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.1)",
          },
          backgroundColor: "grid.dark",
        }}
      >
        <form>
          <FormControl>
            <StyledFormGroup row paddingTop={10}>
              <BeautifulTextComponent
                value={formValues.name}
                onChange={handleTextFieldChange}
              />
              <BeautifulAutocomplete
                onInputChange={handleAutoCompleteChange}
                value={formValues.role || ""}
              />
            </StyledFormGroup>
            <StyledFormGroup row>
              <BeautifulSelect
                onChange={handleSelectChange}
                value={formValues.skills}
              >
                {skills.map((skillName) => {
                  return (
                    <MenuItem value={skillName} key={skillName}>
                      <Checkbox
                        checked={formValues.skills?.includes(skillName)}
                      />
                      <ListItemText primary={skillName} />
                    </MenuItem>
                  );
                })}
              </BeautifulSelect>
              <BeautifulDesktopDatePicker
                value={formValues.startDate}
                onChange={handleDatePickerChange}
              />
            </StyledFormGroup>
            <StyledFormGroup row>
              <BeautifulRadios
                onChange={handleRadioChange}
                value={formValues.preference}
              />
              <Stack
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                sx={{ minWidth: 300 }}
              >
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{ height: 56, width: 100 }}
                >
                  Submit
                </Button>
                <Button
                  variant="beautiful"
                  onClick={handleClear}
                  sx={{ height: 56, width: 100 }}
                >
                  Clear
                </Button>
              </Stack>
            </StyledFormGroup>
          </FormControl>
        </form>
      </Paper>
      <Dialog open={alertOpen} onClose={handleAlertClick}>
        <Alert onClose={handleAlertClick}>
          <AlertTitle>Success!</AlertTitle>
          Form Submitted
        </Alert>
      </Dialog>
    </>
  );
}
