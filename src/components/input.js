import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button'
import * as actionCreators from '../store/creators/actionCreators'
import "./input.css"


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '17ch',
    },
  },
}));

function InputField(props) {
  const classes = useStyles();
  const [data, setData] = useState({
    nameA:"Company A", nameB:"Company B", nameC: "Company C",
    valA: 400, valB:240, valC:360,
    a1: 80, a2: 10, a3: 10,
    b1: 20, b2:70,  b3: 10,
    c1: 30, c2: 10, c3: 60,
    modal: false, tnum:1
  })
  


  useEffect(() => {
    updateRedux()
  }, [data])

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value
    })
  }

  const updateRedux = () => {
    props.onChange(data)
  }

  const handleState = () => {
    let val = validationCheck()
    if(val == true){
      hideModal()
      props.onState(data)
    }else{
      setData({
        ...data,
        modal: true
      })
    } 
  }

  const handleFinal =() => {
    let val = validationCheck()
    if(val == true){
      hideModal()
      props.onFinal(data)
    }else{
      setData({
        ...data,
        modal: true
      })
    } 
  }

  const hideModal = () => {
    setData({
      ...data,
      modal: false
    })
  }

const validationCheck = () => {
  if(parseInt(data.a1) + parseInt(data.a2) + parseInt(data.a3) != 100 || 
  parseInt(data.b1) + parseInt(data.b2) + parseInt(data.b3) != 100 || 
  parseInt(data.c1) + parseInt(data.c2) + parseInt(data.c3) != 100 ||
  parseInt(data.a1) <= 0 || parseInt(data.a2) <= 0 || parseInt(data.a3) <= 0 ||
  parseInt(data.b1) <= 0 || parseInt(data.b2) <= 0 || parseInt(data.b3) <= 0 ||
  parseInt(data.c1) <= 0 || parseInt(data.c2) <= 0 || parseInt(data.c3) <= 0 ||
  parseInt(data.valA) <= 0 || parseInt(data.valB) <= 0 || parseInt(data.valC) <= 0 ||
  parseInt(data.tnum) <= 0) {
    return false
  }else {
    return true
  }


}

  return (
    <div class="container"> 
    <form className={classes.root} noValidate autoComplete="off">
    <div class="flex">
      <TextField
          label="Company A"
          id="nameA"
          defaultValue= "Company A"
          className={clsx(classes.margin, classes.textField)}
          helperText="Name Of Company A"
          onChange = {handleChange}
        />
      <TextField
          label="Company B"
          id="nameB"
          defaultValue= "Company B"
          className={clsx(classes.margin, classes.textField)}
          helperText="Name Of Company B"
          onChange = {handleChange}
        />
      <TextField
          label="Company C"
          id="nameC"
          defaultValue= "Company C"
          className={clsx(classes.margin, classes.textField)}
          helperText="Name Of Company C"
          onChange = {handleChange}
        />

      </div>
      <div class="flex">
      <TextField
          label="Customers"
          defaultValue="400"
          id="valA"
          className={clsx(classes.margin, classes.textField)}
          helperText="# Of Customers At A"
          type="number"
          onChange = {handleChange}
        />
        <TextField
          label="Customers"
          defaultValue="240"
          id="valB"
          className={clsx(classes.margin, classes.textField)}
          helperText="# Of Customers At B"
          type="number"
          onChange = {handleChange}
        />
        <TextField
          label="Customers"
          id="valC"
          defaultValue="360"
          className={clsx(classes.margin, classes.textField)}
          helperText="# Of Customers At C"
          type="number"
          onChange = {handleChange}
        />
      </div>
      <div class="flex">
      <TextField
          label="Percentage"
          id="a1"
          defaultValue="80"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          helperText="Stay At Company A"
          type="number"
          onChange = {handleChange}
        />
              <TextField
          label="Percentage"
          id="b2"
          defaultValue="70"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          helperText="Stay At Company B"
          type="number"
          onChange = {handleChange}
        />
              <TextField
          label="Percentage"
          id="c3"
          defaultValue="60"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          helperText="Stay At Company C"
          type="number"
          onChange = {handleChange}
        />
      </div>
      <div class="flex">
      <TextField
          label="Percentage"
          id="a2"
          defaultValue="10"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          helperText="From Company A To Comapny B"
          type="number"
          onChange = {handleChange}
        />
              <TextField
          label="Percentage"
          id="b1"
          defaultValue="20"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          helperText="From Company B To Comapny A"
          type="number"
          onChange = {handleChange}
        />
              <TextField
          label="Percentage"
          id="c1"
          defaultValue="30"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          helperText="From Company C To Comapny A"
          type="number"
          onChange = {handleChange}
        />
      </div>
      <div class="flex">
      <TextField
          label="Percentage"
          id="a3"
          defaultValue="10"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          helperText="From Company A To Comapny C"
          type="number"
          onChange = {handleChange}
        />
      <TextField
          label="Percentage"
          id="b3"
          defaultValue="10"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          helperText="From Company B To Comapny C"
          type="number"
          onChange = {handleChange}
        />
      <TextField
          label="Percentage"
          id="c2"
          defaultValue="10"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          helperText="From Company C To Comapny B"
          type="number"
          onChange = {handleChange}
        />
      </div>
      <div class="flex">
      <TextField
          label="State"
          id="tnum"
          defaultValue="1"
          className={clsx(classes.margin, classes.textField)}
          helperText="# Of State Changes"
          type="number"
          onChange = {handleChange}
        />
      <div class="button-margin">
      <Button variant="contained" onClick={handleState}>Calculate State</Button>
      </div>
      <div class="button-margin">
      <Button variant="contained" onClick={handleFinal}>Final State</Button>
      </div>
      </div>
      <div class="flex">
      <h4 class="error"> {data.modal ? 'Error - Make Sure % For Each Company Adds Up To 100. Also, All Numbers > 0' : ''}
      </h4>
      </div>
    </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (data) => dispatch(actionCreators.onLogin(data)),
    onState: (data) => dispatch(actionCreators.onState(data)),
    onFinal: (data) => dispatch(actionCreators.onFinal(data))
  }
}


export default connect(null, mapDispatchToProps)(InputField)