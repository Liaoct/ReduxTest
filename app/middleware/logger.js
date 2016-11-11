import * as actionType from '../constant/actionType';
export default function logger({ getState,dispatch }) {
  return (next) => (action) => {

  	  console.log('log1 : dispatching', action);

      const result = next(action);
    
  	  console.log('log1 : next state', getState());

      return result;
  };
}
