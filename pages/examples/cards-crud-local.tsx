/*
  Users page
*/
import {
  Color,
  Hr,
  HStack,
  Space,
  VStack,
} from "components/themes/NativeTheme/layout";
import { Text } from "components/themes/NativeTheme/typo";

import { DesktopMenu, TopBar } from "pages/_app";
import dynamic from "next/dynamic";
import { TextCell } from "components/themes/PureBaldrTheme/partials";
import { useEffect, useState } from "react";
import { useThemeStore } from "components/themes/PureBaldrTheme/themeStore";
import Button from "components/themes/PureBaldrTheme/navigation/Button";
import { Input, RichText } from "components/themes/PureBaldrTheme/stateForm";
import { FiSearch, FiX } from "react-icons/fi";
import { Message } from "components/themes/PureBaldrTheme/layout";
import { ModalWrapper } from "components/themes/PureBaldrTheme/layout/ModalWrapper";

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

const ModalBody = () => {
  const setAttr = useThemeStore((state: any) => state.setAttr);
  const pushElement = useThemeStore((state: any) => state.pushElement);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    price: "",
  });

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /* push form data to theme storage */
    pushElement({ path: "theme.exampleElements", element: formData });

    /* show message */
    setAttr({
      path: "theme.message.text",
      value: "Insert new element",
    });

    /* close modal */
    setAttr({
      path: "theme.modal.open",
      value: false,
    });
  };
  return (
    <Card spacing="null">
      <HStack
        spacingY="lg"
        spacingX="md"
        className="justify-between items-center"
      >
        <Text size="xl">Insert new data</Text>
        <FiX
          className="cursor-pointer"
          onClick={() =>
            setAttr({
              path: "theme.modal.open",
              value: false,
            })
          }
        />
      </HStack>
      <Hr />
      <form onSubmit={onSubmitHandler}>
        <Color bg="light">
          <VStack spacingY="md" spacingX="md">
            <Input label="Title" form={["title", formData, setFormData]} />
            <RichText
              label="Description"
              form={["description", formData, setFormData]}
            />

            <HStack>
              <Input label="Type" form={["status", formData, setFormData]} />
              <Input
                label="Link name"
                form={["price", formData, setFormData]}
              />
            </HStack>

            <Button>SUBMIT</Button>
          </VStack>
        </Color>
      </form>
    </Card>
  );
};

const Users: React.FC = () => {
  /*
    View data
  */
  const [search, setSearch] = useState<String>("");
  const setAttr = useThemeStore((state: any) => state.setAttr);
  const modal = useThemeStore((state: any) => state.theme.modal);
  const themeListData = useThemeStore(
    (state: any) => state.theme.exampleElements
  );

  /*
    View methods
  */

  /* register data array */
  if (!themeListData) {
    setAttr({
      path: "theme.exampleElements",
      value: [
        {
          title: "First example title",
          description: "First example description",
          status: "success",
        },
        {
          title: "Second example title",
          description: "Second example description",
          status: "warning",
        },
      ],
    });
  }

  /*
    View render
  */
  return (
    <SidebarDashboardLayout
      topBar={<TopBar />}
      menu={<DesktopMenu />}
      body={
        <>
          <Message />
          <Space />
          <SectionHeader size="xxl" title="CARDS CRUD (local) example" />
          <Text>This CRUD based on PureBaldrTheme options storage</Text>

          <HStack className="justify-between">
            <Button
              onClick={() => {
                setAttr({
                  path: "theme.modal.open",
                  value: true,
                });
              }}
            >
              Insert new notice
            </Button>
            <HStack spacing="xs">
              <Input icon={<FiSearch />} form={["search", search, setSearch]} />
              <Button
                onClick={() =>
                  setAttr({
                    path: "theme.message.text",
                    value: "This button populate only message",
                  })
                }
                color="light"
                icon={<FiSearch />}
              />
            </HStack>
          </HStack>
          {themeListData &&
            themeListData.map((el: any) => {
              return (
                <Card horizontal className="items-center">
                  <TextCell
                    className="w-1/6"
                    title={el.title}
                    subTitle="description"
                  />
                  <Hr />
                  <Text size="sm" className="flex-1">
                    {el.description}
                  </Text>
                  <Text color={el.status} size="sm">
                    {el.status}
                  </Text>
                  <Text size="sm">Price</Text>
                  <Text size="sm">Edit</Text>
                  <Text size="sm">Delete</Text>
                </Card>
              );
            })}

          {modal.open && (
            <ModalWrapper>
              <ModalBody />
            </ModalWrapper>
          )}
        </>
      }
    />
  );
};
/* #DisablePrerenderer */
// @ts-ignore
Users.getInitialProps = () => ({});
export default Users;
