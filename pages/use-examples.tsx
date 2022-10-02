/*
  Users page
*/
import {
  Grid,
  Space,
  Th,
  Td,
  Color,
} from "components/themes/NativeTheme/layout";
import { Text, Code, IconText } from "components/themes/NativeTheme/typo";

import { DesktopMenu, TopBar } from "pages/_app";
import dynamic from "next/dynamic";
import { TextCell } from "components/themes/PureBaldrTheme/partials";
import { FiFile } from "react-icons/fi";
import { NavItem } from "components/themes/NativeTheme/navigation";

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
          <SectionHeader size="xxl" title="Examples" />
          <TextCell
            title="The basic component that organizes the displayed content"
            subTitle="The card maintains the default spacing, so the projected view will be equal"
          />
          <Space />

          <Grid className="grid-cols-3">
            
            <NavItem href="/examples/cards-examples">
              <Card horizontal spacing="null" className="items-center">
                <Color className="p-6" bg="dark" text="white">
                  <FiFile />
                </Color>
                <Grid spacingX="md">Cards examples with code</Grid>
              </Card>
            </NavItem>

            <NavItem href="/examples/cards-crud-local">
              <Card horizontal spacing="null" className="items-center">
                <Color className="p-6" bg="dark" text="white">
                  <FiFile />
                </Color>
                <Grid spacingX="md">CARDS CRUD - list of cards with insert and edit data</Grid>
              </Card>
            </NavItem>

            <NavItem href="https://github.com/PostType7">
              <Card horizontal spacing="null" className="items-center">
                <Color className="p-6" bg="dark" text="white">
                  <FiFile />
                </Color>
                <Grid spacingX="md">GitHub</Grid>
              </Card>
            </NavItem>
          </Grid>
        </>
      }
    />
  );
};
/* #DisablePrerenderer */
// @ts-ignore
Users.getInitialProps = () => ({});
export default Users;
