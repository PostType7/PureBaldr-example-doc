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
  const SideBar: React.FC = () => {
    return (
      <Card bgColor="warning-light">
        <SectionHeader title="Card propertires" />
        <Text size="xs">Import from theme ./layout</Text>

        <table className="text-xs" width="100%">
          <thead>
            <tr>
              <Th>
                <Text>Name</Text>
              </Th>
              <Th>
                <Text>Scope</Text>
              </Th>
              <Th>
                <Text>Description</Text>
              </Th>
            </tr>
          </thead>
          <tbody>
            {properties.map((el: any, i: number) => {
              return (
                <tr key={i}>
                  <Td spacing="sm">
                    <Text>{el.name}</Text>
                  </Td>
                  <Td spacing="sm">
                    <Text>{el.scope}</Text>
                  </Td>
                  <Td spacing="sm">
                    <Text>{el.description}</Text>
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    );
  };

  const properties = [
    {
      name: "className",
      scope: "string",
      description: "Is chldren rendering as horizontal axis",
    },
    {
      name: "color",
      scope: "primary, success, error, warning, info, white",
      description: "Card background color",
    },
    {
      name: "horizontal",
      scope: "boolean",
      description: "Is chldren rendering as horizontal axis",
    },
    {
      name: "spacing",
      scope: "none, sm, md, lg, xl",
      description: "Card childrens spacing",
    },
    {
      name: "spacingY",
      scope: "none, sm, md, lg, xl",
      description: "Card childrens horizontal spacing",
    },
    {
      name: "spacingX",
      scope: "none, sm, md, lg, xl",
      description: "Card childrens vertical spacing",
    },
    {
      name: "shadowOff",
      scope: "boolean",
      description: "Disable card shadow",
    },
  ];

  /*
    View render
  */
  return (
    <SidebarDashboardLayout
      topBar={<TopBar />}
      menu={<DesktopMenu />}
      sideBar={<SideBar />}
      body={
        <>
          <Space />
          <SectionHeader size="xxl" title="Text component" />
          <TextCell
            title="The basic component that organizes the displayed content"
            subTitle="The card maintains the default spacing, so the projected view will be equal"
          />
          <Space />

          <Text size="xs">Default card</Text>
          <Grid className="grid-cols-2">
            <Card>
              <Text className="border border-dotted">Empty card component</Text>
              <Text className="border border-dotted">with default spacing</Text>
            </Card>
            <Code border size="sm">
              {"<Card>\n"}
              {"  <Text>Empty card component</Text>\n"}
              {"  <Text>With default spacing</Text>\n"}
              {"</Card>"}
            </Code>
          </Grid>
          <Space size="xxl" />

          <SectionHeader size="xxl" title="Code component" />
          <TextCell
            title="The basic component that organizes the displayed content"
            subTitle="The card maintains the default spacing, so the projected view will be equal"
          />
          <Space />

          <Text size="xs">Default card</Text>
          <Grid className="grid-cols-2">
            <Card>
              <Text className="border border-dotted">Empty card component</Text>
              <Text className="border border-dotted">with default spacing</Text>
            </Card>
            <Code border size="sm">
              {"<Card>\n"}
              {"  <Text>Empty card component</Text>\n"}
              {"  <Text>With default spacing</Text>\n"}
              {"</Card>"}
            </Code>
          </Grid>
          <Space size="xxl" />
        </>
      }
    />
  );
};
/* #DisablePrerenderer */
// @ts-ignore
Users.getInitialProps = () => ({});
export default Users;
