/* eslint-disable @next/next/no-title-in-document-head */
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Book Bridge Studio</title>
      </Head>
      <Header />
      <section className="py-5 container">
        <h1 className="heading-1 text-center">Privacy-Policy</h1>
        <p className="mt-4">
          This website is hosted by Book Bridge Studio, a company dedicated to
          safeguarding the privacy of its clients. The following statement
          provides a summary of how Book Bridge Studio collects and utilizes
          information from clients and visitors to this website.
        </p>
        <h4>Data Policy at Book Bridge Studio</h4>
        <p>
          Our data policy outlines the types of information collected by Book
          Bridge Studio and how this information is utilized to enhance the user
          experience and provide superior services to our clients.
        </p>
        <h4>Information We Collect:</h4>
        <p>
          At Book Bridge Studio, we only collect essential information required
          for project development and implementation. This includes the
          client&nbsp;s name, email address, project requirements details, IP
          address, location, and contact number.
        </p>
        <h4>Use of Collected Information:</h4>
        <p>
          The information we collect is strictly used for communication,
          interaction, and improving the user experience for our clients based
          on their project requirements.
        </p>
        <h4>Sharing of Collected Information:</h4>
        <p>
          The information is shared among employees solely for the purpose of
          project development. However, we utilize the collected information as
          a reference only after receiving written or virtual confirmation and
          approval from the respective client.
        </p>
        <p>
          We never share or sell our client&nbsp;s information collected for
          project development purposes.
        </p>
        <h4>Management and Deletion of Collected Information:</h4>
        <p>
          Our data team manages the collected information using our in-house
          secure CRM system. Clients have the discretion to change, modify, or
          delete their data with the assistance of our help desk.
        </p>
        <h4>Responses to Legal Requests and Prevention of Harm:</h4>
        <p>
          The collected information is also used for account verification and
          prevention of spam or other malicious activities to ensure the
          integrity, safety, and security of our clients. In compliance with
          legal requests from law enforcement agencies or departments, we may
          share the collected information.
        </p>
        <h4>Use, Operation, and Transfer of Collected Data:</h4>
        <p>
          The use, operation, and transfer of collected data are strictly
          limited to our company for project development purposes. Client data
          is never shared outside the company.
        </p>
        <h4>Notification of Policy Updates or Changes:</h4>
        <p>
          In the event of significant changes or updates to our policies, we
          will inform clients via email or through notifications on our website.
        </p>
        <h4>Terms and Conditions:</h4>
        <p>
          For further details regarding the use, disclaimers, and limitations of
          liability governing the use of our website, please refer to our Terms
          and Conditions section.
        </p>
        <p>
          Contact Book Bridge Studio for Queries: If you have any inquiries,
          please email us at info@bookbridgestudio.com
        </p>
      </section>
      <Footer />
    </>
  );
}
