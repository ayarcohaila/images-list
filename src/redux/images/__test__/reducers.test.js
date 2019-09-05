/* eslint-disable */
import * as actions from '../actions';
import imagesReducer from '../reducers';

describe('images reducer', () => {
  const initialState = {
    list: [],
    loading: false,
    favoriteCount: 0,
  };

  it('returns the initial state', () => {
    const expected = {
      ...initialState,
    };
    const action = {};
    expect(imagesReducer(initialState, action)).toEqual(expected);
  });

  test('GET_IMAGES_REQUEST', () => {
    const expected = {
      ...initialState,
      loading: true,
    };

    expect(imagesReducer(initialState, actions.getImagesRequest())).toEqual(
      expected,
    );
  });

  test('GET_IMAGES_SUCCESS', () => {
    const expected = {
      ...initialState,
      loading: false,
      list: [],
    };

    expect(imagesReducer(initialState, actions.getImagesSuccess([]))).toEqual(
      expected,
    );
  });

  test('GET_IMAGES_ERROR', () => {
    const expected = {
      ...initialState,
      loading: false,
    };

    expect(imagesReducer(initialState, actions.getImagesError())).toEqual(
      expected,
    );
  });

  test('MARK_FAVORITE', () => {
    const expected = {
      ...initialState,
      favoriteCount: initialState.favoriteCount + 1,
    };

    expect(
      imagesReducer(initialState, actions.markFavorite('imageId')),
    ).toEqual(expected);
  });
});
