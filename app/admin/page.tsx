import Image from "next/image";
import Aside from "@/components/admin/layout/aside";
import PageWrapper from "@/components/admin/layout/pageWrapper";

export default function Home() {
  return (
    <div>
        <Aside/>
        <PageWrapper>
            <h1>Hello admin</h1>
        </PageWrapper>
    </div>
  );
}
