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
        <h1 className="text-32 font-bold leading-100 tracking-2">{ABOUT}</h1>
        <p className="whitespace-pre text-14 font-light leading-180 tracking-2">
          {ABOUT_DESCRIPTION}
        </p>
      </div>
      <div>
        <SectionHeader
          as="h2"
          caption="Concept"
          className="mb-16"
          label="「乾杯から始める勉強会」"
          sizes="small"
        />
        <p className="mb-16 text-14 font-regular leading-180 tracking-2">
          「乾杯から始める勉強会」をコンセプトにカジュアルなイベントを行っております。
          <br />
          お酒やソフトドリンクを飲みながら発表を聞き、時には自ら発表し、JSer、フロントエンドエンジニアの仲間を作る場にしていきましょう！
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
        <p className="mb-16 text-14 font-regular leading-180 tracking-2">
          Meguro.esは、2ヶ月に1回程度の頻度で開催しています。
          <br />
          過去の開催履歴は、
          <a
            href="https://meguroes.connpass.com/event/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            開催履歴
          </a>
          をご覧ください。 また開催・募集のご案内は
          <a
            href="https://twitter.com/meguroes/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            公式X
          </a>
          にて行います。
        </p>
      </div>
      <hr className="border-white" />
      <WantedSponsor />
    </main>
  );
}
