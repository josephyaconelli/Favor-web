import React from 'react'
import MainContainer from './components/general/main/MainContainer'
import { configureStore, store } from './configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import SignIn from './components/pages/signin/SignIn'
import StuffListContainer from './components/StuffListContainer'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';



// const store = configureStore()

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
        <CssBaseline />
        <MainContainer />
        <Route exact path="/" component={StuffListContainer}/>
        <Route exact path="/signin" component={SignIn}/>
    </BrowserRouter>
  </Provider>
)

export default App

