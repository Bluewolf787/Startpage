import { Bookmark } from '../interfaces/bookmark'
import { BookmarkCategory } from '../interfaces/bookmark-category'

export const bookmarks = [
  {
    name: 'services',
    bookmarks: [
      {
        name: 'Gmail',
        link: 'https://gmail.com',
        icon: 'nf nf-md-gmail',
      },
      {
        name: 'Drive',
        link: 'https://drive.google.com',
        icon: 'nf nf-md-google_drive',
      },
      {
        name: 'Drawio',
        link: 'https://app.diagrams.net',
        icon: 'nf nf-md-graph',
      },
      {
        name: 'Pi-Hole',
        link: '192.168.0.123/admin/',
        icon: 'nf nf-md-pi_hole',
      },
    ] as Bookmark[],
  },
  {
    name: 'dev',
    bookmarks: [
      {
        name: 'GitHub',
        link: 'https://github.com',
        icon: 'nf nf-fa-github',
      },
      {
        name: 'GitLab',
        link: 'https://gitlab.com',
        icon: 'nf nf-fa-gitlab',
      },
      {
        name: 'grep.app',
        link: 'https://grep.app',
        icon: 'nf nf-md-application_brackets',
      },
      {
        name: 'Stackoverflow',
        link: 'https://stackoverflow.com',
        icon: 'nf nf-dev-stackoverflow',
      },
    ] as Bookmark[],
  },
  {
    name: 'dev2',
    bookmarks: [
      {
        name: 'ngrok',
        link: 'https://dashboard.ngrok.com',
        icon: 'nf nf-md-web',
      },
      {
        name: 'Replit',
        link: 'https://replit.com/~',
        icon: 'nf nf-md-server',
      },
      {
        name: 'Battlesnake',
        link: 'https://play.battlesnake.com',
        icon: 'nf nf-md-snake',
      },
    ] as Bookmark[],
  },
  {
    name: 'hacking',
    bookmarks: [
      {
        name: 'HTB',
        link: 'https://www.hackthebox.com',
        icon: 'nf nf-md-cube_outline',
      },
      {
        name: 'THM',
        link: 'https://tryhackme.com',
        icon: 'nf nf-oct-file_binary',
      },
      {
        name: 'Exploit DB',
        link: 'https://www.exploit-db.com',
        icon: 'nf nf-fa-spider',
      },
      {
        name: 'Passwords',
        link: 'https://www.skullsecurity.org/wiki/Main_Page',
        icon: 'nf nf-md-skull',
      },
    ] as Bookmark[],
  },
  {
    name: 'social',
    bookmarks: [
      {
        name: 'YouTube',
        link: 'https://youtube.com',
        icon: 'nf nf-fa-youtube',
      },
      {
        name: 'Twitch',
        link: 'https://twitch.tv',
        icon: 'nf nf-fa-twitch',
      },
      {
        name: 'Reddit',
        link: 'https://reddit.com',
        icon: 'nf nf-fa-reddit_alien',
      },
    ] as Bookmark[],
  },
  {
    name: 'gaming',
    bookmarks: [
      {
        name: 'ProtonDB',
        link: 'https://www.protondb.com',
        icon: 'nf nf-fae-atom',
      },
      {
        name: 'MC Wiki',
        link: 'https://minecraft.wiki/',
        icon: 'nf nf-md-minecraft',
      },
      {
        name: 'MC Bugs',
        link: 'https://bugs.mojang.com/projects/MC/issues',
        icon: 'nf nf-cod-bug',
      },
    ] as Bookmark[],
  },
  {
    name: 'linux',
    bookmarks: [
      {
        name: 'Arch Wiki',
        link: 'https://wiki.archlinux.org',
        icon: 'nf nf-md-arch',
      },
      {
        name: 'Hyprland Wiki',
        link: 'https://wiki.hyprland.org',
        icon: 'nf nf-linux-hyprland',
      },
      {
        name: 'LFS',
        link: 'https://www.linuxfromscratch.org',
        icon: 'nf nf-dev-linux',
      },
    ] as Bookmark[],
  },
  {
    name: 'docs',
    bookmarks: [
      {
        name: 'Rust',
        link: 'https://www.rust-lang.org/learn',
        icon: 'nf nf-dev-rust',
      },
      {
        name: 'ESLint',
        link: 'https://eslint.org/docs/latest/',
        icon: 'nf nf-md-eslint',
      },
      {
        name: 'Angular',
        link: 'https://angular.dev/overview',
        icon: 'nf nf-dev-angular',
      },
      {
        name: 'Sass',
        link: 'https://sass-lang.com/documentation/',
        icon: 'nf nf-md-sass',
      },
    ] as Bookmark[],
  },
] as BookmarkCategory[]
