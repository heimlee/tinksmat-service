import axios from 'axios';

export const GET_COMPANIES_LIST = 'GET_COMPANIES_LIST';
export const GET_COMPANIES_LIST_SUCCESS = 'GET_COMPANIES_LIST_SUCCESS';
export const GET_COMPANIES_LIST_FAILURE = 'GET_COMPANIES_LIST_FAILURE';
export const REMOVE_ADDED_COMPANY = 'REMOVE_ADDED_COMPANY';

const getCompaniesList = () => ({
  type: GET_COMPANIES_LIST,
});

const getCompaniesListSuccess = (companiesList) => ({
  type: GET_COMPANIES_LIST_SUCCESS,
  payload: companiesList,
});

const getCompaniesListFailure = () => ({
  type: GET_COMPANIES_LIST_FAILURE,
});

export const removeAddedCompany = (registryCode) => ({
  type: REMOVE_ADDED_COMPANY,
  payload: registryCode,
});

export const fetchCompaniesList = () => {
  return async (dispatch) => {
    dispatch(getCompaniesList());
    try {
      const response = await axios.get('https://localhost:5001/api/companies/my');
      const data = await response.data;
      dispatch(getCompaniesListSuccess(data));
    } catch (error) {
      dispatch(getCompaniesListFailure());
    }
  };
};
