/**
 * Created by acer on 2016/9/26.
 */
import * as types from '../constant/actionType';
export function ShowTest(text='test') {
    return {
        type : types.SHOW_TEST,
        text
    }
}