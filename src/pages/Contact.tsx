import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Contact() {
  // Coordinates for a poetic location (e.g., Montmartre, Paris)
  const position: [number, number] = [48.8867, 2.3431];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-midnight pt-32 pb-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-cream mb-6">The <span className="italic text-gold">Rendezvous</span></h1>
          <p className="text-cream/60 font-light max-w-2xl mx-auto">
            Let us connect. Whether for an exhibition, a commission, or simply to share a thought inspired by the art.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Exhibitions & Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-16"
          >
            {/* Exhibitions */}
            <div>
              <h2 className="text-3xl font-serif text-cream mb-8">Upcoming Exhibitions</h2>
              <div className="space-y-6">
                {[
                  { date: 'Oct 15 - Nov 30, 2026', title: 'Whispers of Eternity', location: 'Galerie L\'Amour, Paris' },
                  { date: 'Feb 10 - Mar 25, 2027', title: 'The Digital Romantic', location: 'Modern Art Space, London' }
                ].map((ex, i) => (
                  <div key={i} className="border-b border-cream/10 pb-4">
                    <p className="text-gold text-sm tracking-widest uppercase mb-1">{ex.date}</p>
                    <h3 className="text-xl text-cream font-serif">{ex.title}</h3>
                    <p className="text-cream/50 font-light text-sm">{ex.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif text-cream mb-8">Send a Message</h2>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-transparent border-b border-cream/20 py-3 text-cream focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                    placeholder="Your Name"
                    required
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 -top-3.5 text-cream/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gold"
                  >
                    Your Name
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-transparent border-b border-cream/20 py-3 text-cream focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                    placeholder="Your Email"
                    required
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 -top-3.5 text-cream/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gold"
                  >
                    Your Email
                  </label>
                </div>

                <div className="relative group">
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-cream/20 py-3 text-cream focus:outline-none focus:border-gold transition-colors peer placeholder-transparent resize-none"
                    placeholder="Your Message"
                    required
                  />
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 -top-3.5 text-cream/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gold"
                  >
                    Your Message
                  </label>
                </div>

                <button 
                  type="submit"
                  className="border border-gold/50 text-gold px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold hover:text-midnight transition-colors duration-500 w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[600px] relative"
          >
            <motion.div 
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(212, 175, 55, 0)", "0px 0px 30px rgba(212, 175, 55, 0.15)", "0px 0px 0px rgba(212, 175, 55, 0)"],
                borderColor: ["rgba(254, 252, 232, 0.1)", "rgba(212, 175, 55, 0.4)", "rgba(254, 252, 232, 0.1)"]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 border border-cream/10 p-2"
            >
              <motion.div 
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full vintage-map relative z-10"
              >
                <MapContainer 
                  center={position} 
                  zoom={14} 
                  scrollWheelZoom={false}
                  className="w-full h-full"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>
                      <div className="text-center font-serif">
                        <h3 className="font-bold text-midnight">L'Atelier</h3>
                        <p className="text-midnight/70 italic">Where dreams take form.</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </motion.div>
              {/* Decorative overlay to blend map with theme */}
              <div className="absolute inset-0 bg-midnight/20 pointer-events-none z-20 mix-blend-overlay" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
