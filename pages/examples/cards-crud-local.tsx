/*
  Next.js page with 
  CARDS CRUD (local) example

  POSTTYPE7 page
  https://github.com/PostType7
*/
import {
  Block,
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
import { useState } from "react";
import { useThemeStore } from "components/themes/PureBaldrTheme/themeStore";
import Button from "components/themes/PureBaldrTheme/navigation/Button";
import {
  Input,
  RichText,
  Select,
  MultiOption,
  Option,
} from "components/themes/PureBaldrTheme/stateForm";
import { FiSearch, FiX } from "react-icons/fi";
import { Message } from "components/themes/PureBaldrTheme/layout";
import { ModalWrapper } from "components/themes/PureBaldrTheme/layout/ModalWrapper";
import Badge from "components/themes/PureBaldrTheme/layout/Badge";
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

const ModalBody = () => {
  const setAttr = useThemeStore((state: any) => state.setAttr);
  const pushElement = useThemeStore((state: any) => state.pushElement);

  const editState = useThemeStore((state: any) => state.theme.editState);
  const themeListData = useThemeStore(
    (state: any) => state.theme.exampleElements
  );
  const [formData, setFormData] = useState(
    editState === -1
      ? {
          title: "",
          description: "",
          category: ["uncategorize"],
          status: "",
        }
      : themeListData[editState]
  );

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editState == -1
      ? pushElement({ path: "theme.exampleElements", element: formData })
      : setAttr({
          path: `theme.exampleElements.${editState}`,
          value: formData,
        });

    /* show message */
    editState == -1
      ? setAttr({
          path: "theme.message.text",
          value: "Insert new element",
        })
      : setAttr({
          path: "theme.message.text",
          value: "Element wad edited",
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
        {editState == -1 ? (
          <Text size="xl">Insert new data</Text>
        ) : (
          <Text size="xl">Edit data</Text>
        )}

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
            <Input
              required
              label="Title"
              form={["title", formData, setFormData]}
            />
            <Input
              required
              label="Subtitle"
              form={["subtitle", formData, setFormData]}
            />

            <HStack>
              <Select
                label="Category"
                form={["category", formData, setFormData]}
                multi
              >
                <Hr />
                <Color bg="white">
                  <Block>
                    <Text color="light" size="xs">
                      Choose many of them...
                    </Text>
                  </Block>
                </Color>
                <MultiOption
                  form={["category", formData, setFormData]}
                  value="uncategorize"
                >
                  Uncategorize
                </MultiOption>
                <MultiOption
                  form={["category", formData, setFormData]}
                  value="first"
                >
                  First
                </MultiOption>
                <MultiOption
                  form={["category", formData, setFormData]}
                  value="second"
                >
                  Second
                </MultiOption>
              </Select>

              <Select label="Status" form={["status", formData, setFormData]}>
                <Option
                  form={["status", formData, setFormData]}
                  value="success"
                >
                  Success
                </Option>
                <Option
                  form={["status", formData, setFormData]}
                  value="warning"
                >
                  Warning
                </Option>
                <Option form={["status", formData, setFormData]} value="error">
                  Error
                </Option>
              </Select>
            </HStack>

            <RichText
              required
              label="Description"
              form={["description", formData, setFormData]}
            />

            <Button>SUBMIT</Button>
          </VStack>
        </Color>
      </form>
    </Card>
  );
};

const LocalCrud: React.FC = () => {
  /*
    View data
  */
  const setAttr = useThemeStore((state: any) => state.setAttr);
  const removeElement = useThemeStore((state: any) => state.removeElement);
  const modal = useThemeStore((state: any) => state.theme.modal);
  const themeListData = useThemeStore(
    (state: any) => state.theme.exampleElements
  );
  const editState = useThemeStore((state: any) => state.theme.editState);
  const [searchForm, setSearchForm] = useState({ search: "" });

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
          subtitle: "something about first",
          description:
            "Probably best first example info text. This text could be long...",
          status: "success",
          category: ["uncategorize"],
        },
        {
          title: "Second example title",
          subtitle: "something about second",
          description:
            "Probably best second example info text. This text could be long...",
          status: "warning",
          category: ["uncategorize"],
        },
      ],
    });
    setAttr({
      path: "theme.editState",
      value: -1,
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
                  path: "theme.editState",
                  value: -1,
                });
                setAttr({
                  path: "theme.modal.open",
                  value: true,
                });
              }}
            >
              Insert new notice
            </Button>

            <HStack spacing="xs">
              <Input
                icon={<FiSearch />}
                form={["search", searchForm, setSearchForm]}
              />
              <Button
                onClick={() =>
                  setAttr({
                    path: "theme.message.text",
                    value: `This button populate only message for search: ${searchForm.search}`,
                  })
                }
                color="light"
                icon={<FiSearch />}
              />
            </HStack>
          </HStack>
          {themeListData &&
            themeListData.map((el: any, i: number) => {
              return (
                <Card horizontal className="items-center">
                  <TextCell
                    truncate
                    className="w-1/6"
                    title={el.title}
                    subTitle={el.subtitle}
                  />
                  <Hr />
                  <Text size="sm" className="flex-1">
                    {el.description}
                  </Text>
                  <Text color={el.status} size="sm">
                    {el.status}
                  </Text>
                  <HStack spacing="xs">
                    {el.category?.map((el: any) => (
                      <Badge color="dark" size="xs" text={el} />
                    ))}
                  </HStack>
                  <NavItem
                    onClick={() => {
                      setAttr({
                        path: "theme.editState",
                        value: i,
                      });
                      setAttr({
                        path: "theme.modal.open",
                        value: true,
                      });
                    }}
                  >
                    <Text size="sm">Edit</Text>
                  </NavItem>
                  <NavItem
                    color="error"
                    onClick={() => {
                      removeElement({
                        path: "theme.exampleElements",
                        index: i,
                      });
                      setAttr({
                        path: "theme.message.text",
                        value: "Item was deleted",
                      });
                    }}
                  >
                    <Text size="sm">Delete</Text>
                  </NavItem>
                </Card>
              );
            })}

          {modal.open && (
            <ModalWrapper>
              <ModalBody />
            </ModalWrapper>
          )}
          <Hr />
          <Text size="xs" color="light">
            Edit state: {editState}
          </Text>
        </>
      }
    />
  );
};
/* #DisablePrerenderer */
// @ts-ignore
LocalCrud.getInitialProps = () => ({});
export default LocalCrud;
