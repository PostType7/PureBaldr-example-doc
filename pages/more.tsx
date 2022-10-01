/*
  Backoffice
  https://codepen.io/dgca/pen/WGayvv
*/

import {
  Image,
  HStack,
  VStack,
  Hr,
  Grid,
  Color,
} from "components/themes/NativeTheme/layout";
import { IconText, Text } from "components/themes/NativeTheme/typo";
import { NavItem } from "components/themes/NativeTheme/navigation";

import {
  FiArrowDown,
  FiArrowUp,
  FiBell,
  FiChevronLeft,
  FiChevronRight,
  FiFileText,
  FiRotateCw,
  FiSearch,
} from "react-icons/fi";
import { DesktopMenu } from "pages/_app";
import { Input, RichText } from "components/themes/PureBaldrTheme/stateForm";
import { useRouter } from "next/router";
import { useState } from "react";
import dynamic from "next/dynamic";
import { CheckBox } from "components/themes/PureBaldrTheme/stateForm/Checkbox";
import { TextCell } from "components/themes/PureBaldrTheme/partials";

const Button: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_NAVIGATION}/Button`)
);
const Pagination: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_NAVIGATION}/Pagination`)
);
const Badge: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_LAYOUT}/Badge`)
);
const Card: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_LAYOUT}/Card`)
);
const SectionHeader: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_LAYOUT}/SectionHeader`)
);
const SidebarDashboardLayout: any = dynamic(
  import(`${process.env.NEXT_PUBLIC_CUSTOM_PAGELAYOUT}/SidebarDashboardLayout`)
);

const Body: React.FC = () => {
  return (
    <>
      <SectionHeader
        title="General report dashboard"
        actions={
          <>
            <Button bgColor="light" icon={<FiFileText />}>
              Export to Excel
            </Button>
            <Button bgColor="light" icon={<FiFileText />}>
              Export to PDF
            </Button>
          </>
        }
      />
      <VStack>
        {/* hero */}

        <VStack>
          <Card
            horizontal={true}
            spacing="xl"
            header={
              <HStack className="justify-between">
                <Text size="md">Header of the first element</Text>
                <NavItem>
                  <IconText icon={<FiRotateCw />} text="Reload" />
                </NavItem>
              </HStack>
            }
          >
            <Image url="landscape.jpg" size="xl" rounded="md" fill="cover" />
            <HStack>
              <TextCell
                title="Product title, probably best"
                subTitle="Product short subtitle"
              />
              <Text size="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </Text>
            </HStack>
            <Text size="sm">22.99</Text>
          </Card>
        </VStack>
        {/* Cards */}
        <Grid className="grid-cols-3">
          <Card>
            <VStack>
              <HStack>
                <Color color="success">
                  <FiBell className="text-2xl" />
                </Color>
                <Badge bgColor="success" text="33%" icon={<FiArrowUp />} />
              </HStack>
              <TextCell titleSize="xxl" title="723" subTitle="Avilable shops" />
            </VStack>
          </Card>
          <Card>
            <VStack>
              <HStack>
                <Color color="error">
                  <FiBell className="text-2xl" />
                </Color>
                <Badge bgColor="error" text="2%" icon={<FiArrowDown />} />
              </HStack>
              <TextCell titleSize="xxl" title="21" subTitle="New daily shops" />
            </VStack>
          </Card>
          <Card>
            <VStack>
              <HStack>
                <Color color="success">
                  <FiBell className="text-2xl" />
                </Color>
                <Badge bgColor="success" text="13%" icon={<FiArrowUp />} />
              </HStack>
              <TextCell
                titleSize="xxl"
                title="89"
                subTitle="New weekly shops"
              />
            </VStack>
          </Card>
        </Grid>
        {/* table */}
        <VStack>
          <Hr />
          <HStack className="uppercase" spacingX="md">
            <Text size="md" className="w-1/4">
              full
            </Text>
            <Text size="md" className="w-1/4">
              full
            </Text>
            <Text size="md" className="w-full">
              half
            </Text>
            <Text size="md" className="w-1/12">
              small
            </Text>
          </HStack>
          <Card horizontal={true}>
            <Text size="sm" className="w-1/4">
              Product title, probably best
            </Text>
            <TextCell className="w-1/4" title="Nikon" subTitle="Photography" />
            <Text size="sm" className="w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </Text>
            <Text size="sm" className="w-1/12">
              <Button>23,33</Button>
            </Text>
          </Card>
          <Card horizontal={true}>
            <Text size="sm" className="w-1/4">
              Product title, probably best
            </Text>
            <TextCell className="w-1/4" title="Nikon" subTitle="Photography" />
            <Text size="sm" className="w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </Text>
            <Text size="sm" className="w-1/12">
              <Button>11.99</Button>
            </Text>
          </Card>
          <Card horizontal={true}>
            <Text size="sm" className="w-1/4">
              Product title, probably best
            </Text>
            <TextCell className="w-1/4" title="Nikon" subTitle="Photography" />
            <Text size="sm" className="w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </Text>
            <Text size="sm" className="w-1/12">
              <Button>11.99</Button>
            </Text>
          </Card>
          <Pagination />

          <Card
            horizontal={true}
            spacing="xl"
            header={
              <HStack className="justify-between">
                <Text size="md">Header of the last element</Text>
                <CheckBox form={[]} />
              </HStack>
            }
          >
            <Image
              className="self-start"
              url="landscape.jpg"
              size="xl"
              rounded="md"
              fill="cover"
            />
            <Text size="sm" className="w-2/3 -mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
            <Text className="flex-1 text-right">22.99</Text>
          </Card>
        </VStack>
      </VStack>
    </>
  );
};

const Dashboard: React.FC = () => {
  interface FormDataType {
    first: string;
    second: string;
    third: string;
  }
  const Button: any = dynamic(
    import(`${process.env.NEXT_PUBLIC_CUSTOM_NAVIGATION}/Button`)
  );

  const router = useRouter();
  const [formErrorMessages, setFormErrorMessages] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormDataType>({
    first: "",
    second: "",
    third: "",
  });

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // alert(JSON.stringify(formData));
  };

  return (
    <SidebarDashboardLayout
      menu={<DesktopMenu />}
      body={<Body />}
      sideBar={
        <>
          <SectionHeader
            title="Transactions"
            actions={
              <Button bgColor="light" icon={<FiFileText />}>
                Export to PDF
              </Button>
            }
          />
          <VStack>
            <Card horizontal={true}>
              <Image size="md" />
              <TextCell
                title="Santonio Gonderas"
                subTitle="22 June 2011"
                className="flex-1"
              />
              <Text size="sm" color="success">
                +$204
              </Text>
            </Card>
            <Card horizontal={true}>
              <Image size="md" />
              <TextCell
                title="Bard Bit"
                subTitle="22 June 2011"
                className="flex-1"
              />
              <Text size="sm" color="error">
                -$104
              </Text>
            </Card>
          </VStack>
          {/* Important notes */}
          <SectionHeader
            title="Important notes"
            actions={
              <>
                <Button bgColor="light">
                  <FiChevronLeft />
                </Button>
                <Button bgColor="light">
                  <FiChevronRight />
                </Button>
              </>
            }
          />
          <Card>
            <VStack>
              <TextCell
                title="Lorem ipsum dolor sit amet"
                subTitle="20 hours ago"
              />
              <Text size="sm" color="light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <HStack className="justify-between">
                <Button bgColor="secondary">View notes</Button>
                <Button bgColor="light">Dismiss</Button>
              </HStack>
            </VStack>
          </Card>
          {/* form */}
          <SectionHeader title="Forms" />
          <form onSubmit={onSubmitHandler}>
            <VStack>
              <Input
                label="Input field"
                form={["first", formData, setFormData]}
              />
              <Input
                icon={<FiSearch />}
                label="Input field with icon"
                form={["second", formData, setFormData]}
              />
              <RichText
                label="Rich text"
                form={["third", formData, setFormData]}
              />
              <Button className="w-full" bgColor="secondary">
                Submit
              </Button>
            </VStack>
          </form>
        </>
      }
    />
  );
};
/* #DisablePrerenderer */
// @ts-ignore
Dashboard.getInitialProps = () => ({});
export default Dashboard;
