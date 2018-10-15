/* EXAMPLE, not used */

import { actionTypes } from 'src/actions';
let {
    LOADDATA_STARTED,
    LOADDATA_SUCCEEDED,
    LOADDATA_FAILED,
} = actionTypes;

export default function appReducer(state, action) {
    let { type, payload } = action;

    if (type === LOADDATA_STARTED) return { ...state, loadingData: true };

    if (type === LOADDATA_SUCCEEDED) return { ...state, loadedData: payload, loadingData: false };

    if (type === LOADDATA_FAILED) return { ...state, loadedError: payload, loadingData: false };

    return state;
}
