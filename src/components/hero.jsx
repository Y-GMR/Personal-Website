import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import pfp from '../assets/pfp.png'

function Hero() {
    return (
        <div className="flex gap-[clamp(1rem,2vw,2.5rem)] rounded-[clamp(30px,5vw,68px)] bg-white shadow-[0px_4px_18.1px_rgba(0,0,0,0.2)] w-fit p-[clamp(20px,2vw,30px)] px-[clamp(30px,5vw,50px)]">
            <img
                src={pfp}
                alt="Iwang Petra Dheerendra"
                className="
                w-[clamp(8rem,10vw,15rem)] h-auto object-cover
                pr-[clamp(1rem,2vw,2.5rem)] border-r-2
                "
            />
            
            <div className="flex flex-col self-stretch justify-center">
                <div className="mt-auto"> 
                    <h1 
                        className="
                            w-fit h-fit
                            font-semibold
                            text-[clamp(1rem,2vw,2rem)]
                            text-black
                        "
                    >
                        Iwang Petra Dheerendra
                    </h1>


                    <h2
                        className="
                            w-fit h-fit
                            font-light italic opacity-57
                            text-[clamp(0.5rem,1.3vw,1.25rem)]
                            text-black
                            -my-1 md:-my-1 lg:-my-2
                        "
                    >
                        Universitas Atma Jaya Yogyakarta   
                    </h2>                

                    <h2
                        className="
                            w-fit h-fit
                            font-light italic
                            text-[clamp(0.5rem,1.3vw,1.25rem)]
                            text-black
                            my-2 md:my-2 lg:my-5
                        "
                    >
                        Aspiring Fullstack Developer 
                    </h2>  
                </div>

                <div className="flex w-fit h-fit gap-[clamp(1rem,2vw,2rem)] mt-auto">
                    <FaLinkedin className="w-[clamp(1rem,2vw,2rem)] h-[clamp(1rem,2vw,2rem)]"/>
                    <FaGithub className="w-[clamp(1rem,2vw,2rem)]"/>
                    <FaInstagram className="w-[clamp(1rem,2vw,2rem)]"/>
                    <MdOutlineEmail className="w-[clamp(1rem,2vw,2rem)]"/>
                </div>                
            </div>
        </div>
    )
}

export default Hero