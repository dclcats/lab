import { Divider, Typography, Space } from 'antd';
import styles from './index.less';
import { TITLE_BASE } from '@/constant';
import { PUBLICATIONS } from '@/constant/publications';

const { Text } = Typography;

function Publications() {
  return (
    <div className={styles.publications}>
      {PUBLICATIONS.map(({ year, info }) => (
        <div key={year} className={'year-content'}>
          <Divider className={'divider'}>{year}</Divider>
          {info.map(({ title, author, address }) => (
            <Space key={title} direction="vertical" className={'item'}>
              <Text strong>{title}</Text>
              <Text>{author}</Text>
              <Text strong>{address}</Text>
            </Space>
          ))}
        </div>
      ))}
      <Divider className={'divider'} />
      <p>&nbsp;</p>
    </div>
  );
}

Publications.title = TITLE_BASE + 'Publications';

export default Publications;
