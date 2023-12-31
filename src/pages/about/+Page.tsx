import { Breadcrumb } from "~/components/Breadcrumb";
import { SectionHeader } from "~/components/SectionHeader";
import { WantedSponsor } from "~/components/WantedSponsor";
import { ABOUT, ABOUT_DESCRIPTION } from "~/libs/dictionary";

export function Page() {
  return (
    <main class="grid grid-cols-1 gap-120">
      <div class="grid grid-cols-1 gap-48">
        <Breadcrumb
          items={[
            {
              to: "/about",
              label: "Meguro.esとは",
            },
          ]}
        />
        <h1 className="leading-100 tracking-2 text-32 font-bold">{ABOUT}</h1>
        <p className="leading-180 tracking-2 whitespace-pre text-14 font-light">
          {ABOUT_DESCRIPTION}
        </p>
      </div>
      <div>
        <SectionHeader
          as="h2"
          caption="Concept"
          className="mb-16"
          label="「ECMAScriptについて自由に語りあう」"
          sizes="small"
        />
        <p className="font-regular leading-180 tracking-2 mb-16 whitespace-pre text-14">
          ECMAScript に関連した話題であれば、何でも発表できます。
          <br />
          仕様・言語レベルから、ライブラリの深掘り、あなたの現場で用いている開発テクニックなど様々な話題で議論を深め、開発者の仲間を作る場にしていきましょう！
        </p>
        <div className="flex">
          <img
            src="/image_meguroes1.png"
            alt=""
            height={360}
            width={632}
            className="mr-16 h-fit shrink-0 overflow-hidden rounded-24"
          />
          <img
            src="/image_meguroes2.png"
            alt=""
            height={360}
            width={632}
            className="shrink-0 overflow-hidden rounded-24"
          />
        </div>
      </div>
      <div>
        <SectionHeader
          as="h2"
          caption="Concept"
          className="mb-16"
          label="これまでの開催履歴"
          sizes="small"
        />
        <p className="font-regular leading-180 tracking-2 mb-16 text-14">
          過去の開催履歴は、開催履歴 を御覧ください。
          <br />
          開催の1ヶ月前に、募集のご案内を
          <a
            href="https://twitter.com/meguroes/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            公式X
          </a>
          と
          <a
            href="https://meguroes.connpass.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            公式connpass
          </a>
          にて行います。
          <br />
          通知を受け取れるよう、Xアカウントのフォローとconnpassのメンバー登録をお願いします。
        </p>
      </div>
      <hr className="border-white" />
      <WantedSponsor />
    </main>
  );
}
