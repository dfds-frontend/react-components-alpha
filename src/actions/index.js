import { getJsonAsync, postJsonAsync, sleep } from 'src/utils';

export const actionTypes = {
    LOADDATA_STARTED: 'LOADDATA_STARTED',
    LOADDATA_SUCCEEDED: 'LOADDATA_SUCCEEDED',
    LOADDATA_FAILED: 'LOADDATA_FAILED',
};

let {
    LOADDATA_STARTED,
    LOADDATA_SUCCEEDED,
    LOADDATA_FAILED,
} = actionTypes;

export async function loadData(appState, url) {
    try {
        appState.dispatch({ type: LOADDATA_STARTED });
        let data = await getJsonAsync(url);
        appState.dispatch({ type: LOADDATA_SUCCEEDED, payload: data });
    } catch (ex) {
        appState.dispatch({ type: LOADDATA_FAILED, payload: ex });
    }
}

/* Thunk */
export function loadData2(url) {
    return async (dispatch, getState) => {
      try {
        dispatch({ type: LOADDATA_STARTED });
        await sleep(1000); // simulate latency
        let data = await getJsonAsync(url);
        dispatch({ type: LOADDATA_SUCCEEDED, payload: data });
      } catch (ex) {
        dispatch({ type: LOADDATA_FAILED, payload: ex });
      }
    };
  }
  