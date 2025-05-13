import { IconType } from "react-icons";

import {
  HiChevronUp,
  HiChevronDown,
  HiChevronRight,
  HiChevronLeft,
  HiArrowUpRight,
  HiOutlineArrowPath,
  HiCheck,
  HiMiniQuestionMarkCircle,
  HiMiniXMark,
  HiOutlineLink,
  HiExclamationTriangle,
  HiInformationCircle,
  HiExclamationCircle,
  HiCheckCircle,
  HiMiniGlobeAsiaAustralia,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiClipboard,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
} from "react-icons/hi2";

import { LuKeySquare } from "react-icons/lu";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
  PiPauseDuotone,
  PiPlayDuotone
} from "react-icons/pi";
import { IoIosDocument } from "react-icons/io";
import { FaDiscord, FaGithub, FaLinkedin, FaXTwitter, FaLocationCrosshairs, FaRegCircle } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { FaFlagUsa, FaBirthdayCake } from "react-icons/fa";
import { MdTimelapse } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { SiC, SiCaterpillar } from "react-icons/si";

export const iconLibrary: Record<string, IconType> = {
  chevronUp: HiChevronUp,
  chevronDown: HiChevronDown,
  chevronRight: HiChevronRight,
  chevronLeft: HiChevronLeft,
  refresh: HiOutlineArrowPath,
  arrowUpRight: HiArrowUpRight,
  check: HiCheck,
  arrowRight: HiArrowRight,
  helpCircle: HiMiniQuestionMarkCircle,
  infoCircle: HiInformationCircle,
  warningTriangle: HiExclamationTriangle,
  errorCircle: HiExclamationCircle,
  checkCircle: HiCheckCircle,
  email: HiEnvelope,
  globe: HiMiniGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  close: HiMiniXMark,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  clipboard: HiClipboard,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  pgp: LuKeySquare,
  doc: IoIosDocument,
  us: FaFlagUsa,
  loc: FaLocationCrosshairs,
  time: IoTimeSharp,
  birthday: FaBirthdayCake,
  pronoun: FaRegCircle,
  mytime: MdTimelapse,
  in_progress: PiPlayDuotone,
  paused: PiPauseDuotone,
  cat: SiCaterpillar
};
