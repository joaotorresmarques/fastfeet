import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  position: relative;

  > button {
    border: 0;
    background: none;
  }

  svg {
    color: #c6c6c6;
    transition: color 200ms;
  }

  &:hover {
    svg {
      color: ${darken(0.3, '#c6c6c6')}
    }
  }
`;
