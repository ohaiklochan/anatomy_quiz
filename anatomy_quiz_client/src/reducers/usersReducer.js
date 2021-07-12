export default function usersReducer ( state = {
    users: []
  }, action) {
    console.log(action)
 
  switch (action.type) {
    case 'USERS_RANKED_BY_STREAK':
     return {...state, users: action.payload}
 
    default:
     return state;
 
   }
 
 }