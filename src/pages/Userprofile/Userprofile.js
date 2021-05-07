import React, { Fragment } from 'react';
import InputSearch from '../../components/InputSearch/InputSearch';
import { Repositories } from '../../components/Repositories/Repositories';

const Userprofile = () => {
  return (
    <Fragment>
      <InputSearch />
      <Repositories />
    </Fragment>
  );
};

export default Userprofile;
