"use client";

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600" 
            alt="About Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-[5%]">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary uppercase tracking-[4px] text-sm font-black mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[48px] lg:text-[72px] font-bold leading-tight tracking-tight max-w-[800px]"
          >
            Sculpting Personal Spaces Since 2012.
          </motion.h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-[5%] max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[38px] font-bold leading-tight mb-6">Our Mission</h2>
            <p className="text-lg text-muted font-semibold leading-relaxed mb-8">
              At NestCraft, we believe that furniture is more than just utility—it's an expression of who you are. 
              Our mission is to blend sculptural forms with everyday functionality, creating pieces that don't just fill a room, but define it.
            </p>
            <div className="grid gap-4">
              {[
                'Sustainably sourced premium materials',
                'Artisanal craftsmanship in every detail',
                'Timeless designs that transcend trends',
                'Commitment to ethical production'
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-center font-bold text-foreground/85">
                  <CheckCircle2 className="text-secondary flex-shrink-0" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-border"
          >
            <img 
              src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=1200" 
              alt="Craftsmanship" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section (USP from Home) */}
      <section className="py-24 bg-surface/50 border-y border-border px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-secondary uppercase tracking-[3px] text-[12px] font-black mb-2.5">Why Choose Us</p>
            <h2 className="text-[38px] font-bold tracking-tight">The NestCraft Difference</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Fast Delivery', sub: 'Doorstep shipping worldwide with real-time tracking.' },
              { icon: ShieldCheck, title: 'Secure Checkout', sub: 'Your data is protected with industry-standard encryption.' },
              { icon: RefreshCcw, title: 'Easy Returns', sub: 'Not satisfied? Return within 14 days for a full refund.' },
              { icon: Sparkles, title: 'Premium Craft', sub: 'Master artisans use only the finest materials available.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-background border border-border rounded-xl shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-secondary" size={28} />
                </div>
                <h4 className="text-lg font-bold mb-3 uppercase tracking-wider">{item.title}</h4>
                <p className="text-sm text-muted font-semibold leading-relaxed">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Craft Section */}
      <section className="py-24 px-[5%] max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary uppercase tracking-[3px] text-[12px] font-black mb-2.5">Our Artisans</p>
          <h2 className="text-[38px] font-bold tracking-tight">Mastering the Craft</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Julian Vane', role: 'Master Carpenter', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600' },
            { name: 'Elena Rossi', role: 'Textile Designer', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600' },
            { name: 'Marcus Thorne', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600' }
          ].map((person, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 border border-border grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h4 className="text-xl font-bold mb-1">{person.name}</h4>
              <p className="text-secondary font-black tracking-[2px] uppercase text-xs">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
