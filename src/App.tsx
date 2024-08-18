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
import flower from "./assets/flower.png";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { getInViewFadeInStyle } from "./utils";

function App() {
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
          className="w-100 mx-auto rounded-xl"
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
                  <span className="text-stone-400 text-sm mx-4">의 아들</span>{" "}
                  형남
                </div>
                <div className="mt-1">
                  문승덕 · 조성희{" "}
                  <span className="text-stone-400 text-sm mx-4">
                    의 딸<span className="invisible">인</span>
                  </span>{" "}
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

                <p className="text-center mb-10">
                  저희 두 사람, 오랜 인연 끝에 함께하는 길을 걷기로 했습니다.{" "}
                  <br />
                  서로를 아끼고 사랑하며, 가족의 축복 속에서 조용히 결혼식을
                  올리려 합니다. 언제나 함께해 주셔서 감사드리며, 앞으로도
                  따뜻한 마음으로 지켜봐 주시면 좋겠습니다
                </p>
              </div>
            );
          }}
        </InView>
      </section>

      <InView threshold={0.1}>
        {({ inView, ref }: any) => {
          return (
            <section ref={ref} className={getInViewFadeInStyle(inView)}>
              <div className="flex justify-center gap-3 mb-3">
                <div className="h-1.5 w-1.5 bg-stone-200 rotate-45 transform origin-bottom-left" />
                <div className="h-1.5 w-1.5 bg-stone-300 rotate-45 transform origin-bottom-left" />
                <div className="h-1.5 w-1.5 bg-stone-200 rotate-45 transform origin-bottom-left" />
              </div>
              <div className="text-center text-2xl mb-2">갤러리</div>

              <div className="grid grid-cols-3 gap-2">
                <PhotoProvider>
                  <PhotoView src={DSCF9139_2}>
                    <img
                      className="col-span-2 h-full object-cover rounded-md rounded-tl-2xl"
                      src={DSCF9139_2}
                      alt="pic1"
                    />
                  </PhotoView>

                  <PhotoView src={DSCF9377_2}>
                    <img
                      className="rounded-md rounded-tr-2xl rounded-bl-lg"
                      src={DSCF9377_2}
                      alt="pic5"
                    />
                  </PhotoView>
                  <PhotoView src={DSCF9254}>
                    <img className="rounded-md" src={DSCF9254} alt="pic3" />
                  </PhotoView>
                  <PhotoView src={DSCF9332_1}>
                    <img
                      className="col-span-2 h-full object-cover rounded-md"
                      src={DSCF9332_1}
                      alt="pic4"
                    />
                  </PhotoView>
                  <PhotoView src={DSCF9322}>
                    <img className="rounded-md" src={DSCF9322} alt="pic6" />
                  </PhotoView>
                  <PhotoView src={DSCF9575_1}>
                    <img
                      className="col-span-2 h-full object-cover rounded-md"
                      src={DSCF9575_1}
                      alt="pic8"
                    />
                  </PhotoView>

                  <PhotoView src={DSCF9617}>
                    <img className="rounded-md" src={DSCF9617} alt="pic9" />
                  </PhotoView>
                  <PhotoView src={DSCF9486_1}>
                    <img
                      className="h-full rounded-md"
                      src={DSCF9486_1}
                      alt="pic7"
                    />
                  </PhotoView>
                  <PhotoView src={DSCF9783}>
                    <img
                      className="h-full rounded-md"
                      src={DSCF9783}
                      alt="pic11"
                    />
                  </PhotoView>

                  <PhotoView src={DSCF9697}>
                    <img
                      className="col-span-2 h-full object-cover rounded-md rounded-bl-2xl"
                      src={DSCF9697}
                      alt="pic10"
                    />
                  </PhotoView>

                  <PhotoView src={DSCF9921}>
                    <img
                      className="rounded-md rounded-br-2xl"
                      src={DSCF9921}
                      alt="pic12"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </section>
          );
        }}
      </InView>
    </main>
  );
}

export default App;
