const Select = (index) => {
    return {
      type: 'SELECT',
      atIndex: index
    }
  }

export const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED';
export const FETCH_FAILED = 'FETCH_FAILED';
export default Select;