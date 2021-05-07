import React from 'react';
import { Repobaixo } from '../Repobaixo/Repobaixo';
import Repocards from '../Repocards/Repocards';
// import Slide from '../Slide/Slide';

export const Repositories = ({ archivevf }) => {
  return (
    <div>
      {/* <Slide slide={archivevf} /> */}
      <Repobaixo repobaixo={archivevf} />
      <Repocards />
    </div>
  );
};
