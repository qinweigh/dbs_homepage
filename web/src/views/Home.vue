<template>
  <div class="home">
    <div v-if="loading" class="loading-screen">
      <div class="spinner"></div>
    </div>
    
    <div v-else class="content-wrapper">
      <!-- Navigation Bar -->
      <nav class="navbar" :class="{ 'scrolled': isScrolled }">
        <div class="navbar-content">
          <div class="brand">
            <span class="brand-logo">CLOUD DB</span>
            <span class="brand-tag">AI HOME PAGE</span>
          </div>
          <div class="nav-links">
            <a href="#excellentCases" class="nav-item" @click.prevent="scrollToSection('excellentCases')">优秀案例</a>
            <a href="#fdGroup" class="nav-item" @click.prevent="scrollToSection('fdGroup')">FD小组</a>
            <a href="#blueZoneStrategy" class="nav-item" @click.prevent="scrollToSection('blueZoneStrategy')">蓝区战略</a>
            <a href="#serviceDomainSpecial" class="nav-item" @click.prevent="scrollToSection('serviceDomainSpecial')">服务域专项</a>
            <a href="#capacityBuilding" class="nav-item" @click.prevent="scrollToSection('capacityBuilding')">能力构建</a>
            <a href="#industryNews" class="nav-item" @click.prevent="scrollToSection('industryNews')">业界资讯</a>
            <!-- <button class="menu-btn">MENU</button> -->
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <header class="hero">
        <div class="hero-background"></div>
        <div class="hero-gradient"></div>
        <div class="container hero-container">
          <div class="hero-content fade-in-up">
            <h1 class="hero-title">
              云数据库AI首页
            </h1>
            <p class="hero-subtitle">
              将Tokens转化为质量和竞争力，构建智能化数据库未来
            </p>
            <div class="hero-actions">
              <!-- <button class="btn btn-primary">探索资源</button>
              <button class="btn btn-secondary">加入社区</button> -->
            </div>
          </div>
        </div>
      </header>

      <!-- Content Grid -->
      <main class="main-grid">
        <div class="container">
          <template v-for="(items, type) in content" :key="type">
            <!-- Excellent Cases Section -->
            <section v-if="type === 'excellentCases'" :id="type" class="content-section fade-in-up">
              <div class="section-header">
                <h2 class="section-title">{{ formatTitle(type) }}</h2>
                <button class="btn-all-cases" @click="showAllCasesModal = true">全量案例</button>
              </div>
              
              <div class="card-grid single-card-grid">
                <a href="https://www.google.com/?client=safari" target="_blank" rel="noopener noreferrer" class="card case-card clickable-card">
                  <div class="card-image">
                    <img src="https://developp.exportfeed.com/wp-content/uploads/2023/09/64508202-test-written-by-hand-hand-writing-on-transparent-board-photo-450x450.jpg" alt="AI测试工程优秀实践">
                  </div>
                  <div class="card-content">
                    <h3 class="card-title">2026年第01期 AI测试工程优秀实践</h3>
                    <p class="card-excerpt">讲师：袁培能 00841444</p>
                  </div>
                </a>
              </div>
            </section>

            <!-- FD Group Section -->
            <section v-else-if="type === 'fdGroup'" :id="type" class="content-section fade-in-up" :style="{ animationDelay: `${Math.random() * 0.5}s` }">
              <div class="section-header">
                <div class="section-title-wrapper">
                  <h2 class="section-title">{{ formatTitle(type) }}</h2>
                  <p class="section-subtitle">管控面Java开发要成为公司级的SDD实践标杆</p>
                </div>
              </div>
              
              <div class="card-grid fd-grid">
                <div class="card fd-card" v-for="group in ['TaurusDB和RDS', '管控和迁移', 'GeminiDB']" :key="group">
                  <div class="card-content fd-card-content">
                    <div class="fd-card-header">
                      <img v-if="group === '管控和迁移'" src="https://res-static.hc-cdn.cn/cloudbu-site/china/zh-cn/product_gaussdb_banner_icon.png" alt="GaussDB Icon" class="fd-group-icon">
                      <img v-if="group === 'TaurusDB和RDS'" src="https://res-static.hc-cdn.cn/cloudbu-site/intl/zh-cn/MySQL/TaurusDB_icon.svg" alt="TaurusDB Icon" class="fd-group-icon">
                      <img v-if="group === 'GeminiDB'" src="https://res-static.hc-cdn.cn/cloudbu-site/china/zh-cn/202104DBS/geminidb.png" alt="GeminiDB Icon" class="fd-group-icon">
                      <h3 class="fd-card-title">{{ group }}</h3>
                    </div>
                    
                    <div class="fd-sub-section">
                      <h4 class="fd-sub-title">实践案例</h4>
                      <ul class="fd-list">
                        <li><a href="#" class="fd-link">案例内容示例 1</a></li>
                        <li><a href="#" class="fd-link">案例内容示例 2</a></li>
                      </ul>
                    </div>
                    
                    <div class="fd-sub-section">
                      <h4 class="fd-sub-title">最新进展</h4>
                      <ul class="fd-list">
                        <li><span class="fd-text">进展内容示例 1</span></li>
                        <li><span class="fd-text">进展内容示例 2</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Blue Zone Strategy Section -->
            <section v-else-if="type === 'blueZoneStrategy'" :id="type" class="content-section fade-in-up" :style="{ animationDelay: `${Math.random() * 0.5}s` }">
              <div class="section-header">
                <div class="section-title-wrapper">
                  <h2 class="section-title">{{ formatTitle(type) }}</h2>
                  <p class="section-subtitle">蓝区0到1，绿区1到100，人人在蓝区先烧够10亿Tokens</p>
                </div>
              </div>
              
              <div class="table-container">
                <table class="strategy-table">
                  <thead>
                    <tr>
                      <th>域名</th>
                      <th>岗位</th>
                      <th>蓝区</th>
                      <th>绿区</th>
                      <th>蓝区->绿区（蓝区0到1，绿区1到100）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowspan="2" class="domain-cell">GaussDB</td>
                      <td>内核</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>运维</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td rowspan="3" class="domain-cell">TaurusDB和RDS</td>
                      <td>管控</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>内核</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>运维</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td rowspan="3" class="domain-cell">GeminiDB</td>
                      <td>管控</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>内核</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>运维</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td class="domain-cell">管控和迁移</td>
                      <td>管控</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td rowspan="2" class="domain-cell">云原生引擎</td>
                      <td>内核</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>运维</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td class="domain-cell">测试</td>
                      <td>测试</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td class="domain-cell">架构师</td>
                      <td>架构&SE</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td class="domain-cell">维护</td>
                      <td>维护</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          <!-- Service Domain Special Section -->
          <section v-else-if="type === 'serviceDomainSpecial'" :id="type" class="content-section fade-in-up" :style="{ animationDelay: `${Math.random() * 0.5}s` }">
            <div class="section-header">
              <div class="section-title-wrapper">
                <h2 class="section-title">{{ formatTitle(type) }}</h2>
              </div>
            </div>
            
            <div class="card-grid fd-grid">
              <!-- GaussDB -->
              <div class="card fd-card">
                <div class="card-content fd-card-content">
                  <div class="fd-card-header">
                    <h3 class="fd-card-title">GaussDB</h3>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">AI辅助兼容性专项</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">锁资源检查专项</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">AI辅助定位SQL报错问题</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">AI辅助质量加固</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">AI辅助白盒用例生成</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                </div>
              </div>

              <!-- TaurusDB和RDS -->
              <div class="card fd-card">
                <div class="card-content fd-card-content">
                  <div class="fd-card-header">
                    <h3 class="fd-card-title">TaurusDB和RDS</h3>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">Taurus8041升级</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">现网问题辅助定位</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">CodeWIKI协助文档设计</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">代码检视Prompt增强</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">RDS服务MCP化</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">SDD推广和需求试点</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                </div>
              </div>

              <!-- GeminiDB -->
              <div class="card fd-card">
                <div class="card-content fd-card-content">
                  <div class="fd-card-header">
                    <h3 class="fd-card-title">GeminiDB</h3>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">子专项示例 1</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">子专项示例 2</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                </div>
              </div>

              <!-- 管控和迁移 -->
              <div class="card fd-card">
                <div class="card-content fd-card-content">
                  <div class="fd-card-header">
                    <h3 class="fd-card-title">管控和迁移</h3>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">子专项示例 1</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">子专项示例 2</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                </div>
              </div>

              <!-- 云原生引擎 -->
              <div class="card fd-card">
                <div class="card-content fd-card-content">
                  <div class="fd-card-header">
                    <h3 class="fd-card-title">云原生引擎</h3>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">子专项示例 1</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">子专项示例 2</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                </div>
              </div>

              <!-- 测试 -->
              <div class="card fd-card">
                <div class="card-content fd-card-content">
                  <div class="fd-card-header">
                    <h3 class="fd-card-title">测试</h3>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">子专项示例 1</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">子专项示例 2</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Capacity Building Section -->
          <section v-else-if="type === 'capacityBuilding'" :id="type" class="content-section fade-in-up" :style="{ animationDelay: `${Math.random() * 0.5}s` }">
            <div class="section-header">
              <div class="section-title-wrapper">
                <h2 class="section-title">{{ formatTitle(type) }}</h2>
                <p class="section-subtitle">部门和各服务域培训赋能</p>
              </div>
            </div>
            
            <div class="card-grid fd-grid">
              <!-- GaussDB -->
              <div class="card fd-card">
                <div class="card-content fd-card-content">
                  <div class="fd-card-header">
                    <h3 class="fd-card-title">GaussDB</h3>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">AI辅助兼容性专项</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">锁资源检查专项</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">AI辅助定位SQL报错问题</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">AI辅助质量加固</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">AI辅助白盒用例生成</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                </div>
              </div>

              <!-- TaurusDB和RDS -->
              <div class="card fd-card">
                <div class="card-content fd-card-content">
                  <div class="fd-card-header">
                    <h3 class="fd-card-title">TaurusDB和RDS</h3>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">Taurus8041升级</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">现网问题辅助定位</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">CodeWIKI协助文档设计</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">代码检视Prompt增强</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">RDS服务MCP化</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">SDD推广和需求试点</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                </div>
              </div>

              <!-- GeminiDB -->
              <div class="card fd-card">
                <div class="card-content fd-card-content">
                  <div class="fd-card-header">
                    <h3 class="fd-card-title">GeminiDB</h3>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">子专项示例 1</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">子专项示例 2</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                </div>
              </div>

              <!-- 管控和迁移 -->
              <div class="card fd-card">
                <div class="card-content fd-card-content">
                  <div class="fd-card-header">
                    <h3 class="fd-card-title">管控和迁移</h3>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">管控AI辅助牛刀小试系列</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                </div>
              </div>

              <!-- 云原生引擎 -->
              <div class="card fd-card">
                <div class="card-content fd-card-content">
                  <div class="fd-card-header">
                    <h3 class="fd-card-title">云原生引擎</h3>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">子专项示例 1</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">子专项示例 2</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                </div>
              </div>

              <!-- 测试 -->
              <div class="card fd-card">
                <div class="card-content fd-card-content">
                  <div class="fd-card-header">
                    <h3 class="fd-card-title">测试</h3>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">触电行动</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                </div>
              </div>

              <!-- 架构师 -->
              <div class="card fd-card">
                <div class="card-content fd-card-content">
                  <div class="fd-card-header">
                    <h3 class="fd-card-title">架构师</h3>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">管控AI辅助牛刀小试系列</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                </div>
              </div>

              <!-- 维护 -->
              <div class="card fd-card">
                <div class="card-content fd-card-content">
                  <div class="fd-card-header">
                    <h3 class="fd-card-title">维护</h3>
                  </div>
                  <div class="fd-sub-section">
                    <h4 class="fd-sub-title">管控AI辅助牛刀小试系列</h4>
                    <p class="fd-text">进展描述示例文本，可以在这里填写具体的进展情况。</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

            <!-- Other Sections -->
            <section v-else :id="type" class="content-section fade-in-up" :style="{ animationDelay: `${Math.random() * 0.5}s` }">
              <div class="section-header">
                <div class="section-title-wrapper">
                  <h2 class="section-title">{{ formatTitle(type) }}</h2>
                </div>
              </div>
              
              <div v-if="type === 'industryNews'">
                <div class="card-grid industry-news-grid">
                  <a href="https://x.com/GoogleCloudTech/status/2033953579824758855" target="_blank" rel="noopener noreferrer" class="card case-card clickable-card news-card">
                    <div class="card-image">
                      <img src="https://pbs.twimg.com/media/HDoDJqGXAAg3-F-?format=jpg&name=medium" alt="5 Agent Skill design patterns every ADK developer should know">
                    </div>
                    <div class="card-content">
                      <h3 class="card-title">5 Agent Skill design patterns every ADK developer should know</h3>
                      <p class="news-subtitle">谷歌提出5种skill的设计模式和高阶编写技巧</p>
                    </div>
                  </a>
                  <a href="https://x.com/GoogleCloudTech/status/2033953579824758855" target="_blank" rel="noopener noreferrer" class="card case-card clickable-card news-card">
                    <div class="card-image">
                      <img src="https://pbs.twimg.com/media/HDoDJqGXAAg3-F-?format=jpg&name=medium" alt="5 Agent Skill design patterns every ADK developer should know">
                    </div>
                    <div class="card-content">
                      <h3 class="card-title">5 Agent Skill design patterns every ADK developer should know</h3>
                      <p class="news-subtitle">谷歌提出5种skill的设计模式和高阶编写技巧</p>
                    </div>
                  </a>
                  <a href="https://x.com/GoogleCloudTech/status/2033953579824758855" target="_blank" rel="noopener noreferrer" class="card case-card clickable-card news-card">
                    <div class="card-image">
                      <img src="https://pbs.twimg.com/media/HDoDJqGXAAg3-F-?format=jpg&name=medium" alt="5 Agent Skill design patterns every ADK developer should know">
                    </div>
                    <div class="card-content">
                      <h3 class="card-title">5 Agent Skill design patterns every ADK developer should know</h3>
                      <p class="news-subtitle">谷歌提出5种skill的设计模式和高阶编写技巧</p>
                    </div>
                  </a>
                  <a href="https://x.com/GoogleCloudTech/status/2033953579824758855" target="_blank" rel="noopener noreferrer" class="card case-card clickable-card news-card">
                    <div class="card-image">
                      <img src="https://pbs.twimg.com/media/HDoDJqGXAAg3-F-?format=jpg&name=medium" alt="5 Agent Skill design patterns every ADK developer should know">
                    </div>
                    <div class="card-content">
                      <h3 class="card-title">5 Agent Skill design patterns every ADK developer should know</h3>
                      <p class="news-subtitle">谷歌提出5种skill的设计模式和高阶编写技巧</p>
                    </div>
                  </a>
                  <a href="https://x.com/GoogleCloudTech/status/2033953579824758855" target="_blank" rel="noopener noreferrer" class="card case-card clickable-card news-card">
                    <div class="card-image">
                      <img src="https://pbs.twimg.com/media/HDoDJqGXAAg3-F-?format=jpg&name=medium" alt="5 Agent Skill design patterns every ADK developer should know">
                    </div>
                    <div class="card-content">
                      <h3 class="card-title">5 Agent Skill design patterns every ADK developer should know</h3>
                      <p class="news-subtitle">谷歌提出5种skill的设计模式和高阶编写技巧</p>
                    </div>
                  </a>
                </div>
              </div>
              <div v-else class="card-grid">
                <div v-for="item in items" :key="item.id" class="card">
                  <div class="card-content">
                    <div class="card-tag">{{ formatTitle(type) }}</div>
                    <h3 class="card-title">{{ item.title }}</h3>
                    <p class="card-excerpt">{{ truncate(item.content, 100) }}</p>
                    <a href="#" class="card-link">阅读更多 →</a>
                  </div>
                </div>
              </div>
            </section>
          </template>
        </div>
      </main>

      <!-- Acknowledgement Section -->
      <section class="acknowledgement-section fade-in-up">
        <div class="container">
          <div class="acknowledgement">
            <span class="ack-title">鸣谢</span>
            <div class="ack-content">
              <a href="https://www.google.com/?client=safari" target="_blank" rel="noopener noreferrer" class="ack-link">
                <img src="https://pic.pngsucai.com/00/81/66/9c6cb535ed956708.webp" alt="鸣谢" class="ack-icon">
              </a>
              <span class="ack-subtitle">AI神灯局</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <p>&copy; 2026 云数据库 AI。保留所有权利。</p>
        </div>
      </footer>

      <!-- All Cases Modal -->
      <div v-if="showAllCasesModal" class="modal-overlay" @click.self="showAllCasesModal = false">
        <div class="modal-content fade-in-up">
          <button class="modal-close" @click="showAllCasesModal = false">&times;</button>
          <h2 class="modal-title">全量案例</h2>
          
          <div class="modal-filters">
            <div class="filter-row">
              <span class="filter-label">服务域：</span>
              <div class="filter-options">
                <button v-for="opt in serviceDomains" :key="opt" 
                        class="filter-btn" 
                        :class="{ active: selectedServiceDomain === opt }"
                        @click="selectedServiceDomain = opt">
                  {{ opt }}
                </button>
              </div>
            </div>
            <div class="filter-row">
              <span class="filter-label">工具类型：</span>
              <div class="filter-options">
                <button v-for="opt in toolTypes" :key="opt" 
                        class="filter-btn" 
                        :class="{ active: selectedToolType === opt }"
                        @click="selectedToolType = opt">
                  {{ opt }}
                </button>
              </div>
            </div>
          </div>

          <div class="modal-list">
            <div v-for="item in filteredCases" :key="item.id" class="list-item">
              <a :href="item.link" target="_blank" rel="noopener noreferrer" class="item-name">{{ item.title }}</a>
              <div class="item-meta">
                <span class="item-tag">{{ item.serviceDomain }}</span>
                <span class="item-tag">{{ item.toolType }}</span>
                <span class="item-author">讲师：{{ item.author }}</span>
              </div>
            </div>
            <div v-if="filteredCases.length === 0" class="no-results">
              没有找到符合条件的案例。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  fetchExcellentCases,
  fetchFdGroup,
  fetchBlueZoneStrategy,
  fetchServiceDomainSpecial,
  fetchIndustryNews
} from '../api/data'
import { fetchVisitors } from '../api/visitors'

const content = ref({})
const loading = ref(true)
const isScrolled = ref(false)
const visitorStats = ref({
  totalVisitors: '12,580',
  todayViews: '342',
  uptime: '99.9%',
  runningTime: '24/7'
})

// Modal state
const showAllCasesModal = ref(false)
const selectedServiceDomain = ref('全部')
const selectedToolType = ref('全部')

const serviceDomains = ["全部", "GaussDB", "TaurusDB和RDS", "GeminiDB", "管控和迁移", "云原生引擎", "测试", "架构", "运维"]
const toolTypes = ["全部", "Code Agent", "Relay Agent", "MCP", "Skills", "CodeWiki", "CodeBase", "CodeInsight", "独立Agent"]

// Generate mock data for the modal
const allCasesData = Array.from({ length: 10 }, (_, index) => {
  const i = index + 1;
  // 1-4: GaussDB, 5-10: 测试 (as per user request: 1-5 GaussDB, 5-10 测试. Let's make 1-4 GaussDB, 5-10 测试 to avoid overlap)
  const serviceDomain = i <= 4 ? "GaussDB" : "测试";
  // Tool type mapping based on index (1 to 8 map to toolTypes[1] to toolTypes[8])
  // For 9 and 10, we'll assign them randomly or just leave them without a specific tool type match to the 1-8 logic, 
  // but let's just cycle them or assign them to the last one.
  const toolTypeIndex = i <= 8 ? i : (i % 8) || 8; 
  const toolType = toolTypes[toolTypeIndex];

  return {
    id: i,
    title: `2026年第${i.toString().padStart(2, '0')}期 AI测试工程优秀实践`,
    author: '袁培能 00841444',
    link: 'https://www.google.com/?client=safari',
    serviceDomain: serviceDomain,
    toolType: toolType
  }
})

import { computed } from 'vue'

const filteredCases = computed(() => {
  return allCasesData.filter(item => {
    const matchServiceDomain = selectedServiceDomain.value === '全部' || item.serviceDomain === selectedServiceDomain.value;
    const matchToolType = selectedToolType.value === '全部' || item.toolType === selectedToolType.value;
    return matchServiceDomain && matchToolType;
  })
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > window.innerHeight * 0.5
}

    const formatTitle = (key) => {
      const titles = {
        excellentCases: '优秀案例',
        fdGroup: 'FD小组',
        blueZoneStrategy: '蓝区战略',
        serviceDomainSpecial: '服务域专项',
        capacityBuilding: '能力构建',
        industryNews: '业界资讯'
      }
      return titles[key] || key
    }

const truncate = (str, n) => {
  return (str.length > n) ? str.substr(0, n-1) + '...' : str
}

const fetchAllContentData = async () => {
  loading.value = true
  // Simulate a slight delay for the loading animation
  await new Promise(resolve => setTimeout(resolve, 800))
  
  try {
        const [
          excellentCases,
          fdGroup,
          blueZoneStrategy,
          serviceDomainSpecial,
          capacityBuilding,
          industryNews
        ] = await Promise.all([
          fetchExcellentCases(),
          fetchFdGroup(),
          fetchBlueZoneStrategy(),
          fetchServiceDomainSpecial(),
          fetchServiceDomainSpecial(), // Use same data for capacityBuilding as requested
          fetchIndustryNews()
        ])

    try {
      const vData = await fetchVisitors()
      if (vData && vData.count) {
        visitorStats.value.totalVisitors = vData.count.toLocaleString()
      }
    } catch (e) {
      // ignore visitor fetch error
    }

        content.value = {
          excellentCases: excellentCases.items,
          fdGroup: fdGroup.items,
          blueZoneStrategy: blueZoneStrategy.items,
          serviceDomainSpecial: serviceDomainSpecial.items,
          capacityBuilding: capacityBuilding.items,
          industryNews: industryNews.items
        }
  } catch (error) {
    console.error('Failed to fetch content:', error)
    if (window.$toast) {
      window.$toast.show('加载内容失败。', 'error')
    }
  } finally {
    loading.value = false
  }
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 140 // Adjust this value to control the offset
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  fetchAllContentData()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Variables */
:deep(:root) {
  --primary-blue: #3B82F6;
  --text-white: #FFFFFF;
  --text-gray: #E5E7EB;
  --dark-overlay: rgba(15, 25, 34, 0.6);
  --glass-bg: rgba(255, 255, 255, 0.05);
}

/* Loading Screen */
.loading-screen {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0F1922;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255,255,255,0.1);
  border-radius: 50%;
  border-top-color: #3B82F6;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 100;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s ease, border-bottom-color 0.3s ease;
}

.navbar.scrolled {
  background: rgba(28, 40, 50, 0.75);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.navbar-content {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 85%;
  margin: 0 auto;
  padding: 0 40px 0 80px; /* Increased left padding to shift everything right */
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #FFFFFF;
}

.brand-logo {
  font-weight: 700;
  letter-spacing: 0.05em;
}

.brand-tag {
  font-weight: 300;
  font-size: 12px;
  opacity: 0.8;
  border-left: 1px solid rgba(255,255,255,0.3);
  padding-left: 12px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-item {
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.8;
  transition: all 0.3s;
  padding: 6px 12px;
  border-radius: 4px;
}

.nav-item:hover {
  opacity: 1;
  background: #2A9D8F;
  color: white;
  box-shadow: 0 4px 12px rgba(42, 157, 143, 0.3);
}

.menu-btn {
  background: #2C5F6F;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: background 0.3s;
}

.menu-btn:hover {
  background: #3D7080;
}

/* Hero Section */
.hero {
  min-height: 48vh; /* 80% of 60vh */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  color: #FFFFFF;
  text-align: center;
}

.hero-background {
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  filter: brightness(0.7);
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, 
    rgba(139, 107, 107, 0.3) 0%,
    rgba(74, 109, 124, 0.3) 50%,
    rgba(15, 25, 34, 0.8) 100%);
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2;
  padding-top: 120px; /* Increased offset to move text further down */
  width: 100%;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
}

.hero-title {
  font-size: clamp(48px, 6vw, 96px);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 32px;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 18px;
  color: #E5E7EB;
  margin: 0 auto 48px;
  max-width: 600px;
  line-height: 1.6;
  font-weight: 400;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn {
  padding: 16px 40px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background-color: #3B82F6;
  color: white;
  border: none;
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
}

.btn-primary:hover {
  background-color: #2563EB;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: white;
  border: 1px solid rgba(255,255,255,0.8);
}

.btn-secondary:hover {
  background-color: white;
  color: #0F1922;
}

/* Main Grid */
.main-grid {
  padding: 80px 20px;
  background-color: #FFF9F0; /* Light cream background */
  color: #1A1A1A;
  position: relative;
  overflow: hidden;
}

/* Background Blobs */
.main-grid::before {
  content: '';
  position: absolute;
  width: 600px;
  height: 600px;
  top: 10%;
  left: -10%;
  background: radial-gradient(circle at center, rgba(255, 232, 128, 0.4) 0%, rgba(255, 232, 128, 0) 70%);
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}

.main-grid::after {
  content: '';
  position: absolute;
  width: 500px;
  height: 500px;
  top: 30%;
  right: -5%;
  background: radial-gradient(circle at center, rgba(255, 179, 230, 0.4) 0%, rgba(255, 179, 230, 0) 70%);
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}

/* Main Grid Layout */
.content-section {
  margin-bottom: 80px;
  position: relative;
  z-index: 1;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 32px;
  border-bottom: 2px solid rgba(0,0,0,0.05);
  padding-bottom: 16px;
}

.section-title-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.section-title {
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #1A1A1A;
}

.section-subtitle {
  font-size: 14px;
  color: #666;
  margin: 0;
  font-weight: 500;
}

.item-count {
  color: #666;
  font-size: 14px;
  font-weight: 500;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.card-grid.single-card-grid {
  grid-template-columns: repeat(3, 1fr);
}

.card-grid.industry-news-grid {
  grid-template-columns: repeat(5, 1fr);
}

@media (max-width: 1200px) {
  .card-grid.single-card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .card-grid.industry-news-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .card-grid.single-card-grid,
  .card-grid.industry-news-grid {
    grid-template-columns: 1fr;
  }
}

.card-grid.fd-grid {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 992px) {
  .card-grid.fd-grid {
    grid-template-columns: 1fr;
  }
}

.fd-card-content {
  padding: 40px 30px;
}

.fd-card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
  border-bottom: 2px solid rgba(42, 157, 143, 0.2);
  padding-bottom: 16px;
}

.fd-group-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.fd-card-title {
  font-size: 28px;
  font-weight: 800;
  color: #1A1A1A;
  margin: 0;
  text-align: center;
}

.fd-sub-section {
  margin-bottom: 24px;
}

.fd-sub-section:last-child {
  margin-bottom: 0;
}

.fd-sub-title {
  font-size: 16px;
  font-weight: 700;
  color: #2A9D8F;
  margin-bottom: 12px;
  letter-spacing: 0.05em;
}

.fd-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.fd-list li {
  margin-bottom: 8px;
  padding-left: 16px;
  position: relative;
}

.fd-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #2A9D8F;
}

.fd-link {
  color: #4A4A4A;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.fd-link:hover {
  color: #2A9D8F;
}

.fd-text {
  color: #4A4A4A;
  font-size: 14px;
}

/* Strategy Table Styles */
.table-container {
  background: transparent;
  padding: 0;
  overflow-x: auto;
}

.strategy-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.strategy-table th,
.strategy-table td {
  padding: 16px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.strategy-table th {
  background-color: #F3F4F6;
  font-weight: 700;
  color: #1A1A1A;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 14px;
}

.strategy-table td {
  color: #4A4A4A;
  background-color: #FFFFFF;
}

.strategy-table .domain-cell {
  font-weight: 600;
  color: #1A1A1A;
  background-color: #FAFAFA;
}

.strategy-table tbody tr:hover td {
  background-color: #F9FAFB;
}
.strategy-table tbody tr:hover td.domain-cell {
  background-color: #F3F4F6;
}

.under-construction {
  padding: 20px 0 60px 0;
  text-align: left;
  color: #666;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.1em;
}

.card {
  background: #FFFFFF;
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0,0,0,0.02);
}

.card-image {
  width: 100%;
  height: 250px; /* Occupies roughly half of a typical card height */
  overflow: hidden;
}

.news-card .card-image {
  height: 120px;
}

.news-card .card-content {
  padding: 16px;
}

.news-card .card-title {
  font-size: 16px;
  margin-bottom: 8px;
  line-height: 1.4;
}

.news-subtitle {
  font-size: 16px;
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card:hover .card-image img {
  transform: scale(1.05);
}

.card:hover {
  transform: translateY(-4px);
  background: #FFFFFF;
  border-color: rgba(0,0,0,0.05);
  box-shadow: 
    0 12px 32px rgba(0,0,0,0.08),
    0 4px 12px rgba(0,0,0,0.04);
}

.clickable-card {
  text-decoration: none;
  color: inherit;
  display: flex;
}
.clickable-card:hover {
  color: inherit;
}

.card-title {
  font-size: 22px;
  margin-bottom: 16px;
  line-height: 1.3;
  color: #1A1A1A;
  font-weight: 700;
}

.card-excerpt {
  color: #4A4A4A;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1;
}

.card-tag {
  font-size: 12px;
  color: #3B5BFF;
  font-weight: 700;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card-link {
  font-weight: 600;
  font-size: 14px;
  color: #1A1A1A;
  margin-top: auto;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 1;
  transition: color 0.3s;
}

.card-link:hover {
  color: #3B5BFF;
}

/* Footer */
.footer {
  background-color: #FFF9F0;
  border-top: 2px solid rgba(0,0,0,0.05);
  padding: 60px 0;
  text-align: center;
  color: #666;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  z-index: 1;
}

.acknowledgement-section {
  padding: 0 0 20px 0;
  position: relative;
  z-index: 10;
  background-color: #FFF9F0;
}

.acknowledgement {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px; /* Increased gap */
}

.ack-title {
  font-size: 16px;
  font-weight: 600;
  color: #666;
  letter-spacing: 0.1em;
}

.ack-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.ack-link {
  display: inline-flex;
  align-items: center;
  transition: opacity 0.3s;
}

.ack-link:hover {
  opacity: 0.8;
}

.ack-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.ack-subtitle {
  font-size: 16px; /* Increased font size */
  color: #666;
  font-weight: 600;
  letter-spacing: 0.1em;
}

/* Animations */
.fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 992px) {
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 48px;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
  
  .nav-links {
    display: none; /* Simplified for mobile */
  }
}

/* Button & Modal Styles */
.btn-all-cases {
  background: rgba(42, 157, 143, 0.1);
  color: #2A9D8F;
  border: 1px solid rgba(42, 157, 143, 0.2);
  padding: 6px 16px;
  border-radius: 4px;
  font-size: 15px; /* Matches .card-excerpt font-size */
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-all-cases:hover {
  background: #2A9D8F;
  color: white;
  border-color: #2A9D8F;
  box-shadow: 0 4px 12px rgba(42, 157, 143, 0.3);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  width: 60%;
  height: 80%;
  border-radius: 24px;
  padding: 40px;
  position: relative;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255,255,255,0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 24px;
  background: none;
  border: none;
  font-size: 32px;
  color: #999;
  cursor: pointer;
  transition: color 0.3s;
  line-height: 1;
}

.modal-close:hover {
  color: #333;
}

.modal-title {
  font-size: 24px;
  margin-bottom: 30px;
  color: #1a1a1a;
  font-weight: 700;
}

.modal-filters {
  margin-bottom: 20px;
  flex-shrink: 0;
}

.filter-row {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.filter-label {
  width: 80px;
  font-weight: 600;
  color: #333;
  flex-shrink: 0;
  font-size: 14px;
}

.filter-options {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.filter-btn {
  background: transparent;
  color: #1A1A1A;
  border: 1px solid rgba(0,0,0,0.1);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn:hover {
  background: rgba(42, 157, 143, 0.1);
  color: #2A9D8F;
  border-color: rgba(42, 157, 143, 0.2);
}

.filter-btn.active {
  background: rgba(42, 157, 143, 0.1);
  color: #2A9D8F;
  border-color: rgba(42, 157, 143, 0.2);
  font-weight: 700;
}

.modal-list {
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 10px;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  transition: all 0.3s;
  border-radius: 8px;
}

.list-item:hover {
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 8px rgba(0,0,0,0.02);
}

.item-name {
  font-size: 16px;
  font-weight: 600;
  color: #4CB5A8; /* Lighter shade of #2A9D8F */
  text-decoration: none;
  transition: color 0.3s;
}

.item-name:hover {
  color: #2A9D8F;
}

.item-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.item-tag {
  font-size: 12px;
  background: #f0f0f0;
  color: #666;
  padding: 2px 8px;
  border-radius: 4px;
}

.item-author {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

.no-results {
  text-align: center;
  padding: 40px;
  color: #999;
  font-size: 15px;
}
</style>
