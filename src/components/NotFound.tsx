import React, { FC, useCallback } from 'react';
import { Button, Result } from 'antd';
import { useHistory } from 'react-router-dom';

interface IProps {
  [x: string]: any;
}

const NotFound: FC<IProps> = (props) => {
  const history = useHistory();

  const handleBack = useCallback(() => history.push('/'), [history]);

  return (
    <div style={{ paddingTop: 40 }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={handleBack}>Back Home</Button>}
        {...props}
      />
    </div>
  );
};

NotFound.defaultProps = {};

export default NotFound;
