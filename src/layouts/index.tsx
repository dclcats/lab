import React, { useMemo, useState } from 'react';
import { Typography, Menu, Dropdown, Layout, Space } from 'antd';
import type { MenuProps } from 'antd';
import {
  MenuOutlined,
  HeartFilled,
  MailOutlined,
  QqOutlined,
  WechatOutlined,
  WeiboCircleOutlined,
  ZhihuOutlined,
} from '@ant-design/icons';
import { IRouteComponentProps, Redirect } from 'umi';
import styles from './index.less';

const { Title, Text } = Typography;

const { Header, Content, Footer, Sider } = Layout;

export default function Index(props: IRouteComponentProps) {
  const { children, location, route, routes, history, match } = props;

  const [current, setCurrent] = useState(location.pathname);

  console.log('--------props');
  console.log(props);

  if (location.pathname === '/') {
    return <Redirect to={'/home'} />;
  }

  const handleClickMenu: MenuProps['onClick'] = (e) => {
    history.push(e.key);
    setCurrent(e.key);
  };

  const items = useMemo(
    () => [
      {
        key: '/home',
        label: '主页',
      },
      {
        key: '/members',
        label: '人员简介',
      },
      {
        key: '/publications',
        label: 'Publications',
      },
    ],
    [],
  );

  return (
    <div className={styles.layout}>
      <Header
        className={`${styles.header} ${styles.banner}`}
        // className={`${styles.header} ${location.pathname === '/home' ? styles.banner : ''}`}
      >
        <Title className={styles.title}>
          When Smaller is Bigger and Less is More
        </Title>
        <div className={'menu'}>
          <Menu
            onClick={handleClickMenu}
            selectedKeys={[current]}
            mode="horizontal"
            theme={'dark'}
            items={items}
          />
        </div>

        <div className={'dropdown-menu'}>
          <Dropdown
            menu={{
              items,
              selectedKeys: [current],
              onClick: handleClickMenu,
            }}
          >
            {/*<a onClick={(e) => e.preventDefault()}>*/}
            <MenuOutlined className={'dropdown-menu-icon'} />
            {/*</a>*/}
          </Dropdown>
        </div>
      </Header>
      <Content>{children}</Content>
      <Footer className={styles.footer}>
        <div className={'contact'}>
          <span style={{ fontWeight: 'bold', marginRight: 12 }}>联系我: </span>
          <Space>
            <a href="mailto:xdsun15s@imr.ac.cn">
              <MailOutlined />
            </a>
            <QqOutlined />
            <WechatOutlined />
            <WeiboCircleOutlined />
            <ZhihuOutlined />
          </Space>
        </div>
        <div className={'copyright-year'}>
          &copy; 2023 - {new Date().getFullYear()}&nbsp;&nbsp;
          <HeartFilled />
          &nbsp;&nbsp;<span>小冬笋</span>
        </div>
      </Footer>
    </div>
  );
}
