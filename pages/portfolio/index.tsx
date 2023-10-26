import Head from "next/head";
import Image from 'react-bootstrap/Image';
import React, { useState } from "react";
import Header from "@/components/Header/Header";
import { Button, Col, Modal } from "react-bootstrap";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import ModalForm from "@/components/ModalForm";
import LightGallery from "lightgallery/react";
import lgVideo from "lightgallery/plugins/video";
import 'react-image-gallery/styles/css/image-gallery.css';
import LogosSlider from "@/components/Sliders/LogosSlider";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | Book Bridge Studio</title>
      </Head>
      <div>
        <Header />

        <section className="small-banner">
          <div className="container">
            <Col lg="6" className="align-self-center mb-lg-0 mb-4">
              <span className="subheading">Our Work</span>
              <h2 className="heading">Portfolio</h2>
            </Col>
          </div>
        </section>

        <section className="bottomSec">
          <div className="container">
            <Col lg="6" className="align-self-center mb-lg-0 mb-4">
              <LogosSlider />
            </Col>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-lg-5 mb-3">
              <h2 className="heading">OUR PORTFOLIO</h2>
              <p className="">
                Experience our exceptional work firsthand. We&apos;re devoted to
                delivering unbeatable value and tailor-made ghostwriting
                services, ensuring your satisfaction is our top priority.
              </p>
            </div>
            <div className="portfolio-sec">
              <LightGallery
                download={false}
                speed={500}
                plugins={[lgVideo]}
              >
                <img alt= "img2"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052757/Defiscoquins/book-bridge/portfolio/01_bhxwdz.webp" />
                <img alt= "img3"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052758/Defiscoquins/book-bridge/portfolio/02_bwozsq.webp" />
                <img alt= "img4"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052778/Defiscoquins/book-bridge/portfolio/04_izaerr.webp" />
                <img alt= "img5"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052981/Defiscoquins/book-bridge/portfolio/05_aweoep.webp" />
                <img alt= "img6"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052981/Defiscoquins/book-bridge/portfolio/06_yzzecs.webp" />
                <img alt= "img7"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052982/Defiscoquins/book-bridge/portfolio/07_zmocdt.webp" />
                <img alt= "img8"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052982/Defiscoquins/book-bridge/portfolio/08_gpoaor.webp" />
                <img alt= "img9"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052984/Defiscoquins/book-bridge/portfolio/10_llrgvb.webp" />
                <img alt= "img11"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052985/Defiscoquins/book-bridge/portfolio/12_os8jt4.webp" />
                <img alt= "img12"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052986/Defiscoquins/book-bridge/portfolio/13_z75aax.webp" />
                <img alt= "img13"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052987/Defiscoquins/book-bridge/portfolio/14_zqtl4c.webp" />
                <img alt= "img14"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052987/Defiscoquins/book-bridge/portfolio/15_voxajj.webp" />
                <img alt= "img15"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052990/Defiscoquins/book-bridge/portfolio/17_nero9a.webp" />
                <img alt= "img16"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052989/Defiscoquins/book-bridge/portfolio/18_dzeokh.webp" />
                <img alt= "img17"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052990/Defiscoquins/book-bridge/portfolio/19_jzzqya.webp" />
                <img alt= "img18"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052990/Defiscoquins/book-bridge/portfolio/20_damclh.webp" />
                <img alt= "img19"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052992/Defiscoquins/book-bridge/portfolio/21_urqoif.webp" />
                <img alt= "img20"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052992/Defiscoquins/book-bridge/portfolio/22_oxbdwg.webp" />
                <img alt= "img21"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052993/Defiscoquins/book-bridge/portfolio/23_dmb0ma.webp" />
                <img alt= "img22"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052993/Defiscoquins/book-bridge/portfolio/24_huqxoz.webp" />
                <img alt= "img23"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052997/Defiscoquins/book-bridge/portfolio/26_kwgkkr.webp" />
                <img alt= "img24" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052997/Defiscoquins/book-bridge/portfolio/27_jnjbvz.webp" />
                <img alt= "img25" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052997/Defiscoquins/book-bridge/portfolio/28_d4pxny.webp" />
                <img alt = "img26" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052999/Defiscoquins/book-bridge/portfolio/29_pydntd.webp" />
                <img alt= "img27"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052998/Defiscoquins/book-bridge/portfolio/32_bvvpil.webp" />
                <img alt= "img28"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052998/Defiscoquins/book-bridge/portfolio/33_mp4rjh.webp" />
                <img alt= "img29"src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052998/Defiscoquins/book-bridge/portfolio/34_jossut.webp" />
                <img alt= "img30" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052998/Defiscoquins/book-bridge/portfolio/35_imz49r.webp" />,
                <img alt= "img31" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052999/Defiscoquins/book-bridge/portfolio/36_nskue9.webp" />,
                <img alt= "img32" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052728/Defiscoquins/book-bridge/portfolio/37_cjknpb.webp" />,
                <img alt= "img33" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052728/Defiscoquins/book-bridge/portfolio/38_dafjrk.webp" />,
                <img alt= "img34" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052728/Defiscoquins/book-bridge/portfolio/39_jh9s6g.webp" />,
                <img alt= "img35" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052729/Defiscoquins/book-bridge/portfolio/40_kpvmop.webp" />,
                <img alt= "img36" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052729/Defiscoquins/book-bridge/portfolio/41_nzgdiw.webp" />,
                <img alt= "img37" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052729/Defiscoquins/book-bridge/portfolio/42_tfzwje.webp" />,
                <img alt= "img38" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052729/Defiscoquins/book-bridge/portfolio/43_w7nsim.webp" />,
                <img alt= "img39" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052730/Defiscoquins/book-bridge/portfolio/44_m5mubk.webp" />,
                <img alt= "img40" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052731/Defiscoquins/book-bridge/portfolio/48_onflj8.webp" />,
                <img alt= "img41" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052731/Defiscoquins/book-bridge/portfolio/49_eivsrs.webp" />,
                <img alt= "img42" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052732/Defiscoquins/book-bridge/portfolio/50_gguvb7.webp" />,
                <img alt= "img43" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052732/Defiscoquins/book-bridge/portfolio/51_fvdg8u.webp" />,
                <img alt= "img44" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052734/Defiscoquins/book-bridge/portfolio/52_p15e4j.webp" />,
                <img alt= "img45" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052734/Defiscoquins/book-bridge/portfolio/53_qrflxc.webp" />,
                <img alt= "img46" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052734/Defiscoquins/book-bridge/portfolio/54_fxungn.webp" />,
                <img alt= "img47" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052735/Defiscoquins/book-bridge/portfolio/55_rpuch4.webp" />,
                <img alt= "img48" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052736/Defiscoquins/book-bridge/portfolio/56_dkb6hq.webp" />,
                <img alt= "img49" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052737/Defiscoquins/book-bridge/portfolio/57_zavynu.webp" />,
                <img alt= "img50" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052737/Defiscoquins/book-bridge/portfolio/58_yhxwsi.webp" />,
                <img alt= "img51" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052738/Defiscoquins/book-bridge/portfolio/59_znzukv.webp" />,
                <img alt= "img52" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052738/Defiscoquins/book-bridge/portfolio/60_luipbw.webp" />,
                <img alt= "img53" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052739/Defiscoquins/book-bridge/portfolio/61_k1qmlo.webp" />,
                <img alt= "img54" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052739/Defiscoquins/book-bridge/portfolio/62_unfyec.webp" />,
                <img alt= "img55" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052740/Defiscoquins/book-bridge/portfolio/63_xkg6ia.webp" />,
                <img alt= "img56" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052741/Defiscoquins/book-bridge/portfolio/64_wlayzp.webp" />,
                <img alt= "img57" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052742/Defiscoquins/book-bridge/portfolio/65_amml4o.webp" />,
                <img alt= "img58" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052742/Defiscoquins/book-bridge/portfolio/66_wsfnbu.webp" />,
                <img alt= "img59" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052743/Defiscoquins/book-bridge/portfolio/67_n8aipv.webp" />,
                <img alt= "img60" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052744/Defiscoquins/book-bridge/portfolio/68_u0h3lh.webp" />,
                <img alt= "img61" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052745/Defiscoquins/book-bridge/portfolio/69_giqpbq.webp" />,
                <img alt= "img63" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052745/Defiscoquins/book-bridge/portfolio/70_yfwh1w.webp" />,
                <img alt= "img64" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052746/Defiscoquins/book-bridge/portfolio/71_mwfwle.webp" />,
                <img alt= "img65" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052747/Defiscoquins/book-bridge/portfolio/72_g9pzrg.webp" />,
                <img alt= "img66" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052747/Defiscoquins/book-bridge/portfolio/73_of3nuj.webp" />,
                <img alt= "img67" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052748/Defiscoquins/book-bridge/portfolio/74_ckqneo.webp" />,
                <img alt= "img68" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052749/Defiscoquins/book-bridge/portfolio/75_ymyezd.webp" />,
                <img alt= "img69" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052749/Defiscoquins/book-bridge/portfolio/76_gwvz7m.webp" />,
                <img alt= "img70" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052750/Defiscoquins/book-bridge/portfolio/77_w5vhrj.webp" />,
                <img alt= "img71" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052751/Defiscoquins/book-bridge/portfolio/78_venck6.webp" />,
                <img alt= "img72" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052752/Defiscoquins/book-bridge/portfolio/79_gzkg08.webp" />,
                <img alt= "img73" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052752/Defiscoquins/book-bridge/portfolio/80_uiv9vk.webp" />,
                <img alt= "img74" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052754/Defiscoquins/book-bridge/portfolio/81_tpmk1q.webp" />,
                <img alt= "img75" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052753/Defiscoquins/book-bridge/portfolio/82_eaypnj.webp" />,
                <img alt= "img76" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052754/Defiscoquins/book-bridge/portfolio/83_fbdixq.webp" />,
                <img alt= "img77" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052754/Defiscoquins/book-bridge/portfolio/84_xp6woc.webp" />,
                <img alt= "img78" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052755/Defiscoquins/book-bridge/portfolio/85_tn6ubj.webp" />,
                <img alt= "img79" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052756/Defiscoquins/book-bridge/portfolio/86_vb61m3.webp" />,
                <img alt= "img80" src= "https://res.cloudinary.com/dxabcda5t/image/upload/v1698052757/Defiscoquins/book-bridge/portfolio/88_lj9kxb.webp" />,
                <img alt= "img81"src= "https://res.cloudinary.com/dxabcda5t/image/upload/q_10/v1698052989/Defiscoquins/book-bridge/portfolio/16_zdhs13.webp"/>
              </LightGallery>
            </div>
          </div>
        </section>

        <section className="cta-sec">
          <div className="container">
            <Col lg="6" className="align-self-center">
              <h2 className="mheading">Need To Do a Book Discussion with an Expert?</h2>
              <p>We want to earn your lifelong trust by the superior quality of our service.</p>
              <div className="btngroup">
                <Button variant="black" className="me-2 mb-2" href="tel:1230004444">Call Us 123-000-4444</Button>
                <Button variant="outline" className="me-2 mb-2">Live Chat</Button>
                <ModalForm />
              </div>
            </Col>
          </div>
        </section>

        <section className="section-padding bg-grey-grad">
          <div className="container">
            <Col lg="6" className="align-self-center pe-lg-4">
              <h2 className="mheading">Send Us a Message</h2>
              <p>Please fill out your details, and our team will contact you soon.</p>
              <ContactForm />
            </Col>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
