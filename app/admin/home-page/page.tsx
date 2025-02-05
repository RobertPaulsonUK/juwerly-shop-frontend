import { SessionProvider } from "next-auth/react"
import Aside from "@/components/admin/layout/aside";
import PageWrapper from "@/components/admin/layout/pageWrapper";
import SingletonForm from "@/components/admin/elements/singletonForm";
import TextElement from "@/components/admin/elements/textElement";
import TextAreaElement from "@/components/admin/elements/textAreaElement";

export default function Home() {

  return (
    <div>
        <SessionProvider>
            <Aside/>
            <PageWrapper>
                <SingletonForm title={"Home page"} dataUrl={"page/home"}>
                    <TextElement label={"Page title"} name={"title"} required={true} value={"Home Page"}/>
                    <TextAreaElement label={"Description"} name={"description"} required={false} value={"sadsadsad"}/>

                </SingletonForm>
            </PageWrapper>
        </SessionProvider>
    </div>
  );
}
