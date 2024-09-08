import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Faq } from "@/components/Faq";

import { benefitOne} from "@/components/data";
import { Contact } from "@/components/Contact";
export default function Home() {
  return (
    <Container>
      <Hero />


      <Benefits data={benefitOne} />


      <SectionTitle title="Contact Us">
      Have questions? Want to get involved? Reach out to us today!
      </SectionTitle>
      <Contact/>
      <SectionTitle title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>


      <Faq />
      
    </Container>
  );
}
