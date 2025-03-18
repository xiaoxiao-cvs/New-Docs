import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MaiMBot 文档中心",
  description: "MaiMBot 开发与使用的全方位指南",
  head: [
    ['link', { rel: 'icon', href: '/avatars/MaiM.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速问答', link: '/fast_q_a' },
      { text: '安装指南', link: '/installation_standard' },
      { text: '文件介绍', link: '/file_structure' },
      { text: '部署教程', link: '/deployment' },
      { text: '开发指南', link: '/ai-instruction' },
      { text: 'API', link: '/api/' }
    ],

    sidebar: {
      '/': [
        {
          text: '入门指南',
          items: [
            { text: '快速问答', link: '/fast_q_a' },
            { text: '标准安装指南', link: '/installation_standard' },
            { text: '萌新安装指南', link: '/installation_cute' }
          ]
        },
        {
          text: '文件与功能',
          items: [
            { text: '文件结构', link: '/file_structure' }
          ]
        },
        {
          text: '部署教程',
          collapsed: false,
          items: [
            { text: 'Docker部署', link: '/docker_deploy' },
            { text: 'Linux部署', link: '/manual_deploy_linux' },
            { text: 'Windows部署', link: '/manual_deploy_windows' },
            { text: 'Synology部署', link: '/synology_deploy' },
            { text: '新手Linux部署', link: '/linux_deploy_guide_for_beginners' }
          ]
        },
        {
          text: '开发文档',
          collapsed: true,
          items: [
            { text: 'AI辅助开发指南', link: '/ai-instruction' }
          ]
        },
        {
          text: 'API文档',
          collapsed: true,
          items: [
            { text: 'API 草案', link: '/api/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SengokuCola/MaiMBot' }
    ]
  }
})
