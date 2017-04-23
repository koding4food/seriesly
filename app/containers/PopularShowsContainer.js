import { connect } from 'react-redux';
import PopularShows from '../components/PopularShows';
import { fetchPopularShows } from '../actions/searchActions';


function mapStateToProps(state) {
  return {
    shows: state.popular.shows,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    popularShows() {
      dispatch(fetchPopularShows());
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(PopularShows);
