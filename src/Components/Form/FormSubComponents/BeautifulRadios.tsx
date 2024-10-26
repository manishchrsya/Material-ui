import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default function BeautifulRadios(props: {
  value: string | undefined;
  onChange: (event: any) => void;
}) {
  return (
    <FormControl disabled>
      <FormGroup sx={{ minWidth: 300, marginRight: 2 }}>
        <FormLabel component={"legend"}>Work Preference</FormLabel>
        <RadioGroup {...props} id="preference-type-radio" name="preference">
          <FormControlLabel
            control={<Radio />}
            label="Work from Home"
            value={"Work from Home"}
          />
          <FormControlLabel
            control={<Radio />}
            label="Hybrid"
            value={"Hybrid"}
          />
          <FormControlLabel
            control={<Radio />}
            label="In Office"
            value={"In Office"}
          />
        </RadioGroup>
      </FormGroup>
    </FormControl>
  );
}
