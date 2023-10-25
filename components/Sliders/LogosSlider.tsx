import Image from 'react-bootstrap/Image';
import Slider from "react-slick";
function LogosSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <>
            <ul className="top-slider">
                <Slider {...settings}>
                    <li>
                        <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698045636/Defiscoquins/book-bridge/shapeicon1_eyxsh0.webp" alt="" />
                    </li>
                    <li>
                        <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698045637/Defiscoquins/book-bridge/shapeicon2_ucaosz.webp" alt="" />
                    </li>
                    <li>
                        <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698045636/Defiscoquins/book-bridge/shapeicon3_kwqaqq.webp" alt="" />
                    </li>
                    <li>
                        <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698045638/Defiscoquins/book-bridge/shapeicon4_pzccf3.webp" alt="" />
                    </li>
                    <li>
                        <Image src="https://res.cloudinary.com/dxabcda5t/image/upload/v1698045636/Defiscoquins/book-bridge/shapeicon3_kwqaqq.webp" alt="" />
                    </li>
                </Slider>
            </ul>
        </>
    );
}

export default LogosSlider;