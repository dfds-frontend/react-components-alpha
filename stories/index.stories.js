/*
  https://youtu.be/AIAqaFFw7AY?t=12m6s
*/

import 'components/quarks/styles';
import 'src/icon-system/icons.svg';
import loadIcons from 'src/icon-system/loadIcons';

import FontsStory from './Fonts.story';
import ColorsStory from './Colors.story';
import IconStory from 'components/atoms/Icon/Icon.story';
import TextStory from 'components/atoms/Text/Text.story';
import LinkStory from 'components/atoms/Link/Link.story';
import ButtonStory from 'components/molecules/Button/Button.story';
import CheckboxStory from 'components/molecules/Checkbox/Checkbox.story';
import RadioButtonStory from 'components/molecules/RadioButton/RadioButton.story';

// for github pages
loadIcons({ path: 'https://unpkg.com/@dfds-frontend/react-components/dist/icons.min.svg' });
//loadIcons(); // localhost

FontsStory();
ColorsStory();
IconStory();
TextStory();
LinkStory();
ButtonStory();
CheckboxStory();
RadioButtonStory();
