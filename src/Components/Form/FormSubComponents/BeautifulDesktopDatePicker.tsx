import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function BeautifulDesktopDatePicker(props: {
  value: any;
  onChange: any;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        {...props}
        label="Date"
        slotProps={{
          textField: {
            id: "date",
            name: "date",
            variant: "outlined",
            sx: { minWidth: 300 },
          },
        }}
      />
    </LocalizationProvider>
  );
}
