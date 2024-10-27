import { Select } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function BeautifulSelect(props: {
  value: any;
  onChange: any;
  children: any;
}) {
  const selectInputComponent = useRef<HTMLInputElement>(null);

  const [position, setPosition] = useState(0);

  useEffect(() => {
    setPosition(
      selectInputComponent.current
        ? selectInputComponent.current.getBoundingClientRect().left + 20
        : 0
    );
  }, [selectInputComponent]);

  return (
    <Select
      ref={selectInputComponent}
      {...props}
      id="skill-select"
      sx={{
        minWidth: 300,
        marginRight: 2,
        marginBottom: {
          xs: 2,
          md: 0,
        },
      }}
      renderValue={(select: string[]) => {
        return [select].join(",");
      }}
      multiple
      MenuProps={{
        PaperProps: {
          sx: {
            left: `${position}px !important`,
          },
        },
      }}
    >
      {props.children}
    </Select>
  );
}
