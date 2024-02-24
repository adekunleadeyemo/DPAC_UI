import logo from './logo.svg';
import './App.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {

  const [cholMed, setCholMed] = useState("")
  const [bp, setBp] = useState("")
  const [weight, setWeight] = useState("")
  const [chol, setChol] = useState("")
  const [bmi, setBmi] = useState("")
  const [waist, setWaist] = useState("")
  const [age, setAge] = useState("")
  const [glucose, setGlucose] = useState("")
  const [highChol, setHighChol] =useState("")
  const [htn, setHtn] = useState("")
  const [showResult, setShowResult] = useState(false)

  function createNew() {
    setCholMed("")
    setBp("")
    setWeight("")
    setChol("")
    setBmi("")
    setWaist("")
    setAge("")
    setGlucose("")
    setHighChol("")
    setHtn("")
    setShowResult(false)
  }

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <a href='#'>Report</a>
        </nav>
      </header>
      <div className='content'>
      { (showResult) ? <div> </div> :<div><h1>Diabetic Prediction & Accuracy Checker</h1>
        <h3>Predicting type-2 diabetes using maching learning</h3>
        <p>Welcome to Diabetic Prediction & Accurracy checker (DPAC) The purpose of this tool is to help predict the chances of a patient having diabetes.
          This is not a diagnostic tool. This tool allows you to enter a variety of factors related to your health in order to help you narrow the potential of becoming diabetic and take the appriopriate measures.
          The most reliable way to determine the cause and the treatment of your findings is to visit your doctor. Thank you for using DPAC
        </p>
        <h3>You are at LOW RISK of having diabetes</h3></div>}
       { (showResult) ? <div> </div> : <div className='dm-form'>
          <div className='dm-form-item'>
          <p>1. To lower your blood cholesterol, 
            have you ever been told  by a doctor to take a prescribed medcine ?</p>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choose an option</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Choose an option"
              onChange={e => setCholMed(e.target.value)}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          </div>
          <div className='dm-form-item'></div>
          <div className='dm-form-slider'>
          <p>2. What is you Systolic blood pressure ? (mm Hg)</p>
            <Slider
              aria-label="Small steps"
              defaultValue={0.00000005}
              // getAriaValueText="{valuetext}"
              step={1}
              marks
              min={72}
              max={228}
              valueLabelDisplay="auto"
              onChange={e => setBp(e.target.value)}
            />
          </div>
          <div className='dm-form-item'>
            <TextField 
            sx={{width: "100%"}}
            onChange={e => setWeight(e.target.value)}
            id="standard-basic" label="3. What is your weight (lbs)?" variant="standard" />
          </div>
          <div className='dm-form-item'>
            <TextField 
            sx={{width: "100%"}}
            onChange={e => setChol(e.target.value)}
            id="standard-basic" label="4. What is your total cholesterol (mg/dl)?" variant="standard" />
          </div>
          <div className='dm-form-item'>
            <TextField 
            sx={{width: "100%"}}
            onChange={e => setBmi(e.target.value)}
            id="standard-basic" label="5. What is your Body Mass Index (kg/m**2)?" variant="standard" />
          </div>
          <div className='dm-form-item'>
            <TextField 
            sx={{width: "100%"}}
            onChange={e => setWaist(e.target.value)}
            id="standard-basic" label="6. What is your waist circumference (in.)?" variant="standard" />
          </div>
          <div className='dm-form-item'>
          <TextField 
          sx={{width: "100%"}}
          onChange={e => setAge(e.target.value)}
          id="standard-basic" label="7. What is your age (yrs.)?" variant="standard" />
          </div>
          <div className='dm-form-item'>
          <div className='dm-form-slider'>
          <p>8. What is your Fasting glucose ? (mg/dl)</p>
            <Slider
              aria-label="Small steps"
              defaultValue={0.00000005}
              // getAriaValueText="{valuetext}"
              step={1}
              marks
              min={21}
              max={479}
              valueLabelDisplay="auto"
              onChange={ e => setGlucose(e.target.value)}
            />
          </div>
          </div>
          <div className='dm-form-item'>
          <p>9. Have you ever been told by a doctor that your blood cholesterol level was high  ?</p>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choose an option</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Choose an option"
              onChange={e => setHighChol(e.target.value)}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
              
            </Select>
          </FormControl>
          </div>
          <div className='dm-form-item'>
          <p>10. Have you ever been told by a doctor that you had hypertension, also called high blood pressure ?</p>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choose an option</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Choose an option"
              onChange={e => setHtn(e.target.value)}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          </div>
          <div className='dm-form-button'>
          <Button 
           onClick={() => { setShowResult(true) }}
          variant="contained" size='large'>PREDICT RISK OF HAVING DIABETES</Button>
          </div>
        </div>}
        { (showResult) ?<div >
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Questions</TableCell>
            <TableCell>Answers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Taken Cholesterol Medication ?
              </TableCell>
              <TableCell >{cholMed}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Blood Pressure
              </TableCell>
              <TableCell >{bp}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Weight
              </TableCell>
              <TableCell >{weight}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Cholesterol level
              </TableCell>
              <TableCell >{chol}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Body Mass Index
              </TableCell>
              <TableCell >{bmi}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Waist Circumference
              </TableCell>
              <TableCell >{waist}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Age
              </TableCell>
              <TableCell >{age}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Glucose
              </TableCell>
              <TableCell>{glucose}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               Has High Cholesterol
              </TableCell>
              <TableCell >{highChol}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              
            >
              <TableCell component="th" scope="row">
               Has High Blood Pressure
              </TableCell>
              <TableCell >{htn}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
        </TableContainer>
        <div className='dm-form-button'>
        <Button 
           onClick={createNew}
          variant="contained" size='large'>CREATE NEW PREDICTION</Button>
          </div>
        </div> : <div></div> }
      </div>
      <footer className="footer">
        <p> !Disclaimer This tool does not provide medical advice. It is intended for information purposes only. It is not meant to be used, 
          nor should it be used to diagnose or treat any medical condition. For diagnosis or treatment or any medical problem, 
          consult your physician. All the provided information will be kept confidential and will not be stored or shared with a third party.</p>
      </footer>
    </div>
  );
}



  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };


export default App;
