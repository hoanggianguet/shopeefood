const NotFound = () => {
  return (
    <div className="tw-w-screen tw-h-screen tw-bg-gradient-to-r tw-from-slate-200 tw-to-gray-200 dark:tw-from-gray-800 dark:tw-to-gray-900 tw-text-black dark:tw-text-white">
      <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-px-2">
        <div className="tw-text-center">
          <h1 className="tw-text-9xl font-bold">404</h1>
          <p className="tw-text-2xl tw-font-medium tw-mt-4">
            Oops! Page not found
          </p>
          <p className="tw-mt-4 tw-mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a
            href="/homepage"
            className="tw-px-6 tw-py-3 tw-bg-white tw-font-bold  tw-rounded-full hover:tw-bg-purple-100 tw-transition tw-duration-300 tw-ease-in-out dark:tw-bg-gray-700 dark:tw-hover:bg-gray-600 dark:tw-text-white"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
