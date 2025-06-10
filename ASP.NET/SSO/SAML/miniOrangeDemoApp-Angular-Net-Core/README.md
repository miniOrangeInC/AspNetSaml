# miniOrange SAML SSO Demo for Angular + .NET Web API

## 🚀 Overview

This repository contains a **complete, ready-to-use demo application** showcasing **miniOrange SAML SSO integration** with Angular frontend and .NET Web API backend. The demo enables you to test **Single Sign-On (SSO) functionality** with any SAML Identity Provider (IdP) in minutes.

### ✨ Key Features

- ✅ **Pre-configured SAML SSO** implementation
- ✅ **Angular frontend** with SSO login integration
- ✅ **.NET Core Web API** backend with SAML authentication
- ✅ **Cross-origin resource sharing (CORS)** configured
- ✅ **Ready-to-run** demo environment
- ✅ **Multi-IdP support** (Azure AD, Okta, ADFS, Google, etc.)

## 🎯 What You'll Achieve

After following this guide, you'll have:
- A working Angular application with SAML SSO login
- A .NET Web API secured with SAML authentication
- Understanding of miniOrange SAML SSO implementation
- Ability to test with your preferred Identity Provider

## 📋 Prerequisites

Before starting, ensure you have:

- **Node.js** (v14 or higher) and **npm** installed
- **.NET 6.0 SDK** or higher
- **Git** for cloning the repository
- A **SAML Identity Provider** (Azure AD, Okta, Google, etc.)
- **Code editor** (Visual Studio Code recommended)

## 🏗️ Architecture Overview

```
┌─────────────────┐    SAML Request     ┌──────────────────┐
│  Angular App    │ ──────────────────▶ │   Identity       │
│  (localhost:    │                     │   Provider       │
│   4200)         │ ◀────────────────── │   (IdP)          │
└─────────────────┘    SAML Response    └──────────────────┘
         │                                        │
         │ API Calls                             │
         ▼                                        │
┌─────────────────┐    SAML Validation           │
│  .NET Web API   │ ◀────────────────────────────┘
│  (localhost:    │
│   5200)         │
└─────────────────┘
```

## 🚀 Quick Start Guide

### Step 1: Clone and Setup the Repository

```bash
# Clone the repository
git clone [your-repository-url]
cd miniorange-saml-sso-demo

# Navigate to Angular application
cd Angular-App/ng-server

# Install dependencies
npm install
```

### Step 2: Start the Angular Application

```bash
# From Angular-App/ng-server directory
ng serve

# Or alternatively
npm start
```

**✅ Verify:** Angular app should be running on `http://localhost:4200`

### Step 3: Start the .NET Web API

```bash
# Navigate to the .NET Web API project directory
cd ../../[YourWebAPIProjectName]

# Run the Web API
dotnet run
```

**✅ Verify:** .NET Web API should be running on `http://localhost:5200`

### Step 4: Configure SAML SSO

1. **Access Configuration Panel:**
   - Open your browser and go to `http://localhost:5200`
   - Click on **"Configure SSO"** link in the top-right corner

2. **Register and Setup:**
   - Register yourself as an administrator
   - Follow the configuration wizard

3. **Configure Your Identity Provider:**
   - Use our comprehensive setup guides: [**ASP.NET Core SAML SSO Setup Guides**](https://plugins.miniorange.com/asp-net-core-saml-sso-setup-guides)
   - Choose your IdP from the supported list:
     - Azure Active Directory
     - Okta
     - Google Workspace
     - ADFS
     - Ping Identity
     - And many more...

### Step 5: Test the SSO Flow

1. **Initiate SSO Login:**
   - Go to the Angular application: `http://localhost:4200`
   - Click on the **"SSO Login"** button

2. **Complete Authentication:**
   - You'll be redirected to your Identity Provider's login page
   - Enter your IdP credentials
   - Upon successful authentication, you'll be logged into the Angular application

**🎉 Success!** You've successfully implemented and tested miniOrange SAML SSO.

## 🔧 Configuration Details

### Default Ports
- **Angular Application:** `localhost:4200`
- **.NET Web API:** `localhost:5200`

### CORS Configuration
The demo includes pre-configured CORS settings to allow communication between the Angular frontend and .NET backend.

### SAML Endpoints
- **SSO Initiation:** `/saml/login`
- **ACS (Assertion Consumer Service):** `/saml/acs`
- **Metadata:** `/saml/metadata`

## 📚 Supported Identity Providers

miniOrange SAML SSO supports integration with:

- **Microsoft Azure AD**
- **Okta**
- **Google Workspace (G Suite)**
- **Active Directory Federation Services (ADFS)**
- **Ping Identity**
- **OneLogin**
- **Auth0**
- **Salesforce**
- **AWS SSO**
- **Custom SAML IdPs**

## 🐛 Troubleshooting

### Common Issues and Solutions

**Issue:** Angular app not starting
```bash
# Solution: Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules
npm install
```

**Issue:** .NET API not accessible
```bash
# Solution: Check if port 5200 is available
netstat -ano | findstr :5200
# Kill any process using the port if needed
```

**Issue:** CORS errors
- Ensure both applications are running on specified ports
- Check browser developer console for specific CORS error messages

**Issue:** SAML configuration errors
- Verify IdP metadata is correctly imported
- Check certificate validity
- Ensure ACS URL matches your configuration

## 📖 Additional Resources

- [**Complete Setup Guides**](https://plugins.miniorange.com/asp-net-core-saml-sso-setup-guides)
- [**miniOrange Documentation**](https://plugins.miniorange.com/)
- [**SAML Protocol Overview**](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language)
- [**Angular SSO Best Practices**](https://angular.io/guide/security)

## 🆘 Support

Need help? We're here to assist:

- **Email:** info@xecurify.com
- **Support Portal:** [miniOrange Support](https://miniorange.com/contact)
- **Documentation:** [Plugin Documentation](https://plugins.miniorange.com/)

## 🤝 Contributing

We welcome contributions! Please feel free to:
- Report issues
- Suggest improvements
- Submit pull requests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏷️ Tags

`SAML` `SSO` `Single Sign-On` `Angular` `.NET Core` `Web API` `Identity Provider` `Authentication` `Security` `miniOrange` `Azure AD` `Okta` `Google Workspace` `ADFS`

---

**Ready to implement enterprise-grade SSO?** 🚀 Fork this repository and get started in minutes!

[![Fork Repository](https://img.shields.io/badge/Fork-Repository-blue?style=for-the-badge)](../../fork)
[![Download ZIP](https://img.shields.io/badge/Download-ZIP-green?style=for-the-badge)](../../archive/refs/heads/main.zip)