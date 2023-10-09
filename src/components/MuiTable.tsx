import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "320px" }}>
      <Table aria-label="sample table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Ivy",
    last_name: "Mathwen",
    email: "imathwen0@free.fr",
    gender: "Female",
    ip_address: "95.159.166.37",
  },
  {
    id: 2,
    first_name: "Inglis",
    last_name: "Halwell",
    email: "ihalwell1@gizmodo.com",
    gender: "Male",
    ip_address: "48.170.134.156",
  },
  {
    id: 3,
    first_name: "Micheil",
    last_name: "Blenkiron",
    email: "mblenkiron2@wikia.com",
    gender: "Male",
    ip_address: "198.17.131.207",
  },
  {
    id: 4,
    first_name: "Keslie",
    last_name: "Jelfs",
    email: "kjelfs3@ehow.com",
    gender: "Female",
    ip_address: "155.42.127.124",
  },
  {
    id: 5,
    first_name: "Melosa",
    last_name: "Trencher",
    email: "mtrencher4@tripod.com",
    gender: "Polygender",
    ip_address: "159.234.149.153",
  },
  {
    id: 6,
    first_name: "Agneta",
    last_name: "McDiarmid",
    email: "amcdiarmid5@howstuffworks.com",
    gender: "Female",
    ip_address: "27.49.129.60",
  },
  {
    id: 7,
    first_name: "Lily",
    last_name: "Crielly",
    email: "lcrielly6@samsung.com",
    gender: "Female",
    ip_address: "236.187.149.165",
  },
  {
    id: 8,
    first_name: "Concordia",
    last_name: "Carley",
    email: "ccarley7@nsw.gov.au",
    gender: "Female",
    ip_address: "210.225.34.132",
  },
  {
    id: 9,
    first_name: "Candy",
    last_name: "Fretwell",
    email: "cfretwell8@nature.com",
    gender: "Female",
    ip_address: "104.115.15.149",
  },
  {
    id: 10,
    first_name: "Alyda",
    last_name: "MacAllaster",
    email: "amacallaster9@blogtalkradio.com",
    gender: "Female",
    ip_address: "203.94.194.236",
  },
];
