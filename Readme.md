# SAML2 for ASP.NET & ASP.NET Core Demo Application using miniOrange SSO Packages

**miniOrange SAML2 for ASP.NET and ASP.NET Core** provides seamless SAML2 authentication for your .NET applications. This repository contains example projects and guides for integrating SAML2 Single Sign-On (SSO) in ASP.NET, ASP.NET Core, and decoupled architectures (Angular + .NET Core backend).

## 📦 Contents

- **miniOrangeDemoApp-Net-Framework**: SAML2 for ASP.NET example
- **miniOrangeDemoApp-Net-Core**: SAML2 for ASP.NET Core example
- **miniOrangeDemoApp-Angular-Net-Core**: SAML2 authentication with Angular frontend and ASP.NET Core backend
- **README.md**: This file, with setup instructions and SAML2 authentication examples


## 🚀 Features

- **SAML2 Authentication for ASP.NET and ASP.NET Core**
- Easy integration with any SAML2 Identity Provider (IdP)
- Supports .NET Framework, .NET Core, and decoupled Angular + .NET Core architectures
- Example applications and step-by-step setup guides
- Compatible with miniOrange Multi-Factor Authentication (MFA) product (MFA is not included in this module)
- Secure, production-ready SSO implementation


## ✅ Prerequisites

Before running the demo applications, ensure the following:

1. **Visual Studio Installed**: Visual Studio 2013 or later is recommended.
2. **.NET Framework or .NET Core SDK**: Install the appropriate SDK for your target application (.NET Framework or .NET Core/5+/6+).
3. **NuGet Package**: The miniOrange SAML SSO NuGet package is pre-integrated into the applications. No manual installation is required.
4. **Administrator Access**: Required for configuring IIS Express and application permissions.


## 🛠️ Getting Started

### SAML2 Authentication ASP.NET Example:

1. **Open the Solution**  
   Open `miniOrangeDemoApp.sln` in Visual Studio.

2. **Run the Project**  
   Use IIS Express to run the SAML2 ASP.NET or ASP.NET Core example.

3. **Configure SAML2 SSO**  
   - Click **"Configure-SSO"** on the homepage.
   - Enter your SAML2 IdP details.
   - Follow the on-screen instructions for SAML2 authentication setup.

### SAML2 for ASP.NET Core Example:

- The `miniOrangeDemoApp-Net-Core` project demonstrates SAML2 authentication in ASP.NET Core.
- Supports .NET Core 3.1, .NET 5, .NET 6, and later.

### 🅰️ Angular + .NET Core Demo Application:

This repository also includes a ready-to-use demo for integrating miniOrange SAML SSO with an Angular frontend and .NET Core Web API backend. The Angular app demonstrates:
- SSO login flow from Angular
- Secure API calls to .NET Core backend
- End-to-end SAML authentication with any SAML-compliant IdP

For details, see the [Angular Demo README](ASP.NET/SSO/SAML/miniOrangeDemoApp-Angular-Net-Core/README.md).


## ❓ Frequently Asked Questions (FAQ)

**Q: What versions of .NET are supported?**  
A: The solution supports .NET Framework, .NET Core, and .NET 5/6+ for both traditional and decoupled (Angular + .NET Core backend) architectures.

**Q: Is there a free trial or demo available?**  
A: Yes, you can try the demo applications included in this repository. For more details or to request a full-featured trial, please contact [aspnetsupport@xecurify.com](mailto:aspnetsupport@xecurify.com).

**Q: How is licensing handled?**  
A: Licensing is instance-based and linked to the domain of your .NET application. For more details, visit the [official miniOrange ASP.NET SAML SSO page](https://plugins.miniorange.com/asp-net-saml-single-sign-on-sso#pricing-plans).

**Q: Where can I get support?**  
A: For technical support, email [aspnetsupport@xecurify.com](mailto:aspnetsupport@xecurify.com) or use the support form on the [miniOrange website](https://plugins.miniorange.com/asp-net-saml-single-sign-on-sso).


## 🛠️ Troubleshooting

To troubleshoot issues with SAML2 authentication:

1. Go to the **Identity Provider Settings** section in your application.
2. Navigate to the **Troubleshooting** tab under the Identity Provider configuration.
3. Enable logging by turning on the logging switch.
4. Reproduce the issue to generate logs. The logs will be written to `miniOrangelog.txt` in your application root directory.
5. If `miniOrangelog.txt` is not writable, right-click the file, go to Properties > Security, and ensure the IIS App Pool user has 'Write' permission.
6. Download the log and configuration files from the Troubleshooting tab and send them to [aspnetsupport@xecurify.com](mailto:aspnetsupport@xecurify.com) for assistance.


## 🆘 Support

Need help? We're here to assist:
- **Email:** aspnetsupport@xecurify.com
- **Support Portal:** [miniOrange Support](https://miniorange.com/contact)
- **Documentation:** [Plugin Documentation](https://plugins.miniorange.com/)


## 📚 Documentation & Resources

- [MiniOrange ASP.NET Core SAML SSO Setup Guide](https://plugins.miniorange.com/asp-net-core-saml-sso-setup-guides)
- [miniOrange FAQ](https://faq.miniorange.com)
- [miniOrange Blogs](https://blogs.miniorange.com)
- [Wikipedia: Security Assertion Markup Language (SAML)](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language)
- [Microsoft: SAML Toolkit Documentation](https://learn.microsoft.com/en-us/entra/identity-platform/single-sign-on-saml-protocol)


## 🏷️ Keywords

`SAML` `SSO` `Single Sign-On` `Angular` `.NET Core` `Web API` `Identity Provider` `Authentication` `Security` `miniOrange` `Azure AD` `Okta` `Google Workspace` `ADFS`


## 🤝 Contributing

We welcome contributions! Please feel free to:
- Report issues
- Suggest improvements
- Submit pull requests


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

