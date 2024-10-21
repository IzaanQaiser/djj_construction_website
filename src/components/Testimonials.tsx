import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'John Doe',
    text: 'DJJ Construction transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism were outstanding!',
  },
  {
    name: 'Jane Smith',
    text: 'We hired DJJ for our office renovation, and they exceeded our expectations. The project was completed on time and within budget.',
  },
  {
    name: 'Mike Johnson',
    text: 'The team at DJJ Construction is simply amazing. They built our dream home from the ground up, and we couldnt be happier with the results.',
  },
  {
    name: 'Emily Brown',
    text: 'DJJs sustainable building practices helped us create an eco-friendly home thats both beautiful and energy-efficient.',
  },
  {
    name: 'David Lee',
    text: 'Their project management skills are top-notch. DJJ kept us informed throughout the entire construction process.',
  },
  {
    name: 'Sarah Wilson',
    text: 'DJJ Constructions expertise in commercial projects is unmatched. They renovated our retail space, and sales have increased since reopening!',
  },
  {
    name: 'Robert Taylor',
    text: 'I was impressed by DJJs ability to handle complex architectural designs. They brought our unique vision to life flawlessly.',
  },
  {
    name: 'Lisa Chen',
    text: 'The quality of work DJJ Construction delivers is exceptional. They pay attention to every detail, ensuring a perfect finish.',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 2));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary animate-fade-in-up">What Our Clients Say</h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-4">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 h-full animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <p className="text-gray-600 mb-4 italic">{testimonial.text}</p>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;