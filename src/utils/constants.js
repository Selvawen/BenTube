import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SchoolIcon from "@mui/icons-material/School";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import LogoImage from "../assets/logo.png";
import demoThumbnailImage from "../assets/demo-thumbnail.png";
import demoProfileImage from "../assets/demo-profile.png";

export const logo = LogoImage;

export const categories = [
  { name: "New", icon: <HomeIcon /> },
  { name: "Education", icon: <SchoolIcon /> },
  { name: "Gym", icon: <FitnessCenterIcon /> },
  { name: "Comedy", icon: <TheaterComedyIcon /> },
  { name: "Coding", icon: <CodeIcon /> },
  { name: "Podcast", icon: <GraphicEqIcon /> },
  { name: "Movie", icon: <OndemandVideoIcon /> },
  { name: "Gaming", icon: <SportsEsportsIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Fashion", icon: <CheckroomIcon /> },
  { name: "Blockchain", icon: <DeveloperModeIcon /> },
];

export const demoThumbnailUrl = demoThumbnailImage;
export const demoChannelUrl = "/channel/UC9-y-6csu5WGm29I7JiwpnA";
export const demoVideoUrl = "/video/BBJa32lCaaY";
export const demoChannelTitle = "Awesome Channel";
export const demoVideoTitle = "A Random YouTube Video";
export const demoProfilePicture = demoProfileImage;
