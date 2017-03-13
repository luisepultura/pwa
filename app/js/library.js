const library = {
    numbers,
    family,
    greetings,
    colours
};

const numbers = [
    { character: '一', pinyin: 'yī', svg: '', english: 'One' },
    { character: '二', pinyin: 'èr', svg: '', english: 'Two' },
    { character: '三', pinyin: 'sān', svg: '', english: 'Three' },
    { character: '四', pinyin: 'sì', svg: '', english: 'Four' },
    { character: '五', pinyin: 'wǔ', svg: '', english: 'Five' },
];

const family = [
    { character: '一', pinyin: 'yī', svg: '', english: 'One' },
    { character: '二', pinyin: 'èr', svg: '', english: 'Two' },
    { character: '三', pinyin: 'sān', svg: '', english: 'Three' },
    { character: '四', pinyin: 'sì', svg: '', english: 'Four' },
    { character: '五', pinyin: 'wǔ', svg: '', english: 'Five' },
];

const greetings = [
    { character: '一', pinyin: 'yī', svg: '', english: 'One' },
    { character: '二', pinyin: 'èr', svg: '', english: 'Two' },
    { character: '三', pinyin: 'sān', svg: '', english: 'Three' },
    { character: '四', pinyin: 'sì', svg: '', english: 'Four' },
    { character: '五', pinyin: 'wǔ', svg: '', english: 'Five' },
];

const colours = [
    { character: '一', pinyin: 'yī', svg: '', english: 'One' },
    { character: '二', pinyin: 'èr', svg: '', english: 'Two' },
    { character: '三', pinyin: 'sān', svg: '', english: 'Three' },
    { character: '四', pinyin: 'sì', svg: '', english: 'Four' },
    { character: '五', pinyin: 'wǔ', svg: '', english: 'Five' },
];

export const lessons = [
    { code: 'numbers', title: 'Numbers' },
    { code: 'family', title: 'Family' },
    { code: 'greetings', title: 'Greetings' },
    { code: 'colours', title: 'Colours' }
];

export const getLesson = code => library[code];