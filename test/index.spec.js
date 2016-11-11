
var expect = require('chai').expect;
import * as actions from '../app/action/action'
import { Store } from '../app/store';
describe('index test',() => {
    it('test ..',() => {
        Store.dispatch(actions.ShowTest());
        expect(2).to.equal(2);
    })
})