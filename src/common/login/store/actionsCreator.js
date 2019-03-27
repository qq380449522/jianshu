import axios from 'axios'

const actions = {
  login: (dispatch, account, password) => {
    axios.get(`/login.json?account=${account}&password=${password}`).then((res)=> {
      const action = {
        type: 'login',
        value: true
      }
      dispatch(action)
    }).catch((err)=>{
      console.log(err)
    })
  }
}

export default actions