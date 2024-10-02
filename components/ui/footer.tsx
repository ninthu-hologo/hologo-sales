import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";
// import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="text-black">
      <div className="w-full">
        <div className="m-auto w-[85%]">
          <div className="py-4">
            <h3 className="flex text-transparent bg-clip-text bg-gradient-to-r from-[#a32260] to-[#ef592a] text-xl md:text-3xl font-semibold">
              Creating the next generation of
              <br /> extraordinary human beings.
            </h3>
          </div>
          <div className="w-[80%] flex justify-between py-8 flex-wrap gap-16">
            <div>
              <h4 className="font-semibold pb-6">Discover</h4>
              <div className="flex flex-col gap-4">
                <Link href="https://hologo.world/student-secret-weapon">
                  Hologo for Students
                </Link>
                <Link href="https://hologo.world/a-teachers-treasure-box">
                  Hologo for Educators
                </Link>
                <Link href="https://hologo.world/for-school-institutions">
                  Hologo for Schools
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold pb-6">From the Content Library</h4>
              <div className="flex flex-col gap-4">
                <Link href="https://hologo.world/products/cie-chemistry-igcse-0620-col">
                  CIE Chemistry IGCSE
                </Link>
                <Link href="https://hologo.world/products/cbse-science-grade-10-collecti">
                  CBSE Science Grade 10 Collection
                </Link>
                <Link href="https://hologo.world/products/sl-science-grade-11-collection">
                  SL Science Grade 11 Collection
                </Link>
              </div>
            </div>
            <div>
              <p>Contact us</p>
              <div className="flex gap-4 pt-6">
                <a href="https://www.facebook.com/hologo.world/">
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16zm17.668 9.408v-8.705h2.403l.318-3h-2.721l.004-1.501c0-.783.074-1.202 1.198-1.202h1.502V8h-2.403c-2.887 0-3.903 1.455-3.903 3.902v1.801h-1.8v3h1.8v8.705h3.602z"
                      fill="#1B2124"
                    ></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/hologo-world-inc">
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16zm11.307-2.748H7.681v10.894h3.626V13.252zm.239-3.37C11.522 8.814 10.758 8 9.518 8s-2.051.814-2.051 1.882c0 1.046.787 1.883 2.004 1.883h.023c1.264 0 2.052-.837 2.052-1.883zM24.384 17.9c0-3.346-1.79-4.904-4.175-4.904-1.925 0-2.787 1.057-3.269 1.8v-1.544h-3.626c.048 1.022 0 10.895 0 10.895h3.626v-6.085c0-.325.024-.65.12-.883.262-.65.859-1.324 1.86-1.324 1.313 0 1.837.999 1.837 2.463v5.828h3.626V17.9z"
                      fill="#1B2124"
                    ></path>
                  </svg>
                </a>
                <a href="https://instagram.com/hologoworld">
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16zm16-8.533c-2.317 0-2.608.01-3.518.051-.908.042-1.528.186-2.07.397a4.178 4.178 0 00-1.513.984c-.474.474-.766.95-.985 1.511-.211.543-.355 1.163-.396 2.071-.04.91-.051 1.202-.051 3.52 0 2.317.01 2.607.051 3.517.042.908.186 1.528.397 2.07.218.562.51 1.038.984 1.513.474.474.95.767 1.511.985.543.21 1.163.354 2.072.396.91.041 1.2.052 3.518.052 2.317 0 2.607-.01 3.518-.052.908-.042 1.529-.185 2.072-.396a4.175 4.175 0 001.51-.985c.475-.475.767-.95.985-1.512.21-.543.354-1.163.397-2.071.04-.91.051-1.2.051-3.518 0-2.317-.01-2.608-.051-3.518-.043-.909-.187-1.53-.397-2.072A4.187 4.187 0 0023.1 8.9a4.17 4.17 0 00-1.51-.984c-.545-.211-1.165-.355-2.074-.397-.91-.041-1.2-.051-3.518-.051h.003z"
                      fill="#1B2124"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.235 9.004h.766c2.278 0 2.548.009 3.448.05.832.038 1.284.177 1.584.293.399.155.682.34.981.639.299.298.484.583.639.981.116.3.256.752.294 1.584.04.9.05 1.17.05 3.447 0 2.278-.01 2.548-.05 3.447-.039.832-.178 1.284-.294 1.584-.155.398-.34.682-.639.98a2.64 2.64 0 01-.98.639c-.301.117-.753.256-1.585.294-.9.04-1.17.05-3.448.05-2.279 0-2.549-.01-3.448-.05-.832-.038-1.284-.178-1.585-.294a2.642 2.642 0 01-.981-.639 2.645 2.645 0 01-.639-.98c-.117-.3-.256-.752-.294-1.584-.04-.9-.049-1.17-.049-3.449s.008-2.548.05-3.447c.037-.832.176-1.284.293-1.585.155-.398.34-.682.639-.98.298-.3.583-.484.981-.64.3-.117.753-.255 1.585-.294.787-.035 1.092-.046 2.682-.048v.002zm5.32 1.417a1.024 1.024 0 100 2.048 1.024 1.024 0 000-2.048zm-4.554 1.197a4.383 4.383 0 100 8.765 4.383 4.383 0 000-8.765z"
                      fill="#1B2124"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 13.156a2.845 2.845 0 110 5.689 2.845 2.845 0 010-5.69z"
                      fill="#1B2124"
                    ></path>
                  </svg>
                </a>
                <a href="https://twitter.com/hologoworld">
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16zm15.52-2.995l.034.554-.56-.068c-2.036-.26-3.816-1.141-5.326-2.621l-.74-.735-.19.543c-.402 1.208-.145 2.485.695 3.344.447.474.346.542-.426.26-.268-.09-.503-.158-.526-.124-.078.079.19 1.107.403 1.514.291.564.884 1.118 1.533 1.446l.549.26-.65.01c-.626 0-.648.012-.581.25.224.734 1.108 1.513 2.093 1.852l.693.238-.604.361a6.302 6.302 0 01-3 .836c-.503.012-.917.057-.917.09 0 .114 1.365.747 2.16.995 2.384.734 5.215.418 7.342-.836 1.51-.893 3.021-2.666 3.727-4.384.38-.915.76-2.587.76-3.39 0-.52.034-.587.66-1.209.37-.361.717-.757.784-.87.112-.214.101-.214-.47-.022-.951.339-1.085.294-.615-.215.347-.361.76-1.017.76-1.209 0-.034-.167.023-.357.125-.202.113-.65.282-.985.384l-.605.192-.548-.373c-.302-.203-.727-.43-.951-.497-.571-.158-1.444-.136-1.959.045-1.399.508-2.283 1.82-2.182 3.254z"
                      fill="#1B2124"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-between py-8 border-t flex-wrap gap-8">
            <div>
              <p className="text-xs md:text-sm">Copyright © 2024 Hologo World Inc. All rights reserved.</p>
            </div>
            <div className="flex gap-4 text-xs md:text-sm flex-wrap">
              <Link href="https://hologo.world/hologo-lenses">
                Hologo Lenses
              </Link>
              <Link href="https://hologo.world/policies">Privacy Policy</Link>
              <Link href="https://hologo.world/terms-and-conditions">
                Terms of Service
              </Link>
              <Link href="https://hologo.world/cookie-policy">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
