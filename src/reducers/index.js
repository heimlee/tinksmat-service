import { combineReducers } from 'redux';

import { companiesListReducer } from '../screens/Main/components/mainCompaniesList/reducers/companiesListReducer';

export const rootReducer = combineReducers({
  companiesList: companiesListReducer,
});
