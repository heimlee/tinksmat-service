import axios from 'axios';

export const ADD_COMPANY_TO_SYSTEM = 'ADD_COMPANY_TO_SYSTEM';

const addCompanyToSystem = (company) => ({
  type: ADD_COMPANY_TO_SYSTEM,
  payload: company,
});

export const fetchAddCompanyToSystem = (registryCode) => {
  return (dispatch) => {
    axios.post('https://localhost:5001/api/companies', {
      registryCode: registryCode,
    })
    .then((response) => {
      dispatch(addCompanyToSystem(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  };
};
