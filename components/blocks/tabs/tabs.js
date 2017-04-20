'use strict'

const tab = document.querySelectorAll('.tabs__title');
const tabContent = document.querySelectorAll('.tabs__content');

function activeTab() {
    const tabId = this.dataset.tab;

    if (this.classList.contains('active')) {
        this.classList.remove('active');
    }
    else {
        tab.forEach(key => key.classList.remove('active'));
        this.classList.add('active');
    }

    tabContent.forEach((key) => {
        if (key.dataset.tabcontent === tabId && !key.classList.contains('active')) {
            key.classList.add('active');
        }
        else {
            key.classList.remove('active');
        }
    });
}

tab.forEach(key => key.addEventListener('click', activeTab));
