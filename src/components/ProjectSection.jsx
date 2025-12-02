import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "SayurBox",
        description: "An e-commerce platform for fresh produce with seamless user experience and secure payment integration.",
        image: "/projects/Sayurbox.png",
        tags: ["Laravel", "React", "MySQL"],
        demoUrl: "https://webskripsiatta.site/",
        githubUrl: "",
    },
    {
        id: 2,
        title: "AITTA",
        description: "AI for transcribe and learning assistant. transcription services and personalized learning assistance.",
        image: "/projects/Aitta.png",
        tags: ["Python"],
        demoUrl: "https://aitta.sekoce.id/",
        githubUrl: "",
    },
    {
        id: 2,
        title: "Soykuy",
        description: "Product landing page for Soykuy, an innovative soy-based beverage that combines health and taste in every sip.",
        image: "/projects/soykuy.png",
        tags: ["Wordpress", "Elementor"],
        demoUrl: "https://soykuy.com/",
        githubUrl: "",
    },
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span> </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on recently.

                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>

                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag)=> (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}

                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                            <ExternalLink size={20 }/>
                                        </a>

                                        <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                            <Github />
                                        </a>



                                    </div>

                                </div>
                            </div>

                        </div>
                    ))}

                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/Arizh2005">
                        Check My Github <ArrowRight size ={16}/>

                    </a>
                </div>

            </div>

        </section>
    )
}