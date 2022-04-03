import barba, { IViewData } from '@barba/core';

// Styles
import '@styles/globals.scss';

import pages from '@common/pages';

// Common components

import Main from '@components/main/main';
import Slider from '@components/slider/slider';
import Modal from '@components/modal/modal';
import Counter from '@components/counter/counter';
import { findComponent, findComponents } from '@common/utils';

barba.init({
    views: pages,
}); 

barba.hooks.afterEnter((data: IViewData) => {
    const counters = findComponents('counter').map(comp => {
        return new Counter(comp);
    });
    // const counter = new Counter(findComponent('counter'));
    const modal = new Modal(findComponent('modal'));
    const slider = new Slider(findComponent('slider'), counters, modal);
    const main = new Main(findComponent('main'), counters, slider);


});


