import aboutImage from "../assets/images/about-image.png";

export const About = () => {
  return (
    <div className="bg-gray-50">
      <div className="p-24 grid grid-cols-2">
        <div>
          <h2 className="text-3xl font-medium">About Us</h2>
          <p className="text-lg">
            Restaurants sit at the heart of communities. It's our mission to
            strengthen their roots, deepen their connections, and increase the
            positive impact they have on people and society. Restaurants sit at
            the heart of communities. It's our mission to strengthen their
            roots, deepen their connections, and increase the positive impact
            they have on people and society. Restaurants sit at the heart of
            communities. It's our mission to strengthen their roots, deepen
            their connections, and increase the positive impact they have on
            people and society.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={aboutImage}
            alt=""
            className="w-[700px] h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
