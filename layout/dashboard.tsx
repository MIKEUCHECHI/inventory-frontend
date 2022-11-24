import { LockIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import DashboardIcon from '../components/icons/DashboardIcon';
import Hamburger from '../components/icons/Hamburger';
import SidebarSubmenu from '../components/SidebarSubmenu';
import { format } from 'date-fns';
import { useLogin } from '../modules/useLogin';
import { purge } from '../state';
import { useAuthState } from '../state/useAuthState';
import SignOut from '../components/icons/SignOutIcon';

export interface Props {}

interface SideNavInterface {
  path: string;
  icon: string;
  name: string;
  routes?: any;
}

const SideNavRoutes: SideNavInterface[] = [
  {
    icon: 'ChainIcon',
    name: 'Store',
    path: '/dashboard/store',
  },
];

const Layout = ({ children }: React.PropsWithChildren<Props>) => {
  useLogin();
  const { token } = useAuthState();
  const x = useRouter();

  const [collapse, setCollapse] = useState(false);

  return (
    <div className="relative">
      <nav className="fixed w-screen z-10">
        <div className="w-screen">
          <div className="relative flex justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex-1 flex items-center w-[100%] justify-start sm:items-stretch">
              <div
                className={`flex-shrink-0 flex items-center px-3 flex-row ${
                  !collapse ? 'w-[24%]' : 'w-[6%]'
                }`}
              >
                {/* <Image 
                  src="/images/•NOMNOM wht.png"
                  alt="Logo"
                  width="100"
                  height="30"
                  className="mx-auto h-12"
                /> */}

                {!collapse && (
                  <div className="font-bold text-xl text-white w-[80%]">
                    Inventory Scale
                  </div>
                )}
                <div className="w-[20%]" onClick={() => setCollapse(!collapse)}>
                  <Hamburger />
                </div>
              </div>
              <div className="sm:ml-6 sm:flex sm:space-x-8"></div>
            </div>

            <div className="absolute z-10 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div>
                {/**
                 * TODO: Include Images
                 */}
              </div>

              {token && (
                <IconButton
                  colorScheme="blackAlpha"
                  variant="ghost"
                  className="mr-10"
                  size="sm"
                  onClick={() => {
                    purge().then(() => {
                      window.location.href = '/';
                    });
                  }}
                  icon={
                    <>
                      <div className="items-start justify-start mr-2">
                        <h3 className="text-black mx-3 text-xs">Hi, Admin</h3>
                        <h3 className="text-black mx-3 text-xs">
                          {format(Date.now(), 'dd MMM yyyy')}
                        </h3>
                      </div>
                      <SignOut />
                    </>
                  }
                  aria-label="logout"
                />
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className=" md:flex md:flex-shrink-0 bg-white">
        <div
          className={`flex flex-col ${
            collapse ? 'w-[6%]' : 'w-[20%]'
          } h-screen fixed`}
        >
          <div className="flex flex-col flex-grow border-r border-gray-200 pb-4 bg-primary overflow-y-auto pt-28">
            <div className="mt-5 flex-grow flex flex-col mx-4">
              {SideNavRoutes.map((route, index) => (
                <Fragment key={`route-${index}`}>
                  {route.routes ? (
                    <>
                      <SidebarSubmenu
                        route={route}
                        key={route.name}
                        icon={route.icon}
                      />
                    </>
                  ) : (
                    <>
                      <div className="my-3 px-2 bg-primary space-y-1">
                        <Link href={route.path}>
                          <a
                            className={`hover:bg-[rgba(255,255,255,0.1)] ${
                              route.path === x.asPath
                                ? 'bg-[rgba(255,255,255,0.1)]'
                                : ''
                            } hover:text-white duration-100 transition-all text-white group flex items-center px-2 py-4 text-sm font-medium rounded-md`}
                          >
                            <DashboardIcon />
                            {!collapse && route.name}
                          </a>
                        </Link>
                      </div>
                    </>
                  )}
                </Fragment>
              ))}
            </div>
            {/* <div className="mt-5 px-4 text-white text-sm">
              Version: {Environment.version}
            </div> */}
          </div>
        </div>
        <div
          className={`flex flex-col w-0 flex-1 overflow-hidden ${
            collapse ? 'ml-[100px]' : 'ml-[300px]'
          } mt-24 bg-white`}
        >
          <div className="flex  flex-shrink-0 ">
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
              <div className="flex-1 relative bg-white flex-shrink-0 overflow-y-auto focus:outline-none">
                <div className="py-6 bg-white">
                  <div className="container mx-auto px-4 sm:px-6 md:px-8 bg-white">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
