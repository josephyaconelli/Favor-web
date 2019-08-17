import {connect} from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import * as stuffActions from '../modules/stuff/actions'
import StuffList from './StuffList'



const enhance = compose(
  firebaseConnect(() => [
    {
      path: 'todos',
      queryParams: ['limitToLast=10']
    }
  ]),
  connect(
    (state, props) => ({
      stuff: props.firebase.ordered.todos
    }),
    (dispatch, props) => ({
      stuffActions: {
        fetchStuff: props.firebase.push('/todos',  'fetch'),
        receiveStuff: props.firebase.push('/todos', 'receive')
      }
    })
  )
)


function mapStateToProps(state) {
  console.log('this is the state: ', state)
  return {
    stuff: helpers.isLoaded(state.firebase.data.todos) ? Object.keys(state.firebase.data.todos).map((key) => state.firebase.data.todos[key]) : ['1', '2'],
    isLoading: !helpers.isLoaded(state.firebase.data.todos)
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    stuffActions: bindActionCreators(stuffActions, dispatch),
    trySend: (text) => props.firebase.push('todos', { text })
  }
}

export default compose(
  firebaseConnect([
      'todos'
  ]),
  connect(
    mapStateToProps,
    mapDispatchToProps
))(StuffList)

// export default enhance(StuffList)

//export default connect(mapStateToProps, mapDispatchToProps)(StuffList)
