import { GET_DETAIL_CONT } from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable';

const actions = {
  getDetailCont(dispatch, id) {
    axios.get(`/detail.json?id=${id}`).then((res)=> {
      const data = res.data;
      const action = {
        type: GET_DETAIL_CONT,
        data: fromJS(data)
      }
      dispatch(action)
    }).catch((err)=>{
      console.log(err)
    })
  }
}

export default actions