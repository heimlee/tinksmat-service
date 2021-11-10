import { combineReducers } from 'redux';

import { companiesListReducer } from '../screens/Main/components/mainCompaniesList/reducers/companiesListReducer';
import { companyAddToSystemReducer } from '../screens/Main/components/mainCompaniesList/reducers/companyAddToSystemReducer';

export const rootReducer = combineReducers({
  companiesList: companiesListReducer,
  addedCompany: companyAddToSystemReducer,
});
