import produce from 'immer';
import {createAction, handleActions} from 'redux-actions';

const initialState = {
  sections: [
    {id: 1, name: 'Home', position: 0},
    {id: 2, name: 'AboutMe', position: 0},
    {id: 3, name: 'Technologie', position: 0},
    {id: 4, name: 'Portfolio', position: 0},
  ]
}

export const SECTION_NAME_UPDATE = 'section/SECTION_NAME_UPDATE';
export const SECTION_POSITION_UPDATE = 'section/SECTION_POSITION_UPDATE';

export const sectionNameUpdate = createAction(SECTION_NAME_UPDATE);
export const secionPositionUpdate = createAction(SECTION_POSITION_UPDATE, (id, position) => ({
  id, position
}));

const section = handleActions({
  [SECTION_NAME_UPDATE]: (state, action) => 
    produce(state, draft => {}),
  [SECTION_POSITION_UPDATE]: (state, {payload: {id, position}}) => 
    produce(state, draft => {
      draft.sections[id-1].position = position;
    }),
}, initialState);

export default section;