const skillsDB = [
    {
        category: "Languages",
        skills: ["Lorem Ipsum"]        
    },
    {
        category: "Frontend",
        skills: ["Lorem Ipsum"]        
    },
    {
        category: "Backend",
        skills: ["Lorem Ipsum"]        
    },
    {
        category: "Database",
        skills: ["Lorem Ipsum"]        
    },
    {
        category: "Tools",
        skills: ["Lorem Ipsum"]        
    },
]

function Skills() {
    return (
        <div className="
            flex flex-col
            rounded-[clamp(30px,5vw,68px)] 
            bg-white shadow-[0px_4px_18.1px_rgba(0,0,0,0.2)] 
            w-fit p-[clamp(10px,2vw,30px)]
        ">
            <h1 
                className="
                    w-fit h-fit
                    font-semibold
                    text-[clamp(1rem,2vw,2rem)]
                    text-[#002446]
                    py-[clamp(2px,2vw,10px)] ml-auto
                "
            >
                Skills
            </h1>

            <div className="
                flex flex-col
                gap-[clamp(1rem,2vw,2.5rem)]
                rounded-[clamp(20px,5vw,50px)] 
                bg-white shadow-[0px_4px_18.1px_rgba(0,0,0,0.2)] 
                w-fit p-[clamp(10px,2vw,30px)]
            ">
                {skillsDB.map((group) => (
                    <div key={group.category}>
                        <h1 
                            className="
                                w-fit h-fit
                                font-semibold
                                text-[clamp(1rem,2vw,2rem)]
                                text-[#002446]
                            "
                        >
                            {group.category}
                        </h1>

                        {group.skills.map(skill => (
                            <p
                                key={skill}
                                className="
                                    w-fit h-fit
                                    text-[clamp(0.75rem,1.3vw,1.25rem)]
                                "
                            >
                                {skill}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills