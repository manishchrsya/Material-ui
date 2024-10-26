import { FormGroup } from "@mui/material";
import { styled } from "@mui/material/styles";

type StyledFormGroupType = {
  paddingTop?: number;
};

export const StyledFormGroup = styled(FormGroup, {
  name: "StyledFormGroup",
  slot: "wrapper",
  skipSx: true,
})<StyledFormGroupType>((props) => {
  return {
    justifyContent: "space-between",
    padding: props.theme.spacing(2),
    paddingTop: props.paddingTop,
  };
});
