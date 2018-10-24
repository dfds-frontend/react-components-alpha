import 'components/quarks/_main.scss';
//import '@dfds-frontend/fonts/main/font.css'; // does not work
import icons from '@dfds-frontend/icons';

import DataLoader from 'components/atoms/DataLoader/DataLoader';
import Icon from 'components/atoms/Icon/Icon';
import Button from 'components/molecules/Button/Button';

const loadIcons = icons.load;

//console.log(!!loadIcons, !!Button, !!Icon, !!DataLoader);

export {
    loadIcons,
    Button, 
    Icon,
    DataLoader
}
