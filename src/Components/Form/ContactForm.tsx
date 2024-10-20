import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  FormControl,
  FormGroup,
  Paper,
  Stack,
} from "@mui/material";

import { contactData, FormValues } from "../../Data/ContactData";
import { useState } from "react";
import BeautifulTextComponent from "./FormSubComponents/BeautifulTextComponent";
import BeautifulSelect from "./FormSubComponents/BeautifulSelect";
import BeautifulDesktopDatePicker from "./FormSubComponents/BeautifulDesktopDatePicker";
import BeautifulRadios from "./FormSubComponents/BeautifulRadios";
import BeautifulAutocomplete from "./FormSubComponents/BeautifulAutocomplete";

const today = new Date();
const defaultPreference = "Work from Home";

export default function ContactForm() {
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
      <Paper>
        <form>
          <FormControl>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifulTextComponent
                value={formValues.name}
                onChange={handleTextFieldChange}
              />
              <BeautifulAutocomplete
                onInputChange={handleAutoCompleteChange}
                value={formValues.role || ""}
              />
            </FormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifulSelect
                onChange={handleSelectChange}
                value={formValues.skills}
              />
              <BeautifulDesktopDatePicker
                value={formValues.startDate}
                onChange={handleDatePickerChange}
              />
            </FormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifulRadios
                onChange={handleRadioChange}
                value={formValues.preference}
              />
              <Stack>
                <Button onClick={handleSubmit} variant="contained">
                  Submit
                </Button>
                <Button onClick={handleClear}>Clear</Button>
              </Stack>
            </FormGroup>
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
