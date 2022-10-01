/*
  Users page
*/
import {
  Grid,
  HStack,
  VStack,
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
const FullDashboardLayout: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_PAGELAYOUT}/FullDashboardLayout`)
);
const SectionHeader: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_LAYOUT}/SectionHeader`)
);

const Stacks: React.FC = () => {
  // @ts-ignore
  const SideBar: React.FC = ({ props }) => {
    return (
      <>
        <Card bgColor="warning-light">
          <SectionHeader title="HStack propertires" />
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
              {props.data?.length ? (
                props.data.map((el: any, i: number) => {
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
                })
              ) : (
                <>empty</>
              )}
            </tbody>
          </table>
        </Card>
      </>
    );
  };
  // @ts-ignore
  const Hero: React.FC = ({ props }) => {
    return (
      <>
        <SectionHeader size="xxl" title={props.hero} />
        <TextCell title={props.title} subTitle={props.sub} />
        <Space size="xl"/>
      </>
    );
  };

  const HStackProps = {
    title: "HStack propertires",
    import: ".layout",
    data: [
      {
        name: "horizontal",
        scope: "boolean",
        description: "Is chldren rendering as horizontal axis",
      },
      {
        name: "className",
        scope: "string",
        description: "Is chldren rendering as horizontal axis",
      },
      {
        name: "bgColor",
        scope: "primary, success, error",
        description: "Card background color",
      },
      {
        name: "spacing",
        scope: "none, sm, md, lg, xl",
        description: "Card background color",
      },
    ],
  };

  const spaceProperties = [
    {
      name: "className",
      scope: "string",
      description: "Is chldren rendering as horizontal axis",
    },
    {
      name: "size",
      scope: "sm, md, lg, xl",
      description: "Space element widtrh and height space",
    },
  ];

  /*
    View render
  */
  return (
    <FullDashboardLayout
      topBar={<TopBar />}
      menu={<DesktopMenu />}
      sideBar={<SideBar />}
      body={
        <>
          {/* Hstack ------------------------------------------------- */}
          <Space />
          <Hero
            /* @ts-ignore */
            props={{
              hero: "HStack component",
              title:
                "The basic component that organizes the displayed content as horizontal stack",
              sub: "HStack maintains default spacing, so the projected view will be equal",
            }}
          />

          <Grid className="grid-cols-3">
            <Text className="col-span-2">
              Default HStack is horizontal list with default inner spacing
            </Text>
            <div className="row-span-6">
              {/* @ts-ignore */}
              <SideBar props={HStackProps} />
            </div>

            <HStack className="border bg-white bg-opacity-50">
              <Text className="bg-slate-200 border border-dotted">
                First child
              </Text>
              <Text className="bg-slate-200 border border-dotted">
                Second child
              </Text>
              <Text className="bg-slate-200 border border-dotted">
                Third child
              </Text>
            </HStack>
            <Code border size="sm" className="self-start">
              {"<HStack\n"}
              {"  <Text>First child</Text>\n"}
              {"  <Text>...</Text>\n"}
              {"</HStack>"}
            </Code>
            <Space size="xl"/>

            <div className="col-span-2">
              <Text>
                HStack acceplable tailwind classes to organise display behavior
                like width or align.
              </Text>
              <Text>
                The philosophy of an element is to separate spaces like margins
                and paddings
              </Text>
            </div>

            <HStack className="border justify-between bg-white bg-opacity-50">
              <Text className="bg-slate-200 border border-dotted">
                First child
              </Text>
              <Text className="bg-slate-200 border border-dotted">
                Second child
              </Text>
              <Text className="bg-slate-200 border border-dotted">
                Third child
              </Text>
            </HStack>
            <Code border size="sm">
              {`<HStack className="justify-between">\n`}
              {`  <Text>First child</Text>\n`}
              {`  <Text>...</Text>\n`}
              {`</HStack>`}
            </Code>
            <Space size="xl" className="col-span-2" />

            <Text className="col-span-3">
              HStack with children display rules
            </Text>

            <HStack className="border bg-white bg-opacity-50">
              <Text className="bg-slate-200 flex-1 border border-dotted">
                First child
              </Text>
              <Text className="bg-slate-200 flex-1 border border-dotted">
                Second child
              </Text>
              <Text className="bg-slate-200 flex-1 border border-dotted">
                Third child
              </Text>
            </HStack>
            <Code border size="sm">
              {`<HStack>\n`}
              {`  <Text className="flex-1">First child</Text>\n`}
              {`  <Text className="flex-1">...</Text>\n`}
              {`</HStack>`}
            </Code>
            <Space size="xl" className="col-span-2" />
            
            <Text className="col-span-2">HStack horizontal centered</Text>
            <div className=""></div>

            <HStack className="border items-center bg-white bg-opacity-50">
              <Text className="bg-slate-200 flex-1 border border-dotted">
                First child
              </Text>
              <Text className="bg-slate-200 flex-1 border border-dotted">
                Second child
              </Text>
              <Text className="bg-slate-200 flex-1 border border-dotted">
                Third child
              </Text>
            </HStack>
            <Code border size="sm">
              {`<HStack className="items-center">\n`}
              {`  <Text className="flex-1">First child</Text>\n`}
              {`  <Text className="flex-1">...</Text>\n`}
              {`</HStack>`}
            </Code>
          </Grid>
          <Space size="xxl" />

          {/* Vstack ------------------------------------------------- */}
          <Hero
            /* @ts-ignore */
            props={{
              hero: "VStack component",
              title:
                "The basic component that organizes the displayed content as vertical stack",
              sub: "VStack maintains default spacing, so the projected view will be equal",
            }}
          />
          <Space />
          <Grid className="grid-cols-3">
            <Text className="col-span-2">
              Default VStack is vertical list with default inner spacing
            </Text>

            <div className="row-span-6">
              {/* @ts-ignore */}
              <SideBar props={HStackProps} />
            </div>

            <VStack className="border bg-white bg-opacity-50">
              <Text className="bg-slate-200 border border-dotted">
                First child
              </Text>
              <Text className="bg-slate-200 border border-dotted">
                Second child
              </Text>
              <Text className="bg-slate-200 border border-dotted">
                Third child
              </Text>
            </VStack>
            <Code border size="sm">
              {"<VStack\n"}
              {"  <Text>First child</Text>\n"}
              {"  <Text>...</Text>\n"}
              {"  <Text>...</Text>\n"}
              {"</VStack>"}
            </Code>
            <Space size="xl" className="col-span-2" />

            <Text className="col-span-2">Change VStack spacing</Text>

            <VStack spacing="xl" className="border bg-white bg-opacity-50">
              <Text className="bg-slate-200 border border-dotted">
                First child
              </Text>
              <Text className="bg-slate-200 border border-dotted">
                Second child
              </Text>
              <Text className="bg-slate-200 border border-dotted">
                Third child
              </Text>
            </VStack>
            <Code border size="sm">
              {`<VStack spacing="xl">\n`}
              {"  <Text>First child</Text>\n"}
              {"  <Text>...</Text>\n"}
              {"  <Text>...</Text>\n"}
              {"</VStack>"}
            </Code>
            <Space size="xl" className="col-span-3" />

            <Text className="col-span-3">Reset VStack spacing</Text>
            <VStack spacing="none" className="border">
              <Text className="bg-slate-200 border border-dotted">
                First child
              </Text>
              <Text className="bg-slate-200 border border-dotted">
                Second child
              </Text>
              <Text className="bg-slate-200 border border-dotted">
                Third child
              </Text>
            </VStack>
            <Code border size="sm">
              {`<VStack spacing="xl">\n`}
              {"  <Text>First child</Text>\n"}
              {"  <Text>...</Text>\n"}
              {"  <Text>...</Text>\n"}
              {"</VStack>"}
            </Code>
            <Space size="xl" className="col-span-2" />

            <Text className="col-span-3">VStack with centered children</Text>
            <VStack spacing="none" className="items-center border">
              <Text className="bg-slate-200 border border-dotted flex-1">
                First child
              </Text>
              <Text className="bg-slate-200 border border-dotted flex-1">
                Second child
              </Text>
              <Text className="bg-slate-200 border border-dotted flex-1">
                Third child
              </Text>
            </VStack>
            <Code border size="sm">
              {`<VStack spacing="none" className="items-center">\n`}
              {`  <Text className="flex-1">First child</Text>\n`}
              {`  <Text className="flex-1">...</Text>\n`}
              {`  <Text className="flex-1">...</Text>\n`}
              {"</VStack>"}
            </Code>
          </Grid>
          <Space size="xxl" />

          {/* Space ------------------------------------------------- */}

          <Hero
            /* @ts-ignore */
            props={{
              hero: "Grid component",
              title:
                "The basic component that organizes the displayed content as grid",
              sub: "Space maintains default spacing, so the projected view will be equal",
            }}
          />

         
          <Grid className="grid-cols-3">

            <Text className="col-span-2">Standard grid component with defoult spacing before childrens</Text>
            <div className="row-span-6">
              {/* @ts-ignore */}
              <SideBar props={HStackProps} />
            </div>
            <Grid className="border grid-cols-2">
              <Text className="bg-slate-200 border border-dotted">First child</Text>
              <Text className="bg-slate-200 border border-dotted">Second child</Text>
              <Text className="bg-slate-200 border border-dotted">Third child</Text>
              <Text className="bg-slate-200 border border-dotted">Third child</Text>
            </Grid>
            <Code border size="sm">
              {`<Grid className="grid-cols-2">\n`}
              {`  <Text>First child</Text>\n`}
              {`  <Text>...</Text>\n`}
              {`  <Text>...</Text>\n`}
              {"</Grid>"}
            </Code>

          </Grid>
          <Space size="xxl" />

          {/* Grid ------------------------------------------------- */}

          <SectionHeader size="xxl" title="Space component" />
          <TextCell
            title="The basic component that organizes the displayed content"
            subTitle="Space maintains default spacing, so the projected view will be equal"
          />
          <Space />
          <Text size="xs">VStack with centered children</Text>
          <Grid className="grid-cols-2">
            <VStack spacing="none" className="items-center border">
              <Text className="bg-slate-200 border border-dotted flex-1">
                First child
              </Text>
              <Text className="bg-slate-200 border border-dotted flex-1">
                Second child
              </Text>
              <Text className="bg-slate-200 border border-dotted flex-1">
                Third child
              </Text>
            </VStack>
            <Code border size="sm">
              {`<VStack spacing="none" className="items-center">\n`}
              {`  <Text className="flex-1">First child</Text>\n`}
              {`  <Text className="flex-1">...</Text>\n`}
              {`  <Text className="flex-1">...</Text>\n`}
              {"</VStack>"}
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
Stacks.getInitialProps = () => ({});
export default Stacks;
