import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <MainActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </MainActionGroup>
        <Logo />
        <MainActionGroup>
          <SubsciptionWrapper>
            <Button>Subscribe</Button>
            <AlreadySubscriberLink>Already a subscriber?</AlreadySubscriberLink>
          </SubsciptionWrapper>
        </MainActionGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainActionGroup = styled(ActionGroup)`
  display: none;
  flex: 1;

  &:last-of-type {
    justify-content: flex-end;
  }

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  margin-block-start: 32px;
  margin-block-end: 48px;
  justify-content: center;
  align-items: center;

  @media ${QUERIES.laptopAndUp} {
    margin-block-start: 0;
    justify-content: space-between;
  }
`;

const SubsciptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-block-start: 32px;
`;

const AlreadySubscriberLink = styled.a`
  font-style: italic;
  text-decoration: underline;
  line-height: 1em;
`;

export default Header;
