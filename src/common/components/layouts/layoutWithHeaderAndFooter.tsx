import useCustomize from '@/common/hooks/useCustomize';
import useWebView from '@/common/hooks/useWebView';
import classNames from '@/common/utils/classNames';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import Footer from './footer';
import CompactFooter from './footer/compactFooter';
import Header from './header';
const BottomNavigation = dynamic(() => import('./bottomNavigation'));

export const LayoutWithHeaderAndFooter = ({
  children,
  shouldShowBrand = true,
  shouldShowPromoteApp = true,
  showBottomNavigation = true,
  showHeader = true,
  showFooter = true,
  compactFooter = false,
  showSearchSuggestionButton = false,
}: {
  children: ReactNode;
  shouldShowBrand?: boolean;
  shouldShowPromoteApp?: boolean;
  showBottomNavigation?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  showSearchSuggestionButton?: boolean;
  compactFooter?: boolean;
}) => {
  const customize = useCustomize(state => state.customize);
  const isWebView = useWebView();

  return (
    <div className={classNames('min-h-screen flex flex-col', { 'pb-16 md:pb-0': showBottomNavigation })}>
      {customize.showHeader && !isWebView && showHeader && (
        <Header
          showSearchSuggestionButton={showSearchSuggestionButton}
          shouldShowBrand={customize.showBrandLogoInHomePage || shouldShowBrand}
          shouldShowPromoteApp={shouldShowPromoteApp}
        />
      )}
      <div className="flex flex-col flex-grow">{children}</div>
      {customize.showFooter &&
        !isWebView &&
        showFooter &&
        (customize.footerType === 'compact' || compactFooter ? <CompactFooter /> : <Footer />)}
      {showBottomNavigation && !isWebView && <BottomNavigation />}
    </div>
  );
};
