import StepItem from "../../molecules/StepItem";

const items: {
  icon: "step1" | "step2" | "step3";
  title: string;
  desc: [string, string];
}[] = [
  {
    icon: "step1",
    title: "1. Start",
    desc: ["Pilih salah satu game", "yang ingin kamu top up"],
  },
  {
    icon: "step2",
    title: "2. Fill Up",
    desc: ["Top up sesuai dengan", "nominal yang sudah tersedia"],
  },
  {
    icon: "step3",
    title: "3. Be a Winner",
    desc: ["Siap digunakan untuk", "improve permainan kamu"],
  },
];

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          {items.map((item) => (
            <div className="col-lg-4">
              <StepItem icon={item.icon} title={item.title} desc={item.desc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
