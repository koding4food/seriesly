import { connect } from 'react-redux';
import App from '../components/App';
import { submitSearch, updateSearchFilter } from '../actions/searchActions';
import { requestAccessToken } from '../actions/traktAuthActions';


function mapStateToProps(state) {
  return {
    mediaByType: state.mediaByType,
    auth: state.auth,
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
    requestAccessToken(response) {
      dispatch(requestAccessToken(response));
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

