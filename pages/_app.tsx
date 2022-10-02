import type { NextComponentType } from "next";
import type { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import { FiCircle, FiDatabase, FiGift, FiGithub, FiHome, FiPackage, FiZap } from "react-icons/fi";

import "styles/index.css";
//import "tailwindcss/tailwind.css";

import { HStack, VStack } from "components/themes/NativeTheme/layout";
import { NavItem, Tree } from "components/themes/NativeTheme/navigation";
import Head from "next/head";
import { IconText } from "components/themes/NativeTheme/typo";


const leftMenu = [
  {
    id: "/",
    parentId: 0,
    name: "Nextjs UIKIT",
    icon: <FiHome />,
    color: "light",
    component: "NavItem",
  },

  {
    id: "4d4f2s",
    parentId: 0,
    text:"Native Theme",
    className:"pl-6 pt-4 pb-4 uppercase text-gray-500 border-t",
    component: "Text",
  },
  {
    id: "/stacks",
    parentId: 0,
    name: "Layout components",
    icon: <FiPackage />,
    color: "dark",
    component: "NavItem",
  },
  {
    id: "/cards",
    parentId: 0,
    name: "Card component",
    icon: <FiPackage />,
    color: "dark",
    component: "NavItem",
  },
  {
    id: "/navigation",
    parentId: 0,
    name: "Navigation components",
    icon: <FiPackage />,
    color: "dark",
    component: "NavItem",
  },
  {
    id: "/typo",
    parentId: 0,
    name: "Typography components",
    icon: <FiPackage />,
    color: "dark",
    component: "NavItem",
  },
 
  {
    id: "4d4f2s",
    parentId: 0,
    text:"PureBaldr Theme",
    className:"pl-6 pt-4 pb-4 uppercase text-gray-500 border-t",
    component: "Text",
  },
  {
    id: "/",
    parentId: 0,
    name: "Page layout components",
    icon: <FiPackage />,
    color: "dark",
    component: "NavItem",
  },
  {
    id: "/",
    parentId: 0,
    name: "Layout components",
    icon: <FiPackage />,
    color: "dark",
    component: "NavItem",
  },
  {
    id: "/",
    parentId: 0,
    name: "Navigation components",
    icon: <FiPackage />,
    color: "dark",
    component: "NavItem",
  },
  {
    id: "/",
    parentId: 0,
    name: "Partial components",
    icon: <FiPackage />,
    color: "dark",
    component: "NavItem",
  },
  {
    id: "/",
    parentId: 0,
    name: "Form components",
    icon: <FiPackage />,
    color: "dark",
    component: "NavItem",
  },
  {
    id: "/",
    parentId: 0,
    name: "Theme store",
    icon: <FiDatabase />,
    color: "dark",
    component: "NavItem",
  },
  {
    id: "examples/cards-crud-local",
    parentId: 0,
    name: "Use examples",
    icon: <FiGift />,
    color: "dark",
    component: "NavItem",
  },
  {
    id: "4d4f2s",
    parentId: 0,
    text:"Plugins",
    className:"pl-6 pt-4 pb-4 uppercase text-gray-500 border-t",
    component: "Text",
  },
  {
    id: "/",
    parentId: 0,
    name: "RestStrapiProviders",
    icon: <FiZap />,
    color: "dark",
    component: "NavItem",
  },
  {
    id: "4d4f2s",
    parentId: 0,
    text:"Theme mods",
    className:"pl-6 pt-4 pb-4 uppercase text-gray-500 border-t",
    component: "Text",
  },
  {
    id: "/",
    parentId: 0,
    name: "PureBaldr pageLayout2",
    icon: <FiZap />,
    color: "dark",
    component: "NavItem",
  },
  {
    id: "/",
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
        POSTTYPE7 UIKIT
      </HStack>
      <NavItem href="https://github.com/PostType7">
        <IconText icon={<FiGithub />} text="GitHub" />
      </NavItem>
    </>
  );
};





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
