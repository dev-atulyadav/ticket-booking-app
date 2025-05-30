import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book movie tickets on EzyTicket?",
      answer: "Booking tickets is simple! Just browse our movie listings, select your preferred movie, choose your seats, and complete the secure payment process. Your tickets will be available in your account instantly."
    },
    {
      question: "Can I cancel or refund my movie tickets?",
      answer: "Yes, you can cancel your tickets through the 'My Tickets' section. Refunds are processed according to our cancellation policy and usually take 3-5 business days to reflect in your account."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI payments, and popular digital wallets for a convenient booking experience."
    },
    {
      question: "How do I view my booked tickets?",
      answer: "You can view all your booked tickets in the 'My Tickets' section of your account. Each ticket contains details about the movie, show timing, and seat numbers."
    },
    {
      question: "Is my payment information secure?",
      answer: "Absolutely! We use industry-standard encryption and secure payment gateways to ensure your payment information is always protected."
    },
    {
      question: "What if I face technical issues while booking?",
      answer: "Our customer support team is available to help! You can reach us through the Contact page or email us at support@ezyticket.com."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen p-8 md:p-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {activeIndex === index ? (
                  <IoIosArrowUp className="text-sky-600 text-xl" />
                ) : (
                  <IoIosArrowDown className="text-sky-600 text-xl" />
                )}
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ease-in-out ${
                  activeIndex === index 
                    ? "max-h-48 py-4 opacity-100" 
                    : "max-h-0 py-0 opacity-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
            Still have questions? Feel free to{" "}
            <a href="/contact" className="text-sky-600 hover:underline">
              contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
