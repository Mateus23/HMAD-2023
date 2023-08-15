const sum = (a, b) => Number(a) + Number(b);

describe('Testing sum method', () => {
  it('for 2 numbers', () => {
    // Arrange
    const inputsA = [1, 2]
    const outputA = 3

    const inputsB = [2.5, 3.33]
    const outputB = 5.83

    // Act
    const resultA = sum(...inputsA)
    const resultB = sum(...inputsB)

    // Assert
    expect(resultA).toBe(outputA);
    expect(resultB).toBe(outputB);
  });
  
  it('for 2 strings', () => {
    // Arrange
    const inputsA = ['1', '2']
    const outputA = 3

    const inputsB = ['2.5', '3.33']
    const outputB = 5.83

    // Act
    const resultA = sum(...inputsA)
    const resultB = sum(...inputsB)

    // Assert
    expect(resultA).toBe(outputA);
    expect(resultB).toBe(outputB);
  });
});

const divide = (a, b) => Number(a)/Number(b);

describe('Testing divide method', () => {
  it('for 2 numbers', () => {
    // Arrange
    const inputsA = [4, 2]
    const outputA = 2

    const inputsB = [6.25, 2.5]
    const outputB = 2.5

    // Act
    const resultA = divide(...inputsA)
    const resultB = divide(...inputsB)

    // Assert
    expect(resultA).toBe(outputA);
    expect(resultB).toBe(outputB);
  });
  
  it('for 2 strings', () => {
    // Arrange
    const inputsA = ['4', '2']
    const outputA = 2

    const inputsB = ['6.25', '2.5']
    const outputB = 2.5

    // Act
    const resultA = divide(...inputsA)
    const resultB = divide(...inputsB)

    // Assert
    expect(resultA).toBe(outputA);
    expect(resultB).toBe(outputB);
  });
});