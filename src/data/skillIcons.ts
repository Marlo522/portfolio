import type { IconType } from 'react-icons'
import {
  SiHtml5, SiCss, SiBootstrap, SiJavascript, SiReact, SiPhp, SiCodeigniter,
  SiNodedotjs, SiExpress, SiKotlin, SiExpo, SiMysql, SiFirebase, SiMongodb,
  SiSupabase, SiRedis, SiVercel, SiRender, SiGooglecloud, SiCloudinary,
  SiGit, SiGithub, SiAndroidstudio, SiDocker, SiComposer, SiLaravel,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

export const skillIcons: Record<string, IconType> = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  Bootstrap: SiBootstrap,
  JavaScript: SiJavascript,
  'React.js': SiReact,
  PHP: SiPhp,
  CodeIgniter: SiCodeigniter,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  Kotlin: SiKotlin,
  'React Native': SiReact,
  Expo: SiExpo,
  MySQL: SiMysql,
  Firebase: SiFirebase,
  MongoDB: SiMongodb,
  Supabase: SiSupabase,
  Redis: SiRedis,
  Vercel: SiVercel,
  Render: SiRender,
  'Google Cloud': SiGooglecloud,
  Cloudinary: SiCloudinary,
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': VscVscode,
  'Android Studio': SiAndroidstudio,
  Docker: SiDocker,
  Composer: SiComposer,
  Laravel: SiLaravel,
}
