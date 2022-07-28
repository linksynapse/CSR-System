import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Footer() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='footer'>
        <a onClick={handleShow}><p className="footer-text">Term and Conditions</p></a>
        <p className="footer-text">Bluzen Pte Ltd © 2013-2022</p>
      </div>

      <Modal centered size='lg' aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Terms & Conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>DATA PROTECTION NOTICE</h3>
        <p>This Data Protection Notice ("Notice") sets out the basis which BLUZEN PTE LTD ("we", "us", or "our") may collect, use, disclose or otherwise process personal data of our customers in accordance with the Personal Data Protection Act ("PDPA"). This Notice applies to personal data in our possession or under our control, including personal data in the possession of organisations which we have engaged to collect, use, disclose or process personal data for our purposes. Your use of our services indicates you agree to this policy and our terms of use.</p>
        <h4>As used in this Notice</h4>
        <p>"customer" means an individual who (a) has contacted us through any means to find out more about any goods or services we provide, or (b) may, or has, entered into a contract with us for the supply of any goods or services by us; and "personal data" means data, whether true or not, about a customer who can be identified: (a) from that data; or (b) from that data and other information to which we have or are likely to have access.</p>
        <p>Depending on the nature of your interaction with us, some examples of personal data which we may collect from you include name, residential address, email address and telephone number.</p>
        <p>Other terms used in this Notice shall have the meanings given to them in the PDPA (where the context so permits).</p>
        <p>We generally do not collect your personal data unless (a) it is provided to us voluntarily by you directly or via a third party who has been duly authorised by you to disclose your personal data to us (your "authorised representative") after (i) you (or your authorised representative) have been notified of the purposes for which the data is collected, and (ii) you (or your authorised representative) have provided written consent to the collection and usage of your personal data for those purposes, or (b) collection and use of personal data without consent is permitted or required by the PDPA or other laws. We shall seek your consent before collecting any additional personal data and before using your personal data for a purpose which has not been notified to you (except where permitted or authorised by law).</p>
        <p>We may collect and use your personal data for any or all of the following purposes:</p>
        <p>a. performing obligations in the course of or in connection with our provision of the goods and/or services requested by you;</p>
        <p>b. verifying your identity;</p>
        <p>c. responding to, handling, and processing queries, requests, applications, complaints, and feedback from you;</p>
        <p>d. complying with any applicable laws, regulations, codes of practice, guidelines, or rules, or to assist in law enforcement and investigations conducted by any governmental and/or regulatory authority; and</p>
        <p>e. transmitting to any unaffiliated third parties including our third party service providers and agents, and relevant governmental and/or regulatory authorities, whether in Singapore or abroad, for the aforementioned purposes.</p>
        <p>We may disclose your personal data:</p>
        <p>a. where such disclosure is required for performing obligations in the course of or in connection with our provision of the goods and services requested by you; or</p>
        <p>b. to third party service providers, agents and other organisations we have engaged to perform any of the functions with reference to the above mentioned purposes.</p>
        <h3>RELIANCE ON LEGITIMATE INTERESTS EXCEPTION</h3>
        <p>In compliance with the PDPA, we may collect, use or disclose your personal data without your consent for the legitimate interests of BLUZEN PTE LTD or another person. In relying on the legitimate interests exception of the PDPA, BLUZEN PTE LTD will assess the likely adverse effects on the individual and determine that the legitimate interests outweigh any adverse effect.</p>
        <p>In line with the legitimate interests' exception, we will collect, use or disclose your personal data for the following purposes:</p>
        <p>a. Detection and prevention of misuse of services.</p>
        <p>b. Collection and use of personal data on company-issued devices to prevent data loss.</p>
        <p>The purposes listed in the above clause may continue to apply even in situations where your relationship with us (for example, pursuant to a contract) has been terminated or altered in any way, for a reasonable period thereafter.</p>
        <h3>WITHDRAWING YOUR CONSENT</h3>
        <p>The consent that you provide for the collection, use and disclosure of your personal data will remain valid until such time it is being withdrawn by you in writing. You may withdraw consent and request us to stop collecting, using and/or disclosing your personal data for any or all of the purposes listed above by submitting your request in writing or via email to our Data Protection Officer at the contact details provided below.</p>
        <p>Upon receipt of your written request to withdraw your consent, we may require reasonable time (depending on the complexity of the request and its impact on our relationship with you) for your request to be processed and for us to notify you of the consequences of us acceding to the same, including any legal consequences which may affect your rights and liabilities to us. In general, we shall seek to process your request within thirty (30) business days of receiving it.</p>
        <p>Whilst we respect your decision to withdraw your consent, please note that depending on the nature and scope of your request, we may not be in a position to continue providing our goods or services to you.</p>
        <p>Please note that withdrawing consent does not affect our right to continue to collect, use and disclose personal data where such collection, use and disclose without consent is permitted or required under applicable laws.</p>
        <h3>ACCESS TO AND CORRECTION OF PERSONAL DATA</h3>
        <p>If you wish to make (a) an access request for access to a copy of the personal data which we hold about you or information about the ways in which we use or disclose your personal data, or (b) a correction request to correct or update any of your personal data which we hold about you, you may submit your request in writing or via email to our Data Protection Officer at the contact details provided below.</p>
        <p>Please note that a reasonable fee may be charged for an access request. If so, we will inform you of the fee before processing your request.</p>
        <p>We will respond to your request as soon as reasonably possible. In general, our response will be within thirty (30) business days. Should we not be able to respond to your request within thirty (30) days after receiving your request, we will inform you in writing within thirty (30) days of the time by which we will be able to respond to your request. If we are unable to provide you with any personal data or to make a correction requested by you, we shall generally inform you of the reasons why we are unable to do so (except where we are not required to do so under the PDPA).</p>
        <h3>PROTECTION OF PERSONAL DATA</h3>
        <p>To safeguard your personal data from unauthorised access, collection, use, disclosure, copying, modification, disposal or similar risks, we have introduced appropriate administrative, physical and technical measures such as minimised collection of personal data, encryption of data, up-to-date antivirus protection, regular patching of operating system and other software, securely erase storage media in devices before disposal, and security review and testing performed regularly.</p>
        <p>You should be aware, however, that no method of transmission over the Internet or method of electronic storage is completely secure. While security cannot be guaranteed, we strive to protect the security of your information and are constantly reviewing and enhancing our information security measures.</p>
        <h3>RETENTION OF PERSONAL DATA</h3>
        <p>We may retain your personal data for as long as it is necessary to fulfil the purpose for which it was collected, or as required or permitted by applicable laws.</p>
        <p>We will cease to retain your personal data, or remove the means by which the data can be associated with you, as soon as it is reasonable to assume that such retention no longer serves the purpose for which the personal data was collected, and is no longer necessary for legal or business purposes.</p>
        <h3>TRANSFERS OF PERSONAL DATA OUTSIDE OF SINGAPORE</h3>
        <p>We generally do not transfer your personal data to countries outside of Singapore. However, if we do so, we will obtain your consent for the transfer to be made and we will take steps to ensure that your personal data continues to receive a standard of protection that is at least comparable to that provided under the PDPA.</p>
        <h3>DATA PROTECTION OFFICER</h3>
        <p>You may contact our Data Protection Officer if you have any enquiries or feedback on our personal data protection policies and procedures, or if you wish to make any request, in the following manner:</p>
        <h5>Contact Nunber: 62710177</h5>
        <h5>Email: callcentre@bluzen.com</h5>
        <h3>EFFECT OF NOTICE AND CHANGES TO NOTICE</h3>
        <p>This Notice applies in conjunction with any other notices, contractual clauses and consent clauses that apply in relation to the collection, use and disclosure of your personal data by us.</p>
        <p>We may revise this Notice from time to time without any prior notice. You may determine if any such revision has taken place by referring to the date on which this Notice was last updated. Your continued use of our services constitutes your acknowledgement and acceptance of such changes.</p>
        <h5>Effective date: 12/08/2021</h5>
        <h5>Last updated: 12/08/2021</h5>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-primary' onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
      </Modal>
    </>
  );
}

export default Footer;