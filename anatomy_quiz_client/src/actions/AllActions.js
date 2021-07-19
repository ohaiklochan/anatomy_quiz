const URL_ROOT = "http://localhost:3001/api/"

const token = localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: token
};


export function login (username, password) {
 return dispatch => {
 fetch(`${URL_ROOT}auth`, {
   method: 'POST',
   headers: headers,
   body: JSON.stringify({ username, password })
 }).then(res => res.json())
   .then(res => {
     localStorage.setItem('token', res.id)
     dispatch({type: "LOGIN", user: res})
   })
 }
}



export function logout () {
  return dispatch => {
    dispatch({type: "LOGOUT"})
  }
}

export function loadGameQuestions () {
  return dispatch => {
      dispatch({ type: 'LOAD_GAME_QUESTIONS'})
    }
}

export function loadUserQuestions () {
  return dispatch => {
      dispatch({ type: 'LOAD_USER_QUESTIONS'})
    }
}

export function updateUserQuestionId (questionId) {
  return dispatch => {
      dispatch({ type: 'UPDATE_USER_QUESTION_ID', payload: questionId})
  }
}

export function resetUserStreak () {
  return dispatch => {
      dispatch({ type: 'RESET_USER_STREAK'})
  }
}

export function updateUserStreak () {
  return dispatch => {
      dispatch({ type: 'UPDATE_USER_STREAK'})
  }
}

export function updateHighestStreak (user) {
  return dispatch => {
      dispatch({ type: 'UPDATE_HIGHEST_STREAK', payload:user})
  }
}

export function loadQuestions () {
  return dispatch => {
    fetch(`${URL_ROOT}questions`)
    .then(res => res.json())
    .then( res => {
      dispatch({ type: 'LOAD_QUESTIONS', questions: res })
    })
  }
}

export function rankedUsers () {
  return dispatch => {
    fetch(`${URL_ROOT}ranked_users`)
    .then(res => res.json())
    .then( res => {
      dispatch({ type: 'USERS_RANKED_BY_STREAK', payload: res })
    })
  }
}

export function addQuestion (user, question) {
 return dispatch => {
   fetch(`${URL_ROOT}users/${user.id}/questions`, {
     method: 'POST',
     headers: headers,
     data: {},
     dataType: "JSON",
     body: JSON.stringify({ question })
   }).then(res => res.json())
     .then(res => {
       dispatch({type: "ADD_QUESTION", question: res})
       dispatch({type: "LOAD_USER_QUESTIONS"})
     });
 }
}

export function addUser (user) {
  return dispatch => {
    fetch(`${URL_ROOT}users`, {
      method: 'POST',
      headers: headers,
      data: {},
      dataType: "JSON",
      body: JSON.stringify({ user })
    }).then(res => res.json())
    .then(res => {
      dispatch({type: "LOGIN", user: res})
    })
  }
};