import React, { useState } from 'react';
import { MailOutlined, HomeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
  {
    label: "Home",
    key: 'home',
    icon: <HomeOutlined />
  },
  {
    label:"Contact",
    key:"mail",
    icon:<MailOutlined/>
  },
  {
    label:"About",
    key:"SubMenu",
    children:[
      {
        type:"group",
        label:"Item one",
        children:[
          {
            label: "option 1",
            key: "setting:1"
          },
          {
            label:"option two",
            key:"setting:2"
          }
        ]
      },
      {
        type:"group",
        label:"Item Two",
        children:[
          {
            label:"option three",
            key:"setting:3"
          },
          {
            label:"option four",
            key:"setting:4"
          }
        ]
      }
    ]
  },
  // {
  //   label:(
  //     <a href="/" target='blank'>
  //       antdesign navigation
  //     </a>
  //   ),
  //   key:"alipay"
  // }
];

const Navbar:React.FC = () => {

  const [current, setCurrent] = useState('mail');

  // const onClick: MenuProps['onClick'] = (e) => {
  //   console.log('click', e);
  //   setCurrent(e.key)
  // };

  return (
    // <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}></Menu>
    <Menu mode="horizontal" items={items} style={{backgroundColor:"rgb(38, 38, 59)", fontSize:"19px"}}></Menu>

  )
}

export default Navbar;