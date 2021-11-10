import { ADD_COMPANY_TO_SYSTEM } from '../actions/companyAddToSystemActions';

const initialState = {
  addCompanyToSystem: [],
};

export const companyAddToSystemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY_TO_SYSTEM:
      return { addCompanyToSystem: action.payload };
    default:
      return state;
  }
};
