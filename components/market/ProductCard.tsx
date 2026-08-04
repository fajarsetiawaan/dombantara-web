import Link from "next/link";
import { Star } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ProductCard = ({ prod }: { prod: any }) => (
  <Link href={`/market/${prod.id}`} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border-subtle flex flex-col group hover:shadow-lg hover:border-[#166534]/30 transition-all duration-300 h-full cursor-pointer block min-w-[160px] md:min-w-[200px]">
    {/* Image Area */}
    <div className="h-32 md:h-44 relative overflow-hidden bg-surface shrink-0">
      <img 
        src={prod.img?.startsWith('/') ? prod.img : `https://images.unsplash.com/photo-${prod.img}?auto=format&fit=crop&q=80&w=400`} 
        alt={prod.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 text-transparent"
      />
    </div>

    {/* Content Area */}
    <div className="p-2.5 flex flex-col gap-1.5 flex-1">
      <h3 className="font-bold text-text-primary text-xs md:text-sm leading-snug line-clamp-2 group-hover:text-[#166534] transition-colors">
        {prod.badge && (
          <span className="inline-flex items-center justify-center bg-[#166534] text-white text-[9px] font-bold px-1.5 rounded mr-1.5 align-middle leading-tight h-[16px]">
            {prod.badge}
          </span>
        )}
        {prod.title}
      </h3>

      <div className="flex items-center gap-1 text-[11px] text-text-secondary">
        <Star size={11} className="fill-yellow-400 text-yellow-400" />
        <span className="font-bold">{prod.rating}</span>
      </div>

      <div className="flex flex-col mt-auto pt-1 gap-0.5">
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-bold text-white bg-red-500 px-1 rounded leading-tight h-[14px] flex items-center">-5%</span>
          <span className="text-[10px] text-text-muted line-through">
            {prod.price.replace('4.750', '5.000').replace('3.250', '3.420').replace('24.500', '25.780').replace('4.950', '5.210').replace('2.250', '2.360').replace('195.000', '205.000').replace('175.000', '185.000').replace('185.000', '195.000').replace('210.000', '225.000').replace('15.000.000', '15.500.000').replace('12.500.000', '13.000.000').replace('18.000.000', '19.000.000').replace('14.500.000', '15.500.000').replace('165.000', '175.000').replace('225.000', '235.000').replace('95.000', '100.000').replace('75.000', '80.000').replace('55.000', '60.000')}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-[#166534] text-xs md:text-sm leading-tight">{prod.price}</p>
          <span className="text-[9px] md:text-[10px] text-text-muted">{prod.sold} terjual</span>
        </div>
      </div>
    </div>
  </Link>
);
