"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What is ISACA?",
    answer: "ISACA is a global association of IT professionals dedicated to advancing and certifying information systems governance, control, risk, and cybersecurity.",
  },
  {
    question: "Why should I join your ISACA chapter?",
    answer: "Joining our ISACA chapter provides you with opportunities to network with like-minded professionals, gain valuable certifications, and stay up-to-date on the latest industry trends and best practices.",
  },
  {
    question: "What kind of events and activities do you organize?",
    answer:
      "We host a variety of events, including workshops, seminars, guest lectures, and networking sessions. These events cover a wide range of topics related to cybersecurity, risk management, and governance.",
  },
  {
    question: "How can I get involved in the chapter?",
    answer:
      "There are many ways to get involved! You can attend our events, volunteer for committees, or join our mentorship program. We encourage all members to participate and contribute to the chapter's success.",
  },
];
