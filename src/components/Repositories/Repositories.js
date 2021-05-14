import React from 'react';
import { Repobaixo } from '../Repobaixo/Repobaixo';
import Repocards from '../Repocards/Repocards';

export const Repositories = ({ archivevf, buscavf }) => {
  return (
    <div>
      <Repobaixo repobaixo={archivevf} />
      <Repocards buscainput={buscavf} />
    </div>
  );
};
