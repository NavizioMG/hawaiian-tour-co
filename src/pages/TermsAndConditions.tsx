import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const TermsAndConditions = () => {
  const [smsConsent, setSmsConsent] = useState(false);
  const { toast } = useToast();

  const handleConsentChange = (checked: boolean) => {
    setSmsConsent(checked);
    if (checked) {
      toast({
        title: "Consent Recorded",
        description: "Thank you for subscribing to our SMS notifications.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-sand-50">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-palm-100 mb-8">Terms and Conditions</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
            <section>
              <h2 className="text-2xl font-semibold text-palm-100">OVERVIEW</h2>
              <p>
                This website is operated by Four Winds Travel Group LLC. Throughout the site, the terms "we", "us" and "our" refer to Four Winds Travel Group. Four Winds Travel Group offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
              </p>
              <p>
                By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.
              </p>
              <p>
                Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.
              </p>
              <p>
                Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 1 - ONLINE TERMS</h2>
              <p>
                By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
              </p>
              <p>
                You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
              </p>
              <p>
                You must not transmit any worms or viruses or any code of a destructive nature.
              </p>
              <p>
                A breach or violation of any of the Terms will result in an immediate termination of your Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 2 - GENERAL CONDITIONS</h2>
              <p>
                We reserve the right to refuse service to anyone for any reason at any time.
              </p>
              <p>
                You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
              </p>
              <p>
                You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.
              </p>
              <p>
                The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h2>
              <p>
                We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.
              </p>
              <p>
                This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</h2>
              <p>
                Prices for our products are subject to change without notice.
              </p>
              <p>
                We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
              </p>
              <p>
                We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 5 - PRODUCTS OR SERVICES (if applicable)</h2>
              <p>
                Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.
              </p>
              <p>
                We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
              </p>
              <p>
                We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.
              </p>
              <p>
                We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</h2>
              <p>
                We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.
              </p>
              <p>
                You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 7 - OPTIONAL TOOLS</h2>
              <p>
                We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.
              </p>
              <p>
                You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.
              </p>
              <p>
                Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).
              </p>
              <p>
                We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 8 - THIRD-PARTY LINKS</h2>
              <p>
                Certain content, products and services available via our Service may include materials from third-parties.
              </p>
              <p>
                Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.
              </p>
              <p>
                We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</h2>
              <p>
                If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.
              </p>
              <p>
                We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.
              </p>
              <p>
                You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e‑mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 10 - PERSONAL INFORMATION</h2>
              <p>
                Your submission of personal information through the store is governed by our Privacy Policy.
              </p>
              <p>
                Click To view our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</h2>
              <p>
                Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).
              </p>
              <p>
                We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 12 - PROHIBITED USES</h2>
              <p>
                In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h2>
              <p>
                We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.
              </p>
              <p>
                We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.
              </p>
              <p>
                You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.
              </p>
              <p>
                You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.
              </p>
              <p>
                In no case shall Four Winds Travel Group, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 14 - INDEMNIFICATION</h2>
              <p>
                You agree to indemnify, defend and hold harmless Four Winds Travel Group and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 15 - SEVERABILITY</h2>
              <p>
                In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 16 - TERMINATION</h2>
              <p>
                The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.
              </p>
              <p>
                These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.
              </p>
              <p>
                If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 17 - ENTIRE AGREEMENT</h2>
              <p>
                The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.
              </p>
              <p>
                These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).
              </p>
              <p>
                Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 18 - GOVERNING LAW</h2>
              <p>
                These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the United States.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 19 - CHANGES TO TERMS OF SERVICE</h2>
              <p>
                You can review the most current version of the Terms of Service at any time at this page.
              </p>
              <p>
                We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SECTION 20 - CONTACT INFORMATION</h2>
              <p>
                Questions about the Terms of Service should be sent to us at rockymountainfunstickers@gmail.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">SMS/MMS Mobile Message Marketing Program Terms and Conditions</h2>
              <p>
                Four Winds Travel Group LLC (hereinafter, “We,” “Us,” “Our”) is offering a mobile messaging program (the “Program”), which you agree to use and participate in, subject to these Mobile Messaging Terms and Conditions (the “Agreement”). We may modify or cancel the Program or any of its features without notice. This Agreement is limited to the Program and is not intended to modify other Terms and Conditions or Privacy Policy that may govern the relationship between you and Us in other contexts. We may also modify this Agreement at any time and your continued use of the Program following the effective date of any such changes shall constitute your acceptance of such changes.
              </p>
              <p>
                The Program allows Users to receive SMS/MMS mobile messages by opting into the Program, such as through online or application-based subscription forms. Your consent to receive automated marketing text messages is not required as a condition of purchasing any goods or services. Regardless of the opt-in method you used to join the Program, you agree that this Agreement applies to your participation in the Program. If you have opted in, the Program provides updates, alerts, information, promotions, specials, and other marketing offers (e.g., product discounts) from Four Winds Travel Group LLC via text messages through your wireless provider to the mobile number you provided. SMS/MMS mobile messages may be sent using an automated telephone dialing system or other technology. Message frequency varies. You are responsible for all charges and fees associated with text messaging imposed by your wireless provider. Message and data rates may apply.
              </p>
              <p>
                If you do not wish to continue participating in the Program or no longer agree to this Agreement, you agree to reply STOP to any mobile message from Us in order to opt-out of the Program. You may receive an additional mobile message confirming your decision to opt-out. You understand and agree that the preceding options are the only reasonable methods of opting out. You also understand and agree that any other method of opting out, including, but not limited to, texting words other than those set forth above or verbally requesting one of our employees to remove you from our list, is not a reasonable means of opting out.
              </p>
              <p>
                For any questions please text "HELP" to the number you received the messages from. You can also contact us for more information. If you wish to opt-out please follow the procedures above.
              </p>
              <p>
                We may change any telephone number we use to operate the Program at any time and will notify you of these changes. You acknowledge that any messages, including any STOP or HELP requests, you send to a telephone number we have changed may not be received and we will not be responsible for honoring requests made in such messages.
              </p>
              <p>
                The wireless carriers supported by the Program are not liable for delayed or undelivered messages. You agree to provide us with a valid mobile number. You agree to maintain accurate, complete, and up-to-date information with us related to your receipt of messages, including, without limitation, notifying us immediately if you change your mobile number.
              </p>
              <p>
                You agree to indemnify, defend, and hold us harmless from any third-party claims, liability, damages, or costs arising from your use of the Program or from you providing us with a phone number that is not your own. If at any time you intend to stop using the mobile telephone number that has been used to subscribe to the Program, including canceling your service plan or selling or transferring the phone number to another party, you agree that you will complete the Opt-Out process set forth above prior to ending your use of the mobile telephone number. You understand and agree that your agreement to do so is a required part of these terms and conditions. You further agree that, if you change your telephone number without notifying Us of such change, you agree that you will be responsible for all costs (including attorneys’ fees) and liabilities incurred by Us, or any party that assists in the delivery of the SMS/MMS mobile messages, as a result of claims brought by individual(s) who are later assigned that mobile telephone number. This duty and agreement shall survive any cancellation or termination of your agreement to participate in any of our Programs.
              </p>
              <p>
                You agree that we will not be liable for failed, delayed, or misdirected delivery of any information sent through the Program, any errors in such information, and/or any action you may or may not take in reliance on the information or Service.
              </p>
              <p>
                You may not use or engage with the Platform if you are under thirteen (13) years of age. If you use or engage with the Platform and are between the ages of thirteen (13) and eighteen (18) years of age, you must have your parent’s or legal guardian’s permission to do so. By using or engaging with the Platform, you acknowledge and agree that you are not under the age of thirteen (13) years, are between the ages of thirteen (13) and eighteen (18), and have your parent’s or legal guardian’s permission to use or engage with the Platform, or are of adult age in your jurisdiction. By using or engaging with the Platform, you also acknowledge and agree that you are permitted by your jurisdiction’s Applicable Law to use and/or engage with the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-palm-100">Text Marketing and notifications:</h2>
              <p>
                By entering your phone number in the checkout and initializing a purchase, subscribing via our subscription form or a keyword, you agree that we may send you text notifications (for your order, including abandoned cart reminders) and text marketing offers. You acknowledge that consent is not a condition for any purchase.
              </p>
              <p>
                If you wish to unsubscribe from receiving text marketing messages and notifications reply with STOP to any mobile message sent from us or use the unsubscribe link we provided you within any of our messages. You understand and agree that alternative methods of opting out, such as using alternative words or requests will not be accounted as a reasonable means of opting out. Message and data rates may apply.
              </p>
              <p>
                For any questions please text HELP to the number you received the messages from. You can also contact us for more information. If you wish to opt out please follow the procedures above.”
              </p>
            </section>

           
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
