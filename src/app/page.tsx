"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Building2, CheckCircle, MessageSquare, Search } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="medium"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Process",
          id: "#process",
        },
        {
          name: "Showcase",
          id: "#showcase",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="MACS & Partners"
      button={{
        text: "Call Now",
        href: "tel:7033458167",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="MACS & Partners Exteriors"
      description="Premium siding, gutter, window, and door services for homes in Blacksburg & Christiansburg, VA. Reliable, high-quality, and local experts."
      buttons={[
        {
          text: "Call (703) 345-8167",
          href: "tel:7033458167",
        },
        {
          text: "Request Free Estimate",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-13150.jpg"
      imageAlt="Professional residential exterior home upgrade"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Siding Installation",
          description: "Durable siding replacement for increased home protection and curb appeal.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-peson-with-their-frinds_23-2149290155.jpg",
        },
        {
          title: "Gutter Systems",
          description: "Expert seamless gutter installation to manage water and protect your foundation.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-roof-wooden-building_23-2149343649.jpg",
        },
        {
          title: "Window Replacement",
          description: "High-efficiency replacement windows for enhanced energy savings and comfort.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-enjoying-morning-with-cup-coffee_1098-21869.jpg",
        },
        {
          title: "Exterior Doors",
          description: "Secure and stylish entry and patio door installations for your home.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-front-door-with-orange-wall-plants_23-2149360604.jpg",
        },
      ]}
      title="Our Professional Services"
      description="We specialize in high-quality exterior upgrades designed to protect your home and improve curb appeal in Southwest Virginia."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Why Choose MACS & Partners?",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/lifestyle-scene-showing-care-support-from-people-community_23-2151261266.jpg",
          alt: "Local expert contractors",
        },
      ]}
      buttons={[
        {
          text: "Learn About Us",
          href: "#why-choose",
        },
      ]}
    />
  </div>

  <div id="showcase" data-section="showcase">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Exterior",
          name: "Siding Transformation",
          price: "Completed",
          rating: 5,
          reviewCount: "12",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-building-with-bricks-stone_23-2148252830.jpg",
        },
        {
          id: "p2",
          brand: "Exterior",
          name: "Gutter Upgrade",
          price: "Completed",
          rating: 5,
          reviewCount: "8",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-spraying-powder-paint_23-2149714282.jpg",
        },
        {
          id: "p3",
          brand: "Exterior",
          name: "Window Installation",
          price: "Completed",
          rating: 5,
          reviewCount: "15",
          imageSrc: "http://img.b2bpic.net/free-photo/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy_1258-169755.jpg",
        },
        {
          id: "p4",
          brand: "Exterior",
          name: "Entry Door Swap",
          price: "Completed",
          rating: 5,
          reviewCount: "10",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-doing-daily-activities-minimal-decorated-room_23-2150407603.jpg",
        },
        {
          id: "p5",
          brand: "Exterior",
          name: "Full Curb Appeal",
          price: "Completed",
          rating: 5,
          reviewCount: "20",
          imageSrc: "http://img.b2bpic.net/free-photo/old-house-with-tiled-roof_169016-29073.jpg",
        },
        {
          id: "p6",
          brand: "Exterior",
          name: "Window Upgrade",
          price: "Completed",
          rating: 5,
          reviewCount: "9",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-protective-hemlet-standing-front-panoramic-windows-with-reaised-hands-victory-sucess_231208-2251.jpg",
        },
      ]}
      title="Project Gallery"
      description="View our recent exterior transformations throughout Blacksburg and Christiansburg."
    />
  </div>

  <div id="process" data-section="process">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          title: "Consultation",
          value: "1",
          icon: MessageSquare,
        },
        {
          id: "m2",
          title: "Assessment",
          value: "2",
          icon: Search,
        },
        {
          id: "m3",
          title: "Installation",
          value: "3",
          icon: Building2,
        },
        {
          id: "m4",
          title: "Walkthrough",
          value: "4",
          icon: CheckCircle,
        },
      ]}
      title="Our Simple Process"
      description="We make exterior upgrades straightforward, predictable, and stress-free."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="one-large-right-three-stacked-left"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Homeowner",
          company: "Blacksburg",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-african-american-women-white-blouse-blue-jeans-posed-near-cafe-with-newspaper_627829-4724.jpg",
        },
        {
          id: "2",
          name: "Mark D.",
          role: "Homeowner",
          company: "Christiansburg",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-young-carpenter_329181-15654.jpg",
        },
        {
          id: "3",
          name: "Emily R.",
          role: "Homeowner",
          company: "Blacksburg",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-thinking_93675-133241.jpg",
        },
        {
          id: "4",
          name: "David K.",
          role: "Homeowner",
          company: "Christiansburg",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-couple-inside-their-new-home-holding-house-plans_23-2148895457.jpg",
        },
        {
          id: "5",
          name: "Jessica L.",
          role: "Homeowner",
          company: "Blacksburg",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-carpenter-working-with-experienced-man_329181-15627.jpg",
        },
      ]}
      title="Happy Homeowners"
      description="Reliability and craftsmanship local homeowners trust."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you offer free estimates?",
          content: "Yes, we provide completely free, no-obligation estimates for all exterior projects in Blacksburg and Christiansburg.",
        },
        {
          id: "q2",
          title: "What areas do you serve?",
          content: "We primarily serve homeowners throughout Blacksburg, VA, and Christiansburg, VA.",
        },
        {
          id: "q3",
          title: "Do you provide warranties?",
          content: "Yes, we stand behind our workmanship and materials with solid warranties for your peace of mind.",
        },
        {
          id: "q4",
          title: "How soon can you start?",
          content: "We strive to begin projects as soon as materials are ready and a clear schedule is set, focusing on timely installation.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/architects-with-project-hands_1163-1443.jpg"
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Common questions about exterior upgrades."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      title="Get Your Free Quote"
      description="Ready to upgrade your home? Contact us today for a free assessment and estimate."
      imageSrc="http://img.b2bpic.net/free-photo/low-angle-engineers-hand-shake_23-2148480373.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="MACS & Partners Exteriors"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Siding",
              href: "#",
            },
            {
              label: "Gutters",
              href: "#",
            },
            {
              label: "Windows",
              href: "#",
            },
            {
              label: "Doors",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Local Areas",
          items: [
            {
              label: "Blacksburg",
              href: "#",
            },
            {
              label: "Christiansburg",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
