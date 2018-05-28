/**
 * A reducer to store all service id
 * It only manages SUCCESS actions because all UI state properties (like
 * loading/error)
 * are managed by different global reducers.
 */

import { Action } from "../../../../actions/types";
import { ServicesIdsArray } from "../../../../sagas/messages";
import { SERVICE_LOAD_SUCCESS } from "../../../actions/constants";

export type ServicesAllIdsState = ServicesIdsArray;

export const INITIAL_STATE: ServicesAllIdsState = [];

const reducer = (
  state: ServicesAllIdsState = INITIAL_STATE,
  action: Action
): ServicesAllIdsState => {
  switch (action.type) {
    case SERVICE_LOAD_SUCCESS:
      return [...state, action.payload.service_id];

    default:
      return state;
  }
};

export default reducer;