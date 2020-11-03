const mathFunctions = require('./conteudo');

test('Subtrair', () => {
    const mockSub = jest.spyOn(mathFunctions, "subtrair");
    mathFunctions.subtrair(5, 2);
    expect(mockSub).toHaveBeenCalled();
    expect(mockSub).toHaveBeenCalledTimes(1);
    expect(mockSub).toHaveBeenLastCalledWith(5, 2);
    expect(mockSub(6, 2)).toBe(4);
});

