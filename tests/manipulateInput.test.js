import {manipulateInput} from '../src/index'

test('should return string without qoutes', () => {
    const str = "account:read"
    const actual = manipulateInput(str)
    expect(actual).toBe('account:read')
})

test('should return str without spaces', () => {
    const str ='"accounts:read",  "user:read"'
    const actual = manipulateInput(str)
    expect(actual).toBe('accounts:read,user:read')
})

test('should return string with no last comma', () => {
    const str = '"accounts:read, "accounts:write",   "user:write",'
    const actual = manipulateInput(str)
    expect(actual).toBe('accounts:read,accounts:write,user:write')
})

test('should return string without line-breaks', () => {
    const str = '"accounts:read", \n \n "user:write", \n "user:read"'
    const actual = manipulateInput(str)
    expect(actual).toBe('accounts:read,user:write,user:read')
})

test('should return string without qoutes,spaces, with no last comma and no line-breaks', () => {
    const str = '"accounts:read", \n \n "user:write", \n "user:read",    "accounts:write",'
    const actual = manipulateInput(str)
    expect(actual).toBe('accounts:read,user:write,user:read,accounts:write')
})