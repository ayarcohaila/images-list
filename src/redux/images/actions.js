import * as CONSTANTS from './constants';

export const getImagesRequest = data => ({
  type: CONSTANTS.GET_IMAGES_REQUEST,
  payload: data,
});

export const getImagesSuccess = data => ({
  type: CONSTANTS.GET_IMAGES_SUCCESS,
  payload: data,
});

export const getImagesError = () => ({
  type: CONSTANTS.GET_IMAGES_ERROR,
});
