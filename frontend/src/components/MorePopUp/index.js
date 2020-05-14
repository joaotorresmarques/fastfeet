import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import Popup from 'reactjs-popup';

import { PopUpButton } from './styles';

export default function MorePopUp({ children, ...rest }) {
  return (
    <Popup
      trigger={
        <PopUpButton>
          <MdMoreHoriz />
        </PopUpButton>
      }
    >

    </Popup>
  );
}

