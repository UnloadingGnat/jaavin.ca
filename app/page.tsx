import dynamic from "next/dynamic";

const DynamicPageScroll = dynamic(() => import("@/components/PageScroll"));
export default function Home() {
  return <DynamicPageScroll />;
}
