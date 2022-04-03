import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
 {/* <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="home" icon={<PieChartOutlined />}>
                        <Link to="/home">主页</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />}
                        title="商品">
                        <Menu.Item key="5">品类管理</Menu.Item>
                        <Menu.Item key="8">商品管理</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="2" icon={<PieChartOutlined />}>
                        用户管理
                    </Menu.Item>
                    <Menu.Item key="3" icon={<PieChartOutlined />}>
                        角色管理
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />}
                        title="图形图表">
                        <Menu.Item key="9">柱状图</Menu.Item>
                        <Menu.Item key="10">折线图</Menu.Item>
                        <Menu.Item key="11">饼图</Menu.Item>
                    </SubMenu>
                </Menu> */}

const menuConfig = [
    {
        name: '主页',
        path: '/home',
        icon: PieChartOutlined
    },
    {
        name: '商品',
        path: '/home',
        icon: MailOutlined,
        children:[
            {
                name: '品类管理',
                path: '/home',
            },
            {
                name: '商品管理',
                path: '/home',
            }
        ]
    },
    {
        name: '用户管理',
        path: '/home',
        icon: PieChartOutlined,
    },
    {
        name: '角色管理',
        path: '/home',
        icon: PieChartOutlined,
    },
    {
        name: '图形图表',
        path: '/home',
        icon: AppstoreOutlined,
    }
]

export default menuConfig;