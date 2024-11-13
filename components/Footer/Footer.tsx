import Link from "next/link";
import LinkButton from "../LinkButton/LinkButton";
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
        <div className="flex justify-center items-center content-center w-full gap-4 mb-12 mt-5">
          <InputField
            fieldID="join_now"
            placeholder="Email address"
            validatingText="We're sending you to our Secure Client Area..."
            errorText="Please, use a valid email address."
          />
          <LinkButton
            href="https://secure.blackbull.com/auth/register-live"
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
      <section className="bg-black-default container mx-auto flex py-8">
        <div className="flex flex-col w-1/3 gap-y-8 pr-16">
          <div>
            <Typography variant="h5" color="text-white">
              <span className="uppercase">Find us on</span>
            </Typography>
            <ul className="flex gap-2 mt-2">
              <li>
                <Link href="https://www.facebook.com/blackbullmarkets/">
                  <Image
                    src="/social_icons/fb.svg"
                    width={30}
                    height={30}
                    alt="BlackBull in facebook.com"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://nz.linkedin.com/company/blackbull-group-limited">
                  <Image
                    src="/social_icons/link.svg"
                    width={30}
                    height={30}
                    alt="BlackBull in facebook.com"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/blackbull_markets">
                  <Image
                    src="/social_icons/insta.svg"
                    width={30}
                    height={30}
                    alt="BlackBull in facebook.com"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/blackbullforex?lang=en">
                  <Image
                    src="/social_icons/x.svg"
                    width={30}
                    height={30}
                    alt="BlackBull in facebook.com"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://api.whatsapp.com/send/?phone=642102886398">
                  <Image
                    src="/social_icons/wa.svg"
                    width={30}
                    height={30}
                    alt="BlackBull in facebook.com"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.tradingview.com/broker/BlackBull_Markets/">
                  <Image
                    src="/social_icons/tw.svg"
                    width={30}
                    height={30}
                    alt="BlackBull in facebook.com"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Typography variant="h5" color="text-white">
              <span className="uppercase">MX Phone</span>
            </Typography>
            <Typography variant="body" color="text-white">
              +52 338 526 2705
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="text-white">
              <span className="uppercase">NZ Phone</span>
            </Typography>
            <Typography variant="body" color="text-white">
              +64 9 558 5142
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="text-white">
              <span className="uppercase">Email</span>
            </Typography>
            <Typography variant="body" color="text-white">
              support@blackbull.com
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="text-white">
              <span className="uppercase">Head Office</span>
            </Typography>
            <Typography variant="body" color="text-white">
              Level 20, HSBC Tower, 188 Quay Street, Auckland 1010, New Zealand
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-4 w-2/3 gap-y-8 gap-x-16">
          <div>
            <Typography variant="h4" color="text-white">
              Learn
            </Typography>
            <ul className="text-white mt-6">
              <li>
                <Link href="/forex">Forex</Link>
              </li>
              <li>
                <Link href="/forex">Commodities</Link>
              </li>
              <li>
                <Link href="/crypto">Crypto</Link>
              </li>
              <li>
                <Link href="/stocks">Stocks</Link>
              </li>
              <li>
                <Link href="/platforms">Platforms</Link>
              </li>
            </ul>
          </div>
          <div>
            <Typography variant="h4" color="text-white">
              Markets
            </Typography>
            <ul className="text-white mt-6">
              <li>
                <Link href="https://blackbull.com/en/markets-overview/">
                  Markets Overview
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/trading/instruments/forex/">
                  Forex
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/trading/instruments/equities/">
                  Shares
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/trading/instruments/commodities/">
                  Commodities
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/trading/instruments/futures/">
                  Futures
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/trading/instruments/indices/">
                  Indices
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Typography variant="h4" color="text-white">
              Platforms
            </Typography>
            <ul className="text-white mt-6">
              <li>
                <Link href="https://blackbull.com/en/platforms/tradingview/">
                  TradingView
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/platforms/ctrader/">
                  cTrader
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/platforms/metatrader-5/">
                  MetaTrader 5
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/platforms/metatrader-4/">
                  MetaTrader 4
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/platforms/webtrader/">
                  MetaTrader Web Trader
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/platforms/blackbull-copytrader/">
                  BlackBull CopyTrader
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/platforms/blackbull-invest/">
                  BlackBull Invest
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/platforms/trading-tools/">
                  Trading Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Typography variant="h4" color="text-white">
              About
            </Typography>
            <ul className="text-white mt-6">
              <li>
                <Link href="https://blackbull.com/en/our-company/">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/our-company/account-comparison/">
                  Account Comparison
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/our-company/company-news/">
                  Company News
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/our-company/compliance/">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/our-company/careers/">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Typography variant="h4" color="text-white">
              Legal
            </Typography>
            <ul className="text-white mt-6">
              <li>
                <Link href="https://blackbull.com/en/legal/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/legal/">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/legal/">Legal</Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/our-company/compliance/">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="https://blackbull.com/en/legal/disputes-resolution/">
                  Disputes Resolution
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white text-center py-8">
        <div className="container mx-auto flex items-center gap-6">
          <Image
            src="/images/starship.png"
            width={142}
            height={81}
            alt="Starship Major Partner"
          />
          <Typography variant="body" color="text-black-default">
            BlackBull Markets is proud to be a Major Partner of Starship
            Foundation supporting the vital work of Starship, New Zealand’s
            national children’s hospital.
          </Typography>
        </div>
      </section>
      <section className="container mx-auto py-12">
        <Typography variant="caption" color="text-white">
          BlackBull Markets and its associated entities have access to provide
          over 26000 tradable instruments to clients across all our Trading
          Platforms.
        </Typography>
        <Typography variant="caption" color="text-white">
          Black Bull Group Limited (trading name: BlackBull Markets) is a
          company registered and incorporated in New Zealand (Company Number
          5463921, NZBN 9429041417799) located at Level 20, 188 Quay St Auckland
          1010. Black Bull Group Limited is a registered Financial Services
          Provider (FSP403326). BBG Limited (trading name: BlackBull Markets) is
          limited liability company incorporated and registered under the laws
          of Seychelles, with company number 857010-1 and a registered address
          at JUC Building, Office F7B, Providence Zone 18, Mahe, Seychelles.
          BlackBull Markets’ head office is in Auckland, New Zealand. The
          Company is authorised and regulated by the Financial Services
          Authority in Seychelles (“FSA”) under license number SD045 for the
          provision of the investment services. BlackBull Group UK Limited is
          registered in the United Kingdom, Company Number – 9556804. Services
          provided by: BlackBull Group UK Limited (Company Number – 9556804)
          Address – 6 Thornes Office Park Monckton Road, West Yorkshire,
          England, WF2 7AN.
        </Typography>
        <Typography variant="caption" color="text-white">
          Black Bull Trade Limited is a New Zealand limited liability company
          incorporated and registered under the laws of New Zealand, with NZBN
          9429049891041 and registered address Floor 20, 188 Quay Street,
          Auckland Central, Auckland 1010, New Zealand. Black Bull Trade is
          registered FSP1002113. Risk Warning: Trading foreign exchange on
          margin carries a high level of risk and may not be suitable for all
          investors. The high degree of leverage can work against you as well as
          for you. Before deciding to trade foreign exchange, you should
          carefully consider your investment objectives, level of experience,
          and risk appetite. The possibility exists that you could sustain a
          loss of some or all of your initial investment and, therefore, you
          should not invest money you cannot afford to lose. You should make
          yourself aware of all the risks associated with foreign exchange
          trading and seek advice from an independent financial advisor if you
          have any questions or concerns as to how a loss would affect your
          lifestyle. BlackBull Markets does not accept client applications from
          Canada and the United States. This offer of services is also not
          intended for residents of the European Union, the United Kingdom nor
          any non-resident of New Zealand. The domain blackbull.com is
          registered under our company, Black Bull Global Limited. Black Bull
          Group Limited is wholly owned by Black Bull Global Limited. Copyright
          © 2024 Black Bull Group Limited. All Rights Reserved.
        </Typography>
      </section>
    </footer>
  );
}
