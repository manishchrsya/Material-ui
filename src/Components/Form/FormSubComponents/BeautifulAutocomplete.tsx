import { Autocomplete, TextField } from "@mui/material";

const roles = ["Software Dev", "Architect", "Designer", "Business Analyst"];

const minWidth = 300;

export default function BeautifulAutocomplete(props: {
  value: string;
  onInputChange: any;
}) {
  return (
    <Autocomplete
      {...props}
      options={roles}
      sx={{ minWidth }}
      renderInput={(params) => {
        return (
          <TextField
            name="role"
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused": {
                color: "primary.dark",
              },
            }}
            {...params}
          />
        );
      }}
      getOptionLabel={(roleOption) => `${roleOption}`}
      renderOption={(props, option) => {
        return <li {...props}>{`${option}`}</li>;
      }}
      isOptionEqualToValue={(option, value) => option === value || value === ""}
      ListboxProps={{
        sx: {
          height: 100,
          color: "primary.dark",
          "& li.MuiAutocomplete-option:nth-child(even)": {
            backgroundColor: "green",
          },
          "& li.MuiAutocomplete-option:hover": {
            backgroundColor: "gold",
          },
          "& li.MuiAutocomplete-option[aria-selected='true'].Mui-focused": {
            backgroundColor: "gold",
          },
        },
      }}
    />
  );
}
