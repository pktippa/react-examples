export const onChange = (event) => dispatch => {
  console.log('Action dispatcher' , event.target.files[0]);
  dispatch({
   type: 'UPLOADED_FILE',
   payload: {
     file: event.target.files[0]
   }
  })
 }