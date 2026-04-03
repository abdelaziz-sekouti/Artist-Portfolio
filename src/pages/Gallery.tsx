import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

type Category = 'All' | 'Paintings' | 'Sketches' | 'Digital';

interface Artwork {
  id: number;
  title: string;
  medium: string;
  description: string;
  category: Category;
  imageUrl: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "L'Étreinte du Crépuscule",
    medium: "Oil on Canvas",
    description: "A study of the fading light as day surrenders to night, capturing the warmth of the final sunrays.",
    category: "Paintings",
    imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c03fae6?q=80&w=2000&auto=format&fit=crop",
    aspectRatio: "portrait"
  },
  {
    id: 2,
    title: "Murmures de la Forêt",
    medium: "Charcoal on Paper",
    description: "The silent conversations between ancient trees, rendered in stark, unforgiving charcoal.",
    category: "Sketches",
    imageUrl: "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?q=80&w=2000&auto=format&fit=crop",
    aspectRatio: "landscape"
  },
  {
    id: 3,
    title: "Rêverie Numérique",
    medium: "Digital Painting",
    description: "A modern interpretation of romanticism, blending classical composition with ethereal digital textures.",
    category: "Digital",
    imageUrl: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2000&auto=format&fit=crop",
    aspectRatio: "square"
  },
  {
    id: 4,
    title: "La Danse des Ombres",
    medium: "Oil on Canvas",
    description: "Figures lost in a waltz, their forms dissolving into the surrounding darkness.",
    category: "Paintings",
    imageUrl: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?q=80&w=2000&auto=format&fit=crop",
    aspectRatio: "portrait"
  },
  {
    id: 5,
    title: "Souvenirs Oubliés",
    medium: "Graphite and Gold Leaf",
    description: "Fragments of memory, elevated and preserved through the delicate application of gold.",
    category: "Sketches",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2000&auto=format&fit=crop",
    aspectRatio: "portrait"
  },
  {
    id: 6,
    title: "L'Aube Nouvelle",
    medium: "Digital Mixed Media",
    description: "The breaking of dawn, symbolizing hope and the eternal cycle of rebirth.",
    category: "Digital",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    aspectRatio: "landscape"
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState<Category>('All');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const filteredArtworks = filter === 'All' 
    ? artworks 
    : artworks.filter(art => art.category === filter);

  const categories: Category[] = ['All', 'Paintings', 'Sketches', 'Digital'];

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
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-cream mb-6">The <span className="italic text-gold">Voyage</span></h1>
          <p className="text-cream/60 font-light max-w-2xl mx-auto">
            A curated collection of moments, captured across various mediums. Each piece is a window into a different emotional landscape.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "text-sm uppercase tracking-widest transition-all duration-300 relative",
                filter === cat ? "text-gold" : "text-cream/50 hover:text-cream"
              )}
            >
              {cat}
              {filter === cat && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gold"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence>
            {filteredArtworks.map((art) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={art.id}
                className="relative group cursor-pointer break-inside-avoid overflow-hidden"
                onClick={() => setSelectedArtwork(art)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={art.imageUrl} 
                    alt={art.title} 
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-midnight/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-2xl font-serif text-cream mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{art.title}</h3>
                    <p className="text-gold text-sm italic transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{art.medium}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-midnight/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedArtwork(null)}
          >
            <button 
              className="absolute top-6 right-6 text-cream/50 hover:text-gold transition-colors z-50"
              onClick={() => setSelectedArtwork(null)}
            >
              <X size={32} />
            </button>
            
            <div 
              className="max-w-6xl w-full flex flex-col lg:flex-row gap-12 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full lg:w-2/3 max-h-[80vh] flex justify-center"
              >
                <img 
                  src={selectedArtwork.imageUrl} 
                  alt={selectedArtwork.title} 
                  className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full lg:w-1/3 text-center lg:text-left"
              >
                <h2 className="text-4xl font-serif text-cream mb-2">{selectedArtwork.title}</h2>
                <p className="text-gold italic mb-8">{selectedArtwork.medium}</p>
                <p className="text-cream/70 font-light leading-relaxed">
                  {selectedArtwork.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
