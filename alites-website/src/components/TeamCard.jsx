import React from 'react';
import { Linkedin } from 'lucide-react';

export default function TeamCard({ emoji, name, role, bio, linkedin }) {
  return (
    <div className="group bg-white/[0.03] border border-white/10 rounded-xl p-6 card-hover flex flex-col items-center text-center gap-4">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent/20 flex items-center justify-center text-4xl group-hover:border-accent/50 group-hover:bg-accent/15 transition-all duration-300">
        {emoji}
      </div>

      {/* Name & Role */}
      <div>
        <h3 className="font-syne font-bold text-white text-base group-hover:text-accent transition-colors duration-200">
          {name}
        </h3>
        <p className="text-accent text-sm font-medium mt-0.5">{role}</p>
      </div>

      {/* Bio */}
      <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{bio}</p>

      {/* LinkedIn */}
      <a
        href={linkedin}
        aria-label={`${name} on LinkedIn`}
        className="mt-auto flex items-center gap-2 text-slate-400 hover:text-accent transition-colors duration-200 text-sm group/link"
      >
        <Linkedin className="w-4 h-4" />
        <span>LinkedIn Profile</span>
      </a>
    </div>
  );
}
