export default function Review() {
  return (
    <div className="container mx-auto px-10">
      <h1 className="pageH1">Review</h1>
      <p className="text-center mb-20">
        Thank you for considering a review of Covenant Wedding Photography! Your
        feedback is invaluable to us and plays a crucial role in helping other
        couples discover our work and grow our business. We truly appreciate you
        taking the time to share your experience—it means the world to us and
        helps us continue to deliver the quality and care that matters most.
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-20">
        <div className="text-center place-items-center">
          <img
            src="images/yelp-logo.png"
            alt="yelp logo"
            className="mb-10 dark:hidden h-40"
          />
          <img
            src="images/yelp-logo-light.png"
            alt="yelp logo"
            className="mb-10 hidden dark:block h-40"
          />
          <a
            className="px-8 py-3 text-xl text-white rounded-2xl bg-red-600 ring-2 ring-red-600 hover:bg-transparent hover:text-red-600 dark:hover:text-white transition-all"
            href="https://www.yelp.com/writeareview/biz/VMY9Ky8NoK1ZOHNpGWKyuw"
            target="_blank"
          >
            Review on Yelp
          </a>
        </div>
        <div className="text-center place-items-center">
          <img
            src="images/fb-logo.png"
            alt="Facebook logo"
            className="mb-10 h-40"
          />
          <a
            className="px-8 py-3 text-xl text-white rounded-2xl bg-blue-600 ring-2 ring-blue-600 hover:bg-transparent hover:text-blue-600 dark:hover:text-white transition-all"
            href="https://www.facebook.com/covenantlx/reviews"
            target="_blank"
          >
            Review on Facebook
          </a>
        </div>
        <div className="text-center place-items-center">
          <img
            src="images/google-logo.webp"
            alt="Google logo"
            className="mb-10 h-40"
          />
          <a
            className="px-8 py-3 text-xl text-white rounded-2xl bg-green-600 ring-2 ring-green-600 hover:bg-transparent hover:text-green-600 dark:hover:text-white transition-all"
            href="https://www.google.com/search?sca_esv=7670df6d756a93b6&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-ExpVAX6kOhts2Jefx4XUwOcA_XcKJnYkD22elTlbuwWs2l62mddh6vMuCP0jogiRLPYH1ZAaG4r-oy3oc_Rv8wfhNKKnwoz2kJWFNtNsGfvlWG3eb2wTUqNjN5Lkr5fKKdK3QaM%3D&q=Covenant+LX+Wedding+Photography+%26+Videography+Reviews&sa=X&ved=2ahUKEwiIgZaduPWRAxVlm2oFHXrkLfYQ0bkNegQIHhAD&biw=1209&bih=658&dpr=2.5"
            target="_blank"
          >
            Review on Google
          </a>
        </div>
      </div>
    </div>
  );
}
