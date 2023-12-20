import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src="/bg.jpg" alt="background" width={1920} height={1080} />
    </main>
  );
}
