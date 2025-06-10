import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute  } from '@angular/router';
import { Injectable } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'MiniOrange SSO Demo';
  body = '';
  display = 'block';
  isLoading = false;
  errorMessage = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Check for SSO callback
    this.route.queryParams.subscribe(params => {
      if (params && params["ssoaction"] === "userauthenticated") {
        this.handleSSOCallback();
      }
    });

    // Check for existing session
    this.checkExistingSession();
  }

  private checkExistingSession() {
    const myTimeout = setTimeout(() => {
      try {
        const localStorage_token = localStorage.getItem("usertoken");
        if (localStorage_token) {
          const localStorage_json = JSON.parse(localStorage_token);
          if (localStorage_json) {
            const userName = localStorage_json['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] ||
                           localStorage_json['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
            this.body = "Hello, " + userName;
            this.hideLoginButton();
          }
        }
      } catch (error) {
        console.error('Error checking session:', error);
        this.errorMessage = 'Error loading user session';
      }
    }, 50);
  }

  private hideLoginButton() {
    const ele = document.getElementById("loginbtn");
    if (ele) {
      ele.style.display = 'none';
    }
  }

  Dashboard() {
    try {
      this.isLoading = true;
      this.errorMessage = '';
      // Redirect to SSO login
      window.location.href = "http://localhost:5011?ssoaction=login";
    } catch (error) {
      console.error('Login redirect error:', error);
      this.errorMessage = 'Error initiating login';
      this.isLoading = false;
    }
  }

  private handleSSOCallback() {
    this.isLoading = true;
    this.errorMessage = '';
    this.ButtonClick();
  }

  ButtonClick() {
    const body = { title: 'Angular POST Request Example' };
    const url = 'http://localhost:5011/api/Token';
    const headers = new HttpHeaders()
      .append('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Credentials', 'true');

    const options = { headers, withCredentials: true };

    this.http.post(url, body, options).subscribe({
      next: (res) => {
        try {
          console.log("Token response:", JSON.stringify(res));
          const json = JSON.stringify(res);
          const jsonobj = JSON.parse(json);

          // Store token
          localStorage.setItem("usertoken", json);

          // Update UI
          const userName = jsonobj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] ||
                         jsonobj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
          this.body = "Hello, " + userName;
          this.hideLoginButton();

          console.log("User authenticated:", userName);
        } catch (error) {
          console.error('Error processing token:', error);
          this.errorMessage = 'Error processing authentication';
        } finally {
          this.isLoading = false;
        }
      },
      error: (error) => {
        console.error('Token request error:', error);
        this.errorMessage = 'Authentication failed. Please try again.';
        this.isLoading = false;
      }
    });
  }
}
