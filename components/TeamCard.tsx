'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { TeamMember } from '@/lib/team';

/** "Dr. Smita Sankaye Kachewar" → "SK"; "Biswajeet" → "B". Titles are skipped. */
function initialsOf(name: string) {
  const parts = name
    .split(/\s+/)
    .filter((p) => !/^(dr\.?|prof\.?|mr\.?|mrs\.?|ms\.?)$/i.test(p))
    .filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative glass rounded-3xl p-6 md:p-8 hover:border-teal-400/50 hover:-translate-y-1 transition-all overflow-hidden"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/5 group-hover:to-cyan-500/10 transition-all" />

      <div className="relative">
        {/* Avatar */}
        <div className="relative w-32 h-32 md:w-36 md:h-36 mx-auto mb-5">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/30 to-cyan-400/30 blur-xl group-hover:blur-2xl transition-all" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-teal-400/40 group-hover:border-teal-400/80 transition-colors">
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover"
                sizes="144px"
              />
            ) : (
              /* No photograph on file — initials avatar keeps the grid even. */
              <div
                className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-500/15 to-cyan-500/10"
                aria-hidden="true"
              >
                <span className="font-display text-3xl md:text-4xl font-bold text-teal-700/70 tracking-wide">
                  {initialsOf(member.name)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Name */}
        <h3 className="font-display text-xl text-navy-900 font-semibold text-center leading-tight">
          {member.name}
        </h3>

        {/* Role */}
        <div className="mt-2 text-center">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold text-teal-700 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30">
            {member.role}
          </span>
        </div>

        {/* Qualifications */}
        {member.qualifications && (
          <p className="mt-3 text-xs text-teal-700/80 font-mono text-center leading-relaxed">
            {member.qualifications}
          </p>
        )}

        {/* Bio */}
        {member.bio && (
          <p className="mt-4 text-sm text-slate-600 leading-relaxed text-center">
            {member.bio}
          </p>
        )}
      </div>
    </motion.div>
  );
}
