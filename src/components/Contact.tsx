import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-title">// Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-10">
            I'm currently looking for developer positions in Berlin or remote. 
            If you think we'd be a good fit, I'd love to hear from you.
          </p>
          
          <div className="space-y-4">
            <a 
              href="mailto:valeriest.contact@gmail.com" 
              className="flex items-center gap-4 p-4 border-2 border-border hover:border-foreground transition-colors group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-mono group-hover:text-primary transition-colors">
                valeriest.contact@gmail.com
              </span>
            </a>
            
            <a 
              href="https://github.com/ValeriiaBilous-25" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border-2 border-border hover:border-foreground transition-colors group"
            >
              <Github className="w-5 h-5 text-primary" />
              <span className="font-mono group-hover:text-primary transition-colors">
                github.com/ValeriiaBilous-25
              </span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/valeriia-bilous/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border-2 border-border hover:border-foreground transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="font-mono group-hover:text-primary transition-colors">
                linkedin.com/in/valeriia-bilous
              </span>
            </a>
            
            <div className="flex items-center gap-4 p-4 border-2 border-border">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span className="font-mono text-muted-foreground">
                Berlin, Germany
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
