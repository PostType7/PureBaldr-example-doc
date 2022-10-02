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
  Color,
} from "components/themes/NativeTheme/layout";
import { Code, IconText, Text } from "components/themes/NativeTheme/typo";

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
const SectionHeader: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_LAYOUT}/SectionHeader`)
);
const FullDashboardLayout: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_PAGELAYOUT}/FullDashboardLayout`)
);

const Users: React.FC = () => {
  const Card1: React.FC = () => {
    return (
      <Card spacing="none" horizontal={true} className="flex-1 h-full">
        <Grid spacing="null" className="grid-cols-3 h-full">
          <Image url="/landscape.jpg" rounded="none" fill="cover" size="full" />
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
            url="/landscape.jpg"
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
            <Button onClick={() => alert("Undefined void click")}>
              Message
            </Button>
            <Button onClick={() => alert("Undefined void click")}>
              Profile
            </Button>
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
        <Text size="sm" className="truncate">
          First
        </Text>
        <Text size="sm" className="truncate">
          Second
        </Text>
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

  const Card4: React.FC = () => {
    return (
      <Card spacing="none">
        <HStack spacingX="md" spacingY="md">
          <Text size="xl">Lorem ipsum dolor sit amet.</Text>
        </HStack>

        <Hr />
        <VStack spacingX="md" spacingY="md">
          <TextCell
            title="Probably bets title"
            subTitle="On this subtitle ever"
          />
          <Text size="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </VStack>
        <Hr />

        <HStack spacingX="md" spacingY="md" className="justify-end">
          <Button
            color="secondary"
            onClick={() => alert("Undefined void click")}
          >
            Cancel
          </Button>
          <Button
            color="secondary"
            onClick={() => alert("Undefined void click")}
          >
            Accept
          </Button>
        </HStack>
      </Card>
    );
  };

  /*
    View render
  */
  return (
    <FullDashboardLayout
      topBar={<TopBar />}
      menu={<DesktopMenu />}
      body={
        <>
          <SectionHeader title="Card with thumbnail" />

          <Grid className="grid-cols-3">
            <Card1 />
            <Card1 />
            <Code border size="sm" className="h-48 overflow-y-scroll">
              {`<Card spacing="none" \n`}
              {`  horizontal={true} className="flex-1 h-full">\n`}
              {`  <Grid spacing="null" className="grid-cols-3 h-full">\n`}
              {`    <Image url="/landscape.jpg" rounded="none"\n`}
              {`      fill="cover" size="full" />\n`}
              {`    <Grid className="col-span-2"\n`}
              {`      spacingX="md" spacingY="md">\n`}
              {`      <TextCell\n`}
              {`        title="Product title, probably best"\n`}
              {`        subTitle="Product short subtitle"\n`}
              {`      />\n`}
              {`      <Text>\n`}
              {`        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n`}
              {`        eiusmod tempor incididunt ut labore et dolore magna aliqua.\n`}
              {`      </Text>\n`}
              {`    </Grid>\n`}
              {`  </Grid>\n`}
              {`</Card>\n`}
            </Code>
          </Grid>

          <Space size="xl" />

          <SectionHeader title="User card" />
          <Grid className="grid-cols-3">
            <Card2 />
            <Card2 />
            <Code border size="sm" className="h-64 overflow-y-scroll">
              {`<Card spacing="none" \n`}
              {`  horizontal={true} className="flex-1 h-full">\n`}
              {`  <Grid spacing="null" className="grid-cols-3 h-full">\n`}
              {`    <Image url="/landscape.jpg" rounded="none"\n`}
              {`      fill="cover" size="full" />\n`}
              {`    <Grid className="col-span-2"\n`}
              {`      spacingX="md" spacingY="md">\n`}
              {`      <TextCell\n`}
              {`        title="Product title, probably best"\n`}
              {`        subTitle="Product short subtitle"\n`}
              {`      />\n`}
              {`      <Text>\n`}
              {`        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n`}
              {`        eiusmod tempor incididunt ut labore et dolore magna aliqua.\n`}
              {`      </Text>\n`}
              {`    </Grid>\n`}
              {`  </Grid>\n`}
              {`</Card>\n`}
            </Code>
          </Grid>
          <Space size="xl" />

          <SectionHeader title="List card" />
          <Grid className="grid-cols-3">
            <div className="col-span-2 grid gap-4">
              <Card3 />
              <Card3 />
            </div>
            <Code border size="sm" className="h-32 overflow-y-scroll">
              {`<Card horizontal={true}>\n`}
              {`  <TextCell title="Title" subTitle="Subtitle" />\n`}
              {`  <Text size="sm" className="flex-1" color="light">\n`}
              {`    <span>\n`}
              {`      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n`}
              {`      eiusmod tempor incididunt ut labore et dolore magna aliqua.\n`}
              {`    </span>\n`}
              {`  </Text>\n`}
              {`  <Text size="sm" className="truncate">First</Text>\n`}
              {`  <Text size="sm" className="truncate">Second</Text>\n`}
              {`  <Text size="sm" color="success">\n`}
              {`    Success\n`}
              {`  </Text>\n`}
              {`  <HStack className="justify-end">\n`}
              {`    <NavItem href={'/'}>\n`}
              {`      <IconText icon={<FiEdit />} text="Edit" size="xs" />\n`}
              {`    </NavItem>\n`}
              {`    <NavItem>\n`}
              {`      <IconText\n`}
              {`        color="error"\n`}
              {`        icon={<FiTrash2 />}\n`}
              {`        text="Remove"\n`}
              {`        size="xs"\n`}
              {`      />\n`}
              {`    </NavItem>\n`}
              {`</HStack>\n`}
              {`</Card>\n`}
            </Code>
          </Grid>

          <Space size="xl" />

          <SectionHeader title="Card with header and footer" />
          <Grid className="grid-cols-3">
            <Card4 />
            <Card4 />
            <Code border size="sm" className="h-64 overflow-y-scroll">
              {`<Card spacing="none">\n`}
              {`  <HStack spacingX="md" spacingY="md">\n`}
              {`    <Text size="xl">Lorem ipsum dolor sit amet.</Text>\n`}
              {`  </HStack>\n`}

              {`  <Hr />\n`}
              {`  <VStack spacingX="md" spacingY="md">\n`}
              {`    <TextCell\n`}
              {`      title="Probably bets title"\n`}
              {`      subTitle="On this subtitle ever"\n`}
              {`    />\n`}
              {`    <Text size="sm">\n`}
              {`      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n`}
              {`      eiusmod tempor incididunt ut labore et dolore magna aliqua.\n`}
              {`    </Text>\n`}
              {`  </VStack>\n`}
              {`  <Hr />\n`}

              {`  <HStack spacingX="md" spacingY="md" className="justify-end">\n`}
              {`    <Button\n`}
              {`      color="secondary"\n`}
              {`      onClick={() => alert("Undefined void click")}\n`}
              {`    >\n`}
              {`      Cancel\n`}
              {`    </Button>\n`}
              {`    <Button\n`}
              {`      color="secondary"\n`}
              {`      onClick={() => alert("Undefined void click")}\n`}
              {`    >\n`}
              {`      Accept\n`}
              {`    </Button>\n`}
              {`   </HStack>\n`}
              {`</Card>\n`}
            </Code>
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
