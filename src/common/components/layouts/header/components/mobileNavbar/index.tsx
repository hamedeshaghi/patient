import { useGetMegaMenu } from '@/common/apis/services/general/getMegaMenu';
import Logo from '@/common/components/atom/logo';
import HumbuggerMenu from '@/common/components/icons/humbuggerMenu';
import UserCircle from '@/common/components/icons/userCircle';
import { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { articleMenus, consultMenus, withUserMenu } from '../../data/links';
import SubMenu from '../subMenu';
import Sidebar from './sidebar';

interface MobileNavbarProps {
  menuItems: {
    id: number;
    title: string;
    icon?: React.ReactNode;
  }[];
}

const MobileNavbar = ({ menuItems }: MobileNavbarProps) => {
  const [open, setOpen] = useState(false);
  const [expertiseItems, setExpertiseItems] = useState([]);
  const ref = useRef(null);
  const menuItemExpertise = useGetMegaMenu();

  const sidebarMenu = [
    {
      id: 1,
      title: 'مشاوره آنلاین پزشکی',
      items: consultMenus,
    },
    {
      id: 2,
      title: 'تخصص ها',
      items: expertiseItems,
    },

    {
      id: 3,
      title: 'برای بیماران',
      items: withUserMenu,
    },
    {
      id: 4,
      title: 'برای پزشکان',
      items: [
        {
          title: 'ورود / ثبت نام پزشکان',
          link: 'https://dr.paziresh24.com/auth?utm_source=home&amp;utm_medium=click&amp;utm_campaign=login-register-auth',
        },
      ],
    },
    {
      id: 5,
      title: 'مجله سلامتی',
      items: articleMenus,
    },
  ];

  useClickAway(ref, () => {
    setOpen(false);
  });
  useEffect(() => {
    if (menuItemExpertise.isSuccess) {
      setExpertiseItems(menuItemExpertise.data.data.result);
    }
  }, [menuItemExpertise.status]);
  return (
    <header ref={ref} className="text-slate-700 bg-white text-sm z-50 px-4  border border-slate-200 block md:hidden">
      <div className="max-w-screen-xl mx-auto relative  flex items-center justify-between p-2 ">
        <div className="flex flex-row items-center gap-2" onClick={() => setOpen(true)}>
          <HumbuggerMenu />
          <Logo fontSize="sm" width={32} height={32} />
        </div>
        <SubMenu title={<UserCircle width="32" height="32" />} menuItem={menuItems} hasIcon={false} />
        <Sidebar menus={sidebarMenu} closeSidebar={() => setOpen(false)} className={`${open ? 'block' : 'hidden'}`} />
      </div>
    </header>
  );
};

export default MobileNavbar;
