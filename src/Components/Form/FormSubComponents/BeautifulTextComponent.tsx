import { TextField } from "@mui/material";

export default function BeautifulTextComponent(props: {
  value: any;
  onChange: any;
}) {
  return (
    <TextField
      id="name"
      name="name"
      label="Name"
      variant="outlined"
      sx={{
        minWidth: 300,
        marginRight: 2,
        zIndex: "drawer",
        "& .MuiInputBase-root": {
          height: 80,
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "primary.dark",
          },
        },
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: "orange",
          },
        },
        // marginBottom: { xs: 2, md: 0 },
        // marginRight: { md: 2 },
        // "&: .MuiOutlinedInput-root.Mui-focused": {
        //   "& > fieldset": {
        //     borderColor: "primary.dark",
        //   },
        // },
        // "&: .MuiOutlinedInput-root:hover": {
        //   "& > fieldset.MuiOutlinedInput-notchedOutline": {
        //     borderColor: "orange",
        //   },
        // },
      }}
      {...props}
    />
  );
}
