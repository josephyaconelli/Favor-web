import { connect } from 'react-redux'
import { getCurrentScreen } from '../../modules/navigation/selectors'
import { goToScreen } from '../../modules/navigation/actions'
import Screen from './Screen'

function mapStateToProps(state) {
  return {
    screen: getCurrentScreen(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToScreen: (screen) => dispatch(goToScreen(screen))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen)
