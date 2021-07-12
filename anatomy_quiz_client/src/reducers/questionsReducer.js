export default function questionsReducer ( state = {
    user:{},
    questions: [],
    selectedQuestions: []
  }, action) {
 
    console.log(action)
 
    switch (action.type) {
 
    case 'LOAD_QUESTIONS':
     return {...state, questions: action.questions};
 
    case 'LOAD_USER_QUESTIONS':
     let updatedUserQuestions = state.questions.filter (q => state.user.id === q.user.id)
     return {...state, selectedQuestions: updatedUserQuestions};
 
    case 'LOAD_GAME_QUESTIONS':
     let updatedGameQuestions = state.questions.filter (q => state.user.id !== q.user.id)
     updatedGameQuestions = updatedGameQuestions.filter(q =>  q.id > state.user.last_question_answered_id)
     return {...state, selectedQuestions: updatedGameQuestions};
 
    case 'ADD_QUESTION':
     return {...state, questions: [...state.questions, action.question]};
 
    case 'UPDATE_HIGHEST_STREAK':
     let newHighestStreak = state.user.highest_streak
     if (action.payload.streak >= state.user.highest_streak) {
       newHighestStreak = action.payload.streak + 1
     }
     return {...state, user: {...state.user, ...state.user.highest_streak = newHighestStreak}}
 
    case 'UPDATE_USER_STREAK':
     return {...state, user: {...state.user, ...state.user.streak += 1}}
 
    case 'UPDATE_USER':
     return {...state, user: action.user}
 
    case 'UPDATE_USER_QUESTION_ID':
     return {...state, user: {...state.user, ...state.user.last_question_answered_id = action.payload }}
 
    case 'RESET_USER_STREAK':
     return {...state, user: {...state.user, ...state.user.streak = 0 }}
 
    case 'LOGIN':
     return {...state, user: action.user};
 
    case 'LOGOUT':
     localStorage.removeItem('token')
     return {user:{}, questions: [], selectedQuestions: []};
 
    default:
     return state;
  }
 
 }