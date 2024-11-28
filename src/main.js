document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const tabsContainer = document.querySelector('[data-tab-id]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (event) {
            const targetTabId = event.target.dataset.tabButton;
            const targetTab = document.querySelector(`[data-tab-id="${targetTabId}"]`);
            hideTabs();
            targetTab.classList.add('shows__list--is-active');
            hideActive();
            event.target.classList.add('shows__tabs__button--is-active');
        });
    }
    //accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', accordion);
    }
});

function hideActive(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }

}

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
       tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

//accordion

function accordion(elemento){
   const classe = 'faq__questions__item--is-open';
   const elementoPai = elemento.target.parentNode;

   elementoPai.classList.toggle(classe);
}