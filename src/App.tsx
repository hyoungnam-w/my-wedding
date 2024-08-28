/* eslint-disable @typescript-eslint/no-explicit-any */
import { InView } from "react-intersection-observer";
import DSCF9139_2 from "./assets/DSCF9139_2.jpg";
import DSCF9343_3 from "./assets/DSCF9343_3.jpg";
import DSCF9254 from "./assets/DSCF9254.jpg";
import DSCF9332_1 from "./assets/DSCF9332_1.jpg";
import DSCF9377_2 from "./assets/DSCF9377_2.jpg";
import DSCF9322 from "./assets/DSCF9322.jpg";
import DSCF9486_1 from "./assets/DSCF9486_1.jpg";
import DSCF9575_1 from "./assets/DSCF9575_1.jpg";
import DSCF9617 from "./assets/DSCF9617.jpg";
import DSCF9697 from "./assets/DSCF9697.jpg";
import DSCF9783 from "./assets/DSCF9783.jpg";
import DSCF9921 from "./assets/DSCF9921.jpg";
import map from "./assets/map.png";
import flower from "./assets/flower.png";
import flower2 from "./assets/flower2.png";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { getInViewFadeInStyle } from "./utils";
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams] = useSearchParams();

  const hasRestaurantsParams = searchParams.get("re");
  const hasBankParams = searchParams.get("bk");

  return (
    <main className="container mx-auto border py-9 px-4 bg-stone-100 text-stone-500">
      <section>
        <div className="text-center">
          <div className="text-3xl flex gap-4 justify-center items-center text-stone-700">
            문희원 <img className="w-8 mb-2" src={flower} alt="flower" /> 김형남
          </div>
          <div className="text-lg mt-2 mb-4">2024년 09월 08일 일요일</div>
        </div>
        <img
          className="md:w-1/2 mx-auto rounded-xl"
          src={DSCF9343_3}
          alt="mainImage"
        />

        <InView threshold={0.1}>
          {({ inView, ref }: any) => {
            return (
              <div
                ref={ref}
                className={`text-md mt-6 flex flex-col items-center ml-4 ${getInViewFadeInStyle(
                  inView
                )}`}
              >
                <div>
                  김동일 · 조명희{" "}
                  <span className="text-stone-400 text-sm mx-4">의 차남</span>{" "}
                  형남
                </div>
                <div className="mt-1">
                  문승덕 · 조성희{" "}
                  <span className="text-stone-400 text-sm mx-4">의 장녀</span>{" "}
                  희원
                </div>
              </div>
            );
          }}
        </InView>

        <InView threshold={0.1}>
          {({ inView, ref }: any) => {
            return (
              <div className={getInViewFadeInStyle(inView)} ref={ref}>
                <p className="text-center text-2xl mt-8 mb-4">결혼합니다</p>

                <p className="text-center mb-10 leading-9">
                  저희 두 사람, 오랜 인연 끝에 <br /> 함께하는 길을 걷기로
                  했습니다. <br /> 서로를 아끼고 사랑하며, 가족의 축복 속에서
                  <br />
                  조용히 결혼식을 올리려 합니다. <br /> 언제나 함께해 주셔서
                  감사드리며, <br /> 앞으로도 따뜻한 마음으로 지켜봐 주시면
                  좋겠습니다
                </p>
              </div>
            );
          }}
        </InView>
      </section>

      <InView threshold={0.1}>
        {({ inView, ref }: any) => {
          return (
            <section className={getInViewFadeInStyle(inView)} ref={ref}>
              <div className="flex justify-center gap-3 mb-3">
                <div className="h-1.5 w-1.5 bg-stone-200 rotate-45 transform origin-bottom-left" />
                <div className="h-1.5 w-1.5 bg-stone-300 rotate-45 transform origin-bottom-left" />
                <div className="h-1.5 w-1.5 bg-stone-200 rotate-45 transform origin-bottom-left" />
              </div>
              <div className="text-center text-2xl mb-2">갤러리</div>

              <div className="grid grid-cols-3 gap-2">
                <PhotoProvider>
                  <PhotoView src={DSCF9139_2}>
                    <div className="relative col-span-2">
                      <img
                        className="absolute h-full rounded-md rounded-tl-2xl"
                        src={DSCF9139_2}
                        alt="pic1"
                      />
                    </div>
                  </PhotoView>

                  <PhotoView src={DSCF9377_2}>
                    <img
                      className="rounded-md rounded-tr-2xl rounded-bl-lg"
                      src={DSCF9377_2}
                      alt="pic2"
                    />
                  </PhotoView>
                  <PhotoView src={DSCF9254}>
                    <img className="rounded-md" src={DSCF9254} alt="pic3" />
                  </PhotoView>
                  <PhotoView src={DSCF9332_1}>
                    <div className="col-span-2 relative">
                      <img
                        className="absolute h-full object-cover rounded-md"
                        src={DSCF9332_1}
                        alt="pic4"
                      />
                    </div>
                  </PhotoView>
                  <PhotoView src={DSCF9322}>
                    <img className="rounded-md" src={DSCF9322} alt="pic5" />
                  </PhotoView>
                  <PhotoView src={DSCF9575_1}>
                    <div className="relative col-span-2 object-cover">
                      <img
                        className="absolute h-full rounded-md"
                        src={DSCF9575_1}
                        alt="pic6"
                      />
                    </div>
                  </PhotoView>

                  <PhotoView src={DSCF9617}>
                    <img className="rounded-md" src={DSCF9617} alt="pic7" />
                  </PhotoView>
                  <PhotoView src={DSCF9486_1}>
                    <div className="relative">
                      <img
                        className="rounded-md absolute h-full"
                        src={DSCF9486_1}
                        alt="pic8"
                      />
                    </div>
                  </PhotoView>
                  <PhotoView src={DSCF9783}>
                    <div className="relative">
                      <img
                        className="rounded-md absolute h-full"
                        src={DSCF9783}
                        alt="pic9"
                      />
                    </div>
                  </PhotoView>

                  <PhotoView src={DSCF9697}>
                    <div className="relative col-span-2">
                      <img
                        className="absolute h-full object-cover rounded-md rounded-bl-2xl"
                        src={DSCF9697}
                        alt="pic10"
                      />
                    </div>
                  </PhotoView>

                  <PhotoView src={DSCF9921}>
                    <img
                      className="rounded-md rounded-br-2xl"
                      src={DSCF9921}
                      alt="pic11"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </section>
          );
        }}
      </InView>
      {hasRestaurantsParams && (
        <InView threshold={0.1}>
          {({ inView, ref }: any) => {
            return (
              <section
                className={getInViewFadeInStyle(inView)}
                ref={ref}
                style={{ paddingTop: "24px", paddingBottom: "16px" }}
              >
                <div className="text-center mt-8 mb-4">
                  <span className="opacity-40 mb-1">Location</span>
                  <p className=" text-xl">피로연 장소</p>
                </div>
                <img
                  className="rounded-md rounded-br-2xl md:w-3/4 mx-auto"
                  src={map}
                  alt="restaurant"
                />
                <div className="flex flex-col gap-1 items-center mt-4">
                  <div>활짝핀메밀 본점</div>
                  <div>서울 종로구 자하문로 38</div>
                </div>
              </section>
            );
          }}
        </InView>
      )}

      {hasBankParams && (
        <InView threshold={0.1}>
          {({ inView, ref }: any) => {
            return (
              <section
                className={getInViewFadeInStyle(inView)}
                ref={ref}
                style={{ paddingTop: "12px", paddingBottom: "36px" }}
              >
                <div className="flex justify-center items-center mt-8 mb-4 gap-2">
                  <img className="w-5 h-5" src={flower2} alt="flower2" />
                  <p className="text-center text-xl">마음 전하실 곳</p>
                  <img className="w-5 h-5" src={flower2} alt="flower2" />
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <div>문승덕 </div>
                  <div>KB국민 096-24-0209-964</div>
                </div>
              </section>
            );
          }}
        </InView>
      )}
    </main>
  );
}

export default App;
