let injection = (arg1, arg2) => {
    return (`<${arg1} class="personal-page__navigation">
    <${arg2}>Библиотека</${arg2}>
    <${arg2}>Комитеты</${arg2}>
    <${arg2}>Комитет по коммуникациям</${arg2}>
    <${arg2}>Комитет по регуляторным вопросам</${arg2}>
    <${arg2}>Комитет по политике в области ответственного отношения к здоровью</${arg2}>
    <${arg2}>Комитет по этике</${arg2}>
</${arg1}>`);
}
let injectionFunc = () => {
    if (screen.width > 700) {
        document.querySelector('.personal-page').insertAdjacentHTML('afterbegin', injection("div", "div"));
    } else {
        document.querySelector('.personal-page__inputs').insertAdjacentHTML('beforebegin', injection("select", "option"));
    };
    
    const selectOptions = document.querySelectorAll('.personal-page__navigation>div');
    selectOptions.forEach(selectOption => {
        selectOption.addEventListener('click', () => {
            selectOptions.forEach(selectOption => {
                selectOption.classList.remove('active');
            });
            selectOption.classList.add('active');
        })
    });
}
injectionFunc();
window.addEventListener('resize', () => {
    if(document.querySelector('.personal-page__navigation')) {
        document.querySelector('.personal-page__navigation').remove();
    }
    injectionFunc();
});

