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

const library = {
    numbers,
    family,
    greetings,
    colours
};

const lessons = [
    { code: 'numbers', title: 'Numbers' },
    { code: 'family', title: 'Family' },
    { code: 'greetings', title: 'Greetings' },
    { code: 'colours', title: 'Colours' }
];



const dropdownLiTemplate = ({ code, title }) =>
    `<li>
        <span class="code" data-code="${code}">${title}</span>
    </li>`;


const lessonItemTemplate = ({ english, character, pinyin }) =>
    `<section class="lesson">
        <h1>${pinyin}</h1> 
        <h1>${character}</h1>
        <img class="lesson__item-icon" src="./images/numbers/one.svg" >
        <h1>${english}</h1>
    </section>`;

const dropdownLessonsTemplate = lessons.map(dropdownLiTemplate).join('');
const numbersTemplate = numbers.map(lessonItemTemplate).join('');

(console.log(dropdownLessonsTemplate));



const dropdown = document.querySelector('.dropdown');
const lessonContainer = document.querySelector('.lesson__container');
const triggers = document.querySelectorAll('.content > li');
const background = document.querySelector('.dropdownBackground');
const contenTitle = document.querySelector('.content__title');
const nav = document.querySelector('.navigation');

dropdown.innerHTML = dropdownLessonsTemplate;
lessonContainer.innerHTML = numbersTemplate;

const codes = document.querySelectorAll('.code');


function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 400);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const contenTitleCoords = contenTitle.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: navCoords.bottom,
        left: dropdownCoords.left - navCoords.left,
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

const handleCodeClick = e => {
    const { code } = e.target.dataset;
    codes.forEach(c => c.removeEventListener('click', handleCodeClick));
    dropdown.innerHTML = lessons.filter(lesson => lesson.code !== code).map(dropdownLiTemplate).join('');
    document.querySelectorAll('.code').forEach(c => c.addEventListener('click', handleCodeClick));
    console.log(code);
};

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
codes.forEach(code => code.addEventListener('click', handleCodeClick));