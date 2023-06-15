import { combineReducers } from 'redux'

import headerReducer from './headerReducer'
import navigationReducer from './navigationReducer'
import sideReducer from './sideReducer'
import archiveReducer from './archiveReducer'

export default combineReducers({
    headerReducer,
    navigationReducer,
    sideReducer,
    archiveReducer,
})
