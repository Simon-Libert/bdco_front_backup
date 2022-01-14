import { combineReducers } from "redux";

export function retrieveError(state = null, action) {
  switch (action.type) {
    case "CONTACTCOMMERCE_UPDATE_RETRIEVE_ERROR":
      return action.retrieveError;

    case "CONTACTCOMMERCE_UPDATE_MERCURE_DELETED":
      return `${action.retrieved["@id"]} has been deleted by another user.`;

    case "CONTACTCOMMERCE_UPDATE_RESET":
      return null;

    default:
      return state;
  }
}

export function retrieveLoading(state = false, action) {
  switch (action.type) {
    case "CONTACTCOMMERCE_UPDATE_RETRIEVE_LOADING":
      return action.retrieveLoading;

    case "CONTACTCOMMERCE_UPDATE_RESET":
      return false;

    default:
      return state;
  }
}

export function retrieved(state = null, action) {
  switch (action.type) {
    case "CONTACTCOMMERCE_UPDATE_RETRIEVE_SUCCESS":
    case "CONTACTCOMMERCE_UPDATE_MERCURE_MESSAGE":
      return action.retrieved;

    case "CONTACTCOMMERCE_UPDATE_RESET":
      return null;

    default:
      return state;
  }
}

export function updateError(state = null, action) {
  switch (action.type) {
    case "CONTACTCOMMERCE_UPDATE_UPDATE_ERROR":
      return action.updateError;

    case "CONTACTCOMMERCE_UPDATE_RESET":
      return null;

    default:
      return state;
  }
}

export function updateLoading(state = false, action) {
  switch (action.type) {
    case "CONTACTCOMMERCE_UPDATE_UPDATE_LOADING":
      return action.updateLoading;

    case "CONTACTCOMMERCE_UPDATE_RESET":
      return false;

    default:
      return state;
  }
}

export function updated(state = null, action) {
  switch (action.type) {
    case "CONTACTCOMMERCE_UPDATE_UPDATE_SUCCESS":
      return action.updated;

    case "CONTACTCOMMERCE_UPDATE_RESET":
      return null;

    default:
      return state;
  }
}

export function eventSource(state = null, action) {
  switch (action.type) {
    case "CONTACTCOMMERCE_UPDATE_MERCURE_OPEN":
      return action.eventSource;

    case "CONTACTCOMMERCE_UPDATE_RESET":
      return null;

    default:
      return state;
  }
}

export default combineReducers({
  retrieveError,
  retrieveLoading,
  retrieved,
  updateError,
  updateLoading,
  updated,
  eventSource,
});
