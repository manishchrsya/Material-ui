import { ListItemText, MenuItem, Select } from "@mui/material";
const skills = ["React", "Angular", "Python", "NodeJs", "Machine Learning"];

export default function BeautifulSelect(props: { value: any; onChange: any }) {
  return (
    <Select
      {...props}
      id="skill-select"
      sx={{ minWidth: 300, marginRight: 2 }}
      renderValue={(select: string[]) => {
        return [select].join(",");
      }}
      multiple
    >
      {skills.map((skillName) => {
        return (
          <MenuItem value={skillName} key={skillName}>
            <ListItemText primary={skillName} />
          </MenuItem>
        );
      })}
    </Select>
  );
}
