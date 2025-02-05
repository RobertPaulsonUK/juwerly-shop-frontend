import { SessionProvider } from "next-auth/react"
import Aside from "@/components/admin/layout/aside";
import PageWrapper from "@/components/admin/layout/pageWrapper";
import GreetingElem from "@/components/admin/greetingElem";

export default function Home() {
  return (
    <div>
        <SessionProvider>
            <Aside/>
            <PageWrapper>
                <GreetingElem/>
            </PageWrapper>
        </SessionProvider>
    </div>
  );
}
