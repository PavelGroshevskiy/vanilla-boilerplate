import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';
import Counter from '@components/counter/counter';


class Modal extends RootComponent<HTMLDivElement> {
    isOpen = false;
    divContainer = this.node.parentNode;
    btnOpen = this.divContainer.querySelector('.btn');
    btnClose = this.divContainer.querySelector('.modal-close');
    children = this.node.childNodes;
    modal = this.node.parentNode.querySelector('.modal');
    addBtn = this.node.parentNode.parentElement.parentElement.querySelector('.counter-btn_add');

    
    constructor(props: IRootComponent) {
        super(props);
        // console.log('Modal');

      // counter.forEach(el => {
      //   el.increment();
      // });


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
