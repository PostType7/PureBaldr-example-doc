/*
  Users page
*/
import {
  Color,
  Grid,
  Hr,
  HStack,
  Space,
  VStack,
} from "components/themes/NativeTheme/layout";
import { Text} from "components/themes/NativeTheme/typo";

import { DesktopMenu, TopBar } from "pages/_app";
import dynamic from "next/dynamic";
import { TextCell } from "components/themes/PureBaldrTheme/partials";
import { useState } from "react";
import { useThemeStore } from "components/themes/PureBaldrTheme/themeStore";
import Button from "components/themes/PureBaldrTheme/navigation/Button";
import { Input, RichText } from "components/themes/PureBaldrTheme/stateForm";
import { FiSearch } from "react-icons/fi";
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

const Users: React.FC = () => {
  const setAttr = useThemeStore((state: any) => state.setAttr);
  const [search, setSearch] = useState<String>("");
  const [modal, setModal] = useState<Boolean>(false);
  // @ts-ignore
  const [formData, setFormData] = useState<FormDataType>({
    title: "",
    description: "",
    status: "",
    price: "",
  });

  /*
    View methods
  */
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // POSTHelper(
    //   "/api/notifications",
    //   { data: formData },
    //   setAttr,
    //   router,
    //   "/backoffice/notifications"
    // );
  };

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
          <SectionHeader size="xxl" title="CARDS CRUD (local)" />
          <Text>This CRUD based on PureBaldr Theme options storage</Text>

          <HStack className="justify-between">
            <Button
              onClick={() => {
                setModal(true);
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
                bgColor="light"
                icon={<FiSearch />}
              />
            </HStack>
          </HStack>

          <Card horizontal className="items-center">
            <TextCell title="title" subTitle="description" />
            <Text size="sm">Message</Text>
            <Text size="sm">Status</Text>
            <Text size="sm">Price</Text>
            <Text size="sm">Edit</Text>
            <Text size="sm">Delete</Text>
          </Card>

          {modal && (
            <ModalWrapper>
              <Card spacing="null">
                <VStack spacingY="lg" spacingX="md">
                  <Text size="xl">Insert new data</Text>
                </VStack>
                <Hr />
                <form onSubmit={onSubmitHandler}>
                  <Color bgColor="light">
                    <VStack spacingY="md" spacingX="md">
                      <Input
                        label="Message header"
                        form={["header", formData, setFormData]}
                      />
                      <RichText
                        label="Message content"
                        form={["message", formData, setFormData]}
                      />
                      <Input
                        label="Type"
                        form={["type", formData, setFormData]}
                      />
                      <HStack>
                        <Input
                          label="Link name"
                          form={["linkname", formData, setFormData]}
                        />
                        <Input
                          label="Link url"
                          form={["linkurl", formData, setFormData]}
                        />
                      </HStack>

                      <Button
                        onClick={() =>{
                          setAttr({
                            path: "theme.message.text",
                            value: "This button populate only message",
                          })
                          setModal(false)
                        }}
                      >
                        SUBMIT
                      </Button>
                    </VStack>
                  </Color>
                </form>
              </Card>
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
