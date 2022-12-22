import UserNavBar from "./NavBar.jsx";

export default function AboutUs() {
    return (
        <div
            className="bg-Pearl gap-16 inline-flex flex-col items-center font-Inter w-[1440px] overflow-clip"
        >
            <UserNavBar />
            <p
                className="text-5xl font-semibold text-left m-0 leading-[52.5px] text-[rgba(64,64,64,1)]"
            >
                About Us
            </p>
            <div
                className="w-full flex justify-center items-center self-stretch text-gray-800 text-left gap-[102px]"
            >
                <div className="gap-16 flex items-center w-[512.7474975585938px]">
                    {/*<MaskGroup />*/}
                    <div
                        className="gap-1.5 flex flex-col justify-center items-start w-[302px]"
                    >
                        <p className="text-base font-bold m-0 w-[302px] leading-[normal]">
                            Philip Wee
                        </p>
                        <p
                            className="text-base font-normal m-0 w-[302px] leading-[normal]"
                        >
                            Ex AMD. Ex freelance developer for startups.
                        </p>
                    </div>
                </div>
                <div className="gap-16 flex items-center w-[512.7474975585938px]">
                    {/*<MaskGroup1 />*/}
                    <div
                        className="gap-1.5 flex flex-col justify-center items-start w-[302px]"
                    >
                        <p className="text-base font-bold m-0 w-[302px] leading-[normal]">
                            Stephen Alvin
                        </p>
                        <p
                            className="text-base font-normal m-0 w-[302px] leading-[normal]"
                        >
                            want. Let us know what you want to see in FireJet Sync, and we’ll be sure to work towards meeting your needs through the product
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col items-center gap-[52px] text-[rgba(64,64,64,1)]"
            >
                <p className="text-2xl font-medium leading-10 text-left m-0">
                    Who We Are
                </p>
                <p
                    className="text-base font-normal text-justify m-0 w-[849px] leading-[27px]"
                >
                    We're a team of custom web application developers who thought our process could be streamlined. So we started building an internal tool. Thus, we came up with FireJet.
                </p>
            </div>
            <div
                className="pb-16 flex flex-col items-center gap-[52px] text-[rgba(64,64,64,1)]"
            >
                <p className="text-2xl font-medium leading-10 text-left m-0">
                    Our Story
                </p>
                <p
                    className="text-base font-normal text-justify m-0 w-[847px] leading-[27px]"
                >
                    After developing and delivering custom web applications for several clients, we found ourselves in an iterative process of designing the user interface, developing the frontend, the backend, and then deploying to cloud.
                    <br />
                    <br />
                    Internally, we wanted to streamline this process, starting with EzBackend, a backend framework that serves as an ease-of-use wrapper over Fastify and TypeORM. We then considered the possibility of extending this to a frontend framework as well, but realised that existing frameworks were already serving the need well.
                    <br />
                    <br />
                    So what was left? Design to Code.
                    <br />
                    <br />
                    Hence, we have decided to make FireJet as an internal tool that will allow us to bridge the gap between design and frontend. But as we started developing FireJet for internal use, we wondered if it could possibly be useful to other developers, or even non-developers? If you are interested and believe FireJet could be useful to you as well, please let us know by signing up. Thank you!
                </p>
            </div>
        </div>
    );
}