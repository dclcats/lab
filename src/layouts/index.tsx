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

const { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;

export default function Index(props: IRouteComponentProps) {
  const { children, location, route, routes, history, match } = props;

  const [current, setCurrent] = useState(location.pathname);

  if (location.pathname === '/') {
    return <Redirect to={'/home'} />;
  }

  const handleClickMenu: MenuProps['onClick'] = (e) => {
    history.push(e.key);
    setCurrent(e.key);
  };

  const menuInfo: MenuProps = useMemo(
    () => ({
      selectedKeys: [current],
      onClick: handleClickMenu,
      theme: 'dark',
      items: [
        {
          key: '/home',
          label: '主页',
        },
        {
          key: '/members',
          label: '个人简历',
        },
        {
          key: '/publications',
          label: 'Publications',
        },
      ],
    }),
    [current],
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
          <Menu mode="horizontal" {...menuInfo} />
        </div>

        <div className={'dropdown-menu'}>
          <Dropdown menu={menuInfo}>
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
        <div style={{textAlign: 'center'}}>
          <span id="busuanzi_container_page_pv" style={{display: "inline"}}>本站总访问量 <span id="busuanzi_value_page_pv"></span> 次</span>
          <span> | </span>
          <span id="busuanzi_container_page_uv" style={{display: "inline"}}>本站总访客数 <span id="busuanzi_value_page_uv"></span> 人</span>
        </div>
      </Footer>
    </div>
  );
}
