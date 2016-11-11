/**
 * Created by acer on 2016/11/10.
 */
import * as actionType from '../constant/actionType';
export default function logger2({ getState,dispatch }) {
    return (next) => (action) => {

        //if (process.env.NODE_ENV !== 'production') {
        console.log('log2 : dispatching2', action);
        //}
        if(action.type === actionType.SHOW_TEST){
            return dispatch({
                type : actionType.SHOW_LOG,
                text : 'show log.'
            })
        }

        const result = next(action);

        //if (process.env.NODE_ENV !== 'production') {
        console.log('log2 : next state2', getState());
        //}

        return result;
    };
}