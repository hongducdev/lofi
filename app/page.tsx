import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <video
        // className={`w-[100vw] z-[-1] absolute ${
        //   fullscreen ? "top-[0%]" : "top-[-11%]"
        // } object-cover transition-opacity ease-in duration-300 ${
        //   comboMode === "true-false" ? "opacity-100" : "opacity-0"
        // }`}
        loop
        autoPlay
        muted
      >
        <source src="./assets/videos/ExteriorDay.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
