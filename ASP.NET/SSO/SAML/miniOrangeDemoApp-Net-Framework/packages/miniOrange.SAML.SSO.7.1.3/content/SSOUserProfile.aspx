<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SSOUserProfile.aspx.cs" Inherits="samldll.UserProfile" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" class="userprofile-container">
<head runat="server">
     <title>User Profile Page</title>
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>
 

</head>
<body class="userprofile-container">
   <div class="container">
    <div class="header">
        <div class="profile-container">
            <%if(isAuthenticated)
                {%>
                <div class="header-action">
                    <h6>Hello, <b><%=username %>!</b> You are logged in securely with <b>your IdP.</b></h6>

                    <a href= "<%=ssoLogoutUrl%>" class="btn-logout">Logout</a>
                </div>
                <h6 style="margin-top:30px">Below are the user details:-</h6>
                <table class="user-details-table">
                    <thead>
                        <tr>
                            <th>User Details:</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <%foreach (var detail in userDetailsFromClaims)
                            {%>
                            <tr>
                                <td><%=detail.Key %></td>
                                <td><%=detail.Value %></td>
                            </tr>
                        <%} %>  
                    </tbody>
                </table>
          <%}
              else
              {%>
                <p style="margin-left:90px">
                    <b>Note:</b> To see the user details accessed from the claims using the integration code, please login.
                </p>
                <a href="<%=ssoLoginUrl%>" class="btn-login">Login with SSO</a>
          <%} %>  
        </div>

        <div class="login-image-container">
            <div class="logo-container">
                <img src="Images/miniOrange.jpg" alt="MiniOrange Logo" class="logo" />
            </div>
            <img src="Images/trial.jpg" alt="Login Image" class="login-image" />
        </div>
    </div>
</div>

 
</body>
</html>
