/**
 * Created by acer on 2016/9/26.
 */
import * as types from '../constant/actionType';
export function text(state='hello world!',action) {
    switch (action.type){
        case types.SHOW_TEST :
            return action.text;
        default:
            return state;
    }
}