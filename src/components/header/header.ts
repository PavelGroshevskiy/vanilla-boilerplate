import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';

class Header extends RootComponent<HTMLDivElement> {
    constructor(props: IRootComponent) {
        super(props);
        console.log('Header');
        const node = this.node;

        
    }
}

export default Header;
