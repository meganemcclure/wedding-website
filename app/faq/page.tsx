import Image from "next/image";
import lake from "@/public/lake line drawing 1.svg"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";

const FAQs = [
  {
    question: "Will the wedding be live streamed?",
    answer: "Yes! We will be live streaming the wedding on youtube.com."
  },
  {
    question: "Are children allowed?",
    answer: "We kindly ask that you don't bring any children under the age of 10. If you need a babysitter, please get in contact with Megan at meganemcclure@gmail.com. We're happy to help out with babysitting arrangements!"
  },
  {
    question: "Can I get a taxi there?",
    answer: "Yes, we'll be renting out a block of taxis. Please check out the Travel & Accommodations page for more details. Enjoy your night, and don't worry about driving!"
  },
]

export default function FAQ() {
    return (
      <div className="h-full w-full flex flex-col flex flex-col gap-8 max-w-xl">
          <h1 className="text-3xl">Frequently Asked Questions</h1>
          <p>If you have a question that's not covered here, please email Megan at <Link href="mailto:meganemcclure@gmail.com">meganemcclure@gmail.com</Link>.</p>
          <Accordion type="single" collapsible className="w-full">
            {FAQs.map((faq, index) => (
              <AccordionItem value={index.toString()} key={index}>
                <AccordionTrigger className="text-xl">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
      </div>
    )
  }