import PopularGalleries from "./components/PopularGalleries/PopularGalleries";
export default function NotFound() {
  return (
    <div className="mx-30 text-center">
      <h1 className="text-7xl my-10">Not Found.</h1>
      <p className="mb-10">
        Uh oh! Looks like you've gotten lost. No worries. Get back on track by
        visiting one of the galleries below.
      </p>
      <div className="container mx-auto lg:px-32 px-10 text-center">
        <PopularGalleries />
      </div>
    </div>
  );
}
