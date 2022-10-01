/*
  Users page
*/
import {
  Grid,
  Hr,
  HStack,
  VStack,
  Image,
  Space,
  Th,
  Td,
} from "components/themes/NativeTheme/layout";
import {IconText, Text } from "components/themes/NativeTheme/typo";

import { DesktopMenu, TopBar } from "pages/_app";
import { NavItem } from "components/themes/NativeTheme/navigation";
import { FiEdit, FiMail, FiTrash2 } from "react-icons/fi";
import { Avatar, TextCell } from "components/themes/PureBaldrTheme/partials";
import dynamic from "next/dynamic";

/* import template */
const Button: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_NAVIGATION}/Button`)
);
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
  const Card1: React.FC = () => {
    return (
      <Card spacing="none" horizontal={true} className="flex-1 h-full">
        <Grid spacing="null" className="grid-cols-3 h-full">
          <Image url="landscape.jpg" rounded="none" fill="cover" size="full" />
          <Grid className="col-span-2" spacingX="md" spacingY="md">
            <TextCell
              title="Product title, probably best"
              subTitle="Product short subtitle"
            />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Grid>
        </Grid>
      </Card>
    );
  };

  const Card2: React.FC = () => {
    return (
      <Card>
        <VStack>
          <Avatar
            size="lg"
            title="Title"
            subTitle="Subtitle"
            url="landscape.jpg"
          />
          <Text size="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <NavItem>
            <IconText icon={<FiMail />} text="user@gmail.com" />
          </NavItem>
          <Hr />
          <HStack className="justify-end">
            <Button>Message</Button>
            <NavItem href="/">
              <Button>Profile</Button>
            </NavItem>
          </HStack>
        </VStack>
      </Card>
    );
  };

  const Card3: React.FC = () => {
    return (
      <Card horizontal={true}>
        <TextCell title="Title" subTitle="Subtitle" />
        <Text size="sm" className="flex-1" color="light">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </Text>
        <Text size="sm" className="truncate">First</Text>
        <Text size="sm" className="truncate">Second</Text>
        <Text size="sm" color="success">
          Success
        </Text>
        <HStack className="justify-end">
          <NavItem href={`/`}>
            <IconText icon={<FiEdit />} text="Edit" size="xs" />
          </NavItem>
          <NavItem>
            <IconText
              color="error"
              icon={<FiTrash2 />}
              text="Remove"
              size="xs"
            />
          </NavItem>
        </HStack>
      </Card>
    );
  };

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
  ];

  /*
    View render
  */
  return (
    <SidebarDashboardLayout
      topBar={<TopBar />}
      menu={<DesktopMenu />}
      sideBar={<SideBar/>}
      body={
        <>
          <SectionHeader title="First example cards" />

          <Grid className="grid-cols-2">
            <Card1 />
            <Card1 />
          </Grid>
          <Space />
          <SectionHeader title="Second example cards" />
          <Grid className="grid-cols-2">
            <Card2 />
            <Card2 />
          </Grid>
          <Space />
          <SectionHeader title="Third example cards" />
          <Card3 />
          <Card3 />
        </>
      }
    />
  );
};
/* #DisablePrerenderer */
// @ts-ignore
Users.getInitialProps = () => ({});
export default Users;
