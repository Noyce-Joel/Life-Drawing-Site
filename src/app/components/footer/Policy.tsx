import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
const container = {
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
};

const item = {
  initial: { y: 525, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    y: 525,
    opacity: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};
const Sp = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-900">
          Dog Life Drawing Safety Policy
        </h1>
        <p className="mb-6 text-lg text-gray-700">
          At Dog Life Drawing, the safety and well-being of our participants,
          models, and furry friends are our utmost priority. We strive to create
          an enjoyable and secure environment for all involved. To ensure the
          safety of everyone attending our events, we have implemented the
          following policy:
        </p>
        <ol className="list-decimal list-inside space-y-4">
          <li className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-xl font-semibold">Assumption of Risk</h2>
            <p className="text-gray-700">
              By purchasing a ticket to our Dog Life Drawing event, you
              acknowledge and accept that there are inherent risks associated
              with interacting with animals, including dogs. While we take all
              necessary precautions to minimize these risks, unforeseen
              circumstances may occur.
            </p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-xl font-semibold">Risk Assessment</h2>
            <p className="text-gray-700">
              Prior to each Dog Life Drawing event, we conduct a thorough risk
              assessment to identify and address any potential hazards or risks.
              This assessment includes evaluating the behavior and temperament
              of our canine models, as well as assessing the venue for any
              safety concerns.
            </p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-xl font-semibold">
              Health and Safety Measures
            </h2>
            <p className="text-gray-700">
              We adhere to strict health and safety protocols to ensure the
              well-being of all attendees. This includes providing clear
              guidelines for interacting with the dogs, maintaining a clean and
              hygienic environment, and implementing appropriate crowd
              management strategies.
            </p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-xl font-semibold">
              Participant Responsibilities
            </h2>
            <p className="text-gray-700">
              While we take every precaution to ensure a safe environment,
              participants are also responsible for their own safety and
              well-being. We ask that all attendees follow the instructions of
              our staff and adhere to the guidelines provided during the event.
            </p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-xl font-semibold">
              Feedback and Continuous Improvement
            </h2>
            <p className="text-gray-700">
              We welcome feedback from our participants to help us continuously
              improve our safety measures and event experience. If you have any
              concerns or suggestions regarding safety at our Dog Life Drawing
              events, please don&apos;t hesitate to contact us.
            </p>
          </li>
        </ol>
        <p className="mt-6 text-lg text-gray-700">
          By attending our Dog Life Drawing events, you agree to abide by the
          terms and conditions outlined in this safety policy. We thank you for
          your cooperation in helping us maintain a safe and enjoyable
          environment for everyone involved.
        </p>
      </div>
    </>
  );
};

const Dpp = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
        Data Protection Policy
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        <strong>Effective Date:</strong> 16/05/2024
      </p>

      <p className="text-gray-700 mb-4">
        At Dog Life Drawing, we are committed to protecting the privacy and
        security of your personal information. This Data Protection Policy
        outlines how we collect, use, disclose, and safeguard your data when you
        visit our website or use our services. By accessing our website or
        providing us with your information, you consent to the terms of this
        policy.
      </p>
      <h3 className="text-2xl font-semibold mb-2">2. Information We Collect</h3>
      <p className="text-gray-700 mb-4">
        We may collect various types of information when you interact with our
        website or services, including but not limited to:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2 border-l-4 border-blue-500 pl-4">
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, etc.
        </li>
        <li>
          <strong>Usage Data:</strong> IP address, browser type, pages visited,
          etc.
        </li>
        <li>
          <strong>Cookies and Tracking Technologies:</strong> Information
          collected through cookies, web beacons, and similar technologies.
        </li>
      </ul>
      <h3 className="text-2xl font-semibold mb-2">3. Use of Information</h3>
      <p className="text-gray-700 mb-4">
        We use the information collected for the following purposes:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2 border-l-4 border-blue-500 pl-4">
        <li>Providing and improving our services</li>
        <li>Personalizing your experience</li>
        <li>Communicating with you</li>
        <li>Analyzing trends and usage of our website</li>
        <li>Preventing fraudulent activities</li>
      </ul>
      <h3 className="text-2xl font-semibold mb-2">4. Data Sharing</h3>
      <p className="text-gray-700 mb-4">
        We may share your information with third parties under certain
        circumstances, including:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2 border-l-4 border-blue-500 pl-4">
        <li>
          <strong>Service Providers:</strong> Third-party service providers who
          assist us in operating our website and providing our services.
        </li>
        <li>
          <strong>Legal Compliance:</strong> When required to comply with
          applicable laws, regulations, or legal processes.
        </li>
        <li>
          <strong>Business Transfers:</strong> In connection with a merger,
          acquisition, or sale of assets, your information may be transferred to
          the acquiring entity.
        </li>
      </ul>
      <h3 className="text-2xl font-semibold mb-2">5. Data Security</h3>
      <p className="text-gray-700 mb-4">
        We implement reasonable security measures to protect your personal
        information from unauthorized access, disclosure, alteration, or
        destruction. However, no method of transmission over the internet or
        electronic storage is 100% secure, and we cannot guarantee absolute
        security.
      </p>
      <h3 className="text-2xl font-semibold mb-2">6. Your Rights</h3>
      <p className="text-gray-700 mb-4">
        You have certain rights regarding your personal information, including
        the right to access, correct, or delete your data. To exercise these
        rights or inquire about our data practices, please contact us using the
        information provided below.
      </p>
      <h3 className="text-2xl font-semibold mb-2">7. Changes to this Policy</h3>
      <p className="text-gray-700 mb-4">
        We reserve the right to update or modify this Data Protection Policy at
        any time. Any changes will be effective immediately upon posting the
        updated policy on our website. We encourage you to review this policy
        periodically for any updates.
      </p>
      <h3 className="text-2xl font-semibold mb-2">8. Contact Us</h3>
      <p className="text-gray-700">
        If you have any questions, concerns, or complaints regarding our data
        protection practices or this policy, please contact us at{" "}
        <a
          className="text-blue-500 underline"
          href="mailto:doglifedrawing@gmail.com"
        >
          doglifedrawing@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export function SafteyPolicy() {
  const [safetyPolicyVisible, setSafteyPolicyVisible] = useState(false);
  const [dataProtectionPolicyVisible, setDataProtectionPolicyVisible] =
    useState(false);
  const closeModal = (e: any) => {
    e.stopPropagation();
    setSafteyPolicyVisible(false);
    setDataProtectionPolicyVisible(false);
  };
  return (
    <>
      <div className=" flex flex-col">
        <button onClick={() => setSafteyPolicyVisible(true)}>
          <h1 className="text-gray-900/50 flex">Safety Policy</h1>
        </button>
        <button onClick={() => setDataProtectionPolicyVisible(true)}>
          <h1 className="text-gray-900/50 flex">Data Protection Policy</h1>
        </button>
      </div>
      <AnimatePresence mode="wait">
        {safetyPolicyVisible && (
          <motion.div
            variants={container}
            initial="initial"
            whileInView="whileInView"
            exit="exit"
          >
            <div className="h-full fixed top-0 left-0 w-full flex items-start justify-center overflow-y-scroll">
              <motion.div
                initial={{ y: 500, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    friction: 90,
                    damping: 25,
                  },
                }}
                exit={{
                  y: 500,
                  opacity: 0,

                  transition: {
                    duration: 1,
                    type: "spring",
                    friction: 90,
                    damping: 20,
                  },
                }}
                onClick={(e) => e.stopPropagation()}
                className="overflow-y-scroll flex z-50 my-12 sm:mx-12"
              >
                <Sp />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.7,
                  },
                }}
                onClick={closeModal}
                className="fixed flex w-full h-full z-40 top-0 left-0 bg-gray-900/50"
              />
            </div>
          </motion.div>
        )}
        {dataProtectionPolicyVisible && (
          <motion.div
            variants={container}
            initial="initial"
            whileInView="whileInView"
            exit="exit"
          >
            <div className="h-full fixed top-0 left-0 w-full flex items-start justify-center overflow-y-scroll">
              <motion.div
                initial={{ y: 500, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    friction: 90,
                    damping: 25,
                  },
                }}
                exit={{
                  y: 500,
                  opacity: 0,

                  transition: {
                    duration: 1,
                    type: "spring",
                    friction: 90,
                    damping: 20,
                  },
                }}
                onClick={(e) => e.stopPropagation()}
                className="overflow-y-scroll flex z-50 my-12 mx-4 sm:mx-20"
              >
                <Dpp />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.7,
                  },
                }}
                onClick={closeModal}
                className="fixed flex w-full h-full z-40 top-0 left-0 bg-gray-900/50"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
