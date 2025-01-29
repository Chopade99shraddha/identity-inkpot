const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-text mb-12 text-center">Get In Touch</h2>
        <div className="max-w-xl mx-auto">
          <div className="bg-secondary p-8 rounded-lg">
            <p className="text-center text-lg text-text-light mb-8">
              Interested in working together? Feel free to reach out!
            </p>
            <a 
              href="mailto:your.email@example.com"
              className="block w-full text-center bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;