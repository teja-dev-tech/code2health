import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface FAQProps {
    question: string;
    answer: string;
    value: string;
  }
  
  const FAQList: FAQProps[] = [
    {
    question: "What is Code2Health?",
    answer: "Code2Health is a platform that helps developers maintain a healthy lifestyle by providing tools and resources to improve their physical and mental well-being.",
    value: "1",
    },
    {
        question: "How can Code2Health help me?",
        answer: "Code2Health provides personalized wellness plans, progress tracking tools, and a supportive community to help you achieve your health and fitness goals.",
        value: "2",
    },
    {
        question: "Is Code2Health free to use?",
        answer: "Code2Health offers a free basic plan with limited features. Premium plans with additional tools and resources are available for a monthly subscription fee.",
        value: "3",
    },
    {
        question: "How do I get started with Code2Health?",
        answer: "To get started with Code2Health, simply create an account on our website and complete your profile. You can then access our tools and resources to start improving your health and wellness.",
        value: "4",
    },
    {
        question: "Can I cancel my subscription at any time?",
        answer: "Yes, you can cancel your Code2Health subscription at any time. Your account will remain active until the end of your current billing cycle, and you will not be charged for the following month.",
        value: "5",
    },
    {
        question: "How can I contact Code2Health support?",
        answer: "If you have any questions or need assistance with Code2Health, you can contact our support team via email at code2health@gmail.com. We are available to help you with any issues or concerns you may have.",
        value: "6",
    },
  ];
  
  export const FAQSection = () => {
    return (
      <section id="faq" className="container w-auto mx-5 md:mx-12 lg:mx-20   py-24 sm:py-32">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16">

      
        <div className="text-center mb-8">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            FAQS
          </h2>
  
          <h2 className="text-3xl md:text-4xl text-center font-bold">
            Common Questions
          </h2>
        </div>
  
        <Accordion type="single" collapsible className="AccordionRoot md:w-[700px]">
          {FAQList.map(({ question, answer, value }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>
  
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        </div>
      </section>
    );
  };
  