/*
  https://youtu.be/AIAqaFFw7AY?t=12m6s
*/

import React from 'react';
import 'components/quarks/styles';
import 'src/icon-system/icons.svg';
import loadIcons from 'src/icon-system/loadIcons';

import FontsStory from './Fonts.story';
import ColorsStory from './Colors.story';
import IconStory from 'components/atoms/Icon/Icon.story';
import ButtonStory from 'components/molecules/Button/Button.story';

// for github pages
loadIcons({path: 'https://unpkg.com/@dfds-frontend/react-components/dist/icons.min.svg'});
//loadIcons(); // localhost

FontsStory();
ColorsStory();
IconStory();
ButtonStory();
