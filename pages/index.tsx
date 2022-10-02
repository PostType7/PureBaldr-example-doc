/*
  Backoffice
  https://codepen.io/dgca/pen/WGayvv
*/

import dynamic from "next/dynamic";
import { HStack, Grid, Space } from "components/themes/NativeTheme/layout";
import { Text, Code } from "components/themes/NativeTheme/typo";

import { DesktopMenu, TopBar } from "pages/_app";
import { TextCell } from "components/themes/PureBaldrTheme/partials";

const SectionHeader: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_LAYOUT}/SectionHeader`)
);
const Card: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_LAYOUT}/Card`)
);
const SidebarDashboardLayout: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_PAGELAYOUT}/SidebarDashboardLayout`)
);

const Body: React.FC = () => {
  return (
    <>
      <Space />
      <SectionHeader size="xxl" title="Next.js and Tailwind working UIKit" />
      <TextCell
        title="Components library integrate with backend data providers"
        subTitle="as a Themes and Plugins ecosystem"
      />
      <Space size="xxl" />
      <SectionHeader title="Main areas" />
      <Card color="success-light" spacing="xl">
        <TextCell
          title="Next.js"
          subTitle="Pure next.js with typescript and tailwind"
        />
      </Card>
      <Grid className="grid-cols-3">
        <Card color="info-light" spacing="xl">
          <TextCell
            title="NativeTheme"
            subTitle="provide unified sizing and spacing system"
          />
        </Card>
        <Card color="info-light" spacing="xl">
          <TextCell
            title="PureBaaldrTheme"
            subTitle="provide example UIKit with options store"
          />
        </Card>
        <Card color="warning-light" spacing="xl">
          <TextCell
            title="ProvidersPlugin"
            subTitle="connecting with backend (REST or GQL)"
          />
        </Card>
      </Grid>

      <Space size="xl" />
      <SectionHeader title="Getting started " />
      <Space />

      <HStack spacingL="sm" spacing="sm" className="items-center">
        <Text size="sm">#1</Text>
        <Text size="sm">
          <Text size="sm">
            {" "}
            Clone empty next.js repo with typescript and tailwind
          </Text>
        </Text>
      </HStack>

      <Code color="success-light" bg="dark">
        git clone git@github.com:PostType7/NextStarterPack.git YOUR-PROJECT-NAME
      </Code>

      <Space />

      <HStack spacingL="sm" spacing="sm" className="items-center">
        <Text size="sm">#2</Text>
        <Text size="sm">
          <Text size="sm">Clone native UI components</Text>
        </Text>
      </HStack>

      <Code color="success-light" bg="dark">
        git clone git@github.com:PostType7/NativeTheme.git
        YOUR-PROJECT-NAME/src/components/themes/NativeTheme
      </Code>

      <Space />

      <HStack spacingL="sm" spacing="sm" className="items-center">
        <Text size="sm">#3</Text>
        <Text size="sm">Clone PostType7 basic theme (PureBaldrTheme)</Text>
      </HStack>

      <Code color="success-light" bg="dark">
        git clone git@github.com:PostType7/NativeTheme.git
        YOUR-PROJECT-NAME/src/components/themes/PureBaldrTheme
      </Code>

      <Space />

      <HStack spacingL="sm" spacing="sm" className="items-center">
        <Text size="sm">#4</Text>
        <Text size="sm">
          <Text size="sm">Clone example PureBaldrTheme page</Text>
        </Text>
      </HStack>

      <Code color="success-light" bg="dark">
        git clone git@github.com:PostType7/NativeTheme.git
        YOUR-PROJECT-NAME/src/pages/PureBaldr-example-backOffice
      </Code>

      <Space size="xxl" />
    </>
  );
};

const Dashboard: React.FC = () => {
  return (
    <SidebarDashboardLayout
      menu={<DesktopMenu />}
      body={<Body />}
      topBar={<TopBar />}
      sideBar={<></>}
    />
  );
};
/* #DisablePrerenderer */
// @ts-ignore
Dashboard.getInitialProps = () => ({});
export default Dashboard;
