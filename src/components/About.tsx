const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl">
          <p className="section-title">// About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">From Designer to Developer</h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              For over a decade, I worked as a digital designer—creating interfaces, 
              building brand identities, and helping businesses communicate visually. 
              I loved the work, but I always wanted to go deeper.
            </p>
            <p>
              One year ago, I made the leap into mobile app development through an 
              intensive practical training program. It was challenging, rewarding, 
              and exactly what I needed.
            </p>
            <p>
              Today, I combine both worlds. My design background means I think about 
              user experience from the first line of code. I understand why decisions 
              are made and how to implement them cleanly.
            </p>
            <p className="text-foreground font-medium">
              I'm looking for a developer role where I can grow technically 
              while bringing my design perspective to the team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
