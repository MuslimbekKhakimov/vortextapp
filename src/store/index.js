import { createStore } from 'vuex'
import leftSide from './modules/leftSide'
import rightSide from './modules/rightSide'

export default createStore({
  modules: {
    leftSide,
    rightSide
  }
})
