import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import Typography from "../Typography/Typography";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black-default w-full">
      <section
        className="container mx-auto text-center pt-12 bg-gradient-to-r from-black-default via-transparent to-black-default"
        style={{
          background: "url(/images/footer_sky.png) top center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Typography color="text-white" variant="h2">
          Start demo trading today
        </Typography>
        <Typography color="text-white" variant="body-lg">
          in less than 5 minutes
        </Typography>
        <div className="flex justify-center items-center content-center w-full gap-4 mb-12">
          <InputField
            fieldID="join_now"
            placeholder="Email address"
            validatingText="We're sending you to our Secure Client Area..."
            errorText="Please, use a valid email address."
          />
          <Button
            id="join_now_button"
            label="Join Now"
            variant="success"
            size="lg"
            bold
          />
        </div>
        <Image
          src="/images/bb_f3_car.png"
          width={594}
          height={165}
          alt="BlackBull F3 Car"
          className="mx-auto -mb-16"
        />
      </section>
      <section
        className="text-center pt-24 pb-6"
        style={{
          background: "url(/images/footer_floor.png) center bottom repeat",
          backgroundSize: "cover",
        }}
      >
        <Typography variant="subheading-md" color="text-white">
          AWARDED BY THE BEST
        </Typography>
        <div
          id="footer_awards"
          className="mx-auto flex justify-center gap-4 my-6"
        >
          <Image
            src="/award_logos/deloitte_fast_500_2018.svg"
            width="200"
            height="63"
            alt="Technology Fast 500 2019 APAC Winner Deloitte"
          />
          <Image
            src="/award_logos/deloitte_fast_50.svg"
            width="200"
            height="63"
            alt="Deloitte Fast 50"
          />
          <Image
            src="/award_logos/forex_expo_best_global_broker_2022.svg"
            width="200"
            height="63"
            alt="FOREX EXPO Best Global FX Broker 2022"
          />
          <Image
            src="/award_logos/forex_brokers_best_in_class_2024.svg"
            width="200"
            height="63"
            alt="ForexBrokers.com Best in Class Offering of Investments 2023"
          />
          <Image
            src="/award_logos/compare_best_nz_broker.svg"
            width="200"
            height="63"
            alt="Compare Forex Brokers Best New Zealand Forex Broker 2023"
          />
          <Image
            src="/award_logos/forex_expo_2025_speed.svg"
            width="200"
            height="63"
            alt="FOREX EXPO Dubai Fastest Execution Speed 2024"
          />
        </div>
      </section>
      <section className="bg-black-default container mx-auto">
        <div className="flex flex-col gap-3">
          <Typography variant="h5" color="text-white">
            <span className="uppercase">Find us on</span>
          </Typography>
          <Typography variant="body-lg" color="text-white">
            <strong>+52 338 526 2705</strong>
          </Typography>
          <Typography variant="h5" color="text-white">
            <span className="uppercase">NZ Phone</span>
          </Typography>
          <Typography variant="body-lg" color="text-white">
            <strong>+64 9 558 5142</strong>
          </Typography>
          <Typography variant="h5" color="text-white">
            <span className="uppercase">Email</span>
          </Typography>
          <Typography variant="body-lg" color="text-white">
            <strong>support@blackbull.com</strong>
          </Typography>
          <Typography variant="h5" color="text-white">
            <span className="uppercase">Head Office</span>
          </Typography>
          <Typography variant="body-lg" color="text-white">
            <strong>
              Level 20, HSBC Tower, 188 Quay Street, Auckland 1010, New Zealand
            </strong>
          </Typography>
        </div>
      </section>
    </footer>
  );
}
