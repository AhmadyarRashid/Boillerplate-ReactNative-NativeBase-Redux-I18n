import {connect} from "react-redux";
import {
  // selectors
  selectCount,
  //actions
  changeCount
} from "../../redux/reducers/counter/index"

const mapDispatchToProps = {
  changeCount
}

const mapStateToProps = state => ({
  count: selectCount(state),
})

export default connect(mapStateToProps, mapDispatchToProps)
