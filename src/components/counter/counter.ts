import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';

export const state: any = {
    currentVal: 0
    };

class Counter extends RootComponent<HTMLDivElement> {
    constructor(props: IRootComponent) {
        super(props);

        const addBtn = this.node.querySelector('.counter-btn_add');
        const subBtn = this.node.querySelector('.counter-btn_sub');
        const val = this.node.querySelector('.counter-val');
        const mainNumber = this.node.parentNode.parentNode.querySelector('.main-number');
        const numNode = document.createElement('h2');


            // textNode.innerHTML = state.currentVal;
        console.log(mainNumber);

        const textNode = document.createElement('span');
            val.append(textNode);
            textNode.innerHTML = state.currentVal;

        addBtn.addEventListener('click', () => {
            state.currentVal++;
            textNode.innerHTML = state.currentVal;
            mainNumber.replaceWith(numNode);
            numNode.innerHTML = state.currentVal;


        });
        subBtn.addEventListener('click', () => {
            state.currentVal--;
            textNode.innerHTML = state.currentVal;
            mainNumber.replaceWith(numNode);
            numNode.innerHTML = state.currentVal;

        });

    }

        
    // increment() {
    //         this.addBtn.addEventListener('click', () => {
    //         this.state.currentVal++;
    //         textNode.innerHTML = this.state.currentVal;
        
    //     });
    //     }

}

export default Counter;
