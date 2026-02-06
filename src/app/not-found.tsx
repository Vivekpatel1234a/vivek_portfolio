export const runtime = "edge";

import './not-found.css'

export default function NotFound() {
  return (
    <>
      <title>404: This page could not be found.</title>
      <div className="error-container">
        <div>
          <h1 className="next-error-h1">
            404
          </h1>
          <div className="error-desc">
            <h2>This page could not be found.</h2>
          </div>
        </div>
      </div>
    </>
  );
}
