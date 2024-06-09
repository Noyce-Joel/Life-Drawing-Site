import React, { useState } from "react";

const Sp = () => {
  return (
    <>
      <p>
        At Dog Life Drawing, the safety and well-being of our participants,
        models, and furry friends are our utmost priority. We strive to create
        an enjoyable and secure environment for all involved. To ensure the
        safety of everyone attending our events, we have implemented the
        following policy:
      </p>
      <ol>
        <li>
          <strong>Assumption of Risk:</strong> By purchasing a ticket to our Dog
          Life Drawing event, you acknowledge and accept that there are inherent
          risks associated with interacting with animals, including dogs. While
          we take all necessary precautions to minimize these risks, unforeseen
          circumstances may occur.
        </li>
        <li>
          <strong>Risk Assessment:</strong> Prior to each Dog Life Drawing
          event, we conduct a thorough risk assessment to identify and address
          any potential hazards or risks. This assessment includes evaluating
          the behavior and temperament of our canine models, as well as
          assessing the venue for any safety concerns.
        </li>
        <li>
          <strong>Health and Safety Measures:</strong> We adhere to strict
          health and safety protocols to ensure the well-being of all attendees.
          This includes providing clear guidelines for interacting with the
          dogs, maintaining a clean and hygienic environment, and implementing
          appropriate crowd management strategies.
        </li>
        <li>
          <strong>Participant Responsibilities:</strong> While we take every
          precaution to ensure a safe environment, participants are also
          responsible for their own safety and well-being. We ask that all
          attendees follow the instructions of our staff and adhere to the
          guidelines provided during the event.
        </li>
        <li>
          <strong>Feedback and Continuous Improvement:</strong> We welcome
          feedback from our participants to help us continuously improve our
          safety measures and event experience. If you have any concerns or
          suggestions regarding safety at our Dog Life Drawing events, please
          don't hesitate to contact us.
        </li>
      </ol>
      <p>
        By attending our Dog Life Drawing events, you agree to abide by the
        terms and conditions outlined in this safety policy. We thank you for
        your cooperation in helping us maintain a safe and enjoyable environment
        for everyone involved.
      </p>
    </>
  );
};

export function SafteyPolicy() {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = (e: any) => {
    e.stopPropagation();
    setModalVisible(false);
  };
  return (
    <>
      <div>
        <button onClick={() => setModalVisible(true)}>
          <h1>Dog Life Drawing Safety Policy</h1>
        </button>
      </div>
      {modalVisible && (
        <div className="h-full fixed top-0 w-full flex items-center justify-center">
          <div className="flex rounded-[20px] transform-[-50%, -50%] fixed  items-center mx-auto bg-[#334D42] w-4/5 h-4/5 z-50">
            <div onClick={(e) => e.stopPropagation()}>
              <Sp />
            </div>
            <button onClick={closeModal}>Close</button>
          </div>
          <div
            onClick={closeModal}
            className="fixed flex w-full h-full z-40 top-0 left-0 bg-gray-900 opacity-50 blur-md"
          />
        </div>
      )}
    </>
  );
}

export function DataProtectionPolicy() {
  return (
    <div>
      <h2>Data Protection Policy</h2>
      <p>
        <strong>Effective Date:</strong> 16/05/2024
      </p>
      <h3>1. Introduction</h3>
      <p>
        At Dog Life Drawing, we are committed to protecting the privacy and
        security of your personal information. This Data Protection Policy
        outlines how we collect, use, disclose, and safeguard your data when you
        visit our website or use our services. By accessing our website or
        providing us with your information, you consent to the terms of this
        policy.
      </p>
      <h3>2. Information We Collect</h3>
      <p>
        We may collect various types of information when you interact with our
        website or services, including but not limited to:
      </p>
      <ul>
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
      <h3>3. Use of Information</h3>
      <p>We use the information collected for the following purposes:</p>
      <ul>
        <li>Providing and improving our services</li>
        <li>Personalizing your experience</li>
        <li>Communicating with you</li>
        <li>Analyzing trends and usage of our website</li>
        <li>Preventing fraudulent activities</li>
      </ul>
      <h3>4. Data Sharing</h3>
      <p>
        We may share your information with third parties under certain
        circumstances, including:
      </p>
      <ul>
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
      <h3>5. Data Security</h3>
      <p>
        We implement reasonable security measures to protect your personal
        information from unauthorized access, disclosure, alteration, or
        destruction. However, no method of transmission over the internet or
        electronic storage is 100% secure, and we cannot guarantee absolute
        security.
      </p>
      <h3>6. Your Rights</h3>
      <p>
        You have certain rights regarding your personal information, including
        the right to access, correct, or delete your data. To exercise these
        rights or inquire about our data practices, please contact us using the
        information provided below.
      </p>
      <h3>7. Changes to this Policy</h3>
      <p>
        We reserve the right to update or modify this Data Protection Policy at
        any time. Any changes will be effective immediately upon posting the
        updated policy on our website. We encourage you to review this policy
        periodically for any updates.
      </p>
      <h3>8. Contact Us</h3>
      <p>
        If you have any questions, concerns, or complaints regarding our data
        protection practices or this policy, please contact us at{" "}
        <a href="mailto:doglifedrawing@gmail.com">doglifedrawing@gmail.com</a>.
      </p>
    </div>
  );
}
