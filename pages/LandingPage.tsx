import React, { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  Variants,
} from "framer-motion";
import {
  Map,
  Zap,
  Clock,
  ShieldCheck,
  Plus,
  Minus,
  Star,
} from "lucide-react";
import { TESTIMONIALS, FAQ_ITEMS } from "../constants";

const MotionDiv = motion.div;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-brand-light dark:bg-brand-dark z-0">
        <div className="absolute inset-0 bg-grid-zinc-300/[0.2] dark:bg-grid-zinc-700/[0.2]"></div>
      </div>

      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-brand-dark to-brand-secondary dark:from-brand-light dark:to-brand-secondary">
            Divine Journeys.
          </span>
          <br />
          <span>Reserved Parking.</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-brand-secondary"
        >
          Focus on your faith, not the friction of finding a parking spot. Xs
          provides seamless, pre-booked parking near temples and religious
          sites.
        </motion.p>
        <MotionDiv
          variants={itemVariants}
          className="mt-8 flex justify-center gap-4"
        >
          <button className="bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            Download the App
          </button>
          <button className="bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-brand-secondary/30 text-brand-dark dark:text-brand-light font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            Learn More
          </button>
        </MotionDiv>
      </MotionDiv>
      <motion.div
        className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-brand-light dark:from-brand-dark to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
    </section>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Map size={32} />,
      title: "Interactive Map View",
      description:
        "Visually locate and select the best parking spots with our easy-to-use map interface.",
    },
    {
      icon: <Clock size={32} />,
      title: "Rush Hour Prediction",
      description:
        "Our smart algorithm predicts high-traffic periods, so you can plan ahead and avoid the crowds.",
    },
    {
      icon: <Zap size={32} />,
      title: "Instant Prepaid Booking",
      description:
        "Book and pay for your spot in seconds. No more searching for cash or change.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Secure & Reliable",
      description:
        "All our parking locations are verified for safety and security, giving you peace of mind.",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Everything you need, nothing you don't.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-secondary">
            Xs is packed with features designed to make your pilgrimage smooth
            and stress-free.
          </p>
        </MotionDiv>
        <MotionDiv
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, i) => (
            <MotionDiv
              key={i}
              variants={itemVariants}
              className="bg-black/5 dark:bg-white/5 p-8 rounded-2xl border border-black/10 dark:border-white/10 backdrop-blur-lg"
            >
              <div className="text-brand-accent">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-brand-secondary">{feature.description}</p>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Search Your Destination",
      description: "Enter the temple or religious place you plan to visit.",
    },
    {
      number: "02",
      title: "Choose Your Parking",
      description:
        "Browse available spots on the map, filter by price, distance, and see rush predictions.",
    },
    {
      number: "03",
      title: "Book & Pay",
      description:
        "Select your spot, choose your arrival time, and pay securely within the app.",
    },
    {
      number: "04",
      title: "Park with Ease",
      description:
        "Navigate to your reserved spot using the app and enjoy your visit, stress-free.",
    },
  ];
  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-32 bg-white/5 dark:bg-black/5"
    >
      <div className="max-w-7xl mx-auto px-4">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Four Steps to Parking Nirvana
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-secondary">
            Getting started with Xs is as simple as it gets.
          </p>
        </MotionDiv>
        <div className="mt-16 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <MotionDiv
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={itemVariants}
              className="flex items-start space-x-6 p-6"
            >
              <div className="text-3xl font-bold text-brand-accent">
                {step.number}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="mt-2 text-brand-secondary">{step.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tighter"
          >
            Our Mission is Simple
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-brand-secondary"
          >
            Xs was born from a personal struggle: the chaos of finding parking
            during auspicious occasions. We believe that a spiritual journey
            should begin with peace, not parking-related stress.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-brand-secondary"
          >
            Our goal is to use technology to bridge the gap between devotion and
            convenience, allowing pilgrims and visitors to focus on what truly
            matters. We are a team of engineers, designers, and believers
            dedicated to this cause.
          </motion.p>
        </MotionDiv>
        <div className="relative h-96">
          <motion.img
            src="https://picsum.photos/800/600?blur=2&random=10" // Alternative: '/images/temple-background.jpg'
            alt="Serene temple background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            style={{ y }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-light dark:from-brand-dark via-transparent to-transparent rounded-2xl"></div>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            src="https://picsum.photos/seed/xsparking/400/300" // Alternative: '/images/app-map-view.png'
            alt="App map view"
            className="relative w-2/3 mx-auto top-1/2 -translate-y-1/2 rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-32 bg-white/5 dark:bg-black/5"
    >
      <div className="max-w-7xl mx-auto px-4">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Loved by Devotees Everywhere
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-secondary">
            Don't just take our word for it. Here's what our users have to say.
          </p>
        </MotionDiv>
        <MotionDiv
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <MotionDiv
              key={i}
              variants={itemVariants}
              className="bg-brand-light dark:bg-brand-dark p-8 rounded-2xl border border-black/10 dark:border-white/10 flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex items-center text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} />
                  ))}
                </div>
                <p className="mt-4 text-brand-secondary italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-brand-secondary">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};

const FaqItem: React.FC<{
  item: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-brand-secondary/20">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-6 text-left"
      >
        <h3 className="text-lg font-semibold">{item.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-secondary">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 sm:py-32">
      <div className="max-w-3xl mx-auto px-4">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-secondary">
            Have questions? We've got answers.
          </p>
        </MotionDiv>
        <div className="mt-12">
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
};

export default LandingPage;
