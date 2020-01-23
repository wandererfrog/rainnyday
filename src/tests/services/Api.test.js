import {formatParams} from '../../services/Api'

test('Should return correct query string from params Object.', () => {
    const params = {
        q : "Lisbon",
        id : 12341
    }

    const actual = formatParams(params);
    const expected = "q=Lisbon&id=12341"
        
    expect(actual).toBe(expected);
});

test('Should return correct query string from null params Object.', () => {
    const actual = formatParams();
    const expected = ""
        
    expect(actual).toBe(expected);
});






