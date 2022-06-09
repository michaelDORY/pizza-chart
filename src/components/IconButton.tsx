import React, {FC} from 'react';
import styled from 'styled-components';

interface IIconButton {
  iconPath: string;
  onClick: () => void;
  disabled: boolean;
}

const StyledIconButton = styled.button`
  background: transparent;
  border-radius: 100px;
  border: 1px solid #c0c0c0;
  padding: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 50px;
  cursor: ${(props) => (props.disabled ? '' : 'pointer')};
  background: ${(props) => (props.disabled ? '#c0c0c0' : 'transparent')};

  &:hover {
    box-shadow: ${(props) =>
            props.disabled
                    ? '0 0 20px rgba(0, 0, 0, 0.15)'
                    : '0 5px 20px rgba(0, 13, 55, 0.15)'};
  }
`;

const IconButton: FC<IIconButton> = ({iconPath, onClick, disabled}) => {
  return (
    <StyledIconButton type="button" onClick={onClick} disabled={disabled}>
      <img src={iconPath} alt="icon"/>
    </StyledIconButton>
  );
};

export default IconButton;
