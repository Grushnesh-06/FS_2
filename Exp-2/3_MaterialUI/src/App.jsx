import { useState } from 'react'
import './App.css'
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';


function App() {
  return (
    <Card style={{ width: 600, margin: "20px auto" }}>
      <CardMedia
        component="img"
        alt="Material UI"
        height="130"
        image="https://mui.com/static/blog/material-ui-is-now-mui/intro.png"
      />
      <CardContent>
        <h1 style={{marginTop: '0px'}}>Material UI Components</h1>
        <TextField
          required
          id="standard-required"
          label="Name"
          variant="standard"
          style={{margin: '10px'}}
        />

        <TextField
          required
          id="standard-required"
          label="UID"
          variant="standard"
          style={{margin: '10px'}}
        />
        <br />
        <br />
        <Button variant='text' >Submit</Button>
      </CardContent>
    </Card>
  )
}

export default App
