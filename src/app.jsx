import { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import avatarImg from "@/assets/Avatar.png";
import MenuIcon from '@mui/icons-material/Menu';
import BMW from '@/assets/bmw.jpg'
import MersWhite from './assets/mersWhite.jpg'
import bugatti from './assets/bugatti.jpg'
import opel from './assets/opel.jpg'
import sem from './assets/07.jpg'
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import Typography from '@mui/material/Typography';
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import "./app.css";
import { AccountCircle, DarkMode, Delete, Edit, PhoneRounded, Sunny } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import { ThemeContextt } from "./assets/context/theme";

export default function App() {
  const [user, setUser] = useState([
    {
      id: "1",
      name: "BMW",
      city: "Germany",
      status: false,
      color: "black  ",
      avatar: BMW,
      model: "M5",
    },
    {
      id: "2",
      name: "Mersedes",
      city: "Germany",
      status: true,
      color:'white',
      avatar: MersWhite,
      model:'Maybach'
    },
    {
      id: "3",
      name: "Buggati",
      city: "France",
      status: false,
       color:'blue',
      avatar: bugatti,
       model:'Bunty Clour'
    },
     {
      id: "4",
      name: "Opel",
      city: "Germany",
      status: false,
      color:'blue',
      avatar: opel,
      model: "Astra G",
    },
   {
      id: "5",
      name: "07",
      city: "Russia",
      status: false,
     color:'brown',
      avatar: sem,
      model :'semyorka'
    },


  ]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterCity, setFilterCity] = useState("");
  // add

  const [openAdd, setOpen] = useState(false);
  const [addName, setAddName] = useState("");
  const [addAvatar, setAddAvatar] = useState("");
  const [addEmail, setAddEmail] = useState("");
  const [addCity, setAddCity] = useState("");
  const [addStatus, setAddStatus] = useState(false);
  const [addPhone, setAddPhone] = useState("");

  // edit

  const [openEdit, setEditOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const [editAvatar, setEditAvatar] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editCity, setEditCity] = useState("");
  const [editStatus, setEditStatus] = useState(false);
  const [editPhone, setEditPhone] = useState("");
  const [idx, setIdx] = useState(null);

  const [id, setId] = useState(null);

  const {theme, setTheme} = useContext(ThemeContextt)

  useEffect(() => {
    if(theme){
      document.body.style.backgroundColor = 'rgb(92, 93, 68)'
    }
    else{
      document.body.style.backgroundColor = ''
    }
  }, [theme])

  function handleinfoForUser(user) {
    setId(user.id);
    setEditName(user.name)

    setEditEmail(user.color)

    setEditPhone(user.model)

    setEditCity(user.city)
    setEditAvatar(user.avatar)

    setEditStatus(user.status)

    setIdx(user.id)
  }

  const handleAddClickOpen = () => {
    setOpen(true);
  };

  const handleAddClose = () => {
    setOpen(false);
  };

  const handleEditClickOpen = () => {
    setEditOpen(true);
    openeditMOdal(user.id);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  function openeditMOdal(id) {
    const yoftan = user.find((el) => el.id === id);
    if (condition) {
      setEditName(yoftan.name);
      setEditAvatar(yoftan.avatar);

      setIdx(yoftan.id);
    }
  }

  function handleEdit() {
    setUser(user.map(el => {
      if(el.id == idx){
        el.name = editName;
        el.model = editPhone;
        el.color = editEmail;
        el.avatar = editAvatar;
        el.city = editCity;
        el.status = editStatus;
      }
      return el
    }))
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // delete

  function handleDelete() {
    setUser(user.filter((el) => el.id != id));
    // console.log(id);
  }

  function handleAdd() {
    const newAddUser = {
      id: Date.now(),
      name: addName,
      avatar: addAvatar,
      email: addEmail,
      city: addCity,
      status: addStatus === "true",
      model: addPhone,
    };
    setUser([...user, newAddUser]);
    setAddAvatar("");
    setAddName("");
    setAddEmail("");
    setAddPhone("");

    handleAddClose();
  }

  return (
    <>
   <h1 style={{marginLeft:'200px',fontSize:'50px'}}>TODO Car's</h1>
      <div className="nav">
        <div className="selectstatusAndCity">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Filter</InputLabel>
            <Select
              style={{ marginTop: "-5px", padding: "5px" }}
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={filterStatus}
              label="Filter"
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <MenuItem value={""}>All</MenuItem>
              <MenuItem value={true}>Active</MenuItem>
              <MenuItem value={false}>Inactive</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Filter</InputLabel>
            <Select
              style={{ marginTop: "-5px", padding: "5px" }}
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={filterCity}
              label="Filter"
              onChange={(e) => setFilterCity(e.target.value)}
            >
              <MenuItem value={""}>All</MenuItem>
              <MenuItem value={"Russia"}>Russia</MenuItem>
              <MenuItem value={"Germany"}>Germany</MenuItem>
              <MenuItem value={"France"}>France</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="searchAndAdd">
          <Button variant="outlined" onClick={handleAddClickOpen}>
            +NEW
          </Button>

          <div> <Button onClick={() => setTheme(true)}><DarkMode/></Button>
    <Button onClick={() => setTheme(false)}><Sunny/></Button></div>

          <TextField
            id="outlined-basic"
            label="Search..."
            variant="outlined"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></TextField>
        </div>
      </div>

      <TableContainer
        component={Paper}
        style={{ width: "70%", margin: "auto", marginTop: "50px" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <div className="iconprew">
                  <DirectionsCarFilledIcon/>
                  Car
                </div>
              </TableCell>
              <TableCell align="right">
                <div className="iconprew">
                  {" "}
                  <LockIcon />
                  City
                </div>
              </TableCell>
              <TableCell align="right">
                <div className="iconprew">
                  <UpgradeIcon />
                  Status
                </div>
              </TableCell>
              <TableCell align="right">
                <div className="iconprew">
                 <ModelTrainingIcon/>
                  Model
                </div>
              </TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user
              .filter((el) => el?.status?.toString()?.includes(filterStatus))
              .filter((el) => el?.city?.toString()?.includes(filterCity))
              .filter((el) =>
                JSON.stringify(el)
                  .toLowerCase()
                  .trim()
                  .includes(search?.toLowerCase()?.trim())
              )

              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ width: "250px" }}
                  >
                    <div className="avatarAndName">
                      <img className="avatar"  src={row.avatar} alt="" />
                      <div className="">
                        {row.name} <br />
                        {row.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="left">{row.city}</TableCell>
                  <TableCell align="left">
                    {row.status ? "Active" : "Inactive"}
                  </TableCell>
                  <TableCell align="left">{row.model}</TableCell>
                  <TableCell align="left">
                    <div>
                      <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}

                      >

                        <Button onClick={() => handleinfoForUser(row)}>
                        <MenuIcon/>
                        </Button>
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                       
                        <MenuItem onClick={handleClose}>
                          <div className="actionBUtonns">
                            <Edit onClick={handleEditClickOpen} />

                            <p onClick={handleEditClickOpen}>Edit</p>
                          </div>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <div className="actionBUtonns">
                            <Delete
                              onClick={() => handleDelete()}
                              color="error"
                            />

                            <p
                              onClick={() => handleDelete(row.id)}
                              style={{ color: "red" }}
                            >
                              Delete
                            </p>
                          </div>
                        </MenuItem>
                      </Menu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* addMOdal */}

      <Dialog
        open={openAdd}
        onClose={handleAddClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleAddClose();
            },
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            name="name"
            label="Add Name"
            type="text"
            fullWidth
            value={addName}
            onChange={(el) => {
              setAddName(el.target.value);
            }}
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="avatar"
            label="Add Avatar"
            type="text"
            fullWidth
            value={addAvatar}
            onChange={(el) => {
              setAddAvatar(el.target.value);
            }}
            variant="standard"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            name="avatar"
            label="Email Address"
            type="email"
            fullWidth
            value={addEmail}
            onChange={(el) => {
              setAddEmail(el.target.value);
            }}
            variant="standard"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            name="city"
            label="Add City"
            type="text"
            fullWidth
            value={addCity}
            onChange={(el) => {
              setAddCity(el.target.value);
            }}
            variant="standard"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            name="phone"
            label="Add Phone"
            type="text"
            fullWidth
            value={addPhone}
            onChange={(el) => {
              setAddPhone(el.target.value);
            }}
            variant="standard"
          />

          <select
            className="selectAdd"
            value={addStatus}
            onChange={(el) => {
              setAddStatus(el.target.value);
            }}
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddClose}>Cancel</Button>
          <Button onClick={handleAdd} type="submit">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* editModal */}
      <Dialog
        open={openEdit}
        onClose={handleEditClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleEditClose();
            },
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            name="name"
            label="Edit Name"
            type="text"
            fullWidth
            value={editName}
            onChange={(el) => {
              setEditName(el.target.value);
            }}
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="avatar"
            label="edit Avatar"
            type="text"
            fullWidth
            value={editAvatar}
            onChange={(el) => {
              setEditAvatar(el.target.value);
            }}
            variant="standard"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            name="avatar"
            label="Email Address"
            type="email"
            fullWidth
            value={editEmail}
            onChange={(el) => {
              setEditEmail(el.target.value);
            }}
            variant="standard"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            name="city"
            label="Add City"
            type="text"
            fullWidth
            value={editCity}
            onChange={(el) => {
              setEditCity(el.target.value);
            }}
            variant="standard"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            name="phone"
            label="Edit Phone"
            type="text"
            fullWidth
            value={editPhone}
            onChange={(el) => {
              setEditPhone(el.target.value);
            }}
            variant="standard"
          />

          <select
            className="selectAdd"
            value={addStatus}
            onChange={(el) => {
              setEditStatus(el.target.value);
            }}
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button onClick={handleEdit} type="submit">
          Save
          </Button>
        </DialogActions>
      </Dialog>







      
    </>
  );
}
