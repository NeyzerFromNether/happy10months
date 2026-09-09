import { useRef, useState } from "react";
import useReveal from "../hooks/useReveal";
import couplePlaceholder from "../../public/images/silhouette-couple.jpg?inline";

export default function PhotoSection() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [defaultPhotoMissing, setDefaultPhotoMissing] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const ref = useReveal<HTMLDivElement>();

  const onFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result as string);
    reader.readAsDataURL(file);
  };

  const showDefault = !photo && !defaultPhotoMissing;

  return (
    <section className="relative mx-auto max-w-4xl px-6 py-16" id="photo">
      <div ref={ref}>
        <div className="reveal rounded-[2rem] bg-white/70 p-6 shadow-xl shadow-pink-100 ring-1 ring-pink-100 backdrop-blur sm:p-10">
          <div className="flex flex-col items-center gap-8 sm:flex-row">
            {/* polaroid photo */}
            <div className="w-full max-w-sm -rotate-2">
              <div
                className="rounded-2xl bg-white p-4 pb-8 shadow-2xl shadow-pink-200 transition-transform hover:rotate-0"
                role="button"
                tabIndex={0}
                onClick={() => fileRef.current?.click()}
                onKeyDown={(e) => e.key === "Enter" && fileRef.current?.click()}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-pink-200 to-rose-100">
                  {photo ? (
                    <img
                      src={photo}
                      alt="мы с каришей"
                      className="h-full w-full object-cover"
                    />
                  ) : showDefault ? (
                    <img
                      src="./1.png"
                      alt="мы с каришей"
                      className="h-full w-full object-cover"
                      onError={() => setDefaultPhotoMissing(true)}
                    />
                  ) : (
                    <img
                      src={couplePlaceholder}
                      alt="заглушка вместо фото"
                      className="h-full w-full object-cover"
                    />
                  )}
                  {defaultPhotoMissing && !photo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-pink-400/20">
                      <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-rose-500 shadow">
                        📸 сюда вставлю нашу фотку
                      </span>
                    </div>
                  )}
                </div>
                <p className="mt-4 text-center font-hand text-2xl text-rose-500">
                  {photo || !defaultPhotoMissing ? "это мы" : "место под фото"}
                </p>
              </div>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) onFile(f);
                }}
              />
            </div>

            {/* text */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-display mb-3 text-3xl font-extrabold text-rose-600 sm:text-4xl">
                10 месяцев, а мне всё ещё <span className="heartbeat">💘</span>
              </h2>
              <p className="leading-relaxed text-rose-800/80">
                мы ещё не съехались, но ремонт у меня почти готов. а пока — вот моя
                квартира, пустая, зато вся наша на сегодняшний вечер
              </p>
              <p className="mt-3 font-hand text-2xl text-rose-500">
                скоро тут будет наш общий дом, кариша
              </p>

              {!photo && (
                <button
                  onClick={() => fileRef.current?.click()}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-rose-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-rose-200 transition hover:bg-rose-600 active:scale-95"
                >
                  + загрузить нашу фотку
                </button>
              )}
              {photo && (
                <button
                  onClick={() => setPhoto(null)}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-rose-100 px-5 py-2.5 text-sm font-bold text-rose-600 transition hover:bg-rose-200 active:scale-95"
                >
                  🔄 вернуть как было
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
