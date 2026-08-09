import {
  Atom,
  AudioWaveform,
  Baby,
  Bone,
  Box,
  Brain,
  Building2,
  CalendarDays,
  CircleDot,
  ClipboardCheck,
  Clock,
  CloudUpload,
  Cpu,
  Download,
  FileCheck2,
  FileClock,
  Headset,
  HeartPulse,
  Layers,
  Lock,
  Magnet,
  Microscope,
  Moon,
  Network,
  Plug,
  Ribbon,
  Scan,
  Server,
  ShieldCheck,
  Siren,
  Stethoscope,
  Target,
  Timer,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

/**
 * Maps the string `icon` keys used in content/teleradiology.ts to components.
 * Content stays free of imports so non-developers can edit it safely.
 */
const ICONS: Record<string, LucideIcon> = {
  atom: Atom,
  'audio-waveform': AudioWaveform,
  baby: Baby,
  bone: Bone,
  box: Box,
  brain: Brain,
  'building-2': Building2,
  'calendar-days': CalendarDays,
  'circle-dot': CircleDot,
  'clipboard-check': ClipboardCheck,
  clock: Clock,
  'cloud-upload': CloudUpload,
  cpu: Cpu,
  download: Download,
  'file-check-2': FileCheck2,
  'file-clock': FileClock,
  headset: Headset,
  'heart-pulse': HeartPulse,
  layers: Layers,
  lock: Lock,
  magnet: Magnet,
  microscope: Microscope,
  moon: Moon,
  network: Network,
  plug: Plug,
  ribbon: Ribbon,
  scan: Scan,
  server: Server,
  'shield-check': ShieldCheck,
  siren: Siren,
  stethoscope: Stethoscope,
  target: Target,
  timer: Timer,
  users: Users,
  wallet: Wallet,
};

/** Falls back to a neutral icon so an unknown key never breaks the build. */
export function TeleIcon({
  name,
  size = 20,
  className = 'text-teal-700',
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = ICONS[name] ?? CircleDot;
  return <Icon size={size} className={className} aria-hidden="true" />;
}
