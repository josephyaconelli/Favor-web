
import React from 'react'
import { withFirebase } from 'react-redux-firebase'
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const renderData = (stuff) => (
  <ul>
    {stuff.map((thing) => (
      <li>{thing.text}</li>
    ))}
  </ul>
)
  
const push = (firebase, data) => firebase.push('todos', data)

const StuffList = ({
  stuff,
  isLoading,
  trySend
}) => (
  isLoading ? 
  (
    <Grid container justify = "center">
      <CircularProgress style={{alignContent: "center"}} />
    </Grid>
  )
  :
  (<Container maxWidth="md">
    {stuff.length > 0 ?
      renderData(stuff)
      :
      <div>
        No Data
      </div>
    }
    <button onClick={() => trySend('fetch')}>Fetch</button>
    <button onClick={() => trySend('receive')}>Receive</button>
    <button onClick={() => trySend('TEST')}>TEST</button>
  </Container>)
)

export default StuffList

