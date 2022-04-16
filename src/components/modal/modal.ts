import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';

class Modal extends RootComponent<HTMLDivElement> {
    isOpen = false;
    btnOpen = document.querySelector('.main-button');
    btnClose = document.querySelector('.modal-close');
    modal = document.querySelector('.modal');
    addBtn = document.querySelector('.counter-btn_add');

    constructor(props: IRootComponent) {
        super(props);

        this.btnClose.addEventListener('click', () => {
            this.close();
        });

        this.btnOpen.addEventListener('click', () => {
            this.open();
        });
    }

    open = () => {
        this.isOpen = true;
        this.modal.classList.add('modal--see');
    };

    close = () => {
        this.isOpen = false;
        this.modal.classList.remove('modal--see');
    };
}

export default Modal;
