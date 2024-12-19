export const sidebar = [
    {
      text: "简介",
      collapsed:true,
      items: [
        { text: "什么是 RobustMQ", link: "/zh/Intro/What-is-RobustMQ" },
        { text: "为什么有 RobustMQ", link: "/zh/Intro/Why-RobustMQ"},
        { text: "2024 年开发计划", link: "/zh/Intro/2024-Development-Plan" },
      ],
    },
    {
      text: "快速启动",
      collapsed:true,
      items: [
        { text: "概览", link: "/zh/Getting-started/Overview" },
        { text: "单机模式", link: "/zh/Getting-started/Run-stand-alone-mode" },
        { text: "集群模式", link: "/zh/Getting-started/Run-cluster-mode" },
      ],
    },
    {
      text: "系统架构",
      collapsed:true,
      items: [
        { text: "概览", link: "/zh/System-architecture/Overview" },
        { text: "Placement Center", link: "/zh/System-architecture/Placement-Center" },
        { text: "Broker Server", link: "/zh/System-architecture/Broker-Server" },
        { text: "Storage Adapter", link: "/zh/System-architecture/Storage-Adapter" },
        { text: "Journal Server", link: "/zh/System-architecture/Journal-Server" },
        { text: "集成测试", link: "/zh/System-architecture/Test-cases" },
        {
          text: "配置说明",
          collapsed:true,
          items: [
            { text: "Placement Center", link: "/zh/System-architecture/Config/placement-center" },
            { text: "MQTT Broker", link: "/zh/System-architecture/Config/mqtt-server" },
          ],
        },
      ],
    },
    {
      text: "RobustMQ MQTT",
      collapsed:true,
      items: [
        { text: "概览", link: "/zh/RobustMQ-MQTT/Overview" },
      ],
    },
    {
      text: "贡献指南",
      collapsed:true,
      items: [
        { text: "环境搭建", link: "/zh/Contribution-guide/Environment-setup" },
        { text: "Cargo运行", link: "/zh/Contribution-guide/Cargo-run" },
        { text: "VsCode 运行", link: "/zh/Contribution-guide/VsCode-run" },
        { text: "代码结构", link: "/zh/Contribution-guide/Code-structure" },
        { text: "GitHub 贡献指南", link: "/zh/Contribution-guide/GitHub-contribution-guide" },
      ],
    },
    {
      text: "版本记录",
      collapsed:true,
      items: [
        { text: "0.1.0-beta", link: "/zh/Version-record/0.1.0-beta" },
      ],
    },
    {
      text: "相关资料",
      collapsed:true,
      items: [
        { text: "RobustMQ Rust China For 2024", link: "/zh/Related-information/RobustMQ-Rust-China-For-2024" },
      ],
    },
  ];