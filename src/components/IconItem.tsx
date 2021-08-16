import React, { FC, useMemo } from 'react';
import Zoom from "react-reveal/Zoom";
import Icon from '@ant-design/icons';
import { IconText } from './index';

interface IProps {
  icon: any;
  text?: string | React.ReactElement;
  [x: string]: any;
}

export const IconItem: FC<IProps> = ({ icon, text, children}) => {

  return (
    <Zoom>
      <IconText>
        <Icon component={icon} />
        {text}
        {children}
      </IconText>
    </Zoom>
  );
};

IconItem.defaultProps = {};

export default IconItem;
