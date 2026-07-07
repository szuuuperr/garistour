import Image from "next/image";
import TornPaper from "@/components/blocks/torn-paper";
import WavyDivider from "@/components/blocks/wavy-divider";
import PricingCard from "@/components/blocks/pricing-card";
import Reveal from '@/components/blocks/reveal';

const packages = [
  {
    title: "Paket Short",
    image: "/assets/poster-paket-short.jpg",
    price: "Rp 450.000",
    unit: "/ Jip",
    features: [
      "Petilasan Mbah Marijan",
      "Spot Foto Opak Merapi",
      "Bungker Kaliadem",
      "Museum Erupsi Merapi",
    ],
  },
  {
    title: "Paket Medium",
    image: "/assets/poster-paket-mediumjpg.jpg",
    price: "Rp 550.000",
    unit: "/ Jip",
    featured: true,
    features: [
      "Petilasan Mbah Marijan",
      "Spot Foto Opak Merapi",
      "Bungker Kaliadem",
      "Museum Erupsi Merapi",
      "Manuver Sungai Kali Kuning",
    ],
  },
  {
    title: "Paket Long",
    image: "/assets/poster-paket-long.jpg",
    price: "Rp 650.000",
    unit: "/ Jip",
    features: [
      "Petilasan Mbah Marijan",
      "Spot Foto Opak Merapi",
      "Bungker Kaliadem",
      "The Lost World Park",
      "Museum Erupsi Merapi",
      "Manuver Sungai Kali Kuning",
    ],
  },
];

const PricingSection = () => (
  <section id="paket-wisata" className="relative overflow-hidden">
    {/* Background photo */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/assets/destination/gunung-merapi.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0" />
    </div>

    {/* Torn paper: top edge */}
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-10">
      <TornPaper position="top" className="h-10" />
    </div>

    {/* Content */}
    <div className="relative z-10 mx-auto max-w-6xl px-6 pb-36 pt-24 md:pt-28">
      <Reveal className='text-center'>
        <h2 className="font-heading text-4xl tracking-wide md:text-5xl">
          <span className="text-secondary italic">Harga</span>{" "}
          <span className="text-primary">Paket Wisata</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md font-body text-sm text-neutral-100">
          Pilih paket perjalanan yang paling sesuai dengan kebutuhan Anda.
          Setiap perjalanan menjadi kenangan.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        {packages.map((p, i) => (
          <Reveal key={p.title} from='bottom' delay={i * 0.12} className='h-full'>
          <PricingCard
            image={p.image}
            title={p.title}
            price={p.price}
            unit={p.unit}
            features={p.features}
            featured={p.featured}
          />
          </Reveal>
        ))}
      </div>

      <Reveal from='bottom' delay={0.1} className='mt-12 text-center'>
        <button className='inline-flex items-center justify-center rounded-full border border-secondary bg-transparent px-10 py-3 font-body font-semibold text-secondary transition-colors hover:bg-secondary hover:text-tertiary'>
          Selengkapnya
        </button>
      </Reveal>
    </div>

    <button className="w-full rounded-full border border-secondary bg-transparent py-3 font-body font-semibold text-secondary transition-colors hover:bg-secondary/10">
      Selengkapnya
    </button>


    {/* Wavy divider: bottom edge (shadow points inward/up) */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24">
      <WavyDivider className="h-24" />
    </div>
  </section>
);

export default PricingSection;
