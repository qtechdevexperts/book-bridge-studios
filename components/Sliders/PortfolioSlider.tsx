import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Slider from "react-slick";
function PortfolioSlider() {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        variableWidth: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <div className="portfolio-slider">
                <Slider {...settings}>
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052757/Defiscoquins/book-bridge/portfolio/01_bhxwdz.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052758/Defiscoquins/book-bridge/portfolio/02_bwozsq.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052759/Defiscoquins/book-bridge/portfolio/03_npjvbj.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052778/Defiscoquins/book-bridge/portfolio/04_izaerr.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052981/Defiscoquins/book-bridge/portfolio/05_aweoep.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052981/Defiscoquins/book-bridge/portfolio/06_yzzecs.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052982/Defiscoquins/book-bridge/portfolio/07_zmocdt.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052982/Defiscoquins/book-bridge/portfolio/08_gpoaor.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052984/Defiscoquins/book-bridge/portfolio/09_wdhttp.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052984/Defiscoquins/book-bridge/portfolio/10_llrgvb.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052985/Defiscoquins/book-bridge/portfolio/11_gkk28c.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052985/Defiscoquins/book-bridge/portfolio/12_os8jt4.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052986/Defiscoquins/book-bridge/portfolio/13_z75aax.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052987/Defiscoquins/book-bridge/portfolio/14_zqtl4c.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052987/Defiscoquins/book-bridge/portfolio/15_voxajj.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052989/Defiscoquins/book-bridge/portfolio/16_zdhs13.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052990/Defiscoquins/book-bridge/portfolio/17_nero9a.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052989/Defiscoquins/book-bridge/portfolio/18_dzeokh.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052990/Defiscoquins/book-bridge/portfolio/19_jzzqya.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052990/Defiscoquins/book-bridge/portfolio/20_damclh.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052992/Defiscoquins/book-bridge/portfolio/21_urqoif.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052992/Defiscoquins/book-bridge/portfolio/22_oxbdwg.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052993/Defiscoquins/book-bridge/portfolio/23_dmb0ma.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052993/Defiscoquins/book-bridge/portfolio/24_huqxoz.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052994/Defiscoquins/book-bridge/portfolio/25_e5j1qm.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052997/Defiscoquins/book-bridge/portfolio/26_kwgkkr.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052997/Defiscoquins/book-bridge/portfolio/27_jnjbvz.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052997/Defiscoquins/book-bridge/portfolio/28_d4pxny.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052999/Defiscoquins/book-bridge/portfolio/29_pydntd.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052998/Defiscoquins/book-bridge/portfolio/32_bvvpil.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052998/Defiscoquins/book-bridge/portfolio/33_mp4rjh.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052998/Defiscoquins/book-bridge/portfolio/34_jossut.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052998/Defiscoquins/book-bridge/portfolio/35_imz49r.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052999/Defiscoquins/book-bridge/portfolio/36_nskue9.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052728/Defiscoquins/book-bridge/portfolio/37_cjknpb.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052728/Defiscoquins/book-bridge/portfolio/38_dafjrk.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052728/Defiscoquins/book-bridge/portfolio/39_jh9s6g.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052729/Defiscoquins/book-bridge/portfolio/40_kpvmop.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052729/Defiscoquins/book-bridge/portfolio/41_nzgdiw.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052729/Defiscoquins/book-bridge/portfolio/42_tfzwje.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052729/Defiscoquins/book-bridge/portfolio/43_w7nsim.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052730/Defiscoquins/book-bridge/portfolio/44_m5mubk.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052731/Defiscoquins/book-bridge/portfolio/48_onflj8.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052731/Defiscoquins/book-bridge/portfolio/49_eivsrs.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052732/Defiscoquins/book-bridge/portfolio/50_gguvb7.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052732/Defiscoquins/book-bridge/portfolio/51_fvdg8u.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052734/Defiscoquins/book-bridge/portfolio/52_p15e4j.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052734/Defiscoquins/book-bridge/portfolio/53_qrflxc.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052734/Defiscoquins/book-bridge/portfolio/54_fxungn.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052735/Defiscoquins/book-bridge/portfolio/55_rpuch4.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052736/Defiscoquins/book-bridge/portfolio/56_dkb6hq.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052737/Defiscoquins/book-bridge/portfolio/57_zavynu.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052737/Defiscoquins/book-bridge/portfolio/58_yhxwsi.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052738/Defiscoquins/book-bridge/portfolio/59_znzukv.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052738/Defiscoquins/book-bridge/portfolio/60_luipbw.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052739/Defiscoquins/book-bridge/portfolio/61_k1qmlo.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052739/Defiscoquins/book-bridge/portfolio/62_unfyec.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052740/Defiscoquins/book-bridge/portfolio/63_xkg6ia.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052741/Defiscoquins/book-bridge/portfolio/64_wlayzp.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052742/Defiscoquins/book-bridge/portfolio/65_amml4o.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052742/Defiscoquins/book-bridge/portfolio/66_wsfnbu.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052743/Defiscoquins/book-bridge/portfolio/67_n8aipv.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052744/Defiscoquins/book-bridge/portfolio/68_u0h3lh.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052745/Defiscoquins/book-bridge/portfolio/69_giqpbq.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052745/Defiscoquins/book-bridge/portfolio/70_yfwh1w.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052746/Defiscoquins/book-bridge/portfolio/71_mwfwle.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052747/Defiscoquins/book-bridge/portfolio/72_g9pzrg.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052747/Defiscoquins/book-bridge/portfolio/73_of3nuj.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052748/Defiscoquins/book-bridge/portfolio/74_ckqneo.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052749/Defiscoquins/book-bridge/portfolio/75_ymyezd.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052749/Defiscoquins/book-bridge/portfolio/76_gwvz7m.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052750/Defiscoquins/book-bridge/portfolio/77_w5vhrj.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052751/Defiscoquins/book-bridge/portfolio/78_venck6.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052752/Defiscoquins/book-bridge/portfolio/79_gzkg08.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052752/Defiscoquins/book-bridge/portfolio/80_uiv9vk.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052754/Defiscoquins/book-bridge/portfolio/81_tpmk1q.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052753/Defiscoquins/book-bridge/portfolio/82_eaypnj.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052754/Defiscoquins/book-bridge/portfolio/83_fbdixq.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052754/Defiscoquins/book-bridge/portfolio/84_xp6woc.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052755/Defiscoquins/book-bridge/portfolio/85_tn6ubj.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052756/Defiscoquins/book-bridge/portfolio/86_vb61m3.webp" className="img-fluid" alt="img" />
                    <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698052757/Defiscoquins/book-bridge/portfolio/88_lj9kxb.webp" className="img-fluid" alt="img" />
                </Slider>
            </div>
        </>
    );
}

export default PortfolioSlider;