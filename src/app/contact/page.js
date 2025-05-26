import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Tender Touch | Contact Us",
};

export default function Page() {
  return (<>
    <div className="py-20 bg-cyan-600">
      <div className="w-[90%] pt-20 mx-auto text-5xl tracking-tight text-center text-white">
        Contact Us
      </div>
    </div>
    <div className="py-20 w-[90%] mx-auto border-b border-neutral-200 grid md:grid-cols-2 text-cyan-950 relative">
      <div className="border-r border-neutral-200 md:pr-[10%] sticky top-20">
        <div className="text-3xl tracking-tight mb-4">We&apos;re here to help</div>
        <div className="text-base/6 tracking-tight">If you weren&apos;t able to find the answer in our <Link className="inline text-violet-400 underline" href="/#">FAQs</Link>, fill out this form with your details and tell us how we can help. Our friendly Customer Love team will be in touch shortly!</div>
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
        <div className="md:col-span-2 flex flex-col">
          <label>Additional Information</label>
          <textarea rows={5} placeholder="Leave us a message" />
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
    <div className="py-20 w-[90%] mx-auto text-cyan-950">
      <div className="text-3xl tracking-tight mb-8 text-center">Frequently Asked Questions</div>
      <div className="text-3xl tracking-tight mb-8 text-center">Here be faqs</div>
      <div className="btn mx-auto">Learn More <ArrowRight size={16} /></div>
    </div>
  </>)
}