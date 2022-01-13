import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Links = () => {
  const [collapse, setCollapse] = useState(true);

  const Collapse = styled.div.attrs({
    className: collapse ? 'collapse navbar-collapse' : 'navbar-collapse',
  })``;

  const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
  })``;

  const Item = styled.div.attrs({
    className: 'navbar-collapse',
  })``;

  return (
    <>
      <Link to='/' className='navbar-brand'>
        Homework App Homepage
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        onClick={() => setCollapse(!collapse)}
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <Collapse>
        <List>
          <Item>
            <Link to='/classes/list' className='nav-link'>
              List classes
            </Link>
          </Item>
          <Item>
            <Link to='/assignments/list' className='nav-link'>
              List assignments
            </Link>
          </Item>
        </List>
      </Collapse>
    </>
  );
};

export default Links;
