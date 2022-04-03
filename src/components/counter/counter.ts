import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';
class Counter extends RootComponent<HTMLDivElement> {
    
    currVal:any = 0;

    constructor(props: IRootComponent) {
        super(props);


        this.node.querySelector('.counter-btn_add').addEventListener('click', () => {

            this.increment();
            this.node.querySelector('.counter-val').innerHTML = this.currVal;

        });

        this.node.querySelector('.counter-btn_sub').addEventListener('click', () => {
            this.decrement();
            this.node.querySelector('.counter-val').innerHTML = this.currVal;
        });

        console.log('counter');
    }

    increment() {

        this.currVal++;
        // console.log(this.currVal);

            };

    decrement() {

        this.currVal--;
        // console.log(this.currVal);

            };

}

export default Counter;
