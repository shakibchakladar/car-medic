const Banner = () => {
  return (
    <div className="carousel w-full">
      {banners.map((banner,index) => (
        <div key={index} id="slide1" className="carousel-item relative w-full h-screen ">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
const banners = [
  {
    title: "Best servicess ever",
    description: "Our service is world class",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Best servicess ever2",
    description: "Our service is world class",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Best servicess ever3",
    description: "Our service is world class",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Best servicess ever4",
    description: "Our service is world class",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
