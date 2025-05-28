import AuxHero from "@/components/sections/aux-hero";
import ProductNavigation from "@/components/sections/products/products-navigation";

export default function Layout({ children }) {
  return (<>
    <AuxHero title="Products" />
    <div className="md:relative py-20 text-cyan-950 w-[90%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
      <div className="w-full col-span-1 md:col-span-1">
        <ProductNavigation />
      </div>
      <div className="col-span-1 md:col-span-4">
        {children}
      </div>
    </div>
  </>)
}