import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';
import Counter from '@components/counter/counter';
import Slider from '@components/slider/slider';


class Main extends RootComponent<HTMLDivElement> {

    constructor(props: IRootComponent, counters:Counter[], slider:Slider) {
        super(props);
        // console.log('Main');
        // this.node.querySelector('.main-number').innerHTML = 
    }

}

export default Main;
