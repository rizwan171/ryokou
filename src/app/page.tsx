import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="-z-10">
        <Image src="/bg.jpg" alt="background" layout="fill" objectFit="cover" quality={100} />
      </div>
    </main>
  );
}
