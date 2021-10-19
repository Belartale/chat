type NPD = Array<[string, string, number]>

export type oneLetter = {
    keyEnValue: string
    keyRuValue: string
    keyCode: string | null;
}

const transformer = (arrayOfData: NPD) => arrayOfData.map(([ keyRuValue, keyEnValue, keyCode ]) => ({
    keyRuValue, keyEnValue, keyCode,
}));

const firstLine: NPD = [[ '1', '1', 49 ], [ '2', '2', 50 ], [ '3', '3', 51 ], [ '4', '4', 52 ], [ '5', '5', 53 ], [ '6', '6', 54 ], [ '7', '7', 55 ], [ '8', '8', 56 ], [ '9', '9', 57 ], [ '0', '0', 48 ], [ 'Backspace', 'Backspace', 8 ]];
const secondLine: NPD = [[ 'Tab', 'Tab', 9 ], [ 'й', 'q', 81 ], [ 'ц', 'w', 87 ], [ 'у', 'e', 69 ], [ 'к', 'r', 82 ], [ 'е', 't', 84 ], [ 'н', 'y', 89 ], [ 'г', 'u', 85 ], [ 'ш', 'i', 73 ], [ 'щ', 'o', 79 ], [ 'з', 'p', 80 ], [ 'х', '[', 219 ], [ 'ъ', ']', 221 ]];
const thirdLine: NPD = [[ 'Caps Lock', 'Caps Lock', 20 ], [ 'ф', 'a', 65 ], [ 'ы', 's', 83 ], [ 'в', 'd', 68 ], [ 'а', 'f', 70 ], [ 'п', 'g', 71 ], [ 'р', 'h', 72 ], [ 'о', 'j', 74 ], [ 'л', 'k', 75 ], [ 'д', 'l', 76 ], [ 'ж', ';', 186 ], [ 'э', '\'', 222 ]];
const forthLine: NPD = [[ 'Shift', 'Shift', 16 ], [ 'я', 'z', 90 ], [ 'ч', 'x', 88 ], [ 'с', 'c', 67 ], [ 'м', 'v', 86 ], [ 'и', 'b', 66 ], [ 'т', 'n', 78 ], [ 'ь', 'm', 77 ], [ 'б', ',', 188 ], [ 'ю', '.', 190 ], [ '.', '/', 191 ]];
const fifthLine: NPD = [[ 'Ру', 'En', 0 ], [ 'Space', 'Space', 32 ], [ 'Enter', 'Enter', 13 ]];

export const keysData = {
    firstLine:  transformer(firstLine),
    secondLine: transformer(secondLine),
    thirdLine:  transformer(thirdLine),
    forthLine:  transformer(forthLine),
    fifthLine:  transformer(fifthLine),
};

export const keysDataArray = [
    transformer(firstLine),
    transformer(secondLine),
    transformer(thirdLine),
    transformer(forthLine),
];

export type IParsedKeys = ReturnType<typeof transformer>
