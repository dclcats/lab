import React from 'react';
import { Button, Result } from 'antd';

const Is404: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="您查看的页面不存在"
    extra={<Button type="primary">回首页</Button>}
  />
);

export default Is404;
