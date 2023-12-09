import React, {useMemo, useState} from "react";
import {Typography, Menu} from "antd";
import type { MenuProps } from 'antd';
import {IRouteComponentProps, Redirect, useRouteMatch } from 'umi';
import styles from './index.less';

const { Title } = Typography;

export default function Index(props: IRouteComponentProps) {

  const {
    children,
    location,
    route,
    routes,
    history,
    match
  } = props;

  const [current, setCurrent] = useState(location.pathname);

  console.log('--------props');
  console.log(props);

  if (location.pathname === '/') {
    return <Redirect to={'/home'} />
  }

  const handleClickMenu: MenuProps['onClick'] = (e) => {
    history.push(e.key)
    setCurrent(e.key);
  }

  const items = useMemo(() => ([
    {
      key: '/home',
      label: '主页'
    },
    {
      key: '/members',
      label: '人员简介'
    },
    {
      key: '/publications',
      label: 'Publications'
    }
  ]), [])

  return (
    <div className={styles.navs}>
      <header
        // className={`${styles.header}`}
        className={`${styles.header} ${location.pathname === '/home' ? styles.banner : ''}`}
      >
        <Title className={styles.title}>When Smaller is Bigger and Less is More</Title>
        <div className={'menu'}>
          <Menu
            onClick={handleClickMenu}
            selectedKeys={[current]}
            mode="horizontal"
            theme={'dark'}
            items={items}
          />
        </div>
      </header>
      <div>{children}</div>
    </div>
  );
}
