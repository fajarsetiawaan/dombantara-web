const fs = require('fs');
let file = fs.readFileSync('app/ekosistem/supply/corporate/page.tsx', 'utf8');

// Add imports
file = file.replace(/Award\n} from "lucide-react";/, 'Award,\n  Tractor,\n  Home,\n  MessageCircle\n} from "lucide-react";');

// Fix metrics block layout and icons
file = file.replace(/<Truck size={24} \/>/g, '<Tractor size={24} />');
file = file.replace(/<Factory size={24} \/>/g, '<Home size={24} />');

// Category Cards Fix: add image and links
file = file.replace(/<div key={cat.id} className="bg-white rounded-2xl p-6 border border-border-subtle flex flex-col hover:shadow-lg hover:border-primary\/30 transition-all duration-300 group h-full">\n                    <div className="w-12 h-12 rounded-xl bg-primary\/10 flex items-center justify-center text-primary shrink-0 mb-4">\n                      {cat.icon}\n                    <\/div>/g, 
  `<div key={cat.id} className="bg-white rounded-2xl border border-border-subtle overflow-hidden flex flex-col hover:shadow-lg hover:border-primary/30 transition-all duration-300 group h-full">
                    <div className="h-32 bg-gray-300 relative overflow-hidden">
                      <img src={\`https://images.unsplash.com/photo-\${cat.image}?auto=format&fit=crop&q=80&w=600\`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={cat.title} />
                      <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center text-primary">
                        {cat.icon}
                      </div>
                    </div>`);
                    
file = file.replace(/<div className="flex flex-col flex-1">/g, '<div className="p-4 flex flex-col flex-1">');
file = file.replace(/<h3 className="font-bold text-sm text-text-primary mb-2">/g, '<h3 className="font-display font-bold text-lg text-text-primary mb-1">');
file = file.replace(/<p className="text-\[10px\] text-text-secondary leading-relaxed mb-6">/g, '<p className="text-[10px] text-text-secondary leading-relaxed mb-4">');

file = file.replace(/<div className="mt-auto">\n                        <button className="w-full text-center border border-border-subtle rounded-xl py-2.5 text-\[10px\] font-bold text-text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors">\n                          Hubungi Sales Corporate\n                        <\/button>\n                      <\/div>/g, 
  `<div className="mt-auto flex gap-2">
                        <Link href="/ekosistem/supply/corporate/livestock-landingpage" className="flex-1 text-center border border-border-subtle rounded-xl py-2.5 text-[10px] font-bold text-text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors">
                          Lihat Detail
                        </Link>
                        <button className="w-9 shrink-0 flex items-center justify-center border border-border-subtle rounded-xl text-text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors" title="Hubungi Sales Corporate">
                          <MessageCircle size={14} />
                        </button>
                      </div>`);

// Fix FAQ 2 columns
file = file.replace(/<div className="max-w-3xl mx-auto">\n            <h2 className="text-2xl lg:text-3xl font-display font-bold text-text-primary mb-10 text-center">/g, 
  '<div className="w-full">\n            <h2 className="text-2xl lg:text-3xl font-display font-bold text-text-primary mb-10 text-center">');
file = file.replace(/<div className="space-y-4">/g, '<div className="grid md:grid-cols-2 gap-4 lg:gap-6 items-start">');

fs.writeFileSync('app/ekosistem/supply/corporate/page.tsx', file);
