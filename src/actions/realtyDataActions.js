import RealtyProvider from "../providers/RealtyProvider";

export const REALTY_DATA_IS_LAOADING = "REALTY_DATA_IS_LOADING"
export const REALTY_DATA_FETCH_SUCCESS = "FETCH_REALTY_DATA_SUCCESS"
export const REALTY_DATA_HAS_ERRORED = "REALTY_DATA_HAS_ERRORED"

export function realtyDataHasErrored(bool) {
    return {type: REALTY_DATA_HAS_ERRORED, hasErrored: bool}
}

export function realtyDataIsLoading(bool) {
   return {type: REALTY_DATA_IS_LAOADING, isLoading: bool}
}

export function realtyDataFetchSuccess(data) {
    return {type: REALTY_DATA_FETCH_SUCCESS, data}
 }

 export function errorAfterFiveSeconds() {
     return (dispatch) => {
         setTimeout(() => {
             dispatch(realtyDataHasErrored(true))
         }, 5000)
     }
 }

 export function realtyDataFetch(provider) {
     return (dispatch) => {
        dispatch(realtyDataIsLoading(true));
        provider.getRealtyData().then((data) => {
            dispatch(realtyDataFetchSuccess(data))
            dispatch(realtyDataIsLoading(false))
        }).catch(() => {
            dispatch(realtyDataHasErrored(true))
        })

     }
 }