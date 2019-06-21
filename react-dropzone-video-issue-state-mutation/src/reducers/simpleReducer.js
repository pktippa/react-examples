export default (state = {}, action) => {
  console.log('simpleReducer start');
  console.log('action: ', action);
  switch (action.type) {
   case 'SIMPLE_ACTION':
   console.log('Simple action matched');
    return {
     result: action.payload
    }
   default:
    return state
  }
 }