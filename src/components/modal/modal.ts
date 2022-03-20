import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';


class Modal extends RootComponent<HTMLDivElement> {
    constructor(props: IRootComponent) {
        super(props);

        const node = this.node;
				node.querySelector('');
        console.log('MOdal');
    }
    
}

export default Modal;
