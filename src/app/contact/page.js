import Link from "next/link";
import AuxHero from "@/components/sections/aux-hero";
import FAQ from "@/components/sections/faq";

export const metadata = {
  title: "Tender Touch | Contact Us",
};

export default function Page() {
  return (<>
    <AuxHero title="Contact Us" />
    {/* Form */}
    <div className="py-20 w-[90%] mx-auto border-b border-neutral-200 grid md:grid-cols-2 text-cyan-950">
      <div className="border-b pb-14 mb-10 md:pb-0 md:mb-0 md:border-b-0 md:border-r border-neutral-200 md:pr-[10%]">
        <div className="mb-4 text-3xl tracking-tight">We&apos;re here to help</div>
        <div className="mb-8 tracking-tight text-base/6">
          If you weren&apos;t able to find the answer in our <Link className="inline underline text-violet-400" href="/#">FAQs</Link>, fill out this form with your details and tell us how we can help. Our friendly Customer Love team will be in touch shortly!
        </div>
        <div className="relative w-full h-64 md:h-80 -z-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0297272956777!2d85.34222571040279!3d27.68547607609577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d7e8b05e9%3A0x417ff954dc19632f!2sBrajeshwori%20Group!5e0!3m2!1sen!2snp!4v1748239269648!5m2!1sen!2snp"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <form className="md:px-[10%] grid md:grid-cols-2 gap-x-4 gap-y-6 contact-form">
        <div className="">
          <label>First Name</label>
          <input placeholder="Eg.Aditya" type="text" />
        </div>
        <div className="">
          <label>Last Name</label>
          <input placeholder="Eg.Shrestha" type="text" />
        </div>
        <div className="md:col-span-2">
          <label>Enquiry Type</label>
          <select>
            <option>General Inquiry</option>
            <option>Product Inquiry</option>
            <option>Feedback</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label>Email</label>
          <input placeholder="email@email.com" type="text" />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label>Additional Information</label>
          <textarea rows={5} placeholder="Leave us a message" />
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
    <FAQ />
  </>)
}