import { GET_COMPANIES_LIST, GET_COMPANIES_LIST_SUCCESS, GET_COMPANIES_LIST_FAILURE } from '../actions/mainCompaniesListActions';

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
    default:
      return state;
  }
};
