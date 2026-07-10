import photo from "@/assets/Foto.webp"

function AboutMeSharedContent() {
  return (
    <div className="w-full flex flex-col gap-5 px-10 md:px-8 lg:px-10 2xl:px-16 p-10">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <h1 className="text-center md:text-start md:col-span-2 xl:col-span-1 md:mt-20 xl:mt-0 font-unitea font-bold text-3xl md:text-5xl xl:text-5xl 2xl:text-7xl text-text-primary">
                    About Me
                </h1>

                <div className="items-center justify-between hidden md:flex font-goorm font-normal text-text-gray text-md xl:text-xl xl:max-w-4xl">
                    <h3>Think Strategically</h3>
                    <h3>Guarantee Reliability</h3>
                    <h3>Cross-Disciplinary</h3>
                </div>

                 <p className="font-goorm font-normal text-text-secondary text-lg 2xl:text-2xl max-w-sm md:max-w-md 2xl:max-w-3xl leading-tight">
                    I Specialize In Building End-To-End Full-Stack Systems.
                    Reliable, Scalable, And Architected Before A Single Line Of Code Is Written.
                    I Take Full Ownership Of Features So Your Team Can Deliver High-Quality Products On Time And Without Chaos.
                </p>

                <div className="relative">
                    <img
                        src={photo}
                        alt=""
                        className="w-full h-full object-cover md:ml-0 md:w-3/4 xl:w-1/2 md:mx-auto"
                    />
                </div>
            </div>
        </div>
  );
}
export default AboutMeSharedContent;
