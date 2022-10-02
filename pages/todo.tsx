/*
  Users page
*/
import {
  Grid,
  Space,
  Th,
  Td,
} from "components/themes/NativeTheme/layout";
import { Text, Code } from "components/themes/NativeTheme/typo";

import { DesktopMenu, TopBar } from "pages/_app";
import dynamic from "next/dynamic";
import { TextCell } from "components/themes/PureBaldrTheme/partials";

/* import template */
const Card: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_LAYOUT}/Card`)
);
const SidebarDashboardLayout: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_PAGELAYOUT}/SidebarDashboardLayout`)
);
const SectionHeader: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_LAYOUT}/SectionHeader`)
);

const Users: React.FC = () => {
  

  
  /*
    View render
  */
  return (
    <SidebarDashboardLayout
      topBar={<TopBar />}
      menu={<DesktopMenu />}
     
      body={
        <>
          <Space />
          <SectionHeader size="xxl" title="TODO" />
          <TextCell
            title="Article is not finished yet."
            subTitle="Hey, all its on publish repo: https://github.com/PostType7/PureBaldr-example-doc"
          />
          <Space />

        
        </>
      }
    />
  );
};
/* #DisablePrerenderer */
// @ts-ignore
Users.getInitialProps = () => ({});
export default Users;
