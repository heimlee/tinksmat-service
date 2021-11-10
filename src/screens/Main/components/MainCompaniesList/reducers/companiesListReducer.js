import {
  GET_COMPANIES_LIST,
  GET_COMPANIES_LIST_SUCCESS,
  GET_COMPANIES_LIST_FAILURE,
  REMOVE_ADDED_COMPANY,
} from '../actions/mainCompaniesListActions';

const initialState = {
  loading: false,
  hasError: false,
  companiesList: [],
};

export const companiesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES_LIST:
      return { ...state, loading: true };
    case GET_COMPANIES_LIST_SUCCESS:
      return { companiesList: action.payload, loading: false, hasError: false };
    case GET_COMPANIES_LIST_FAILURE:
      return { ...state, loading: false, hasError: true };
    case REMOVE_ADDED_COMPANY:
      return { companiesList: state.companiesList.filter(company => company.registryCode !== action.payload) };
    default:
      return state;
  }
};
