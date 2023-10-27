import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";
import Link from "next/link";

export default function TermsConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Book Bridge Studio</title>
      </Head>
      <Header />
      <section className="py-5 container">
        <h1 className="heading-1 text-center">Terms & Conditions</h1>
        <p className="mt-4">
          Welcome to the official corporate website of Book Bridge Studio (the
          &Prime;Site&Prime;). This Site is owned by Book Bridge Studio, and we
          appreciate your visit. The purpose of this section is to outline the
          terms and conditions (the &Prime;Terms&Prime;) that govern your access
          to and use of our Site. By accessing and using this Site, it is
          assumed that you understand and agree to be bound by these Terms. The
          following points are provided to enhance your understanding of the
          legal framework within which we operate:
        </p>
        <p>
          Ownership All the content displayed on this site is either owned by us
          or used with the owner&apos;s consent. While we encourage you to
          explore our Site and print copies of material for your personal,
          non-commercial use, any other form of copying is strictly prohibited,
          and all rights are reserved.
        </p>
        <p>
          No Warranty We provide this Site &Prime;as is.&Prime; Although we take
          care to ensure the accuracy and completeness of the materials
          presented, we cannot guarantee the following:
        </p>
        <ul>
          <li>
            Compatibility of downloaded material or software with your equipment
            or freedom from viruses.
          </li>
          <li>Accuracy or completeness of all materials.</li>
        </ul>
        <p>
          Limitation of Liability To the fullest extent permitted by law, we
          exclude all liability for any loss or damage (including direct,
          indirect, economic, or consequential loss or damage) incurred by you
          as a result of visiting or using this Site, accessing or downloading
          materials from it, or your inability to use this Site, including any
          errors in its provision or any computer viruses transmitted through
          this Site. This applies regardless of whether such loss or damage
          arises from our negligence or otherwise, and even if we are explicitly
          informed of the possibility of such loss or damage.
        </p>
        <p>
          Refund Policy At Book Bridge Studio, we offer a straightforward refund
          policy to our customers, subject to certain conditions:
        </p>
        <p>
          If you decide to cancel your order and discontinue our services before
          the project has commenced, you are eligible for a complete refund of
          100% of the amount paid, excluding transaction charges.
        </p>
        <p>
          Should you choose to discontinue our services while the project is
          still active, we will refund you the remaining balance of your order.
          However, any work already completed for your project will be retained,
          and the corresponding amount will not be refunded. It is important to
          note that no refund will be issued for a &Prime;change of mind&Prime;
          after the project work has commenced.
        </p>
        <p>
          Any project, regardless of its status (active, on hold, in-progress,
          or completed), is ineligible for a partial or full refund if the
          payment for that project was made 90 days ago or more.
        </p>
        <p>
          If you have specific concerns and require a complete refund, please
          submit a refund request, and our team will make a decision
          accordingly.
        </p>
        <p>
          Links to Third-Party Sites Links to third-party websites on this Site
          are provided solely for your convenience. By using these links, you
          will leave our Site. We have not reviewed all of these third-party
          websites and do not control or take responsibility for their content.
          Consequently, we do not endorse or make any representations about
          these websites or the materials found there, nor do we guarantee any
          results obtained from using them. Should you choose to access any of
          the third-party websites linked to our Site, you do so at your own
          risk.
        </p>
        <p>
          Links to Our Site If you wish to create a link to our website, you may
          only do so under the following conditions:
        </p>
        <ul>
          <li>
            You may link to the home page of our Site without replicating its
            content.
          </li>
          <li>
            Our images must not be removed, distorted, or altered in size or
            appearance.
          </li>
          <li>
            You must not create a frame or any other browser or border
            environment around our Site.
          </li>
          <li>
            You must not imply that we endorse any products or services other
            than our own.
          </li>
          <li>
            You must not misrepresent your relationship with us or provide false
            information about us.
          </li>
          <li>
            You must obtain written permission from us to use any trademarks
            displayed on our Site.
          </li>
          <li>
            The website from which you link to ours must be owned by you and
            comply with all applicable laws and regulations, ensuring that its
            content is neither distasteful, offensive, nor controversial, and
            that it does not infringe upon any intellectual property or other
            rights of any other person.
          </li>
          <li>
            Other Legal Notices Specific areas of this Site may contain
            additional legal notices related to your use of those areas.
          </li>
          <li>
            Changes to This Legal Notice We reserve the right to amend this
            legal notice periodically.
          </li>
        </ul>
        <p>
          Privacy Policy It is crucial that you understand how we utilize the
          information we collect about you. For more information on user
          privacy, security, and how Book Bridge Studio handles user-provided
          information, please visit our&nbsp;
          <Link href={`/privacy-policy`}>Privacy Policy</Link> page.
        </p>
      </section>
      <Footer />
    </>
  );
}
