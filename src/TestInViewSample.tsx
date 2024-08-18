import { InView } from "react-intersection-observer";

export default function TestInViewSample() {
  return (
    <>
      <InView>
        {({ inView, ref, entry }) => (
          <div
            className="border border-red-500"
            style={{ marginTop: "200px" }}
            ref={ref}
          >
            <h2>{`Header inside viewport ${inView}4.`}</h2>
          </div>
        )}
      </InView>
      <InView threshold={0.5}>
        {({ inView, ref, entry }) => {
          console.log("inView From22", inView);
          return (
            <div
              className={`transition-opacity duration-1000 ${
                inView ? "opacity-100" : "opacity-0"
              } border border-red-500`}
              style={{ paddingTop: "200px", paddingBottom: "200px" }}
              ref={ref}
            >
              <h2>{`Header inside viewport ${inView}.5`}</h2>
              {/* <h2 className="animate-fadeIn">{`Header inside viewport ${inView}.5`}</h2> */}
            </div>
          );
        }}
      </InView>
    </>
  );
}
