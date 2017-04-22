import { combineReducers } from 'redux';
import { searchCriteria } from './search';
import { mediaByType } from './media';

export default combineReducers({
  searchCriteria,
  mediaByType,
});
