import { connect } from 'react-redux';
import App from '../components/App';
import { submitSearch, updateSearchFilter } from '../actions/searchActions';


function mapStateToProps(state) {
  return {
    mediaByType: state.mediaByType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateSearch(...args) {
      dispatch(updateSearchFilter(...args));
    },
    submitSearch() {
      dispatch(submitSearch());
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

