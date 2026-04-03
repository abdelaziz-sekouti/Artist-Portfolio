import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-midnight pt-32 pb-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Portrait */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative sticky top-32"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
                alt="Éliane Renard Portrait" 
                className="w-full h-full object-cover filter grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
            </div>
            <div className="absolute -top-6 -left-6 w-full h-full border border-cream/10 -z-0" />
          </motion.div>

          {/* Biography */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-7 space-y-12"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-serif text-cream mb-6">The <span className="italic text-gold">Soul</span></h1>
              <p className="text-xl text-cream/80 font-light italic">
                "I paint not to capture the world as it is, but to reveal the world as it feels."
              </p>
            </div>

            <div className="space-y-6 text-cream/70 font-light leading-relaxed text-lg">
              <p>
                Born in the fading light of a Parisian autumn, Éliane Renard has always been captivated by the interplay of shadow and illumination. Her journey into the world of art began not with a brush, but with a profound sense of observation—watching how the sun would slowly surrender to the night, painting the sky in hues of melancholy and hope.
              </p>
              <p>
                Her formal training at the École des Beaux-Arts provided the technical foundation, but it was her solitary wanderings through the forgotten landscapes of Europe that truly shaped her vision. Éliane's work is deeply rooted in romanticism, yet it breathes with a contemporary urgency.
              </p>
              <p>
                She seeks to capture the 'joie de vivre' not in grand gestures, but in the quiet, intimate moments that often go unnoticed. A fleeting glance, the rustle of leaves, the heavy silence of an empty room—these are the subjects of her poetic inquiry.
              </p>
            </div>

            {/* Timeline */}
            <div className="pt-12 border-t border-cream/10">
              <h3 className="text-2xl font-serif text-cream mb-8">Artistic Journey</h3>
              <div className="space-y-8">
                {[
                  { year: '2015', title: 'Lumière Première', desc: 'First solo exhibition in Lyon, exploring the origins of light.' },
                  { year: '2018', title: 'Shadows of the Seine', desc: 'A critically acclaimed series of charcoal sketches capturing the nocturnal life of Paris.' },
                  { year: '2021', title: 'The Digital Romantic', desc: 'Transitioning into digital mediums, blending classical techniques with modern tools.' },
                  { year: '2024', title: 'Echoes of Eternity', desc: 'Current ongoing project, a multidisciplinary exploration of memory and time.' }
                ].map((item, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    key={item.year} 
                    className="flex gap-6"
                  >
                    <div className="w-16 text-gold font-serif text-xl shrink-0">{item.year}</div>
                    <div>
                      <h4 className="text-cream font-medium mb-1">{item.title}</h4>
                      <p className="text-cream/50 font-light text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
