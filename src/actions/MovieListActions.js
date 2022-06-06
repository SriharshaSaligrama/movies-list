export const MOVIE='MOVIE'
export const REMOVED_MOVIES_LIST='REMOVED_MOVIES_LIST'

export const setMovie= formData=>{return {type: MOVIE, payload: formData}}

export const setRemovedMovie= movies=>{return {type: REMOVED_MOVIES_LIST, payload: movies}}