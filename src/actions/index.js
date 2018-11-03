import { getJsonAsync, postJsonAsync, sleep } from 'src/utils';

export const LOADDATA_STARTED = 'LOADDATA_STARTED';
export const LOADDATA_SUCCEEDED = 'LOADDATA_SUCCEEDED';
export const LOADDATA_FAILED = 'LOADDATA_FAILED';

/* Thunk */
export function loadData(url) {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: LOADDATA_STARTED });
      await sleep(1000); // simulate latency
      let { data, status } = await getJsonAsync(url);

      if (status >= 400) {
        dispatch({ type: LOADDATA_FAILED, payload: data });
      } else {
        dispatch({ type: LOADDATA_SUCCEEDED, payload: data });
      }

      dispatch({ type: LOADDATA_SUCCEEDED, payload: data });
    } catch (ex) {
      dispatch({ type: LOADDATA_FAILED, payload: ex });
    }
  };
}
