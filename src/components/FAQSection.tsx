import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Floot?",
    answer: "Floot is an AI-powered platform that lets you build complete web applications without coding. Just describe what you want, and our AI builds it for you."
  },
  {
    question: "How is Floot different from other AI tools?",
    answer: "Floot is designed specifically for entrepreneurs who want to finish their apps. Unlike other tools that get stuck or require extensive technical knowledge, Floot fixes errors automatically and provides human support when needed."
  },
  {
    question: "Do I need coding experience to use Floot?",
    answer: "No! Floot is designed for non-coders. You can build fully-featured applications just by describing what you want in plain English."
  },
  {
    question: "What types of apps can I build?",
    answer: "You can build a wide variety of web applications including business tools, e-commerce sites, social platforms, productivity apps, and more. Floot includes everything needed for modern web applications."
  },
  {
    question: "How does pricing work?",
    answer: "We offer flexible pricing plans to match your needs. You can start building for free, and we have affordable plans for scaling your applications."
  },
  {
    question: "How can I get help or join the community?",
    answer: "We provide live chat support and phone calls for personalized help. You can also join our community of builders to share ideas and get advice."
  },
  {
    question: "Can I import my project from another tool?",
    answer: "Yes, we can help you migrate projects from other platforms. Our team will work with you to ensure a smooth transition to Floot."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              FAQ
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-slate-700 rounded-lg bg-slate-800/50 px-6"
              >
                <AccordionTrigger className="text-white hover:text-slate-300 py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-slate-300">
              Got more questions?{" "}
              <button className="text-orange-400 hover:text-orange-300 underline">
                Live chat with us
              </button>{" "}
              or email hello@floot.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;