import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-midnight"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: y1, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-midnight/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2045&auto=format&fit=crop" 
            alt="Renaissance style painting" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream leading-tight"
          >
            Whispers of <br />
            <span className="italic text-gold font-light">Eternity</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 text-lg md:text-xl text-cream/80 font-light max-w-2xl mx-auto"
          >
            "Art is not what you see, but what you make others see." <br/>
            <span className="text-sm text-cream/50 mt-2 block">— Edgar Degas</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12"
          >
            <Link 
              to="/gallery" 
              className="group inline-flex items-center gap-4 text-cream hover:text-gold transition-colors duration-300 uppercase tracking-widest text-sm"
            >
              <span className="relative">
                Begin the Voyage
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-xs uppercase tracking-widest text-cream/50">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"
          />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <motion.img 
                style={{ y: y2 }}
                src="https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2070&auto=format&fit=crop" 
                alt="Artist in studio" 
                className="w-full h-[120%] object-cover -mt-[10%]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blush/5 backdrop-blur-sm border border-gold/20 -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-cream mb-8">
              The <span className="italic text-gold">Awakening</span> of the Canvas
            </h2>
            <div className="space-y-6 text-cream/70 font-light leading-relaxed">
              <p>
                In the quiet hours before dawn, when the world is draped in shadows and silence, the canvas speaks. It is a dialogue between the soul and the pigment, a dance of light and darkness that seeks to capture the ephemeral beauty of our existence.
              </p>
              <p>
                My work is an exploration of the spaces between—the fleeting moments of joy, the lingering melancholy of a memory, the profound stillness of nature. Through layers of texture and washes of color, I invite you to wander through these painted dreams and find your own reflections within them.
              </p>
            </div>
            <Link 
              to="/about" 
              className="inline-block mt-10 border border-gold/30 px-8 py-3 text-sm uppercase tracking-widest text-gold hover:bg-gold hover:text-midnight transition-colors duration-500"
            >
              Discover the Soul
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
