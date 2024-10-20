import { Autocomplete, TextField } from "@mui/material";

const roles = ["Software Dev", "Architect", "Designer", "Business Analyst"];

export default function BeautifulAutocomplete(props: {
  value: string;
  onInputChange: any;
}) {
  return (
    <Autocomplete
      {...props}
      options={roles}
      sx={{ minWidth: 300 }}
      renderInput={(params) => {
        return <TextField name="role" {...params} />;
      }}
      getOptionLabel={(roleOption) => `${roleOption}`}
      renderOption={(props, option) => {
        return <li {...props}>{`${option}`}</li>;
      }}
      isOptionEqualToValue={(option, value) => option === value || value === ""}
    />
  );
}
