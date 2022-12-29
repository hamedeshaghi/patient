/* eslint-disable @next/next/no-html-link-for-pages */
import { useGetMegaMenu } from '@/common/apis/services/general/getMegaMenu';
import HumbuggerMenu from '@/common/components/icons/humbuggerMenu';
import useCustomize from '@/common/hooks/useCustomize';
import getConfig from 'next/config';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { articleMenus, consultMenus, withDoctorMenu, withUserMenu } from '../../data/links';
import HeaderLogo from '../logo/logo';
import UserProfile from '../userProfile';
const Sidebar = dynamic(() => import('./sidebar'));
const { publicRuntimeConfig } = getConfig();

interface MobileNavbarProps {
  shouldShowBrand?: boolean;
}
const MobileNavbar = (props: MobileNavbarProps) => {
  const { shouldShowBrand = true } = props;
  const [open, setOpen] = useState(false);
  const [expertiseItems, setExpertiseItems] = useState([]);
  const ref = useRef(null);
  const menuItemExpertise = useGetMegaMenu();
  const cosutomize = useCustomize();

  const sidebarMenu = [
    {
      id: 1,
      title: 'مشاوره آنلاین پزشکی',
      sub_menu: consultMenus,
    },
    {
      id: 2,
      title: 'تخصص ها',
      sub_menu: expertiseItems,
    },

    {
      id: 3,
      title: 'برای بیماران',
      sub_menu: withUserMenu,
    },
    {
      id: 4,
      title: 'برای پزشکان',
      sub_menu: withDoctorMenu,
    },
    {
      id: 5,
      title: 'مجله سلامتی',
      sub_menu: articleMenus,
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
    <div ref={ref} className="z-50 block w-full text-sm lg:hidden">
      <div className="relative flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex flex-row items-center gap-2">
          {cosutomize.showSideBar && (
            <div className="flex items-center justify-center w-8 h-8" onClick={() => setOpen(true)}>
              <HumbuggerMenu />
            </div>
          )}
          {shouldShowBrand && (
            <Link href="/" shallow>
              <a>
                {/* {cosutomize.showPartnerLogoInPrimaryPlace && cosutomize.partnerLogo ? (
                  <img src={publicRuntimeConfig.PARTNER_LOGO_BASE_URL + cosutomize.partnerLogo} height={32} className="max-w-[190px]" />
                ) : (
                  <Logo type={cosutomize.headerBrandLogoType} fontSize="sm" width={32} height={32} />
                )} */}
                <HeaderLogo
                  showPartnerLogo={cosutomize.showPartnerLogoInPrimaryPlace}
                  partnerLogo={cosutomize.partnerLogo}
                  brandType={cosutomize.headerBrandLogoType}
                  size="mobile"
                />
              </a>
            </Link>
          )}
        </div>

        <HeaderLogo
          showPartnerLogo={!cosutomize.showPartnerLogoInPrimaryPlace}
          partnerLogo={cosutomize.partnerLogo}
          brandType={cosutomize.headerBrandLogoType}
          size="mobile"
        />
        {cosutomize.showUserProfile && <UserProfile />}
        <Sidebar menus={sidebarMenu} closeSidebar={() => setOpen(false)} isOpen={open} />
      </div>
    </div>
  );
};

export default MobileNavbar;
