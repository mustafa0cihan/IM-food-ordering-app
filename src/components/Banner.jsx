import Button from "./elements/Button";

export const Banner = () => {
  return (
    <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
      <div className="banner-deescription w-full md:w-1/2 p-3 ">
        <h2 className="mb-4 text-2xl font-bold text-white">
          World cuisine is as close as a call
        </h2>
        <div className="btn-container">
          <a
            href="/menu"
            className="text-yellow-400 font-bold text-decoration-line px-3"
          >
            <Button className="hover:bg-green-500">See Menu</Button>
          </a>
        </div>
      </div>
    </div>
  );
};
