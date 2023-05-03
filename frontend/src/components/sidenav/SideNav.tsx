import React from 'react';
import './SideNav.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, message } from 'antd';
import type { MenuProps } from 'antd/es/menu';
import {
	CreditCardOutlined,
	UsergroupAddOutlined,
	BarChartOutlined,
	HomeOutlined,
	LayoutOutlined,
	SettingOutlined,
	QuestionCircleOutlined,
	LogoutOutlined
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const SideNav: React.FC = () => {
	const navigate = useNavigate();

	const logout = () => {
		navigate(`/login`);
		message.success('Successfully logged out.');
		localStorage.removeItem('loggedIn');
	};

	const topItems: MenuItem[] = [
		getItem(<Link to="/">Home</Link>, '1', <HomeOutlined />),
		getItem(<Link to="/customers">Customers</Link>, '2', <UsergroupAddOutlined />),
		getItem(<Link to="/card-format">Card Format</Link>, 'cardFormat', <CreditCardOutlined />),
		getItem(<Link to="/page-format">Page Format</Link>, 'pageFormat', <LayoutOutlined />),
		getItem(<Link to="/geographic">Geographic</Link>, 'geographic', <BarChartOutlined />)
	];

	const bottomItems: MenuItem[] = [
		getItem(<Link to="/settings">Settings</Link>, '1', <SettingOutlined />),
		getItem(<Link to="/help">Help</Link>, '2', <QuestionCircleOutlined />),
		getItem('Sign out', 'logout', <LogoutOutlined />)
	];

	function getItem(
		label: React.ReactNode,
		key?: React.Key | null,
		icon?: React.ReactNode,
		children?: MenuItem[]
	): MenuItem {
		return {
			key,
			icon,
			children,
			label
		} as MenuItem;
	}

	const bottomOnClick = (key: string) => {
		if (key === 'logout') {
			logout();
		}
	};

	return (
		<div className="sideNavMainContainer">
			<Menu className="sideNavAdmin" items={topItems} theme="dark" />
			<Menu
				onClick={({ key }) => bottomOnClick(key)}
				className="sideNavAdminBottom"
				items={bottomItems}
				theme="dark"
			/>
		</div>
	);
};

export default SideNav;
