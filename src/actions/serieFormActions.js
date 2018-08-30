export const SET_FIELD = 'SET_FIELD';
//action creator
export const setField = (field, value) => {
    return  {
        type: SET_FIELD,
        field,
        value,
    }
}

export const SAVE_SERIE = 'SAVE_SERIE';
export const saveSerie = serie => {
    return {
        type: SAVE_SERIE,
        serie
    }
}