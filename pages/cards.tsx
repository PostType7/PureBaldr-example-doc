/*
  Users page
*/
import {
  Grid,
  Space,
  Th,
  Td,
} from "components/themes/NativeTheme/layout";
import {
  Text,
  Code,
} from "components/themes/NativeTheme/typo";

import { DesktopMenu, TopBar } from "pages/_app";
import { TextCell } from "components/themes/PureBaldrTheme/partials";
import dynamic from "next/dynamic";

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
              <Th spacing="sm" decorate>
                <Text>Name</Text>
              </Th>
              <Th spacing="sm" decorate>
                <Text>Scope</Text>
              </Th>
              <Th spacing="sm" decorate>
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
          <SectionHeader size="xxl" title="Card component" />
          <TextCell
            title="The basic component that organizes the displayed content"
            subTitle="The card maintains the default spacing, so the projected view will be equal"
          />
          <Space />

          <Text size="xs">Default card</Text>
          <Grid className="grid-cols-2">
            <Card>
              <Text className="border border-dotted bg-slate-100">Empty card component</Text>
              <Text className="border border-dotted bg-slate-100">with default spacing</Text>
            </Card>
            <Code border size="sm">
              {"<Card>\n"}
              {"  <Text>Empty card component</Text>\n"}
              {"  <Text>With default spacing</Text>\n"}
              {"</Card>"}
            </Code>
          </Grid>
          <Space />

          <Text size="xs">Card with horizontal rule</Text>

          <Grid className="grid-cols-2">
            <Card horizontal>
              <Text className="border border-dotted bg-slate-100">
                Empty card component with default spacing text block
              </Text>
              <Text className="border border-dotted bg-slate-100">
                Empty card component with default spacing text block
              </Text>
            </Card>
            <Code border size="sm">
              {"<Card horizontal>\n"}
              {"  <Text>Text block...</Text>\n"}
              {"  <Text>Text block...</Text>\n"}
              {"</Card>"}
            </Code>
          </Grid>
          <Space />

          <Text size="xs">Card with spacing manipulation</Text>

          <Grid className="grid-cols-2">
            <Card horizontal spacingX="xl">
              <Text className="border border-dotted bg-slate-100">First</Text>
              <Text className="border border-dotted bg-slate-100">Second</Text>
              <Text className="border border-dotted bg-slate-100">Third</Text>
            </Card>
            <Code border size="sm">
              {`<Card horizontal spacingX="xl">\n`}
              {"  <Text>Text block...</Text>\n"}
              {"  <Text>Text block...</Text>\n"}
              {"  <Text>Text block...</Text>\n"}
              {"</Card>"}
            </Code>
          </Grid>
          <Space />

          <Text size="xs">Card with reset spacing and full width cell</Text>

          <Grid className="grid-cols-2">
            <Card horizontal spacing="none">
              <Text className="border border-dotted bg-slate-100">First</Text>
              <Text className="flex-1 border border-dotted bg-slate-100">
                Full width second
              </Text>
              <Text className="border border-dotted bg-slate-100">Third</Text>
            </Card>
            <Code border size="sm">
              {`<Card horizontal spacingX="xl">\n`}
              {"  <Text>Text block...</Text>\n"}
              {`  <Text className="flex1">\n`}
              {`    Text block...\n`}
              {`  </Text>\n`}
              {"  <Text>Text block...</Text>\n"}
              {"</Card>"}
            </Code>
          </Grid>
          <Space />

          <Text size="xs">Cards inside card</Text>

          <Grid className="grid-cols-2">
            <Card horizontal className="justify-between">
              <Card shadowOff color="success" className="flex-1">
                <Text color="white" >Success</Text>
              </Card>
              <Card shadowOff color="error" className="flex-1">
                {" "}
                <Text color="white" >Error</Text>
              </Card>
              <Card shadowOff color="warning" className="flex-1">
                {" "}
                <Text color="white" className="flex-1">Warning</Text>
              </Card>
            </Card>
            <Code border size="sm">
              {`<Card horizontal className="justify-between">\n`}
              {`  <Card shadowOff color="success" className="flex-1">\n`}
              {`    <Text color="white" >Success</Text>\n`}
              {`  </Card>\n`}
              {`\n`}
              {`\n`}
            
            </Code>
          </Grid>
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
