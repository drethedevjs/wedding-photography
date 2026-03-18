"use client";
import { CoupleFormData } from "@/interface/CoupleFormData";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinterestIcon
} from "@/utils/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import "dotenv/config";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { object, string } from "yup";

const schema = object({
  brideName: string().required("Bride Name is required"),
  groomName: string().required("Groom Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  weddingDate: string().required("Wedding Date is required"),
  phone: string().required("Phone is required"),
  venue: string().required("Venue is required"),
  message: string()
    .min(15, "Message isn't long enough")
    .required("Message is required")
});

export default function Contact() {
  const [hasSent, setHasSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll(".fade-up");
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CoupleFormData>({
    resolver: yupResolver<CoupleFormData>(schema)
  });

  const handleFormSubmit: SubmitHandler<CoupleFormData> = async formData => {
    setLoading(true);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_MAILER_URL}/api/email/send-covenant`,
        formData
      );
      setHasSent(true);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) console.error(err.message);

      console.error("An unexpected error has occurred:", err);
    }

    setLoading(false);
  };

  return (
    <section className="font-(family-name:--font-body) font-light min-h-screen flex items-center justify-center px-6 py-24">
      <div ref={containerRef} className="max-w-xl w-full mx-auto text-center">
        {/* Heading */}
        <div className="fade-up delay-100">
          <p className="font-(family-name:--font-display) text-sm uppercase tracking-[0.3em] text-gold opacity-50 mb-3">
            Let&apos;s Connect
          </p>
          <h1 className="font-(family-name:--font-display) text-6xl md:text-7xl font-light italic mb-4">
            Say Hello
          </h1>
        </div>

        {/* Divider */}
        <div className="fade-up delay-200 flex items-center gap-4 my-8 opacity-20">
          <div className="flex-1 h-px bg-current" />
          <span className="font-(family-name:--font-display) text-lg italic">
            ✦
          </span>
          <div className="flex-1 h-px bg-current" />
        </div>

        {/* Blurb */}
        <div className="fade-up delay-200 mb-12">
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Every love story deserves to be told beautifully. I&apos;d be
            honored to hear yours — reach out and let&apos;s start planning
            something unforgettable together.
          </p>
        </div>

        {/* Email */}
        <div className="fade-up delay-300 mb-8">
          <div className="flex items-center justify-center gap-2 opacity-40 mb-2">
            <MailIcon />
            <span className="text-xs uppercase tracking-[0.2em]">Email</span>
          </div>
          <a
            href="mailto:andre@covenantlx.com?subject=I'm%20getting%20married%20|%20Covenant%20LX"
            className="contact-link text-2xl md:text-3xl"
          >
            andre@covenantlx.com
          </a>
        </div>

        {/* Vertical divider line */}
        <div className="fade-up delay-300 w-px h-15 mx-auto my-6 opacity-20 bg-linear-to-b from-transparent via-current to-transparent" />

        {/* Phone */}
        <div className="fade-up delay-400 mb-12">
          <div className="flex items-center justify-center gap-2 opacity-40 mb-2">
            <PhoneIcon />
            <span className="text-xs uppercase tracking-[0.2em]">Phone</span>
          </div>
          <a
            href="tel:7064263022"
            className="contact-link text-2xl md:text-3xl"
          >
            706-426-3022
          </a>
        </div>

        {/* Divider */}
        <div className="fade-up delay-400 flex items-center gap-4 my-8 opacity-20">
          <div className="flex-1 h-px bg-current" />
          <span className="font-(family-name:--font-display) text-lg italic">
            ✦
          </span>
          <div className="flex-1 h-px bg-current" />
        </div>

        {/* Social */}
        <div className="fade-up delay-500">
          <p className="text-xs uppercase tracking-[0.3em] opacity-40 mb-5">
            Follow Along
          </p>
          <div className="flex items-center justify-center gap-4">
            {[
              {
                href: "https://facebook.com/covenantlx",
                label: "Facebook",
                Icon: FacebookIcon
              },
              {
                href: "https://instagram.com/covenant_lx",
                label: "Instagram",
                Icon: InstagramIcon
              },
              {
                href: "https://pinterest.com/covenantlx",
                label: "Pinterest",
                Icon: PinterestIcon
              }
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center size-11 border border-current rounded-full opacity-60 transition-all duration-300 hover:opacity-100 hover:-translate-y-0.5"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Ornamental bottom */}
        <div className="fade-up delay-500 font-(family-name:--font-display) text-2xl opacity-30 tracking-[0.5em] mt-12">
          ✦
        </div>
      </div>
    </section>
  );
}
