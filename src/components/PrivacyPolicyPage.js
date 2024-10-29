// src/components/PrivacyPolicyPage.js
import React from 'react';
import './PrivacyPolicyPage.css';

function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">隐私政策</h1>
      <p>欢迎您访问 Custom PC Builder 网站（以下简称"本网站"）。我们非常重视您的隐私与个人信息的保护。请仔细阅读本隐私政策（以下简称"本政策"），以了解我们如何收集、使用、共享和保护您的信息。</p>

      <h2>1. 我们收集的信息</h2>
      <ul>
        <li><strong>个人信息</strong>：当您注册账号、联系我们或使用我们的服务时，我们可能会收集您的姓名、电子邮件地址、联系方式等信息。</li>
        <li><strong>自动收集的信息</strong>：当您使用本网站时，我们可能会自动收集您的设备信息、IP 地址、浏览器类型、操作系统和访问时间等数据，以优化用户体验。</li>
        <li><strong>Cookies</strong>：我们使用 Cookies 来提高您在本网站的体验。这些 Cookies 帮助我们了解您的偏好并为您提供个性化内容。</li>
      </ul>

      <h2>2. 我们如何使用您的信息</h2>
      <ul>
        <li><strong>提供与维护服务</strong>：使用您的信息为您提供定制装机服务、维护网站的正常运行。</li>
        <li><strong>改善用户体验</strong>：我们可能使用收集到的信息来分析用户行为，优化我们的服务与内容。</li>
        <li><strong>通讯与推广</strong>：在得到您的同意后，我们可能会通过电子邮件向您发送最新的优惠、服务公告或促销信息。</li>
      </ul>

      <h2>3. 信息共享与披露</h2>
      <ul>
        <li><strong>第三方服务提供商</strong>：我们可能会与协助我们运营本网站的服务提供商共享您的信息，例如支付服务、物流公司等。但这些服务提供商只可使用您的信息来提供我们的服务。</li>
        <li><strong>法律要求</strong>：当法律要求或应政府请求，我们可能会披露您的信息，以配合执法或保护我们的合法权益。</li>
      </ul>

      <h2>4. 信息的安全性</h2>
      <p>我们采取了合理的安全措施来防止未经授权的访问、披露、修改或破坏您的个人信息。您的帐户信息是受密码保护的。请确保您的密码安全，避免与他人共享。</p>

      <h2>5. 您的权利</h2>
      <ul>
        <li><strong>访问和更新信息</strong>：您有权访问和更新您的个人信息，确保其准确性。</li>
        <li><strong>删除信息</strong>：在某些情况下，您可以要求我们删除您的个人信息，尤其是在信息不再为特定目的所需时。</li>
        <li><strong>撤回同意</strong>：您可以随时撤回对我们收集和处理您信息的同意。</li>
      </ul>

      <h2>6. 儿童隐私</h2>
      <p>本网站的服务不适用于 18 岁以下的未成年人。我们不会故意收集 18 岁以下儿童的个人信息。如果我们发现有未成年人的信息被收集，将采取措施删除这些信息。</p>

      <h2>7. 隐私政策的修改</h2>
      <p>我们可能会不时更新本隐私政策。修改后的隐私政策将发布于本页面，并标明最新的更新日期。请定期查看本页面，以了解任何更改。若您在修改后继续使用本网站，即表示您同意新的隐私政策。</p>

      <h2>8. 联系我们</h2>
      <p>如果您对本隐私政策有任何疑问或意见，请通过电子邮件与我们联系：<a href="mailto:support@custompcbuilder.com">support@custompcbuilder.com</a>。</p>

      <h2>9. 适用法律</h2>
      <p>本政策应适用并依照当地法律解释和执行。</p>

      <p>感谢您信任 Custom PC Builder，我们将竭尽全力保护您的隐私与个人信息安全。</p>
    </div>
  );
}

export default PrivacyPolicyPage;
