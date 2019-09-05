/* eslint-disable */
import * as actions from '../actions';
import * as CONSTANTS from '../constants';

describe('images actions', () => {
  test('getImagesRequest action', () => {
    const expected = {
      type: CONSTANTS.GET_IMAGES_REQUEST,
    };

    expect(actions.getImagesRequest()).toEqual(expected);
  });

  test('getImagesSuccess action', () => {
    const expected = {
      type: CONSTANTS.GET_IMAGES_SUCCESS,
      payload: {},
    };

    expect(actions.getImagesSuccess({})).toEqual(expected);
  });

  test('getImagesError action', () => {
    const expected = {
      type: CONSTANTS.GET_IMAGES_ERROR,
    };

    expect(actions.getImagesError()).toEqual(expected);
  });

  test('markFavorite action', () => {
    const expected = {
      type: CONSTANTS.MARK_FAVORITE,
      payload: 1,
    };

    expect(actions.markFavorite(1)).toEqual(expected);
  });
});
