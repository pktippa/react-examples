export const simpleAction = () => dispatch => {
  console.log('Action dispatcher');
  dispatch({
   type: 'SIMPLE_ACTION',
   payload: 'result_of_simple_action'
  })
 }