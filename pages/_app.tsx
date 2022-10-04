import type { NextComponentType } from "next";
import type { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import {
  FiCircle,
  FiClipboard,
  FiCreditCard,
  FiDatabase,
  FiGift,
  FiGithub,
  FiHome,
  FiLayout,
  FiLink2,
  FiPackage,
  FiType,
  FiZap,
} from "react-icons/fi";

import "styles/index.css";
//import "tailwindcss/tailwind.css";

import { HStack, VStack } from "components/themes/NativeTheme/layout";
import { NavItem, Tree } from "components/themes/NativeTheme/navigation";
import Head from "next/head";
import { IconText, Text } from "components/themes/NativeTheme/typo";
import { useEffect } from "react";
import { useThemeStore } from "components/themes/PureBaldrTheme/themeStore";

const leftMenu = [
  {
    id:"157800",
    url: "/",
    parentId: 0,
    name: "Nextjs UIKIT",
    icon: <FiHome />,
    color: "light",
    component: "NavItem",
  },

  {
    id:"6231s2",
    parentId: 0,
    text: "Native Theme",
    className: "hidden lg:block pl-6 pt-4 pb-4 uppercase text-gray-500 border-t",
    component: "Text",
  },
  {
    id:"snb4j9",
    url: "/stacks",
    parentId: 0,
    name: "Layout components",
    icon: <FiLayout />,
    color: "dark",
    component: "NavItem",
  },
  {
    id:"s8kissa",
    url: "/cards",
    parentId: 0,
    name: "Card component",
    icon: <FiCreditCard />,
    color: "dark",
    component: "NavItem",
  },
  {
    id:"6admv4",
    url: "/navigation",
    parentId: 0,
    name: "Navigation components",
    icon: <FiLink2 />,
    color: "dark",
    component: "NavItem",
  },
  {
    id:"8an5s0",
    url: "/typo",
    parentId: 0,
    name: "Typography components",
    icon: <FiType />,
    color: "dark",
    component: "NavItem",
  },

  {
    id: "4d4sf2s",
    parentId: 0,
    text: "PureBaldr Theme",
    className: "hidden lg:block pl-6 pt-4 pb-4 uppercase text-gray-500 border-t",
    component: "Text",
  },
  {
    id:"j40ds94",
    url: "/todo",
    parentId: 0,
    name: "Page layout components",
    icon: <FiLayout />,
    color: "dark",
    component: "NavItem",
  },
  {
    id:"0dl4sh2",
    url: "/todo",
    parentId: 0,
    name: "Layout components",
    icon: <FiLayout />,
    color: "dark",
    component: "NavItem",
  },
  {
    id:"03jds84",
    url: "/todo",
    parentId: 0,
    name: "Navigation components",
    icon: <FiLink2 />,
    color: "dark",
    component: "NavItem",
  },
  {
    id:"nshad8",
    url: "/todo",
    parentId: 0,
    name: "Partial components",
    icon: <FiPackage />,
    color: "dark",
    component: "NavItem",
  },
  {
    id:"x8ule5",
    url: "/todo",
    parentId: 0,
    name: "Form components",
    icon: <FiClipboard />,
    color: "dark",
    component: "NavItem",
  },
  {
    id:"sks1s85",
    url: "/todo",
    parentId: 0,
    name: "Theme store",
    icon: <FiDatabase />,
    color: "dark",
    component: "NavItem",
  },
  {
    id:"a9k8is",
    url: "/use-examples",
    parentId: 0,
    name: "Use examples",
    icon: <FiGift />,
    color: "dark",
    component: "NavItem",
  },
  {
    id: "4ddo2s",
    parentId: 0,
    text: "Plugins",
    className: "hidden lg:block pl-6 pt-4 pb-4 uppercase text-gray-500 border-t",
    component: "Text",
  },
  {
    id:"dk9sl6",
    url: "/todo",
    parentId: 0,
    name: "RestStrapiProviders",
    icon: <FiZap />,
    color: "dark",
    component: "NavItem",
  },
  {
    id:"xl846g",
    url: "8d4f24",
    parentId: 0,
    text: "Theme mods",
    className: "hidden lg:block pl-6 pt-4 pb-4 uppercase text-gray-500 border-t",
    component: "Text",
  },
  {
    id:"ll8e6d",
    url: "/todo",
    parentId: 0,
    name: "PureBaldr pageLayout2",
    icon: <FiZap />,
    color: "dark",
    component: "NavItem",
  },
  {
    id:"0slv4f",
    url: "/todo",
    parentId: 0,
    name: "PureBaldr buttons2",
    icon: <FiZap />,
    color: "dark",
    component: "NavItem",
  },
];

export const DesktopMenu: React.FC = () => {
  return (
    <VStack className="sticky top-20" spacing="none">
      <Tree
        blocks={leftMenu}
        expand={["/backoffice/users", "/backoffice/notifications"]}
      />
    </VStack>
  );
};

export const TopBar: React.FC = () => {
  return (
    <>
      <HStack spacing="sm" className="items-center">
        <FiCircle />
        <Text>POSTTYPE7 UIKIT</Text>
        <Text color="light">|</Text>
        <NavItem href="/use-examples">Use examples</NavItem>
      </HStack>
      <NavItem href="https://github.com/PostType7">
        <IconText icon={<FiGithub />} text="GitHub" />
      </NavItem>
    </>
  );
};

/**
   * Detect if clicked on outside of ref element
   * usage to close opened dropdowns
   */
export const useOutsideAlerter = (ref:any) => {
  const setAttr = useThemeStore((state: any) => state.setAttr);
  useEffect(() => {
    function handle(event:any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setAttr({
          path: "theme.dropdown",
          value: null,
        })
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handle);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handle);
    };
  }, [ref]);
}


const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = (
  props: AppLayoutProps
) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>My page</title>
        {/* @ts-ignore */}
        <meta charSet="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Dadmor" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col min-h-screen border">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
