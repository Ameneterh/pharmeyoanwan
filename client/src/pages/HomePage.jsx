import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { AiOutlineSearch } from "react-icons/ai";
import { TextInput } from "flowbite-react";
import SiteLogo from "../components/SiteLogo";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function HomePage() {
  return (
    <MainLayout>
      <section className="min-h-[calc(100vh-74px)] flex flex-col gap-12 items-center justify-center px-10 mt-5">
        {/* <form className="w-full max-w-xl">
          <TextInput
            type="text"
            placeholder="Search ..."
            rightIcon={AiOutlineSearch}
            className=""
          />
        </form>

        <Input
          size="large"
          placeholder="Enter search term ..."
          prefix={<AiOutlineSearch />}
          className="max-w-3xl rounded-full"
        /> */}
      </section>
    </MainLayout>
  );
}
