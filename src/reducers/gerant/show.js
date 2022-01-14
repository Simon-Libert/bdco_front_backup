import { combineReducers } from "redux";

export function error(state = null, action) {
  switch (action.type) {
    case "GERANT_SHOW_ERROR":
      return action.error;

    case "GERANT_SHOW_MERCURE_DELETED":
      return `${action.retrieved["@id"]} has been deleted by another user.`;

    case "GERANT_SHOW_RESET":
      return null;

    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case "GERANT_SHOW_LOADING":
      return action.loading;

    case "GERANT_SHOW_RESET":
      return false;

    default:
      return state;
  }
}

export function retrieved(state = null, action) {
  switch (action.type) {
    case "GERANT_SHOW_SUCCESS":
    case "GERANT_SHOW_MERCURE_MESSAGE":
      return action.retrieved;

    case "GERANT_SHOW_RESET":
      return null;

    default:
      return state;
  }
}

export function eventSource(state = null, action) {
  switch (action.type) {
    case "GERANT_SHOW_MERCURE_OPEN":
      return action.eventSource;

    case "GERANT_SHOW_RESET":
      return null;

    default:
      return state;
  }
}

export default combineReducers({ error, loading, retrieved, eventSource });
