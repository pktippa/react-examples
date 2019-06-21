export default (state = {}, action) => {
  console.log('simpleReducer start');
  console.log('action: ', action);
  switch (action.type) {
   case 'UPLOADED_FILE':
   console.log('Upload action action matched, full action: ', action);
    return {
     result: action.payload
    }
   default:
    return state
  }
 }