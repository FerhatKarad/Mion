import H5 from '@material-tailwind/react/Heading5';
import LeadText from '@material-tailwind/react/LeadText';
import Icon from '@material-tailwind/react/Icon';

export default function DefaultFooter() {
    return (
        <>
            <footer className="relative bg-gray-100 pt-8 pb-6">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap text-center lg:text-left pt-6">
                        <div className="w-full lg:w-6/12 px-4">
                            <H5 color="gray">Mion Protect GmbH</H5>
                            <div className="-mt-4">
                                <LeadText color="blueGray">
                                    Folgt uns demnächst auf Social Media!
                                </LeadText>
                            </div>
                            <div className="flex gap-2 mt-6 md:justify-start md:mb-0 mb-8 justify-center">
                                <p
                                    className="grid place-items-center bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-facebook-square"
                                    />
                                </p>
                                <p
                                    className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-twitter"
                                    />
                                </p>
                                <p
                                    className="grid place-items-center bg-white text-indigo-500 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-instagram"
                                    />
                                </p>
                                <p
                                    className="grid place-items-center bg-white text-pink-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-dribbble"
                                    />
                                </p>
                                <p
                                    className="grid place-items-center bg-white text-red-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-youtube"
                                    />
                                </p>
                                
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top">
                                <div className="w-full lg:w-9/12 px-4 ml-auto md:mb-0 mb-8">
                                <H5 color="gray">Geschäftsführer</H5>
                                    <LeadText color="blueGray">
                                    Heizenreider, Alexander
                                    <br/>
                                    <a target='blank' href='https://www.google.com/maps/place/Sickingenstra%C3%9Fe+26,+10553+Berlin/@52.531753,13.318953,17z/data=!3m1!4b1!4m5!3m4!1s0x47a8516ac79ec997:0x2068995add51fe93!8m2!3d52.531753!4d13.3211417'
                                    >Sickingenstr. 26</a>
                                    <br/>
                                    10553 Berlin
                                </LeadText>
                                
                                    
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-300" />
                    <div className="container max-w-7xl ">
                    <div className="flex flex-wrap  ">
                        <div className="w-full lg:w-6/12 px-4">
                                Copyright © {new Date().getFullYear()}, FeroJS
                                
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
