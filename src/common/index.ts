import barba, { IViewData } from '@barba/core';

// Styles
import '@styles/globals.scss';

import pages from '@common/pages';

// Common components
import Header from '@components/header/header';
import Main from '@components/main/main';
import Slider from '@components/slider/slider';
import Modal from '@components/modal/modal';
import Counter from '@components/counter/counter';
import { findComponent } from '@common/utils';

barba.init({
    views: pages,
});

barba.hooks.afterEnter((data: IViewData) => {
    const header = new Header(findComponent('header'));
    const counter = new Counter(findComponent('counter'));
    const main = new Main(findComponent('main'));
    const slider = new Slider(findComponent('slider'));
    const modal = new Modal(findComponent('modal'));
});


