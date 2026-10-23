import lightProfile from '@/assets/profile/profile-lightmode.png'
import darkProfile from '@/assets/profile/profile-darkmode.png'
import { useDarkMode } from '@/hooks/useDarkMode'
import { personal } from '@/data/personal'

export function ProfilePicture({ className = '', priority = false }: { className?: string; priority?: boolean }) {
  const { isDark } = useDarkMode()
  return <img className={'profile-picture ' + className} src={isDark ? darkProfile : lightProfile}
    alt={'Portrait of ' + personal.name} width={1122} height={1402}
    loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" />
}
