import Head from "next/head";
import Image from 'react-bootstrap/Image';
import React from "react";
import Header from "@/components/Header/Header";
import { Button, Card, Col, FloatingLabel, Form, Nav, Row, Tab } from "react-bootstrap";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import TestimonialSlider from "@/components/Sliders/TestimonialSlider";
import BannerForm from "@/components/ContactForm/BannerForm";
import LogosSlider from "@/components/Sliders/LogosSlider";
import PortfolioSlider from "@/components/Sliders/PortfolioSlider";

export default function Home() {

  return (
    <>
      <Head>
        <title>Article Writing Services | Book Bridge Studio</title>
      </Head>
      <div>
        <Header />

        <section className="small-banner">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center mb-lg-0 mb-4">
                <h2 className="heading">Writing Services for Articles.</h2>
                <p className="">Whether a blog post, guest piece, or ad copy, the written content is frequently a company&apos;s first role to make an impression on a potential consumer.</p>
                <p className="">We write SEO-friendly articles that attract and retain readers. Use Book Bridge Studio article ghostwriting services as a stepping stone to a successful customer experience.</p>
                <div className="btngroup">
                  <Button variant="black" className="me-2">Get A Quote</Button>
                  <Button variant="outline">Get Started</Button>
                </div>
              </Col>
              <Col lg="6">
                <Card>
                  <Card.Body>
                    <div className="text-center">
                      <h4 className="mheading">Create account</h4>
                    </div>
                    <BannerForm />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </section>
        <section className="bottomSec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <LogosSlider />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className="heading">How Do We Distinguish Our Article Writing Services?</h2>
                <p>Book Bridge Studio is one of the world&apos;s largest and most seasoned content marketing companies. Our expert article writing service has been fine-tuned throughout time to meet better the evolving needs of our clients and the standards of search engine optimization (SEO) and digital marketing.</p>
                <p>Each high-quality post is crafted using the most up-to-date SEO practices and data-driven research to:</p>
                <ul>
                  <li>Boost your visibility in search engines.</li>
                  <li>Raise the profile of your company.</li>
                  <li>Encourage repeat visits from your site&apos;s visitors.</li>
                  <li>Find us some good leads.</li>
                  <li>Help with your online advertising efforts.</li>
                </ul>
                <p>Our writers can craft pieces consistent with your overall vision and message by mastering the subtleties of your brand&apos;s style requirements. The editorial staff at Book Bridge Studio encompasses highly qualified professionals with extensive experience in a wide range of fields.</p>
                <p>We can tailor our writing to whatever demographic you specify. The scope of any field, market, audience, or topic is within the grasp of our skilled authors.</p>
              </Col>
              <Col lg="6" className="text-lg-end d-lg-block d-none">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698067925/Defiscoquins/book-bridge/portfolio/article-img-1_prt9kp.webp" className="img-fluid" alt="img" />
              </Col>
            </Row>
          </div>
        </section>

        <section className="section-padding bg-grey">
          <div className="container">
            <div className="text-center mb-lg-4 mb-2">
              <h2 className="mheading">Book Bridge Studio&apos;s Method for Writing Effective Articles</h2>
              <p>Market studies and analyses of search engine rankings are major influences on our content development process.</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698068268/Defiscoquins/book-bridge/portfolio/icon-arti-2_pbg3zf.webp" className="img-fluid" alt="img" />
                    <p>You and a content marketing strategist work together to develop a precise plan for using content to achieve your unique business objectives. We&apos;ll need to conduct keyword research, talk with your team, and examine market trends to zero in on search queries that show strong user intent and are a good fit for your products and services.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698068266/Defiscoquins/book-bridge/portfolio/icon-arti-12_on0qep.webp" className="img-fluid" alt="img" />
                    <p>For each term, our in-house specialists draft a Search Performance Brief (SPB) that details relevant topics for discussion, related search phrases, optimum content lengths and headlines, and landing pages to connect to. Every opportunity we have, we tweak each article&apos;s SEO to boost its visibility in search engines and increase readership. Your expert writer will use SPBs to craft enchanting material for your target demographic.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698068265/Defiscoquins/book-bridge/portfolio/icon-arti-13_m5fnat.webp" className="img-fluid" alt="img" />
                    <p>Your expert writer will use SPBs as the framework to create engaging material tailored to your target demographic.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698068263/Defiscoquins/book-bridge/portfolio/icon-arti-14_s1zs52.webp" className="img-fluid" alt="img" />
                    <p>Professional article ghostwriter at Book Bridge Studio will interview Subject Matter Experts (SMEs) and do industry research to create material that is up to your brand&apos;s requirements.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698068263/Defiscoquins/book-bridge/portfolio/icon-arti-15_ag0ofv.webp" className="img-fluid" alt="img" />
                    <p>All of our work undergoes rigorous internal quality assurance testing, including review by numerous editors and project managers, to catch and correct any mistakes and to check for any plagiarism. Before reaching you, articles undergo extensive editing and proofreading.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698068269/Defiscoquins/book-bridge/portfolio/icon-arti-16_ytzltj.webp" className="img-fluid" alt="img" />
                    <p>Our staff will edit and rewrite content in response to client comments until it meets your standards. We won&apos;t release anything until you&apos;re 100% satisfied with it.</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-lg-4 mb-2">
              <h2 className="mheading">Our Article Writing Options</h2>
              <p>Online, you can publish your writing to a wide variety of audiences. Our professional article-writing service provides a wide range of tools for producing and disseminating high-quality articles:</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Blog Posts</h3>
                    <p>You need to publish new posts frequently to keep your blog&apos;s readers interested, engaged, and returning for more of the same high-quality content you&apos;ve come to expect from them. A devoted blog writer will work with you to learn about your brand&apos;s voice and values, your industry&apos;s top priorities, and the best practices for creating SEO content for your site to bolster your content marketing efforts.</p>
                  </div>
                  <a href="book-writing.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Guest Posts</h3>

                    <p>Users can access the Internet but may not always visit your website. You can reach people where they already are by publishing guest essays in authoritative blogs, magazines, and news outlets in your field. Creating unique material for various online venues, such as guest blogging, allows you to reach a wider audience and make yourself as an industry expert.</p>
                  </div>

                  <a href="proofreading.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Website Content</h3>
                    <p>Your website&apos;s content should function independently of your blog posts. Keeping user experience and search engine optimization in mind, your writer can develop engaging copy for your product landing pages, informative copy for your about and mission/values pages, and straightforward, businesslike material for your leadership pages.</p>
                  </div>
                  <a href="book-publishing/index.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>LinkedIn Articles</h3>
                    <p>Branded content isn&apos;t limited to your blog&apos;s confines. By publishing articles on LinkedIn, you can establish yourself as an industry expert and increase your company&apos;s credibility and visibility. Your ghostwriter may also be able to create material just for LinkedIn, allowing you to reach a professional audience with industry updates, thoughts, recommendations, and opinions.</p>
                  </div>
                  <a href="book-publishing/index.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Press Releases</h3>
                    <p>When major changes occur within a company, such as introducing a new product, appointing new leadership, or announcing a merger or acquisition, press releases become indispensable tools for the brand&apos;s internal and external communications. With the help of our content distribution services, our talented writers can have your press release sent via PR news-wire and other platforms.</p>
                  </div>
                  <a href="book-publishing/index.html" className="read-txt">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-lg-0 mb-3">
                <div className="ser-box">
                  <div>
                    <h3>Micro Content</h3>
                    <p>Writing for microcontent doesn&apos;t always include producing lengthy, in-depth pieces. Ad text and product descriptions are just two examples of the &qout;micro-content&qout; each expert editorial staff member can easily create. Posts generated by our social media management service are concise, engaging, and written in a professional tone, perfect for sharing on social media sites like Twitter and Facebook.</p>
                  </div>
                  <a href="book-publishing/index.html" className="read-txt">Read More</a>
                </div>
              </div>


            </div>
          </div>
        </section>
        <section className="section-padding">
          <div className="container">
            <Row>
              <Col lg="6" className="text-lg-end d-lg-block d-none">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698069099/Defiscoquins/book-bridge/portfolio/article-img-2_r96q4b.webp" className="img-fluid" alt="img" />
              </Col>
              <Col lg="6" className="align-self-center">
                <h2 className="heading">Custom ghostwriting and editing for Your Audience</h2>
                <p>To keep your intended readers interested, our staff meticulously creates each stage of the content creation process. Our production teams, project managers, and content marketing strategists begin with an in-depth examination of your business, market, rivals, and clients to formulate an action plan for:</p>
                <ul>
                  <li>Identify your most prospective leads and write digital pieces that resonate with them.</li>
                  <li>Take into account the intent of the searcher.</li>
                  <li>Get possible buyers into your sales pipeline.</li>
                  <li>Foster patronage of your company in the hopes of securing a sale at some point.</li>
                  <li>Help with your online advertising efforts.</li>
                </ul>
                <p>When writing for any audience, our expert writers take into account several criteria:</p>
              </Col>

            </Row>
          </div>
        </section>
        <section className="section-padding">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className="heading">Style and Tone</h2>
                <p>Book Bridge Studio can help whether you currently have a brand style guide or need assistance finding the proper voice for your business.</p>
                <p>Our blog writers may seamlessly include a variety of writing styles in their work. We can modify the tone and vocabulary of articles to appeal to specific subsets of our audience based on their demographics and the profiles of our ideal customers.
                  Book Bridge Studio can help whether you currently have a brand style guide or need assistance finding the proper voice for your business.
                  Our blog writers may seamlessly include a variety of writing styles in their work. We can modify the tone and vocabulary of articles to appeal to specific subsets of our audience based on their demographics and the profiles of our ideal customers.</p>

              </Col>
              <Col lg="6" className="text-lg-end d-lg-block d-none">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698069099/Defiscoquins/book-bridge/portfolio/article-img-3_irzptm.webp" className="img-fluid" alt="img" />
              </Col>
            </Row>
          </div>
        </section>
        <section className="section-padding">
          <div className="container">
            <Row>
              <Col lg="6" className="text-lg-end d-lg-block d-none">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698069097/Defiscoquins/book-bridge/portfolio/article-img-4_v69m0e.webp" className="img-fluid" alt="img" />
              </Col>
              <Col lg="6" className="align-self-center">
                <h2 className="heading">Choosing a Subject</h2>
                <p>To generate article ideas that will resonate with your readers, our content writers employ a wide range of tools and resources:</p>
                <ul>
                  <li>Studying the Market.</li>
                  <li>Taking a look at the competition.</li>
                  <li>The latest social media fads.</li>
                  <li>Latest updates in the news.</li>
                  <li>Problems that customers have.</li>
                  <li>Classical ideas or themes.</li>
                </ul>
                <p>We do extensive background research on every issue to ensure that the people most interested in our content read it.</p>
              </Col>

            </Row>
          </div>
        </section>
        <section className="section-padding">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className="heading">Goals of Content</h2>
                <p>Each blog post contributes to a comprehensive online advertising campaign. Therefore, your article writer will craft each piece of content with a specific goal.</p>
                <p>Use the guidance of our expert article writing service to focus your work. Each article is tailor-made to achieve a certain objective, such as raising your site&apos;s search engine rankings, attracting more visitors, spreading the word about some particularly useful material, introducing a new product or service, generating buzz on social media, and so on.</p>
                <p>Your content strategist will keep tabs on how well various blog posts and website pages are performing so that they may adjust your approach as needed. Each blog post&apos;s success in promoting your brand will be detailed during monthly reporting calls.</p>

              </Col>
              <Col lg="6" className="text-lg-end d-lg-block d-none">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698069101/Defiscoquins/book-bridge/portfolio/article-img-5_lku6yw.webp" className="img-fluid" alt="img" />
              </Col>
            </Row>
          </div>
        </section>

        <section className="cta-sec">
          <div className="container">
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className="mheading">Take your book to the next level with our help</h2>
                <p>We&apos;ll turn your thoughts into a carefully crafted and critically acclaimed book</p>
                <div className="btngroup">
                  <Button variant="black" className="me-2 mb-2" href="tel:1230004444">Call Us 123-000-4444</Button>
                  <Button variant="outline" className="me-2 mb-2">Live Chat</Button>
                  <Button variant="black" className="mb-2">Get A Quote</Button>
                </div>
              </Col>
              <Col lg="6" className="d-lg-block d-none">
                <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698045636/Defiscoquins/book-bridge/goodbad_mv0ous.webp" className="img-fluid" alt="img" />
              </Col>
            </Row>
          </div>
        </section>
        <section className="section-padding bg-grey">
          <div className="container">
            <div className="text-center mb-lg-4 mb-2">
              <h2 className="mheading">Should I Hire an Article Ghostwriter?</h2>
              <p>Of course, a content marketing agency isn&apos;t your only option for outsourcing article writing services. As far as your budget is concerned, you can either hire an in-house writer to do the job or outsource it to a freelancer.</p>
              <p>While there are certain drawbacks to using an SEO article writing service, the advantages greatly exceed them:</p>
              <h2 className="mheading">PROS</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698070123/Defiscoquins/book-bridge/icon-arti-1_ku7cjr.webp" className="img-fluid" alt="img" />
                    <p>Professional writers who are committed to your company and experts in their field.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698068268/Defiscoquins/book-bridge/portfolio/icon-arti-2_pbg3zf.webp" className="img-fluid" alt="img" />
                    <p>A comprehensive approach to content planning ensures all articles serve your business objectives.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698070121/Defiscoquins/book-bridge/icon-arti-3_ywvyec.webp" className="img-fluid" alt="img" />
                    <p>Thorough topic and audience research ensure that each post is relevant to your readers.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698070120/Defiscoquins/book-bridge/icon-arti-4_teoqyx.webp" className="img-fluid" alt="img" />
                    <p>Strict quality control procedures produce clear content that accurately represents your brand and message.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698070117/Defiscoquins/book-bridge/icon-arti-5_b94pib.webp" className="img-fluid" alt="img" />
                    <p>Agency writers have spent years working in several sectors, gaining great subject matter expertise.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698070117/Defiscoquins/book-bridge/icon-arti-6_xhu6fq.webp" className="img-fluid" alt="img" />
                    <p>Expert writers can provide article rewriting services to help transform existing site material into SEO-rich works that attract more organic traffic and improve search ranking.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698070132/Defiscoquins/book-bridge/icon-arti-7_mqonfs.webp" className="img-fluid" alt="img" />
                    <p>Aside from copywriting, full-service businesses include design, video, social media, site development, marketing strategy, and SEO assistance.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698070130/Defiscoquins/book-bridge/icon-arti-8_ixcwpu.webp" className="img-fluid" alt="img" />
                    <p>Content writing services are typically significantly less expensive than hiring an in-house editorial team.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center my-4">
              <h2 className="mheading">Cons</h2>
            </div>
            <div className="row mb-4">
             
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698070129/Defiscoquins/book-bridge/icon-arti-9_gxlvjs.webp" className="img-fluid" alt="img" />
                    <p>Working closely with your internal stakeholders is a benefit of in-house teams. We take pleasure in our response. Our strategists, project managers, and professional writers work with you as if they were an extension of your team.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698070127/Defiscoquins/book-bridge/icon-arti-10_oeesnq.webp" className="img-fluid" alt="img" />
                    <p>Although in-house teams are already well acquainted with your brand&apos;s target audience, messaging, and style requirements, agency writers take the time to become brand experts in their own right.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698070125/Defiscoquins/book-bridge/icon-arti-11_xtog11.webp" className="img-fluid" alt="img" />
                    <p>Using freelancers may be a more cost-effective choice. However, they may not understand your brand, audience, or industry well enough to produce content that matches your requirements regularly.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mb-lg-4 mb-2">
              <p>In most cases, the benefits of working with a content marketing agency far outweigh building a dedicated internal team or handing assignments to unvetted freelancers.</p>
              <p>Book Bridge Studio ’s article writing services deliver more than just quality content. Everything we produce is in support of a broader content marketing strategy. Our teams routinely measure and analyze article performance, and continually refine content to draw more traffic, increase search visibility, produce qualified leads and, ultimately, generate more revenue.</p>
              <p className="fw-medium">We’re helping our clients meet and exceed their commercial goals, one article at a time.</p>
            </div>
          </div>
        </section >

        <section className="section-padding bg-grey-grad">
          <div className="container">
            <div>
              <Row>
                <Col lg="6" className="mb-lg-0 mb-3 align-self-center pe-lg-4">
                  <h2 className="mheading">Send Us a Message</h2>
                  <p>Please fill out your details, and our team will contact you soon.</p>
                  <ContactForm />

                </Col>
                <Col lg="6" className="ps-lg-4 d-lg-block d-none">
                  <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698045637/Defiscoquins/book-bridge/rectangle-11-2_d4kmap.webp" className="img-fluid" alt="contactimg" />
                </Col>
              </Row>
            </div>

          </div>
        </section>

        <Footer />
      </div >
    </>
  );
}
