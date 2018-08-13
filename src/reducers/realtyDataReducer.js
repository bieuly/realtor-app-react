import { FETCH_REALTY_DATA } from '../actions/realtyDataActions'
import RealtyProvider from '../providers/RealtyProvider'

export default function realtyData(state = [], action) {
    switch(action.type){
        case FETCH_REALTY_DATA:
            const realtyProvider = new RealtyProvider()
            return realtyProvider.getRealtyData().then((data)=>{return data})
        default:
            return state
    }
}