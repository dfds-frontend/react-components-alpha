/*
  https://youtu.be/AIAqaFFw7AY?t=12m6s
*/

import React from 'react';
import 'components/quarks/styles';
import '@dfds-frontend/icons/main/icons.svg';
import icons from '@dfds-frontend/icons';

import FontsStory from './Fonts.story';
import ColorsStory from './Colors.story';
import IconStory from 'components/atoms/Icon/Icon.story';
import ButtonStory from 'components/molecules/Button/Button.story';

// for github pages
icons.load({path: 'https://unpkg.com/@dfds-frontend/react-components/dist/icons.min.svg'});
//icons.load();

FontsStory();
ColorsStory();
IconStory();
ButtonStory();
