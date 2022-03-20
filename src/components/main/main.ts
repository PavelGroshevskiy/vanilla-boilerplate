import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';


class Main extends RootComponent<HTMLDivElement> {
    constructor(props: IRootComponent) {
        super(props);

        const buttonOpen = this.node.querySelector('button');
        const buttonClose = this.node.parentNode.querySelector('.modal-close');
        const modal = this.node.parentNode.querySelector('.modal');
        const modalSee = this.node.parentNode.querySelector('.modal--see');


        buttonOpen.addEventListener('click', () => {

            modal.classList.add('modal--see');
            document.body.style.overflow = "hidden";
        });

        buttonClose.addEventListener('click', () => {
            modal.classList.remove('modal--see');
        });

        modal.addEventListener('click',(e)=> {
            if(e.target===modal || modalSee){
                modal.classList.remove('modal--see');
            }
        });

    }

}

export default Main;
