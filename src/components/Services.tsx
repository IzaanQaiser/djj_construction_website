import React from 'react';
import { Home, Building2, Warehouse, PaintBucket, Hammer, Ruler, Truck, Leaf, Shield } from 'lucide-react';

const services = [
  { name: 'Residential Construction', icon: Home },
  { name: 'Commercial Construction', icon: Building2 },
  { name: 'Renovations', icon: Hammer },
  { name: 'Interior Design', icon: PaintBucket },
  { name: 'Project Management', icon: Ruler },
  { name: 'Industrial Construction', icon: Warehouse },
  { name: 'Sustainable Building', icon: Leaf },
  { name: 'Safety Consulting', icon: Shield },
  { name: 'Equipment Rental', icon: Truck },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Services</h2>
        <p className="text-center text-gray-700 mb-12 max-w-5xl mx-auto animate-fade-in-up">
          At DJJ Construction, we are committed to delivering exceptional quality and unparalleled craftsmanship in every project we undertake. Our team of skilled professionals brings years of experience and a passion for excellence to each construction endeavor. We pride ourselves on our attention to detail, innovative solutions, and our ability to exceed client expectations. From residential to commercial projects, we approach every job with the same level of dedication and precision, ensuring that the final result not only meets but surpasses industry standards. Our commitment to quality is not just a promise—it's the foundation of our work ethic and the key to our success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="h-8 w-8 text-secondary mr-4" />
              <span className="text-lg font-semibold text-primary">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;